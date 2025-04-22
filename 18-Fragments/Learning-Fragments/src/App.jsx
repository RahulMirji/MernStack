import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./component/foodItems";
import ErrorMessage from "./component/ErrorMessage";
import Item from "./component/Item";

function App() {
  // let foodItems =[];
  let foodItems = ["Sabji", "Ghee", "Roti", "Chapati", "Fruits"];

  return (
    <>
      <h1>Healthy food</h1>
      <Item></Item>
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessage items={foodItems}></ErrorMessage>
    </>
  );
}

export default App;
