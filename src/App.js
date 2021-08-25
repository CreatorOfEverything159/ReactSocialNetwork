import './App.css';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="appWrapper">
                    <NavigationBar/>
                    <div className="content">

                        <Route path="/profile"
                               render={() => <Profile
                                   store={props.store}
                               />}
                        />

                        <Route path="/dialogs"
                               render={() => <Dialogs
                                   // store={props.store}
                                   dialogsPage={props.store.getState().dialogsPage}
                                   dispatch={props.store.dispatch}
                                   sendMessage={props.sendMessage}
                                   updateNewMessageText={props.updateNewMessageText}
                               />}
                        />

                        <Route path="/news"
                               render={News}/>

                        <Route path="/friends"
                               render={Friends}/>

                        <Route path="/music"
                               render={Music}/>

                        <Route path="/settings"
                               render={Settings}/>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
