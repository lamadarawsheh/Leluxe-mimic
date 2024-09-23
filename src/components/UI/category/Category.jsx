import React from "react";
import { Container, Row, Col } from "reactstrap";

import categoryImg01 from "../../../assets/images/categoryImg01.png";
import categoryImg02 from "../../../assets/images/category-02.jpg";
import "../../../styles/category.css";

const categoryData = [
  {
    display: "Women",
    imgUrl: categoryImg01,
  },
  {
    display: "Men",
    imgUrl: categoryImg02,
  },
];

const Category = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        {categoryData.map((item, index) => (
          <Col lg="3" md="4" sm="6" xs="6" className="mb-4 mx-2" key={index}>
          <div className="category__item">
              <div className="category__img">
                <img src={item.imgUrl} alt="category__item" height={50} width={50} />
                <div className="category__text">
                  <h6>{item.display}</h6>
                  <div className="shop-now">SHOP NOW</div>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;
