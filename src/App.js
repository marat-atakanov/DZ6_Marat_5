import logo from './logo.svg';
import './App.css';
import Calculator from "./components/Calculator";
import UsersPage from "./pages/UsersPage";

function App() {
    return (
        <div className="App">
            <UsersPage/>
            ====================================================
            <Calculator/>
        </div>
    );
}

export default App;
