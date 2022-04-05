import React from 'react';
import './SearchInput.css';

const SearchInput = ({ disableSearch, onChangeText, value }) => {
	console.log('**disableSearch', disableSearch);
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