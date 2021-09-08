const { BrowserRouter, Switch, Route } = require("react-router-dom");
const Nav = require("./nav");
const RecipeList = require("./recipeList");
const Random = require("./random");
const Home = require("./home");

function App() {
    let pageTitle = "Mealpedia";
    let subtitle = "Good Food, Good Mood!";
    return(
        <BrowserRouter>
        <Nav title={pageTitle} subtitle={subtitle}/>
        <Switch>
            <Route exact={true} path="/">
                <Home />
            </Route>
            <Route path="/recipeList">
                <RecipeList />
            </Route>
            <Route path="/random">
                <Random />
            </Route>
        </Switch>
        </BrowserRouter>
    );
}

module.exports = App;