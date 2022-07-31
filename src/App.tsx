import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
type AppProps={
    ArrayName:Array<obj>
    ArrayMessage:Array<obj>
}
type obj={
    id:string,
    name:string
}
function App(props:AppProps) {

    return (
        <BrowserRouter>
        <div className="App">
            <Header/>
            <NavBar/>
            <div className='content'>
                <Route path='/dialogs' render={()=><Dialogs ArrayName={props.ArrayName} ArrayMessage={props.ArrayMessage}/>}/>
                <Route path='/profile' component={Profile}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
