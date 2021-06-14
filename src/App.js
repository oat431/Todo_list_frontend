import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoList from './View/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={TodoList} />
          <Route path='/todolist' component={TodoList} />
      </Switch>
    </Router>
  );
}

export default App;
