import React from 'react';
import axios from 'axios'
import categories from '../categories.json'
import products from '../products.json';


export const AppContext = React.createContext()

class AppContextProvider extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isAuth: false,
            categories:[...categories],
            products: [...products],
            selectedCategory:"",
            c_name:"",
            cart:[],
            count:0
        }
    }

    getAllCategories = ()=> {
        const {categories} = this.state
        return categories
    }

    getAllProducts = () => {
        const {products} = this.state
        return products
    }

    getProductDetails=(id)=>{
        const {products} = this.state;
        return products.filter((item)=> item.id === Number(id))
    }

    setCategory = (val, nam) =>{
        this.setState({
            selectedCategory: val,
            c_name: nam
        });
    }

    getSelectedCategory = () => {
        const { selectedCategory } = this.state;
        return selectedCategory;
    }

    handleAuth=({email, password})=> {
    axios({
        method:"post",
        url:"https://reqres.in/api/login",
        data:{
            email,
            password
        }
    })
    .then(res=> this.setState({
        isAuth: true,
        token: res.data.token
    }))
    }

    addToCart = (id) => {
        const { products, cart, count } = this.state;
        this.setState({
            count: count+1
        })
        const productToAdd = products.find((prod) => prod.id === id);

        const payload = {
            ...productToAdd,
            qty: 1
        };

        const searchCart = cart.findIndex((items) => items.id === id);

    // if item doesn't exist. add the item to the cart
        if (searchCart === -1) {
            this.setState({
                cart: [...cart, payload]
            });
        }

    // else just find the item in cart and increase it's quantity
    else {
            const newCart = cart?.map((item, idx) =>
                idx === searchCart ? { ...item, qty: item.qty + 1 } : item
            );
            this.setState({
                cart: [...newCart]
            });
        }
    }   

    getCart = () =>{
        const { cart } = this.state;
        return cart;
    }

     // function which returns the total bill of cart from the state
    getTotal = () =>{
        const { cart } = this.state;
        console.log(cart)
        const total = cart.reduce(
        (a, c) => a + Number(c.qty) * Number(c.unit_price),
            0
        );
        return total;
    }

    render(){
        const {handleAuth,getAllCategories,getAllProducts, getSelectedCategory,setCategory, getProductDetails, addToCart, getCart, getTotal} = this
        const {isAuth, c_name, count, cart} = this.state
        const value = {isAuth, handleAuth, getAllCategories,getAllProducts, getSelectedCategory, setCategory, getProductDetails, addToCart, getCart, getTotal, c_name, count, cart}
        return(
        <AppContext.Provider value = {value}>{this.props.children}
            </AppContext.Provider>
        )
    }
}
export default AppContextProvider