import { useEffect, useState } from 'react'
import './List.css'
import { assets, url, currency } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const categoryOptions = [
  "Wrap",
  "Sandwich/Pita",
  "Bowl",
  "Pizza",
  "Sides",
  "Beverages",
  "Souces & Dips"
];

const getErrorMessage = (error, fallback) => {
  return error?.response?.data?.message || fallback;
};

const supportsUpdateApi = import.meta.env.VITE_SUPPORTS_FOOD_UPDATE_API === "true";

const List = () => {

  const [list, setList] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [editImage, setEditImage] = useState(null);
  const [editImagePreview, setEditImagePreview] = useState("");
  const [editData, setEditData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Wrap"
  });

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`)
      if (response.data.success) {
        setList(response.data.data);
      }
      else {
        toast.error(response.data.message || "Unable to load food list");
      }
    } catch (error) {
      toast.error(getErrorMessage(error, "Unable to load food list"));
    }
  }

  const removeFood = async (foodId) => {
    try {
      const response = await axios.post(`${url}/api/food/remove`, {
        id: foodId
      })
      await fetchList();
      if (response.data.success) {
        toast.success(response.data.message);
      }
      else {
        toast.error(response.data.message || "Unable to remove item");
      }
    } catch (error) {
      toast.error(getErrorMessage(error, "Unable to remove item"));
    }
  }

  const openEditModal = (item) => {
    if (editImagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(editImagePreview);
    }

    setEditingId(item._id);
    setEditData({
      name: item.name,
      description: item.description,
      price: item.price,
      category: item.category
    });
    setEditImage(null);
    setEditImagePreview(resolveImageUrl(item.image));
    setIsEditOpen(true);
  }

  const closeEditModal = () => {
    if (editImagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(editImagePreview);
    }

    setIsEditOpen(false);
    setEditingId("");
    setEditImage(null);
    setEditImagePreview("");
  }

  const onEditChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditData((prev) => ({ ...prev, [name]: value }));
  }

  const imageUrlToFile = async (imageUrl) => {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error("Unable to load existing image");
    }

    const blob = await response.blob();
    const extension = blob.type?.split("/")?.[1] || "webp";
    return new File([blob], `food-image-${Date.now()}.${extension}`, { type: blob.type || "image/webp" });
  }

  const updateFoodLegacy = async () => {
    const imageFile = editImage || await imageUrlToFile(editImagePreview);

    const formData = new FormData();
    formData.append("name", editData.name);
    formData.append("description", editData.description);
    formData.append("price", Number(editData.price));
    formData.append("category", editData.category);
    formData.append("image", imageFile);

    const addResponse = await axios.post(`${url}/api/food/add`, formData);
    if (!addResponse?.data?.success) {
      throw new Error(addResponse?.data?.message || "Unable to create updated item");
    }

    const removeResponse = await axios.post(`${url}/api/food/remove`, { id: editingId });
    if (!removeResponse?.data?.success) {
      toast.warning("Item updated but old item could not be removed. Please delete it manually.");
    }
  }

  const updateFood = async (event) => {
    event.preventDefault();

    try {
      if (supportsUpdateApi) {
        const formData = new FormData();
        formData.append("id", editingId);
        formData.append("name", editData.name);
        formData.append("description", editData.description);
        formData.append("price", Number(editData.price));
        formData.append("category", editData.category);

        if (editImage) {
          formData.append("image", editImage);
        }

        const response = await axios.post(`${url}/api/food/update`, formData);

        if (response.data.success) {
          toast.success(response.data.message);
          await fetchList();
          closeEditModal();
        } else {
          toast.error(response.data.message || "Unable to update item");
        }
      } else {
        await updateFoodLegacy();
        toast.success("Food Updated");
        await fetchList();
        closeEditModal();
      }
    } catch (error) {
      toast.error(getErrorMessage(error, "Unable to update item"));
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  useEffect(() => {
    return () => {
      if (editImagePreview.startsWith("blob:")) {
        URL.revokeObjectURL(editImagePreview);
      }
    };
  }, [editImagePreview]);

  const resolveImageUrl = (image) => (image?.startsWith("http") ? image : `${url}/images/${image}`);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Actions</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={resolveImageUrl(item.image)} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <div className='list-actions'>
                <button className='edit-btn' onClick={() => openEditModal(item)}>Edit</button>
                <p className='cursor delete-btn' onClick={() => removeFood(item._id)}>x</p>
              </div>
            </div>
          )
        })}
      </div>

      {isEditOpen ? (
        <div className='edit-modal-overlay' onClick={closeEditModal}>
          <div className='edit-modal' onClick={(event) => event.stopPropagation()}>
            <div className='edit-modal-header'>
              <h3>Edit Item</h3>
              <button className='close-btn' onClick={closeEditModal}>x</button>
            </div>
            <form className='edit-form flex-col' onSubmit={updateFood} autoComplete="off">
              <div className='edit-img-upload flex-col'>
                <p>Update image (optional)</p>
                <input
                  onChange={(event) => {
                    const selectedImage = event.target.files?.[0];
                    if (!selectedImage) {
                      return;
                    }

                    if (editImagePreview.startsWith("blob:")) {
                      URL.revokeObjectURL(editImagePreview);
                    }

                    setEditImage(selectedImage);
                    setEditImagePreview(URL.createObjectURL(selectedImage));
                    event.target.value = '';
                  }}
                  type="file"
                  accept="image/*"
                  id="edit-image"
                  hidden
                />
                <label htmlFor="edit-image">
                  <img
                    src={editImagePreview || assets.upload_area}
                    alt=""
                  />
                </label>
              </div>

              <div className='flex-col'>
                <p>Product name</p>
                <input name='name' type='text' value={editData.name} onChange={onEditChange} autoComplete="off" required />
              </div>

              <div className='flex-col'>
                <p>Product description</p>
                <textarea name='description' rows={4} value={editData.description} onChange={onEditChange} required />
              </div>

              <div className='edit-category-price'>
                <div className='flex-col'>
                  <p>Product category</p>
                  <select name='category' value={editData.category} onChange={onEditChange}>
                    {categoryOptions.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                <div className='flex-col'>
                  <p>Product price</p>
                  <input name='price' type='number' value={editData.price} onChange={onEditChange} autoComplete="off" required />
                </div>
              </div>

              <button type='submit' className='save-btn'>Save Changes</button>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default List
