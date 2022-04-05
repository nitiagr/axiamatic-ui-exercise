import React from 'react';
import { products } from '../../data/products.js';
import './SelectedItems.css';

const SelectedItems = ({ selectedItemsId, max, deleteItem }) => {
  const numArray = selectedItemsId ? [...selectedItemsId].map(e=> parseInt(e)) : [];
  const selectedItems = [];
  products.forEach(el => {
    numArray.forEach(e=> {
      if(el.id === e) {
        selectedItems.push(el);
      }
    })
  });
  let count = selectedItemsId ? selectedItemsId.size : 0;
  while(count<max) {
      selectedItems.push(null);
      count++;
  }
 
  return (
    <React.Fragment>
    <div class='selected-container'>
        {selectedItems && selectedItems.map((selectedItem, index) => (
          <div className = 'selected-item' key={index}>           
            <div><img src={selectedItem ? selectedItem.icon: 'https://cdn2.iconfinder.com/data/icons/bold-application/500/plus-512.png'} 
            alt='+' className={selectedItem ? 'selected-thumbnail' : 'plus-thumbnail'}  /></div> 
            <div>{selectedItem ? selectedItem.name : '' }</div>
            {selectedItem ? <div className= 'remove-item' onClick={deleteItem} id={selectedItem.id}>Remove</div> : ''}
          </div>
        ))}         
    </div>
    <div className ='caption'>
      {selectedItemsId.size} Product(s) added
    </div>
    </React.Fragment>
  );
};
export default SelectedItems;