import { BrowserRouter as Router, Route, Switch, useParams } from "react-router-dom";
import TodoList from './View/TodoList';
import TodoTask from './View/TodoTask';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={TodoList} />
          <Route path='/todolist' component={TodoList} />
          <Route path='/todotask/:id/:title' children={<TodoTask />}/>
      </Switch>
    </Router>
  );
}

export default App;
