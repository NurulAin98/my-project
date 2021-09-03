const { Link } = require("react-router-dom");

function Nav({ title }) {
    return(
        <header>
            <center><h1>{title}</h1></center>
            <center>
                <nav>
                <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/recipeList">Find Recipe</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/random">Random Recipe</Link>
               </nav>
            </center><br></br><br></br>
        </header>
    );
}

module.exports = Nav;