import React from "react";
import { Input } from '@mui/material';
import Avatar from '@mui/material/Avatar';
//Logo https://github.com/allanwalker23/exemplo/assets/45522944/65db79c9-8303-472e-8b52-2fd6b40ef7ff
const Login:React.FC = () => {
    return(
        <div className="container">
            <div className="card">
                <div className="card__logo"></div>
                <div className="card__input">
                    <label >Login:</label>
                    <div className="card__input__login">

                    </div>
                    <label >Senha:</label>
                    <div className="card__input__senha">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login