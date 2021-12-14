import { useState, useEffect } from 'react';

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
        <div>
            <p>Search Page</p>
            <input type='search' name='searchKey' value={searchKey} onChange={(e) => handleSearch(e)}/>
            {searchResults?.map(result => (
                <div>
                    <h3>{result.name}</h3>
                </div>
            ))}

        </div>
    )
}
