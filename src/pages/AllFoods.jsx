import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/all-foods.css";
import "../styles/pagination.css";
import { useParams } from 'react-router-dom';

const AllFoods = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [brand, setBrand] = useState("ALL");
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data } = useParams();

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;

  // Filter products based on search term
  const searchedProduct = filteredProducts.filter((item) => {
    return searchTerm === "" || item.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    if (data) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(data));
        setAllProducts(decodedData);
        setFilteredProducts(decodedData); // Initialize filtered products
      } catch (error) {
        console.error("Failed to parse data:", error);
      }
    }
  }, [data]);

  // Filter based on brand selection
  useEffect(() => {
    if (brand === "ALL") {
      setFilteredProducts(allProducts); // Reset to all products
    } else {
      const filtered = allProducts.filter((item) => item.brand === brand);
      setFilteredProducts(filtered);
    }
    setPageNumber(0); // Reset page number when brand changes
  }, [brand, allProducts]);

  // Extract unique brands for radio buttons
  const uniqueBrands = ["ALL", ...new Set(allProducts.map(item => item.brand))];

  return (
    <Helmet title="All-Products">
      <CommonSection title=" All Products " />

      <section>
        <Container>
          <Row>
            <Col lg="8" md="8" sm="12" xs="12">
              <Row>
                {displayPage.map((item) => (
                  <Col lg="4" md="6" sm="6" xs="12" key={item.id} className="mb-4">
                    <ProductCard item={item} />
                  </Col>
                ))}
              </Row>
              <div>
                <ReactPaginate
                  pageCount={pageCount}
                  onPageChange={changePage}
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  containerClassName="paginationBttns"
                />
              </div>
            </Col>
            <Col lg="4" md="4" sm="12" xs="12">
              <div className="search__widget d-flex align-items-center justify-content-between mb-4">
                <input
                  type="text"
                  placeholder="I'm looking for...."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span>
                  <i className="ri-search-line"></i>
                </span>
              </div>

              <div className="category-filter">
                <h5>Brands</h5>
                {uniqueBrands.map((brandOption) => (
                  <div key={brandOption} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="brand"
                      id={brandOption}
                      checked={brand === brandOption}
                      onChange={() => setBrand(brandOption)}
                    />
                    <label className="form-check-label" htmlFor={brandOption}>
                      {brandOption}
                    </label>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default AllFoods;