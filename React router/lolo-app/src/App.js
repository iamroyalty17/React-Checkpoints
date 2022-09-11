import { Routes, Route, Link } from "react-router-dom";
import Home from "./Views/Home/Home";
import Category from "./Views/Category/Category";
import Products from "./Views/Products/Products";
/* App component */
const App = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            {/*  Link components are used for linking to other views */}
            <li>
              {" "}
              <Link to="/">Homes</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        {/*  Route components are rendered if the path prop matches the current URL  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
};
export default App;