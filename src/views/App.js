import logo from './logo.svg';
import './App.scss';
import ListTodo from './ListTodo/ListTodo';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Todo Apps with React.Js
        </p>
        {/* <MyComponent /> */}
        <ListTodo />
        <ToastContainer />
      </header>
    </div>
  );
}

export default App;
