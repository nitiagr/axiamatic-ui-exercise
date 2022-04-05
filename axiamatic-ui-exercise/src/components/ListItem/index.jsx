import React from 'react';
import './ListItem.css';

const ListItem = ({ item, onClickHandle }) => {   
return (
  <div className="list-item-container">
    <div className="left">
      <img src={item.icon} alt={item.name} className="thumbnail" />
    </div>
    <div className="center">
      <div className="list-item" id={item.id} onClick={onClickHandle}>
       {item.name}
       </div>
     </div>
  </div>
)};

export default ListItem;