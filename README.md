# Overview
My final project for JavaScript Bootcamp organized by General Assembly is a web app called Mealpedia. This project aimed to help people to search the recipe for their chosen meal or they can get their random meal from it. This project was developed using React.js and using the API from https://themealdb.com/

# A Walkthrough Of The Code
## Installation
```bash
npm install --save-dev parcel
npm install --save react react-dom
npm install --save react-router-dom
```

## Code
### index.js
```bash
const React = require("react");
const { render } = require("react-dom");
const App = require("./components/app");

let target = document.querySelector("#app");

render(<App />, target);
```

### app.js
```bash
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
```

### recipeList.js
Search the recipe's name on the search bar and get the whole recipe
```bash
const { useState } = require("react");

function RecipeList() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  let dataMarkup = "There is no data";
  if (data !== null) {
    dataMarkup = data.meals.map(function (m) {
      return (
        <div style={{ paddingTop: "10px"}}>
          <h2>{m.strMeal.toUpperCase()}</h2>
          <img src={m.strMealThumb} crossOrigin="true" />
          <h3>Area: </h3>
          <p>{m.strArea}</p>
          <h3>Instructions: </h3>
          <p style={{ textAlign: "justify"}}>{m.strInstructions}</p>
        </div>
      );
    });
  }

  function updateTitle(event) {
    setTitle(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    let url = `https://www.themealdb.com/`;
    let queryString = `/api/json/v1/1/search.php?s=${title}`;
    let httpOptions = {
      method: "GET",
    };
    function waitForData(response) {
      return response.json();
    }
    function processData(data) {
      console.log(data);
      setData(data);
    }

    fetch(url + queryString, httpOptions)
      .then(waitForData)
      .then(processData);
  }

  return (
    <center>
      <div style={{ paddingTop: "10px" }}>
        <form onSubmit={search}>
          <input
            type="text"
            placeholder="Recipe Title"
            value={title}
            onChange={updateTitle}
          />
          <input type="submit" value="Search" />
        </form>
        <div>{dataMarkup}</div>
      </div>
    </center>
  );
}

module.exports = RecipeList;
```

### random.js
Get a random meal and the whole recipe of it
```bash
const { useState, useEffect } = require("react");

function Random() {
  const [data, setData] = useState(null);
  useEffect(function () {
    let url = `https://www.themealdb.com/`;
    let queryString = `/api/json/v1/1/random.php`;
    let httpOptions = {
      method: "GET",
    };
    function waitForData(response) {
      return response.json();
    }
    function processData(data) {
      console.log(data);
      setData(data);
    }

    fetch(url + queryString, httpOptions)
      .then(waitForData)
      .then(processData);
  }, []);

  let dataMarkup = "There is no data";
  if (data !== null) {
    dataMarkup = data.meals.map(function (m) {
      return (
        <div>
          <h2>{m.strMeal.toUpperCase()}</h2>
          <img
            src={m.strMealThumb}
            crossOrigin="true"
            style={{ size: "10px 10px 10px" }}
          />
          <h3>Area: </h3>
          <p>{m.strArea}</p>
          <h3>Instructions: </h3>
          <p style={{ textAlign: "justify" }}>{m.strInstructions}</p>
        </div>
      );
    });
  }

  return (
    <center>
      <div style={{ paddingTop: "10px" }}>
        <p>Your random meal is {dataMarkup}</p>
      </div>
    </center>
  );
}

module.exports = Random;
```
### nav.js
```bash
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
```
## Deploy
This project was deployed by using Vercel.com

# Technical Hurdle
At first, struggled with the API because the image data won't display on the browser. The solution is by putting ```crossOrigin="true" ``` in the code. Second, struggled to display a random meal and managed to fix it by using ```useEffect``` in the ```random.js```

# Lesson Learn
I really enjoyed learning more about JavaScript such as ```React.js``` and ```JSX```. I also enjoyed to discover a lot of API and one of the API that I used is https://themealdb.com/. It excites me when I can fetch it into my code. In the meantime, I also enjoyed creating more CSS into my project to make it look more interesting.

# Where Next?
In the future, I will add more features into this project such as adding the list of ingredients to the recipe. 

