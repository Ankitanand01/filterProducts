import Products from "./Products/Products";
import Recomended from "./Recomended/Recomended";
import Sidebar from "./Sidebar/Sidebar";
import Nav from "./navigation/Nav";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Nav />
      <Recomended />
      <Products />

    </div>
  );
}

export default App;
