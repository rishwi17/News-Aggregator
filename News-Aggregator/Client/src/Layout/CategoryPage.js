import React from "react";
import Footer from "../Components/Footer/Footer";
import NewsCategory from "../Components/News-Category/NewsCategory";
import { useParams, Navigate } from "react-router-dom";
import checkAuth from "../Components/Login/checkAuth";
import Navbar from "../Components/Navbar/Navbar";

const CategoryPage = () => {
  let params = useParams();
  console.log(params.categoryName);

  if (!checkAuth()) return <Navigate to="/login" />;
  return (
    <div>
      <Navbar />
      <NewsCategory category={params.categoryName} />
      <Footer />
    </div>
  );
};

export default CategoryPage;
