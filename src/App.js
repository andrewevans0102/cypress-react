import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import FormsPage from "./components/FormsPage";
import ListsPage from "./components/ListsPage";
import NetworkRequestsPage from "./components/NetworkRequestsPage";
import ContentPage from "./components/ContentPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/content">
          <ContentPage />
        </Route>
        <Route path="/network-requests">
          <NetworkRequestsPage />
        </Route>
        <Route path="/lists">
          <ListsPage />
        </Route>
        <Route path="/forms">
          <FormsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
