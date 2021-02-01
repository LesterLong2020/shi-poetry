/**
 * Created by Lester on 2020/12/19
 */

import React from "react";
import Demo from "src/pages/Demo/Index";
import 'src/App.css';

const name: string = 'Lester Long';

function App() {

    return (
        <div className="wrap">
            <div className="title">夕宿君兮 {name}</div>
            <div className="name">荆棘丛中 非鸾凤所栖之所</div>
            <img className="img" src={require("src/assets/images/avatar.png")} alt=""/>
            <Demo />
        </div>
    )
}

export default App;
