import './App.css';
import Header from "./components/Header/Header";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Friends from "./components/Friends/Friends";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="appWrapper">
                    <NavigationBar/>
                    <div className="content">
                        <Route path="/profile" component={Profile}/>
                        <Route path="/dialogs" component={Dialogs}/>
                        <Route path="/news" component={News}/>
                        <Route path="/friends" component={Friends}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
