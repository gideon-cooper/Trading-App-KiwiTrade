import React, {useState, createContext} from 'react'

export const ListingContext = createContext()

export const ListingProvider=({children}) => {
    const [listingsArray, setListingsArray] = useState([])
    return (
        <ListingContext.Provider value={[listingsArray, setListingsArray]}>
            {children}
        </ListingContext.Provider>
    )
}