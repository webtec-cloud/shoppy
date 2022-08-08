import React from "react";
import Annoucement from "../components/annoucement";
import Categories from "../components/categories";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";
import Popularproducts from "../components/popularproducts";
import Slider from "../components/slider";

const Home = () => {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Popularproducts />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
