import { Layout} from 'antd';
import React from 'react';
import { useHistory } from 'react-router-dom';

import '../index.css';

const { Footer } = Layout;

function Login() {

    let history = useHistory();

    const redirect = () => {
        history.push('/phishing/')
    }

    return (
        <div>
            <div class="col-xs-1" align="center" style={{margin: 340}}>
                <div class="card" style={{width: 240}}>
                    <div id="login" class="card-body">
                        <form>
                            <h5>Campus Connection Log In</h5>
                            <input placeholder="email" type="email" />
                            <input placeholder="password" type="password" />
                            <button onClick={redirect}>Login</button>
                            <div>
                                <a href="#" onClick={redirect}>Forgot Password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer style={{ textAlign: 'center' }}>
                North Dakota University System. 2020.
            </Footer>
        </div>
    )
    
}

export default Login;
