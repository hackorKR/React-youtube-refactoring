import styles from './search_header.module.css';
import React, { useRef, memo } from 'react';

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    console.log(value);
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const logoClick = () => {
    window.location.href = window.location.href;
  };

  console.log('Header!!');
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={logoClick}>
        <img
          className={styles.img}
          src={process.env.PUBLIC_URL + '/images/logo.png'}
          alt='logo'
        />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type='search'
        placeholder='Search...'
        onKeyPress={onKeyPress}
      />
      <button className={styles.button} type='submit' onClick={onClick}>
        <img
          className={styles.buttonImg}
          src={process.env.PUBLIC_URL + '/images/search.png'}
          alt='search'
        />
      </button>
    </header>
  );
});

export default SearchHeader;
