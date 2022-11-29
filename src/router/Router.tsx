import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import HomePage from "../pages/HomePage";
import ProductPage from "../pages/ProductPage";
import ProjectPage from "../pages/ProjectPage";
import ServiePage from "../pages/ServiePage";
import ProductDetailPage from "../pages/ProductDetailPage";
const Router = () => {
  return (
    <Routes>
      <Route path={`/`} element={<HomePage />} />
      <Route path={`/about/`} element={<AboutPage />} />
      <Route path={`/service/`} element={<ServiePage />} />
      <Route path={`/product/`} element={<ProductPage />} />
      <Route path={`/project/`} element={<ProjectPage />} />
      <Route path={`/contact/`} element={<ContactPage />} />
      <Route path={`/project_detail/:id`} element={<ProjectDetailPage />} />
      <Route path={`/product_detail/:id`} element={<ProductDetailPage />} />
    </Routes>
  );
};

export default Router;
