import { Link } from 'react-router-dom';
import React from 'react';
import styles from './Home.module.css'

const Home = () => {
    return (
        <div className={styles.home}>
            <div  >
                <img src="https://images.unsplash.com/photo-1581888748626-2a3f240a6f9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80" height="650px"  width="100%" alt="home" />
                <div className={styles.light}>
                    <h1>20% Off on first purchase!</h1>
                    <Link to="/products/men" >SHOP NOW</Link>
                </div>
            </div>
            <div className={styles.main}>
                <h1>Made From Nature, For Nature</h1>
                <p>We craft with planet-friendly natural materials, like merino wool and eucalyptus trees, because they're our best chance for a sustainable future.</p>
                <div className={styles.see} >
                    <Link to="/our-materials" style={{textDecoration:"none", color:"white"}}>see how</Link>
                </div>
                
                <h1>Shop by Category</h1>
                <div className={styles.categ}>
                    <div>
                        <Link to="/products/men" style={{textDecoration:"none", color:"black"}} >
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/6s0mLTD6H0uwtXHz5QYm7D/dfe34a367f616eaa5bf6d281b4382c9c/M_PCT_WRUM.jpg" width="300px" />
                            <h3>
                                Mens Shoes
                            </h3>
                            
                        </Link>
                    </div>
                    
                    <div>
                        <Link to="/products/women" style={{textDecoration:"none", color:"black"}} >
                            <img src="https://cdn.allbirds.com/image/fetch/q_auto,f_auto/w_834,f_auto,q_auto,c_fill,ar_0.7433155080213903/https://images.ctfassets.net/9uo1qvvet3xa/2SJ7oQMIoIBIzdlmOtAGkA/5e5808e1d641be343569a2c17246a110/SpringCore2020_Shot04_SavannaNight_WRM_0687.jpg" width="300px" />
                            <h3>
                                Womens Shoes
                            </h3>
                            
                        </Link>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}

export {Home}
