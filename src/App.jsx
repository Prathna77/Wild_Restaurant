import MenuList from "./component/MenuList";
import './App.css';

const foodItems = [
  {
    itemName: "Caesar's Salad",
    description: "The original Caesar's Salad recipe",
    foodImage: 'https://bit.ly/2GJFu5W',
    price: 12,
    isFavorite: false
  },
  {
    itemName: 'Spaghetti Carbonara',
    description: "Better than your nonna's! All local and fresh ingredients",
    foodImage: 'https://bit.ly/2GBnz1n',
    price: 15,
    isFavorite: false
  },
  {
    itemName: 'Grilled Whole Fish',
    description: 'Fish of the day, grilled whole with a side of vegetables',
    foodImage: 'https://bit.ly/3d6iKsJ',
    price: 20,
    isFavorite: false
  },
  {
    itemName: 'Steak Florentine',
    description: 'Meat!',
    foodImage: 'https://www.saveur.com/uploads/2019/05/28/IC6V7Y265PIMQCDAEIP5ME2PYU.jpg?auto=webp',
    price: 30,
    isFavorite: false
  }
];
function App() {

  return (
    <>
      <h1>Wild Restaurant Menu</h1>
      <MenuList foodItems={foodItems} />
    </>
  )
}

export default App
