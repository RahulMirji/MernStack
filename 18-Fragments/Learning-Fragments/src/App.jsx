import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App(){

  let foodItems = ["Milk","Ghee","Roti","Chapati","Fruits"]

  return (<>  <h1>Healthy food</h1>
  <ul className="list-group container">

  {foodItems.map(item =><li key={item} className="list-group-item">{item}</li>)}
  
  
</ul></>
  );
}

export default App;