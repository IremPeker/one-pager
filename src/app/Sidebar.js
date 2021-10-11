import React from 'react';

const Sidebar = (props) => {

  return (
    <div className="sidebar-container">
      { props.data && props.data.items.length > 0 ? 
        <>
        <h2>{props.data.title}</h2>
        { props.data.items.map((item, index) => {
          return (
            <a key={index} href={item.url}>{item.label}</a>
          )
        })}
        </>
        :
        null
      }
    </div>
  );
}

export default Sidebar;