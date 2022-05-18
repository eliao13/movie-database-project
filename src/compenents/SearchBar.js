import { useState, useEffect } from "react";

function SearchBar({ onSearchSubmit, clearResults, clearError, openCloseSearchBar }) {

    const [query, setQuery] = useState('');

    const [searchResults, setSearchResults] = useState([]);

    const [debouncedQuery, setdebouncedQuery] = useState(query);

    const [spacebarError, setSpacebarError] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setQuery(debouncedQuery), 1000);
        return () => clearTimeout(timer);
    }, [debouncedQuery]);

    useEffect(() => {
        clearResults();
        clearError();

        if (query !== '') {
            onSearchSubmit(query);
        } else {
            clearResults();
        }
    }, [query]);

    // Close search bar when clicking anywhere in the targeted area
    // function closeSearchBar(e) {
    //     if (window.innerWidth < 1000) {
    //         openCloseSearchBar();
    //     } 
    //     e.target.blur();
    // }

    // Input field flash red when space bar is typed for first character
    function flashRed() {
        setSpacebarError(true);
        setInterval(function () {
            setSpacebarError(false);
        }, 600);
    }

    return (
        <div className="search-bar">
            <input type="text"
                className={spacebarError ? "search-bar-field-error" : "search-bar-field"}
                placeholder="i.e. Jurassic Park"
                value={debouncedQuery}
                onChange={(e) => {
                    // Check if the first input value is a "space"
                    if (e.target.value.indexOf(" ") > -1 && e.target.value.length === 1) {
                        flashRed();
                        return;
                    }
                    setdebouncedQuery(e.target.value)
                }}
            />
        </div>
    )
}
export default SearchBar