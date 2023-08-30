import { useState } from "react"

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <input
            type="text"
            placeholder="Search a pokemon"
            value={searchValue}
            onChange={handleSearchChange}
        />
    )
}