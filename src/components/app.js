const { BrowserRouter, Switch, Route } = require("react-router-dom");
const Nav = require("./nav");
const RecipeList = require("./recipeList");
const Home = require("./home");
const Random = require("./random");

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
            <Route path="/recipeList">
                <Random />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

module.exports = App;