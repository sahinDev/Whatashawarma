import React from 'react';

const specials = [
  {
    id: 1,
    name: 'Lunch Special: Extra Juicy Shawarma',
    description: 'Extra juicy shawarma with double meat and garlic sauce.',
    price: '$9.99',
    image: '/frontend/src/assets/Lunch Special_Allday.webp',
  },
  {
    id: 2,
    name: 'Falafel Fiesta',
    description: 'Crispy falafel balls wrapped in warm pita with hummus.',
    price: '$7.49',
    image: '/frontend/src/assets/Lunch Special_Friday.png',
  },
    {
        id: 3,
        name: 'Grilled Chicken Platter',
        description: 'Tender grilled chicken served with rice and salad.',
        price: '$11.99',
        image: '/images/specials/chicken.jpg',
    },
    {
        id: 4,
        name: 'Veggie Delight Wrap',
        description: 'Fresh veggies and tahini sauce wrapped in a soft pita.',
        price: '$6.99',
        image: '/images/specials/veggie.jpg',
    },
    {
        id: 5,
        name: 'Spicy Lamb Kebab',
        description: 'Juicy lamb kebabs marinated in spices and grilled to perfection.',
        price: '$12.49',
        image: '/images/specials/lamb.jpg',
    },
    {
        id: 6,
        name: 'Dessert of the Day: Baklava',
        description: 'Sweet and flaky baklava drizzled with honey.',
        price: '$4.99',
        image: '/images/specials/baklava.jpg',
    },
    {
        id: 7,
        name: 'Hummus and Pita Combo',
        description: 'Creamy hummus served with warm pita bread.',
        price: '$5.99',
        image: '/images/specials/hummus.jpg',
    },
    {
        id: 8,
        name: 'Stuffed Grape Leaves',
        description: 'Grape leaves stuffed with rice and spices, served with yogurt.',
        price: '$8.49',
        image: '/images/specials/grape_leaves.jpg',
    },
];

const Specials = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🌟 Today’s Specials</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {specials.map((item) => (
          <div key={item.id} className="rounded-xl shadow-md p-4 bg-white">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-600">{item.description}</p>
            <p className="text-lg mt-2 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;
