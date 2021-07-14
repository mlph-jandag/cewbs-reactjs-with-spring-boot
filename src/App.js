import "./App.css";
import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import AuthProvider from "./contexts/AuthContext";
import Error404 from "./components/Errors/Error404";
import AdminRoutes from "./routes/AdminRoutes";

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route path="/login" component={ Login } />

            <AdminRoutes />

            <Route path="/not-found" component={ Error404 }/>
            <Redirect to="/not-found"/>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App;
