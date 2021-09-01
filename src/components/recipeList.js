const { useState } = require("react");

function RecipeList() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  let dataMarkup = "There is no data";
  if (data !== null) {
    dataMarkup = data.meals.map(function (m) {
      return (
        <div>
          <h2>{m.strMeal}</h2>
          <img src={m.strMealThumb} crossOrigin="true" />
          <h3>Area: </h3>
          <p>{m.strArea}</p>
          <h3>Instructions: </h3>
          <p>{m.strInstructions}</p>
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