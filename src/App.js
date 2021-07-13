import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import AuthProvider from "./contexts/AuthContext";
import AuthenticatedRoute from "./routes/AuthenticatedRoute";
import Error404 from "./components/Errors/Error404";
import Category from "./pages/category/Category";
import UserList from "./pages/users/UserList";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <AuthenticatedRoute exact path="/" component={Dashboard}/>
          <AuthenticatedRoute path="/categories" component={Category} />
          <AuthenticatedRoute path="/users" component={UserList} />

          <Route path="/login" component={ Login } />
          <Route path="/not-found" component={ Error404 }/>
          <Redirect to="/not-found"/>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
