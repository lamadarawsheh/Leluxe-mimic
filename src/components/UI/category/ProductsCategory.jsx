import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../../../styles/category.css";




const ProductsCategory = ({ categoryData ,displaybutton  }) => {
  return (
    
<Container>
  <Row className="justify-content-center ">
    {categoryData.map((item, index) => (
      <Col lg="3" md="4" sm="6" xs="12" className="mb-4" key={index}>
        <Link to={`/${item.distination}/${encodeURIComponent(JSON.stringify(item.data))}`}>
          <div className="category__item">
            <div className="category__img">
              <img src={item.imgUrl} alt="category__item" height={50} width={50} />
              <div className="category__text">
                <h6>{item.display}</h6>
                {displaybutton && <div className="shop-now">SHOP NOW</div>}
              </div>
            </div>
          </div>
        </Link>
      </Col>
    ))}
  </Row>
</Container>

  
  );
};

export default ProductsCategory;