import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllRestaurants from "./components/All Restaurants/AllRestaurants";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ViewRestaurant from "./components/ViewRestaurant";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <h1 className="text-center">
          {" "}
          <i className="fa fa-solid fa-home"></i> Restaurant Listing
        </h1>
      </section>
      <Routes>
        <Route path="/" element={<AllRestaurants />} />
        <Route path="/view/:id" element={<ViewRestaurant />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
