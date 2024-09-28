import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";
import "../styles/all-foods.css";
import "../styles/pagination.css";
import { useParams } from 'react-router-dom';
import Menproducts from "../assets/fake-data/Menproducts";
import Womenproducts from "../assets/fake-data/Womenproducts";

const Allproduct = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [brand, setBrand] = useState("ALL");
  const [category, setCategory] = useState("ALL");
  const [menProducts, setMenProducts] = useState([]); // Men products list
  const [womenProducts, setWomenProducts] = useState([]); // Women products list
  const [products, setGeneralProducts] = useState([]); // General products list
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data } = useParams();
  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;

  // Combine men, women, and general products
  useEffect(() => {
    const combinedProducts = [...Menproducts, ...Womenproducts, ...products];
    setAllProducts(combinedProducts);
    setFilteredProducts(combinedProducts);
  }, [menProducts, womenProducts, products]);

  // Filter products based on search term, brand, and category
  const filteredProductList = allProducts.filter((item) => {
    const matchesSearchTerm = searchTerm === "" || item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = brand === "ALL" || item.brand === brand;
    const matchesCategory = category === "ALL" || item.category === category;
    return matchesSearchTerm && matchesBrand && matchesCategory;
  });

  const displayPage = filteredProductList.slice(visitedPage, visitedPage + productPerPage);
  const pageCount = Math.ceil(filteredProductList.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    if (data) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(data));
        // Set menProducts, womenProducts, and general products accordingly
        setMenProducts(decodedData.men); // Assuming data has men products
        setWomenProducts(decodedData.women); // Assuming data has women products
        setGeneralProducts(decodedData.general); // Assuming data has general products
      } catch (error) {
        console.error("Failed to parse data:", error);
      }
    }
  }, [data]);

  // Reset page number when filters change
  useEffect(() => {
    setPageNumber(0);
  }, [brand, category, searchTerm]);

  // Extract unique brands and categories for radio buttons
  const uniqueBrands = ["ALL", ...new Set(allProducts.map(item => item.brand))];
  const uniqueCategories = ["ALL", ...new Set(allProducts.map(item => item.category))];

  return (
    <Helmet title="All-Foods">
      <CommonSection title="All Products" />

      <section>
        <Container>
          <Row>
            <Col lg="8" md="8" sm="12" xs="12">
              <Row>
                {displayPage.length > 0 ? (
                  displayPage.map((item) => (
                    <Col lg="4" md="6" sm="6" xs="12" key={item.id} className="mb-4">
                      <ProductCard item={item} />
                    </Col>
                  ))
                ) : (
                  <p>No products found</p>
                )}
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
              {/* Search Input */}
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

              {/* Brands Filter */}
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

              {/* Categories Filter */}
              <div className="category-filter">
                <h5>Categories</h5>
                {uniqueCategories.map((categoryOption) => (
                  <div key={categoryOption} className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="category"
                      id={categoryOption}
                      checked={category === categoryOption}
                      onChange={() => setCategory(categoryOption)}
                    />
                    <label className="form-check-label" htmlFor={categoryOption}>
                      {categoryOption}
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

export default Allproduct;
