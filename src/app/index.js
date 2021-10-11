import React, { useEffect, useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';

const App = () => {

  const [ getData, setData ] = useState([]);
  const [ isData, setIsData ] = useState(false);
  
  useEffect(() => {
    fetchData()
    .then(() => {
      if(isData) {
        adjustHeigh();
      }
    })
    
    const timer = setTimeout(() => {
      fetchData();
    }, 4000);
    return () => clearTimeout(timer); 
  }, [ isData ]);

  const fetchData = async() => {
    const url = 'http://localhost:3001/data';
    await fetch(url)
    .then(response => {
      response.json().then(data => {
        if(data) {
          setIsData(true);
          setData(data);
        }
      });
    }).catch(error => {
      console.log('Something happened when fetching the data', error);
    })
  }

  const adjustHeigh = () => {
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
  };

  return (
    <div className="app">
      {isData ? 
        <>
        <Header data = {getData[2]} />
        <div className="main-container">
          <Sidebar data = {getData[0]}/>
          <Body data = {getData[1]}/>
        </div>
        <Footer data = {getData[2]}/>
        </>
        :
        <div className="spin"></div>
      }
  </div>
  );
}

export default App;

// DELETE GIT
// DELETE USELESS DATA FILES
// DELETE NODE MODULES