import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalStyle } from "./styles";
import "material-icons/iconfont/material-icons.css";
import { Navbar } from "./common";
import { Leaderboard, LogIn, Home, Register } from "./routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        <Switch>
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/login" component={Register} />
          <Route path="/register" component={LogIn} />

          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
