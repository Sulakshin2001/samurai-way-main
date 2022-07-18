import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className='header'><img src='https://i.ebayimg.com/images/g/KgcAAOSwk1JWcFLn/s-l400.jpg'/></header>
            <nav className='nav'>
                <div><a>Profile</a></div>
                <div><a>Messages</a></div>
                <div><a>News</a></div>
                <div><a>Music</a></div>

            </nav>
            <div className='content'>
                <div className='main'>
                <img src='https://avatars.mds.yandex.net/i?id=10d5e358861b219ac08bc8dcc49583a5-5711615-images-thumbs&n=13'/>
                </div>
                <div className='avatar'>
                <img src='https://media.moddb.com/images/groups/1/35/34161/1551511862_48.jpg'/>
                </div>
            </div>
            <div>Myposts</div>
            <div>New Post</div>
        </div>
    );
}

export default App;
