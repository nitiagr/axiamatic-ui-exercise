import React from 'react';
import './SearchInput.css';

const SearchInput = ({ disableSearch, onChangeText, value }) => {	
return (
 <div class="search-container">
  <input  
    type = "text"
	className = {disableSearch ? 'disable-input' : ''}
    disabled = {disableSearch}
	onChange = {onChangeText}
	placeholder = "Search for your software"
	value = {value}
   />  
 </div>
);
};
export default SearchInput;