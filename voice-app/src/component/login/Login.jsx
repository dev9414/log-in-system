import React, { Component } from "react";
import axios from 'axios'
import  { Redirect } from 'react-router-dom'

class Login extends Component{
    constructor(props){
        
      
       super(props)
        this.state = { redirect: null };
      
    } 
    componentDidMount(){
        if(localStorage.getItem("uid")!=null){
            this.setState({ redirect: "/Dash" });
        }
    } 
    getUser = (e) => {
        e.preventDefault();
        const user=e.target.elements.value;
        axios
          .post(`https://us-central1-auth-cf04e.cloudfunctions.net/auth`,user)
          .then((x) => {
            //console.log(x);
            localStorage.setItem("uid", x.data);
            this.getAuth();
            console.log("data")
            })
 
          .catch((e) => console.log(e))
        }
        getAuth=()=>{
            if(localStorage.getItem("uid")!=null)
            {
                console.log("test")
                this.setState({ redirect: "/Dash" });
                // return <Redirect to={this.state.redirect} />
            }
        }
     render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
         return (<div>
                 <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/all.css" />

<div class="container" id="container">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>Create Account</h1>
                <div class="social-container">
                    <a href="##" rel="noopener noreferrer" target="_blank" class="social"><i class="fab fa-instagram"></i></a>
                    <a href="##" rel="noopener noreferrer" target="_blank" class="social"><i class="fab fa-twitter"></i></a>
                    <a href="##" rel="noopener noreferrer" target="_blank" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button class="su" >Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#" onSubmit={this.getUser}>
                <h1>Sign In</h1>
                <div class="social-container">
                    <a href="##" rel="noopener noreferrer" target="_blank" class="social"><i class="fab fa-instagram"></i></a>
                    <a href="##" rel="noopener noreferrer"  target="_blank" class="social"><i class="fab fa-twitter"></i></a>
                    <a href="##" rel="noopener noreferrer" target="_blank" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <a href="##" rel="noopener noreferrer" target="_blank">I Forgot my Password</a>
                <button class="si">Sign In</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>Welcome Back!</h1>
                    <p>To Keep connected with us please login with your personal info</p>
                    <button class="ghost" id="signIn">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>Hello, Wanderer!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button class="ghost" id="signUp">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
        <script src="./log.js" type="text/js"></script>
           </div>
           );
           
}}


export default Login;
