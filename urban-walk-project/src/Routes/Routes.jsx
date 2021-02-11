import React from 'react'
import { Route,Switch } from "react-router-dom"
import { Navbar } from '../Components/Navbar'
import {Login} from '../Components/Pages/Login'
import PrivateRoute from './PrivateRoute'
import {Home} from '../Components/Pages/Home'
import {Cart} from '../Components/Cart'
import Men from '../Components/Pages/Men/Men'
import { Products } from '../Components/Products/Products'
import {ProductDetails} from '../Components/Products/ProductDetails'
import {Women} from '../Components/Pages/Women'
import {Materials} from '../Components/Pages/Materials'
import { Store } from '../Components/Pages/Store/Store'
import { Gift } from '../Components/Pages/Gift/Gift'
import { Footer } from '../Components/Footer/Footer'
import { About } from '../Components/Pages/About'
import {FAQ} from '../Components/Pages/FAQ'
import {Contact} from '../Components/Pages/Contact'
import { Job } from '../Components/Pages/Job'
import Checkout from '../Components/Cart/Checkout'

const Routes = () =>{
    return(
        <div>
        <Navbar/>
        <Switch>
            <Route path ="/"  exact component = {Home} />
            <PrivateRoute  path = "/shoppingcart"
            component = {Cart}/>
            <Route path="/products/men" exact component={Men} />
            <Route path="/products/women" exact component={Women} />
            <Route path="/our-materials" exact component={Materials} />
            <Route path="/store" exact component={Store} />
            <Route path="/pages/gift" exact component={Gift} />
            <Route path ="/products/:product_id"  exact component = {ProductDetails} />
            <Route path="/login" render={(props)=> <Login {...props} />} />
            <Route path="/about-us" render={() => <About/>} />
            <Route path="/faq" render={() => <FAQ/> } />
            <Route path="/contact-us" render={() => <Contact/> } />
            <Route path="/job-opportunities" render={() => <Job/> } />
            <Route path="/checkout" render={(props)=> <Checkout {...props}/> } />
            <Route render={() => <h1 style={{marginTop:"100px", marginBottom:"300px", textAlign:"center"}} >404 error! page not found</h1>} />
        </Switch>
        <Footer/>
        </div>
    )

}
export default Routes


