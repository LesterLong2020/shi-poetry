/**
 * Created by Lester on 2020/12/19
 */

import React from "react";
// import { copy } from "lester-tools";
import { HashRouter, Route, BrowserRouter } from "src/components/Router";
import { routes, RouteProps } from "src/pages/route";
import './App.css';

const name: string = 'Lester Long';

function App() {

    return (
        <div className="wrap">
            <div className="title">夕宿君兮 {name}</div>
            <div className="name">荆棘丛中 非鸾凤所栖之所</div>
            <img className="img" src={require("src/assets/images/avatar.png")} alt=""/>
            <BrowserRouter>
              {
                routes.map((route: RouteProps) => <Route key={route.path} {...route} />)
              }
            </BrowserRouter>
        </div>
    )
}

export default App;
