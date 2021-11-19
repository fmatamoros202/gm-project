import './LandingPage.scss';
import gmlogo from '../../assets/images/gm-logo.svg';
import { Component } from 'react';



class LandingPage extends Component{

    loginHandle = (e) =>{
        e.preventDefault();
        if (e.target.username.value==="gmuser" && e.target.password.value==='gmuser'){
            let path = `/${e.target.username.value}`;
            this.props.history.push(path);
        }
        else{
            alert('Please check your username and password')
        }
    }

    render(){
        return(
            <>
                <div className ="main-container">
                    <div className ="container-form">
                        <h2 className="header"><img className="header__logo" src={gmlogo} alt="GM's logo"/>GM's Emissions Tracker</h2>
                        <h3 className="subheader">Log-In</h3>
                        <form className="form" onSubmit={this.loginHandle}>
                            <label className="form__label">User Name</label>
                            <input name='username' className="form__input" type='text'></input>
                            <label className="form__label">Password</label>
                            <input type='password' name='password' className="form__input" type="text"></input>
                            <input type="submit" className="form__cta" value="Sign-In"></input>
                        </form>
                    </div>
                </div>
            </>
        )
    }
};

export default LandingPage;