import { useState, useEffect } from 'react';
import './Search.css';

export default function Search({recipes}) {
    const [searchResults, setSearchResults] = useState(recipes)
    const [searchKey, setSearchKey] = useState('')

    const handleSearch = (e) => {
        console.log(`searching for ${searchKey}`);
        setSearchKey(e.target.value.toLowerCase());
    }

    useEffect(() => {
        setSearchResults(
            recipes.filter(recipe =>
                recipe.name.toLowerCase().includes(searchKey))
        );
        console.log(searchResults);
    },[searchKey])
    return (
        <div className='search'>
            <div className='search-bar'>
                <img className='icon' src="https://img.icons8.com/ios/48/000000/search.png" alt='magnifying glass'/>
                <input type='search' name='searchKey' value={searchKey} onChange={(e) => handleSearch(e)} placeholder='Recipe names'/>
            </div>
            <div className='search-card-container'>
            {searchResults?.map(result => (
                <div className='search-card'>
                    <h3>{result.name}</h3>
                    <img src={result.image_url} alt={result.name} />
                </div>
            ))}
            </div>
        </div>
    )
}
