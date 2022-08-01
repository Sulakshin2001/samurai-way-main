import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

type AppProps = {
    store: {
        _state: RootType,
        getState: () => RootType,
        dispatch:(action:any)=>void
    }

}

type RootType = {
    postPage: PostPageType,
    namePage: namePageType,
    messagepage: messagepageType,
}
type PostPageType = {
    post: Array<obj2>
}
type namePageType = {
    name: Array<obj>
}
type obj = {
    id: string,
    name: string
}
type obj2 = {
    id: string,
    post: string
}
type messagepageType = {
    messages: Array<obj>
}

function App(props: AppProps) {

    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <NavBar/>
                <div className='content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs ArrayName={props.store._state.namePage.name} ArrayMessage={props.store._state.messagepage.messages}/>}/>
                    <Route path='/profile' render={() => <Profile dispatch={props.store.dispatch.bind(props.store)} PostName={props.store._state.postPage.post}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
