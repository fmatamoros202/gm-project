import './LandingPage.scss';
import gmlogo from '../../assets/images/gm-logo.svg';


let LandingPage = (props)=>{

    return(
        <>
            <div className ="main-container">
                <div className ="container-form">
                    <h2 className="header"><img className="header__logo" src={gmlogo} alt="GM's logo"/>GM's Emissions Tracker</h2>
                    <h3 className="subheader">Log-In</h3>
                    <form className="form">
                        <label className="form__label">User Name</label>
                        <input className="form__input" type='text'></input>
                        <label className="form__label">Password</label>
                        <input className="form__input" type="text"></input>
                        <div className="form__cta">Sign-In</div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default LandingPage;