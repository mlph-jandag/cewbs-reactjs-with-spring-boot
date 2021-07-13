import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import CreatePost from "./pages/posts/CreatePost";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create-post">
          <CreatePost />
        </Route>
        <Redirect to="/"/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
