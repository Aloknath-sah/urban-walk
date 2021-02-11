import React from "react";
import {  NavLink, Link } from "react-router-dom";
import styled from 'styled-components';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { AppContext } from "../../Context/AppContextProvider";

const NavBarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    overflow:hidden;
    position: fixed;
    background-color: white;
    width:100%;
    top:0;
    height: 60px;
    padding-left: 20px;
    a {
        text-decoration: none;
        color: black;
    }

`
const NavLeft = styled.div`
    padding: 20px;
`
const NavCenter = styled.div`
    padding: 10px;
    font-size: 30px;
    font-family: sans-serif;
    font-weight: bold;
    &.navcenter > * {
        color: green;
    }
`

const RightLink = styled.div`
    display: flex;
    padding: 10px;
    margin-right: 20px;
    &.rightlink > *{
        padding: 10px;
        
    }
    &.rightlink > div{
        margin-left: -22px;
        
        
    }
`

const links = [
    {
        to: "/products/men",
        title: "Men"
    },
    {
        to: "/products/women",
        title: "Women"
    },
    {
        to: "/pages/gift",
        title: "gift"
    }
];

class Navbar extends React.Component {
    render(){
        const {count} = this.context
        return (
            <NavBarWrapper className="navbar" >
                <NavLeft>
                    {links.map((link) => (
                        <NavLink
                        exact
                        style={{ padding: 10}}
                        activeStyle={{ fontWeight: "bold"}}
                        key={link.to}
                        to={link.to}
                        >
                        {link.title}
                        </NavLink>
                    ))}
                </NavLeft>
                <NavCenter className="navcenter" >
                    <Link to="/" >urban walk</Link>
                </NavCenter>
                <RightLink className="rightlink" >
                    <Link to="/our-materials" >our materials </Link>
                    <Link to="/store" >store</Link>
                    <Link to="/login"><AccountCircleIcon/></Link>
                    <Link to="/shoppingcart"><ShoppingCartIcon/></Link>
                    <div>{count} </div>
                </RightLink>
            </NavBarWrapper>
        );
    }
    
}

Navbar.contextType = AppContext
export { Navbar };
