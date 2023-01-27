import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Components/Home";
import Recipes from "./Components/Recipes";
import NewRecipe from "./Components/NewRecipe";
import About from "./Components/About";
import SingleRecipe from "./Components/SingleRecipe";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="allrecipes" element={<Recipes />} />
            <Route path="allrecipes/:singlerecipe" element={<SingleRecipe />} />
            <Route path="addrecipe" element={<NewRecipe />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
