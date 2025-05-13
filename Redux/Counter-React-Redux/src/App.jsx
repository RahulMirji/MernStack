import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplayCounter";
import Container from "./components/Container";

function App() {
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Container>
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            <DisplayCounter></DisplayCounter>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              {" "}
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
              >
                Primary button
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Secondary
              </button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
