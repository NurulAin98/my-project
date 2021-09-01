// const { useState } = require("react");

// function RecipeList() {
//   const [title, setTitle] = useState("");
//   const [data, setData] = useState(null);

//   if (data !== null) {
//     dataMarkup = data.meals.map(function (m) {
//       return <div>A MOVIE</div>;
//     });
//   }

//   function updateTitle(event) {
//     setTitle(event.target.value);
//   }
//   function search(event) {
//     event.preventDefault();
//     console.log(title);
//     let url = `https://www.themealdb.com/`;
//     let queryString = `/api/json/v1/1/search.php?s=${title}`;

//     let httpOptions = {
//       method: "GET",
//     };

//     function waitForData(response) {
//       return response.json();
//     }

//     function processData(data) {
//       // data.meals.forEach(function (meal) {
//       //   let title = meal.strMeal;
//       //   let category = meal.strCategory;
//       //   let area = meal.strArea;
//       //   let instructions = meal.strInstructions;
//       //   let image = meal.strMealThumb;
//       //   //let image = meal.strMealThumb;
//       //   let div = document.querySelector("div");
//       //   div.innerHTML = `
//       //       <center>
//       //       <img src="${image}" />
//       //       <h2>Recipe's Name: ${title}</h2>
//       //       <h3>Category: ${category}</h3>
//       //       <h3>Area: ${area}</h3>
//       //       <h3>Instructions: </h3> 
//       //       <p>${instructions}</p>
//       //       </center>`;
//       // });
//       // console.log(data);
//       setData(data);
//     }

//     fetch(url + queryString, httpOptions)
//       .then(waitForData)
//       .then(processData);
//   }

//   return (
//     <center>
//     <div>
//       <form onSubmit={search}>
//         <input
//           type="text"
//           placeholder="Recipe Title"
//           value={title}
//           onChange={updateTitle}
//         />
//         <input type="submit" value="Search" />
//       </form>
//       <p>{dataMarkup}</p>
//     </div>
//     </center>
//   );
// }

// module.exports = RecipeList;


import { useState } from "react";

export default function RecipeList() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState(null);

  let dataMarkup = "There is no data";
  if (data !== null) {
    dataMarkup = data.meals.map(function (m) {
      return <div>A MOVIE</div>;
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
      setData(data);
    }

    fetch(url + queryString, httpOptions)
      .then(waitForData)
      .then(processData);
  }

  return (
    <center>
      <div style={{ paddingTop: "100px" }}>
        <form onSubmit={search}>
          <input
            type="text"
            placeholder="Recipe Title"
            value={title}
            onChange={updateTitle}
          />
          <input type="submit" value="Search" />
        </form>
        <p>{dataMarkup}</p>
      </div>
    </center>
  );
}
