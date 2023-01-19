import React from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Footer from "../Components/Footer";
import classes from "../Pages/Layout.module.css";

const Layout = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
