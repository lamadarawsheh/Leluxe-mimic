import React, { useState, useEffect } from "react";
import products from "../assets/fake-data/products";
import Womenproducts from "../assets/fake-data/Womenproducts";
import Menproducts from "../assets/fake-data/Menproducts";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";
import "../styles/product-details.css";

const reasons = [
  {
    icon: 'ri-shield-check-line',
    text: 'Outstanding Warranty Service',
  },
  {
    icon: 'ri-star-line',
    text: 'VIP Membership',
  },
  {
    icon: 'ri-customer-service-2-line',
    text: 'Great Customer Service',
  },
  {
    icon: 'ri-check-double-line',
    text: '100% Genuine Products',
  },
  {
    icon: 'ri-gift-line',
    text: 'Luxury Packaging',
  },
  {
    icon: 'ri-exchange-dollar-line',
    text: 'Convenient Exchange Policy',
  },
];

const FoodDetails = () => {
  const [previewImg, setPreviewImg] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  // Find product in all categories
  const allProducts = [...Womenproducts, ...Menproducts, ...products];
  const product = allProducts.find((item) => item.id === id);

  useEffect(() => {
    if (product) {
      setPreviewImg(product.image01);
    }
  }, [product]);

  // Handle the case where product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, price, category, desc, image01, image02, image03 } = product;

  const addItem = () => {
    dispatch(cartActions.addItem({
      id: product.id,
      title,
      price,
      image01,
    }));
  };

  return (
    <Helmet title="Product-details">
      <section>
        <Container>
          <Row>
            <Col lg="1" md="2"></Col>
            <Col lg="4" md="4">
              <Row>
                <div className="product__main-img">
                  <img src={previewImg} alt="" className="w-100" />
                </div>
              </Row>
              <Row>
                <div className="product__images d-flex flex-row mt-2">
                  <div className="img__item me-2" onClick={() => setPreviewImg(image01)}>
                    <img src={image01} alt="" className="w-100 " style={{ maxWidth: '60px' }} />
                  </div>
                  {image02 && <div className="img__item me-2" onClick={() => setPreviewImg(image02)}>
                    <img src={image02} alt="" className="w-100" style={{ maxWidth: '60px' }} />
                  </div>}
                  {image03 && <div className="img__item" onClick={() => setPreviewImg(image03)}>
                    <img src={image03} alt="" className="w-100" style={{ maxWidth: '60px' }} />
                  </div>}
                </div>
              </Row>
            </Col>
            <Col lg="6" md="8">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <p>{desc}</p>
                <p className="product__price">Price: <span>${price}</span></p>
                <button onClick={addItem} className="addTOCart__btn">Add to Cart</button>
              </div>
            </Col>
            <Row>
              <div className="layout-content-title mt-5">
                <h3>WHY LE LUXE</h3>
              </div>
              <div className="why-use-our-website">
                <div className="reasons-grid">
                  {reasons.map((reason, index) => (
                    <div key={index} className="reason-item">
                      <i className={reason.icon}></i>
                      <p>{reason.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Row>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;
