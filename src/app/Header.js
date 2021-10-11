import React from 'react';
import headerFooterData from '../data/headerFooterData';

const Header = () => {
 
  return (
    <div className="header-container">
      { headerFooterData().map((item, index) => {
        return (
          <div key={index} className="header-footer-data-container">
            <p>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</p>
            { item.items.map((el, index) => {
              return (
                <a key={index} href={el.url}>{el.label}</a>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default Header;