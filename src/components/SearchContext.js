
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    return (
        <SearchContext.Provider value={{ searchTerm, handleSearch }}>
            {children}
        </SearchContext.Provider>
    );
};
