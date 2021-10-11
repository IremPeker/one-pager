import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

const App = () => {

  window.onload = () => {
    const windowHeight = window.innerHeight;
    const header = document.querySelector(".header-container");
    const main = document.querySelector(".main-container");
    const sidebar = document.querySelector(".sidebar-container");
    const footer = document.querySelector(".footer-container");
    if (header) {
      const headerRect = header.getBoundingClientRect();
      const footerRect = footer.getBoundingClientRect();
      const mainHeight =  windowHeight - headerRect.height - footerRect.height;
      const sidebarHeight =  windowHeight - headerRect.height;
      main.style["height"] = mainHeight + "px";
      sidebar.style["height"] = sidebarHeight + "px";
    }
  }

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <Body />
      </div>
      <Footer />
  </div>
  );
}

export default App;