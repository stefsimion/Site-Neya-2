import React from 'react';
import './login.scss';
import logo from '../../assets/images/Logo1.2.png';
import facebook from '../../assets/images/facebook.svg';
import google from '../../assets/images/google.svg';
import linkedin from '../../assets/images/linkedin.svg';
import baa from '../../assets/images/baa.jpg';
import {code} from '../../main.js'
import {dcode} from '../../main.js'
import { login } from '../../main.js';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { setUserAction } from '../../shared/store/actions/user.actions';
import { RouteComponentProps } from 'react-router-dom';
import { mintNft } from '../../lit.js';
import { provisionAccess } from '../../lit.js';



interface Props extends RouteComponentProps {
    setUserType(username: string): void
};

class Login extends React.Component<Props> {
    state = {
        decrypt: "Decrypted Code",
        text: "Code",
        code: "",
        login: true,
        signUpForm: {
            name: "",
            email: "",
            password: ""
        },
        signInForm: {
            email: "",
            password: ""
        }
    };

     decryptdata = (drcy:any) => {
        const data = mintNft();
        const address = data;  
     }

     access = (acs:any) => {
        acs = provisionAccess();
        const key = acs;
    
     }

     show = (dcode:string, code:string) => {
        login();
        this.changeText(dcode,code);}

    changeText = (decrypt:string, text:string) => {
  
        this.setState({ text }); 
        this.setState({ decrypt });
      } 

    render() {const { text, decrypt} = this.state
        return (
            
            <div className="login">
                

                <img className="img" src={baa}  alt="sall" />
                <div className="background"> </div>
                <div className={`login__welcome-back ${this.state.login ? 'login__welcome-back--active' : 'login__welcome-back--inactive'}`}>
                    
                    <div className="login__welcome-back__logo-container" style={{marginBottom:"30px"}} >
                        <div className="login__welcome-back__logo-container"></div>
                        <img className="login__welcome-back__logo-container--image" src={logo} alt="Neya" />
                        Neya
                    </div>
                    <div className="login__welcome-back__main-container">
                    <div className="login__welcome-back__logo-container"></div>
                    <div className="login__welcome-back__logo-container"></div>
                    <div className="login__welcome-back__logo-container"></div>
                  
                    </div>
                        
                       

                    <div className="login__welcome-back__main-container">
                        <div className="login__welcome-back__main-container__text-container">
                            <span className="login__welcome-back__main-container__text-container--title" >
                             Welcome Back!
                            </span>
                            
                            <span className="login__welcome-back__main-container__text-container--secondary" >
                                To keep your account safe we suggest our 2-factor authenticator.
                            </span>
                        </div>
                        
                    </div>
                </div>
                <div className={`login__create-container ${this.state.login ? 'login__create-container--active' : 'login__create-container--inactive'}`} style={{fontSize:"50px"}}>
                <img className="login__welcome-back__logo-container--image" src={logo} alt="Neya" />
                <div className="login__welcome-back__logo-container"></div>
                        Code Generator
                    <span className='textnote' >
                                Note that it may take a few seconds to load...
                            </span>

                            <div className="login__welcome-back__logo-container"></div>
                    
                    <span className="login__create-container--info-text"></span>
                    <div className="login__create-container__form-container">
                        <form className="login__create-container__form-container__form" onSubmit={(e) => {
                            e.preventDefault();
                            
                        }}> 
                                
                            <button 
                                className="login__create-container__form-container__form--submit"  onClick={ () => {this.show("Decrypted Code",code)}}> Show Code</button> 

                            <div className="login__welcome-back__logo-container"></div>
                            <label
                                style={{color:'#000'}}
                                className="login__create-container__form-container__form--name"
                                placeholder= "Decrypted Code"

                                >{text}</label>
                     
                            
                            <button
                                className="login__create-container__form-container__form--submit"  onClick={ () => { this.changeText(dcode,code)} }  >
                                Decrypt
                            </button>
                                                 
                            <div className="login__welcome-back__logo-container"></div>
                            <label
                                style={{color:'#000'}}
                                className="login__create-container__form-container__form--password"
                                placeholder= "Decrypted Code"

                                >{decrypt}</label>
                           
                        </form>
                    </div>
                </div>
                
                <div className={`login__login-container ${!this.state.login ? 'login__login-container--active' : 'login__login-container--inactive'}`}>
                    
                    <div className="login__login-container__main-container">
                        
                        <div className="login__login-container__main-container__form-container">
                            <form className="login__login-container__main-container__form-container__form" onSubmit={(e) => {
                                e.preventDefault();
                            
                            }}>
                               
                                <input
                                    className="login__login-container__main-container__form-container__form--password"
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.signInForm.password}
                                    onChange={(value) => this.setState({
                                        signInForm: {
                                            password: value.target.value,
                                            email: this.state.signInForm.email
                                        }
                                    })}
                                    required />
                                <button
                                    className="login__login-container__main-container__form-container__form--submit">
                                    
                            </button>
                            </form>
                        </div>
                        

                    </div>
                </div>
                

                    <button className='textjos__prop' >
                             contact us...
                            
                    </button>
                
                    
                       
                    
                    
                    <div className="textjos__socials">
                            <img className="textjos__socials--facebook-icon" src={facebook} alt="" />
                            <img className="textjos__socials--google-icon" src={google} alt="" />
                            <img className="textjos__socials--linkedin-icon" src={linkedin} alt="" />
                        </div>
                    
             </div>
        );
    }

   

   
}





function mapDispatchToProps(dispatch: Dispatch) {
    return {
        setUserType: (username: string) =>
          dispatch(setUserAction({
              username
          }))
    };
}

export default connect(null, mapDispatchToProps)(Login);


 
