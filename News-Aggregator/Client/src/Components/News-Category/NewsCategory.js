import React, { useState, useEffect } from "react";
import "./NewsCategory.css";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import image from "../../Images/news.jfif";

const axios = require("axios");

function Items({ currentItems, category }) {
  return (
    <>
      {currentItems &&
        currentItems.map((cardd, index) => (
          <div className="item" key={index}>
            <Link
              to={{ pathname: `/article/${category}/${index}` }}
              className="card"
            >
              {cardd.urlToImage ? (
                <div
                  className="thumb"
                  style={{ backgroundImage: `url(${cardd.urlToImage})` }}
                ></div>
              ) : (
                <div
                  className="thumb"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                ></div>
              )}
              <article>
                <h1>{cardd.title}</h1>
                <span>{cardd.author}</span>
              </article>
            </Link>
          </div>
        ))}
    </>
  );
}

const NewsCategory = ({ category }) => {
  const [isLoading, setLoading] = useState(true);

  const [Cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const news = await axios.get(`http://localhost:8000/news/${category}`, {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        });
        if (news) {
          // console.log("news", news.data.articles);
          setCards(news.data.articles.slice(0, 18));
          setLoading(false);
        }
        // console.log(Cards);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [category]);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(Cards.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(Cards.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, Cards]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % Cards.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className="container">
        <h1 className="title-heading">{category.toUpperCase()}</h1>
      </div>
      {isLoading ? (
        <div></div>
      ) : (
        <>
          <div className="band">
            <Items currentItems={currentItems} category={category} />
          </div>
          <div className="text-center mb-3">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              breakClassName={"page-item"}
              breakLinkClassName={"page-link"}
              containerClassName={"pagination"}
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              activeClassName={"active"}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default NewsCategory;
