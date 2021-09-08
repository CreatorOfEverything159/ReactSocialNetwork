import './App.css'
import NavigationBar from "./components/NavigationBar/NavigationBar"
import ProfilePage from "./components/ProfilePage/ProfilePage"
import MessagesPage from "./components/MessagesPage/MessagesPage"
import {Route} from "react-router-dom"
import NewsPage from "./components/NewsPage/NewsPage"
import FriendsPage from "./components/FriendsPage/FriendsPage"
import MusicPage from "./components/MusicPage/MusicPage"
import SettingsPage from "./components/SettingsPage/SettingsPage"

const App = (props) => {
    return (
        <div className="App">
            <div className="appWrapper">
                <NavigationBar/>
                <div className="content">

                    <Route
                        path="/profile"
                        render={() => <ProfilePage />}
                    />

                    <Route
                        path="/dialogs"
                        render={() => <MessagesPage />}
                    />

                    <Route
                        path="/news"
                        render={NewsPage}
                    />

                    <Route
                        path="/friends"
                        render={() => <FriendsPage />}
                    />

                    <Route
                        path="/music"
                        render={MusicPage}
                    />

                    <Route
                        path="/settings"
                        render={SettingsPage}
                    />

                </div>
            </div>
        </div>
    )
}

export default App
