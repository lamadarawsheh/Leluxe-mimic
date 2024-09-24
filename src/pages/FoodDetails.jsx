import React, { useState, useEffect } from "react";

import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/product-details.css";

import ProductCard from "../components/UI/product-card/ProductCard";
const reasons = [
  {
    icon: 'ri-shield-check-line', // Warranty icon
    text: 'Outstanding Warranty Service',
  },
  {
    icon: 'ri-star-line', // VIP Membership icon (or another icon)
    text: 'VIP Membership',
  },
  {
    icon: 'ri-customer-service-2-line', // Customer Service icon
    text: 'Great Customer Service',
  },
  {
    icon: 'ri-check-double-line', // Genuine Products icon
    text: '100% Genuine Products',
  },
  {
    icon: 'ri-gift-line', // Luxury Packaging icon
    text: 'Luxury Packaging',
  },
  {
    icon: 'ri-exchange-dollar-line', // Exchange Policy icon
    text: 'Convenient Exchange Policy',
  },
];
const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [reviewMsg, setReviewMsg] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc, image01 } = product;

  const relatedProduct = products.filter((item) => category === item.category);

  const addItem = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        image01,
      })
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(enteredName, enteredEmail, reviewMsg);
  };

  useEffect(() => {
    setPreviewImg(product.image01);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title="Product-details">
      {/* <CommonSection title={title} /> */}

      <section>
        <Container>
          <Row>
            <Col lg="1" md="2">
            </Col>

            <Col lg="4" md="4">
  <Row>
    <div className="product__main-img">
      <img src={previewImg} alt="" className="w-100" />
    </div>
  </Row>
  <Row>
    <div className="product__images d-flex flex-row mt-2"> {/* Ensure flex-row for horizontal alignment */}
      <div
        className="img__item me-2" // Added margin-end for spacing
        onClick={() => setPreviewImg(product.image01)}
      >
        <img src={product.image01} alt="" className="w-100" style={{ maxWidth: '60px' }} />
      </div>
      <div
        className="img__item me-2"
        onClick={() => setPreviewImg(product.image02)}
      >
        <img src={product.image02} alt="" className="w-100" style={{ maxWidth: '60px' }} />
      </div>
      <div
        className="img__item"
        onClick={() => setPreviewImg(product.image03)}
      >
        <img src={product.image03} alt="" className="w-100" style={{ maxWidth: '60px' }} />
      </div>
    </div>
  </Row>
</Col>

            <Col lg="6" md="8">
              <div className="single__product-content">
                <h2 className="product__title mb-3">{title}</h2>
                <div>Louvre watches are made by LE LUXE Company, with highest quality materials with the following characteristics:</div>
                <div>5 ATM Waterproof</div>
                <div>Miyota Movements</div>
                <div>Sapphire glass</div>
                <div>Solid Stainless Steel 316</div>
                <div className="instock">In Stock</div>
                <p className="product__price">
                  {" "}
                  Price: <span>${price}</span>
                </p>

                <button onClick={addItem} className="addTOCart__btn">
                  Add to Cart
                </button>
             <div className="mt-3">
             <button onClick={addItem} className="buyViawhatsapp__btn">
                  Buy Via WhatsApp
                </button>
             </div>
              </div>
            </Col>

            {/* <Col lg="12"> */}

               {/* <Col lg="12" className="mb-5 mt-4">
              <h2 className="related__Product-title">You might also like</h2>
            </Col>

            {relatedProduct.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))} */}
            <Row>
            <div class="layout-content-title mt-5">
                       <h3>WHY LE LUXE</h3>
                       
                   </div>
            </Row>
                
         
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
        </Container>
      </section>
    </Helmet>
  );
};

export default FoodDetails;