const { BrowserRouter, Switch, Route } = require("react-router-dom");
const Nav = require("./nav");
const RecipeList = require("./recipeList");
const Home = require("./home");

function App() {
    let pageTitle = "Welcome to Food Library!";
    return(
        <BrowserRouter>
        <Nav title={pageTitle} />
        <Switch>
            <Route exact={true} path="/">
                <Home />
            </Route>
            <Route path="/recipeList">
                <RecipeList />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

module.exports = App;