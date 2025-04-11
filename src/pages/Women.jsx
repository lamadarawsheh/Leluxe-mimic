import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/home.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
// import p from "../components/UI/category/ProductsCategory";
import ProductsCategory from "../components/UI/category/ProductsCategory";
import products from "../assets/fake-data/Womenproducts";
import categoryImg01 from "../assets/images/Necklaces1.jpg";
import categoryImg02 from "../assets/images/wb4-1.png";
import categoryImg03 from "../assets/images/ww3-3.jpg";
import Category from "../components/UI/category/Category";
const WomenWatches = products.filter(
  (product) => product.category === "Women Watches"
);
const WomenBags = products.filter(
  (product) => product.category === "Women Bags"
);
const WomenJewelry = products.filter(
  (product) => product.category === "Women Jewelry"
);
const categoryData = [
  {
    display: "Women Jewelry",
    imgUrl: categoryImg01,
    distination: "foods",
    data: WomenJewelry,
  },
  {
    display: "Women Bags",
    imgUrl: categoryImg02,
    distination: "foods",
    data: WomenBags,
  },

  {
    display: "Women Watches",
    imgUrl: categoryImg03,
    distination: "foods",
    data: WomenWatches,
  },
];
const Women = () => {
  return (
    <Helmet title="Women">
   
    <section>
    <Container className="py-5 px-5">
      <ProductsCategory categoryData={categoryData} displaybutton={false} />
    </Container>
    </section>
    </Helmet>
  );
};

export default Women;
