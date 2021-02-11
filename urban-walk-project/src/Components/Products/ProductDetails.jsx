import React, { Component } from 'react';
import {AppContext} from '../../Context/AppContextProvider'
import styles from './ProductDetails.module.css'

export class ProductDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            product: []
        }
    }

    componentDidMount(){
        this.setState((prev) => {
            return {
                loading: false
            }
        })
        const {getProductDetails} = this.context
        const {product_id} = this.props.match.params
        console.log(this.props)
        this.setState({
            product: getProductDetails(product_id),
            loading: false
        })
    }
    render() {
        const {product, data} = this.state
        const { addToCart } = this.context;
        console.log(product, data)
        if(!product){
            return <div>No Product Found </div>
        }
        return (
        <div>
            
            {
                product.map((item)=> (
                    <div key={item.id} className={styles.display} >
                        <div className={styles.img} >
                            <img src={item.img} width="300px" alt="product-description" />
                            <img src={item.img1} width="300px" alt="product-description" />
                            <img src={item.img2} width="300px" alt="product-description" />
                        </div>
                        <div >
                            <h1 style={{color:"green"}} >{item.name} </h1>
                            <h2>Rs. {item.unit_price} </h2>
                            <p style={{marginTop:"-15px"}} >inclusive of all taxes</p>
                            <div>
                                <button className={styles.prodBtn} onClick={() => addToCart(item.id)}>ADD TO CART</button> 
                            </div>
                            <div>
                                <h3>Core features</h3>
                                <ul>
                                    <li>Renewable Materials</li>
                                    <li>Machine Washable</li>
                                    <li>Minimizes Odor</li>
                                    <li>Flexibly Conforms To Your Movements</li>
                                </ul>
                                <h3>Description</h3>
                                <div>
                                Our most technical shoe yet, the Tree Dasher reimagines the traditional running shoe with natural materials engineered for serious performance.
                                </div>
                                <h3>Shipping and return</h3>
                                <div>
                                Free shipping on orders over Rs.500, and we have no questions asked return policy.
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        );
    }
}

ProductDetails.contextType = AppContext
