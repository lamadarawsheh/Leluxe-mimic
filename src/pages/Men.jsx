import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/home.css";
import Helmet from "../components/Helmet/Helmet";
import ProductsCategory from "../components/UI/category/ProductsCategory";
import products from "../assets/fake-data/Menproducts";
import categoryImg01 from "../assets/images/MenBags.jpg";
import categoryImg02 from "../assets/images/menwatches.jpeg";
import categoryImg03 from "../assets/images/menrings.jpeg";

const MenWatches = products.filter(
  (product) => product.category === "Men Watches"
);
const MenBags = products.filter((product) => product.category === "Men Bags");
const MenRings = products.filter((product) => product.category === "Men Rings");
const categoryData = [
  {
    display: "Men Bags",
    imgUrl: categoryImg01,
    distination: "foods",
    data: MenBags,
  },
  {
    display: "Men Watches",
    imgUrl: categoryImg02,
    distination: "foods",
    data: MenWatches,
  },

  {
    display: "Men Rings",
    imgUrl: categoryImg03,
    distination: "foods",
    data: MenRings,
  },
];
const Men = () => {
  return (
    <Helmet title="Women">
   
    <section>
    <Container className="py-5 px-5">
      <ProductsCategory
        categoryData={categoryData}
        displaybutton={false}
      />
    </Container>
    </section>
    </Helmet>
  );
};

export default Men;
