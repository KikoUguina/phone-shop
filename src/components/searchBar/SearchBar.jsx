import React from 'react';
import styles from './searchBar.module.css'
const SearchBar = ({ value, onChange }) => {
    return (
        <input
            className={styles.input}
            type="text"
            placeholder="Buscar teléfono"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default SearchBar;