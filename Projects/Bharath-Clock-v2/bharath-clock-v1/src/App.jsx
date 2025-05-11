import BharathTitle from "./components/BharathTitle";
import Discription from "./components/Discription";
import CurrentTime from "./components/CurrentTime";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){
return <div className="body">
  <BharathTitle></BharathTitle>
  <Discription></Discription>
  <CurrentTime></CurrentTime>

</div>
}

export default App;