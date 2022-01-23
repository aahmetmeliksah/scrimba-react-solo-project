import "./App.css";
import Navbar from "./components/Navbar.js";
import Cards from "./components/Cards.js";
import data from "./components/data.js";

function App() {
  const cardElements = data.map((item) => {
    return <Cards key={item.id} {...item} />;
  });

  return (
    <div>
      <Navbar />
      {cardElements}
    </div>
  );
}

export default App;
