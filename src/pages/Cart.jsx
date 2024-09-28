import React from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/cart-page.css";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import { cartActions } from "../store/shopping-cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  return (
    <Helmet title="Cart">
      <section>
        <Container>
          <Row>
            <Col lg="8" md="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Your cart is empty</h5>
              ) : (
                <table className="custom-table">
                  <thead >
                  <tr>
                    <th className="custom-th">Product</th>
                    <th className="custom-th">Title</th>
                    <th className="custom-th">Price</th>
                    <th className="custom-th">Quantity</th>
                    <th className="custom-th">Delete</th>
                  </tr>

                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

            
            </Col>
                <Col lg="4" md="12" className="d-flex flex-column align-items-center ">
                  <div className="text-center mt-4" style={{border:' 1px solid black', padding:'20px' }}>
                    <h6>
                      Subtotal: $
                      <span className="cart__subtotal">{totalAmount}</span>
                    </h6>
                    <p>Taxes and shipping will be calculated at checkout</p>
                    <div className="cart__page-btn d-flex justify-content-center gap-2 mt-3">
                      <button className="Cart__btn">
                        <Link to="/foods" className="  text-decoration-none">Continue Shopping</Link>
                      </button>
                      <button className="Cart__btn">
                        <Link to="/checkout" className=" text-decoration-none">Proceed to checkout</Link>
                      </button>
                    </div>
                  </div>
                 </Col>

          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;