import './App.css';
import { Route, Switch } from "react-router-dom";
import LoginForm from "./Component/Login/LoginForm"
import SignUpForm from './Component/Signup/SignUpForm'
function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={() => <SignUpForm />} />
        <Route exact path='/Login' component={() => <LoginForm />} />
      </Switch>
    </>
  );
}

export default App;
