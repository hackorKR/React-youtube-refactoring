import React from 'react';
import styles from './category_list.module.css';

const CategoryList = ({ changeNum }) => {
  const onClick = (event) => {
    event.preventDefault();
    changeNum(event.target.value);
  };

  return (
    <div className={styles.categorys}>
      <button className={styles.category_button} value='0' onClick={onClick}>
        mostPopular
      </button>
      <button className={styles.category_button} value='1' onClick={onClick}>
        Film & Animation
      </button>
      <button className={styles.category_button} value='2' onClick={onClick}>
        Autos & Vehicles
      </button>
      <button className={styles.category_button} value='10' onClick={onClick}>
        Music
      </button>
      <button className={styles.category_button} value='15' onClick={onClick}>
        Pets & Animals
      </button>
      <button className={styles.category_button} value='17' onClick={onClick}>
        Sports
      </button>
      <button className={styles.category_button} value='20' onClick={onClick}>
        Gaming
      </button>
      <button className={styles.category_button} value='23' onClick={onClick}>
        Comedy
      </button>
      <button className={styles.category_button} value='24' onClick={onClick}>
        Entertainment
      </button>
      <button className={styles.category_button} value='26' onClick={onClick}>
        Howto & Style
      </button>
      <button className={styles.category_button} value='28' onClick={onClick}>
        Science & Technology
      </button>
    </div>
  );
};

export default CategoryList;
