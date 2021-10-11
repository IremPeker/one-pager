import React from 'react';
import sidebarData from '../data/sidebarData';

const Sidebar = () => {
    console.log('sidebar data', sidebarData());
  return (
    <div className="sidebar-container">
      <h2>{sidebarData().title}</h2>
      { sidebarData().items.map((item, index) => {
        return (
          <a key={index} href={item.url}>{item.label}</a>
        )
      })}
    </div>
  );
}

export default Sidebar;