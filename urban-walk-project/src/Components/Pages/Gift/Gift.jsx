import { Link } from 'react-router-dom';
import React from 'react';
import styles from './Gift.module.css'


const Gift = () => {
    return (
        <div >
            <div>
                <img src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/268453-Best_Running_Shoes_for_Flat_Feet-1296x728-header-1296x728.jpg?w=1155&h=1528" height="650px" width="100%" alt="Gift" />
            </div>
            <div className={styles.light} >
                <h1>Give Light. Tread Lighter.</h1>
                <p>Give the gift that's light on their feet, and light on the planet.</p>
                <div className={styles.gift} >
                    <div>
                        <Link to="/products/men">GIFTS FOR HIM</Link>
                    </div>
                    <div>
                        <Link to="/products/women" >GIFTS FOR HER</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export {Gift}
