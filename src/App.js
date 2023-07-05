import Products from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Nav from "./navigation/Nav";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Products/>
      <Recomended/>
    </div>
  );
}

export default App;
