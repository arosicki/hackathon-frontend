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
          <Route path="/hackathon-frontend/leaderboard" component={Leaderboard} />
          <Route path="/hackathon-frontend/login" component={Register} />
          <Route path="/hackathon-frontend/register" component={LogIn} />

          <Route path="/hackathon-frontend" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
