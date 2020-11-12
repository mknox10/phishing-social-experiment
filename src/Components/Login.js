import React from 'react';
import { useHistory } from 'react-router-dom';

function Login() {

    let history = useHistory();

    const redirect = () => {
        history.push('/phishing/')
    }

    return (
        <div>
            <form>
                <input placeholder="email" type="email" />
                <input placeholder="password" type="password" />
                <button onClick={redirect}>Login</button>
            </form>
        </div>
    )
    
}

export default Login;
