import { Layout} from 'antd';
import React from 'react';
import ReactGA from 'react-ga';
import { useHistory } from 'react-router-dom';

import logo from '../NDUS_Logo.png';
import '../index.css';

const { Footer } = Layout;
const trackingId = 'UA-182178689-1';

function Login() {

    let history = useHistory();

    const login = () => {
        history.push('/phishing/');
        ReactGA.event({
            category: 'User',
            action: 'Login',
        });
    }

    const redirect = () => {
        history.push('/phishing/');
        ReactGA.initialize(trackingId);
        ReactGA.event({
            category: 'User',
            action: 'Help Button',
        });
    }

    return (
        <div align="center">
            <div id="NDSU_logo" style={{margin: 20}}>
                <img src={logo} />
            </div>
            <div class="col-xs-1">
                <div class="card">
                    <div id="login" class="card-body">
                        <form>
                            <h4 align="left">Campus Connection Log In</h4>
                            <p align="left">NDUS Campus Connection requires authentication using your NDUS identifier.</p>
                            <h6 align="left">User ID</h6>
                            <input placeholder="User ID" />
                            <h6 align="left">Password</h6>
                            <input placeholder="password" type="password" />
                            <p>I agree to the terms of the 
                                <a href="#" onClick={redirect}>
                                     User Agreement
                                </a>
                            </p>
                            <button type="button" class="btn btn-light" onClick={login}>Log In</button>
                            <h4 align="left">Trouble Logging In?</h4>
                            <p align="left">If you are experiencing any difficulties getting logged into the system, please use the links below.</p>
                            <button type="button" class="btn btn-info" onClick={redirect}>NDUS System Status</button>
                            <button type="button" class="btn btn-info" onClick={redirect}>User ID and Password Help</button>
                            <button type="button" class="btn btn-info" onClick={redirect}>Send email to Help Desk</button>
                            <button type="button" class="btn btn-info" onClick={redirect}>Guest Page</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr></hr>
            <Footer>
                <p class="my-footer">2020 North Dakota University System.</p>
            </Footer>
        </div>
    )
    
}

export default Login;
