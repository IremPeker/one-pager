import React from 'react';

const Header = (props) => {

  return (
    <div className="header-container">
      { props.data && props.data.items.length > 0 ? 
        <>
        { props.data.items.map((item, index) => {
          return (
            <div key={index} className="header-footer-data-container">
              <p>{ item.title.charAt(0).toUpperCase() + item.title.slice(1) }</p>
              { item.items.map((el, index) => {
                return (
                  <a key={index} href={el.url}>{el.label}</a>
                )
              })}
            </div>
          )
        })}
        </>
        :
        null
      }
    </div>
  );
}

export default Header;