import React, { Component } from 'react';
import { AppContext } from '../../../Context/AppContextProvider';
import { Redirect } from 'react-router-dom';
import styles from './Login.module.css'

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }

    handleChange=(e)=> {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleClick=()=> {
        const {handleAuth} = this.context
        const {email, password} = this.state
        handleAuth({email, password})
        
    }
    render() {
        const {email, password} = this.state
        const {isAuth} = this.context
        return !isAuth? (
        <div className={styles.login} >
            <h2>Login Please</h2>
            <input type="text" placeholder="email" name="email" value={email} onChange={this.handleChange} />
            <br/>
            <input type="text" placeholder="password"  name="password" value={password} onChange={this.handleChange} />
            <br/>
            <button onClick={this.handleClick} >submit</button>
        </div>
        ):<Redirect to="/" />
    }
}

Login.contextType = AppContext
export {Login}
