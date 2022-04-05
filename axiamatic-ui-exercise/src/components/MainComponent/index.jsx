import React from 'react';
import debounce from 'lodash.debounce';
import ListItem from '../../components/ListItem';
import SearchInput from '../../components/SearchInput';
import SelectedItems from '../../components/SelectedItems';
import { products } from '../../data/products.js';
import './MainComponent.css';

const mockFetch = (query, cb) => {    
    if(query && query.length > 0) {
      const regex = new RegExp(`^${query}`, `i`);
      const suggestions = products.sort().filter(v => regex.test(v.name));     
      cb(suggestions);
    }    
}

const debouncedFetchData = debounce((query, cb) => {
  mockFetch(query, cb);
}, 500);

const MainComponent = () => {
  const max = 4;
  const [query, setQuery] = React.useState('');
  const [results, setResults] = React.useState([]);
  const [itemsAdded, setItemsAdded] = React.useState(new Set());
  const [disableSearch, setDisableSearch] = React.useState(false);

  React.useEffect(() => {
    debouncedFetchData(query, res => {
    setResults(res);
    });
  }, [query]);
 
  return (
    <div className= 'main-component' onClick = {() => {setQuery('');setResults([]);}}>
      <div className='heading'>
        <div className ='app-header'>
        </div>
        <div className= 'header-text'>AXIAMATIC TECHNOLOGIES PRIVATE LIMITED</div>
      </div>
      <div className='selected-items'>
        <SelectedItems 
          selectedItemsId = {itemsAdded} 
          max={max} 
          deleteItem =
            {e =>
              { 
                let filteredItems = [...itemsAdded].filter(key => key != e.target.id);
                setItemsAdded(new Set(filteredItems));
                setDisableSearch(false);
              }
            }
        />
      </div>
      <div className= 'search-section'>
        <div className='counter'>
          1 of 3
        </div>
        <div className='content' > 
          <div className = 'title' >Lets add your internal tools</div>
          <div className = 'caption'>Search to quickly add products your team used today.
          You will able to add as may as you need later but for now let's add four.</div>
        </div>
        <SearchInput         
          disableSearch={disableSearch}
          onChangeText={e => {
            setQuery(e.target.value);
          }}
          value = {query}
        />
        { results && results.length >0 &&
            <div className = 'search-result'>
              {results.map((result, index) => (
              <div className='search-row' key={index} >
                <ListItem
                  item={result}
                  onClickHandle={e => {  
                    setItemsAdded(new Set([...itemsAdded, e.target.id]));  
                    setQuery('');
                    setResults([]);                    
                    if(!itemsAdded.has(e.target.id) && itemsAdded.size >= 3) {
                      setDisableSearch(true);
                    } else {
                      setDisableSearch(false);
                    }                    
                   }}
                 />
              </div>
              ))}
            </div>
        }
        {!results || results.length == 0 ? 
        <input  className = 'next-button' type="button" 
        onClick={() => alert('You have added ' + itemsAdded.size + ' products')} value='Next'/> : ''}
       </div> 
   </div>
  );
};
export default MainComponent;