const { useState } = require("react");

function Random() {
  const [data, setData] = useState(null);

  let dataMarkup = "There is no data";
  if (data !== null) {
    dataMarkup = data.meals.map(function (m) {
      return (
        <div>
          <h2>{m.strMeal}</h2>
          <img src={m.strMealThumb} crossOrigin="true" style={{ size: "10px 10px 10px" }}/>
          <h3>Area: </h3>
          <p>{m.strArea}</p>
          <h3>Instructions: </h3>
          <p>{m.strInstructions}</p>
        </div>
      );
    });
  }

    function onClickButton(){
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
}

  return (
    <center>
      <div style={{ paddingTop: "10px" }}>
      <p>Your random meal is {dataMarkup}</p>
      <button onClick={onClickButton}>GET MEAL</button>
       
        {/* <div>{dataMarkup}</div> */}
      </div>
    </center>
  );
}

module.exports = Random;