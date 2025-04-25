import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./component/foodItems";
import ErrorMessage from "./component/ErrorMessage";
import Item from "./component/Item";
import Container from "./component/container";

function App() {
  // let foodItems =[];
  let foodItems = ["Sabji", "Ghee", "Roti", "Chapati", "Fruits"];

  return (
    <>
    <Container>
      <h1>Healthy food</h1>
      <Item></Item>
      <FoodItems items={foodItems}></FoodItems>
      <ErrorMessage items={foodItems}></ErrorMessage>
    </Container>
    <Container>
      <p>The above list of Items are good for health and well being. You try on and share you experince</p>
    </Container>
    </>

  );
}

export default App;
