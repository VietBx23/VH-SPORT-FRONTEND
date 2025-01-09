// pages/HomePage.jsx
import React from "react";
import HeaderComponent from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import CarouselComponent from "../components/carousel.jsx";
import PolicyComponent from "../components/policy.jsx";
import BestSaleComponet from "../components/best-sale.jsx";
import ImageGalleryComponet from "../components/imageGallery.jsx";
import NewProductComponent from "../components/new-product.jsx";
import PopularCategoriesComponet from "../components/Popularcategories.jsx";
import VoucherComponet from "../components/voucher.jsx";
import ShoeNewSComponet from "../components/shoeNews.jsx";

const HomePage = () => {
  return (
    <div>
      {/* <HeaderComponent /> */}
      <CarouselComponent />
      <PolicyComponent />
      <BestSaleComponet />
      <ImageGalleryComponet />
      <NewProductComponent />
      <PopularCategoriesComponet />
      <VoucherComponet />
      <ShoeNewSComponet />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
