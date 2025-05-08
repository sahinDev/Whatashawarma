import React from 'react';
import './Specials.css'; // Import your CSS file for styling  
import lunch_special_allday from '../../assets/lunch_special_allday.webp';
import Lunch_Special_Monday from '../../assets/Lunch_Special_Monday.jpg';
import Lunch_Special_Tuesday from '../../assets/Lunch_Special_Tuesday.png';
import Lunch_Special_Wednesday from '../../assets/Lunch_Special_Wednesday.png';
import lunch_special_friday from '../../assets/lunch_special_friday.png';
import Lunch_Special_Saturday from '../../assets/Lunch_Special_Saturday.png';
import Lunch_Special_Sunday from '../../assets/Lunch_Special_Sunday.png';
import Lunch_Special_Thursday from '../../assets/Lunch_Special_Thursday.png';

const specials = [
  {
    id: 1,
    name: 'Lunch Special: Extra Juicy Shawarma',
    description: 'Extra juicy shawarma with double meat and garlic sauce.',
    price: '$9.99',
    
    image: lunch_special_allday,
  },
  {
    id: 2,
    name: 'Falafel Fiesta',
    description: 'Crispy falafel balls wrapped in warm pita with hummus.',
    price: '$7.49',
    image: Lunch_Special_Monday,
  },
  {
      id: 3,
      name: 'Grilled Chicken Platter',
      description: 'Tender grilled chicken served with rice and salad.',
      price: '$11.99',
      image: Lunch_Special_Tuesday,
  },
  {
      id: 4,
      name: 'Veggie Delight Wrap',
      description: 'Fresh veggies and tahini sauce wrapped in a soft pita.',
      price: '$6.99',
      image: Lunch_Special_Wednesday,
  },
  {
      id: 5,
      name: 'Spicy Lamb Kebab',
      description: 'Juicy lamb kebabs marinated in spices and grilled to perfection.',
      price: '$12.49',
      image:  Lunch_Special_Thursday,
  },
  {
      id: 6,
      name: 'Dessert of the Day: Baklava',
      description: 'Sweet and flaky baklava drizzled with honey.',
      price: '$4.99',
      image:  lunch_special_friday,
  },
  {
      id: 7,
      name: 'Hummus and Pita Combo',
      description: 'Creamy hummus served with warm pita bread.',
      price: '$5.99',
      image:  Lunch_Special_Saturday,
  },
  {
      id: 8,
      name: 'Stuffed Grape Leaves',
      description: 'Grape leaves stuffed with rice and spices, served with yogurt.',
      price: '$8.49',
      image:  Lunch_Special_Sunday,
  },
];

// const Specials = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">🌟 Today’s Specials</h1>
//       <div className="grid md:grid-cols-2 gap-6">
//         {specials.map((item) => (
//           <div key={item.id} className="rounded-xl shadow-md p-4 bg-white">
//             <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
//             <h2 className="text-xl font-semibold">{item.name}</h2>
//             <p className="text-gray-600">{item.description}</p>
//             <p className="text-lg mt-2 font-bold">{item.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
const Specials = () => {
  return (
    <div className="specials-container">
      <h1 className="specials-title">🌟 Today’s Specials</h1>
      <div className="specials-grid">
        {specials.map((item) => (
          <div key={item.id} className="specials-card">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            {/* <p className="price">{item.price}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;
