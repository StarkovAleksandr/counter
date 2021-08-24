import React, {useState} from 'react'

import plusLogo from "../assets/icons/plus.png";
import minusLogo from "../assets/icons/minus.png";
import resetLogo from "../assets/icons/reset.png";

const Counter = () => (
    <div className="wrapper">
        <div className="count">0</div>
        <div className="wrapper__btn">
            <button className="inc btn">
                <img src={plusLogo} alt="plus"/>
            </button>
            <button className="dec btn">
                <img src={minusLogo} alt="minus"/>
            </button>
            <button className="reset btn">
                <img src={resetLogo} alt="reset"/>
            </button>
        </div>
    </div>
)

export default Counter;