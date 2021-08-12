import './App.css';
import Header from "./components/Header/Header";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <div className="container appWrapper">
                <NavigationBar/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
