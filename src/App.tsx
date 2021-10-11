import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import useContextProvider, {
  Context,
} from "./hooks/context/useContextProvider";
import Home from "./views/home/Home";
import Profile from "./views/profile/Profile";

const App = () => {
  const contextProvider = useContextProvider();
  return (
    <BrowserRouter>
      <Context.Provider value={contextProvider}>
        <Layout>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </Context.Provider>
    </BrowserRouter>
  );
};

export default App;
