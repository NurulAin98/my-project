const { Link } = require("react-router-dom");

function Nav({ title, subtitle }) {
    return(
        <header>
            <center>
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </center><br></br>
            <center>
                <nav>
                <Link to="/">
                    <button class="button1">
                        Home
                    </button>
                </Link>
                <Link to="/recipeList">
                    <button class="button2">
                        Find Recipe
                    </button>
                </Link>
                <Link to="/random">
                    <button class="button3">
                        Random Meal
                    </button>
                </Link>
               </nav>
            </center><br></br><br></br>
        </header>
    );
}

module.exports = Nav;