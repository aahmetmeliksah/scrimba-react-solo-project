import "./App.css";
import Navbar from "./components/Navbar.js";
import Cards from "./components/Cards.js";
import data from "./components/data.js";
console.log(data);

function App() {
  return (
    <div>
      <Navbar />
      <Cards img="https://unsplash.com/photos/JmuyB_LibRo" title="something" />
    </div>
  );
}

export default App;
