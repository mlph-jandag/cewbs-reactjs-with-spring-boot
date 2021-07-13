import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import AuthProvider from "./contexts/AuthContext";
import AuthenticatedRoute from "./routes/AuthenticatedRoute";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <AuthenticatedRoute exact path="/" component={Dashboard}/>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/login"/>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
