
import './App.css';
import ReturnForm from './ReturnForm';
import { Route, BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <Router>
      <Route exact path="/ReturnForm" component={ReturnForm}/>
    </Router>
  );
}

export default App;
