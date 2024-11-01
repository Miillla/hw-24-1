import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Card from "./components/Card";

function App() {
  const entities = {
    people: {
      nextUrl: "https://swapi.dev/api/people/",
      header: " Person",
      text: "Luke Skywalker",
    },
    planets: {
      nextUrl: "https://swapi.dev/api/planets/",
      header: "Planets",
      text: "Planets 1",
    },
    starships: {
      nextUrl: "https://swapi.dev/api/starships/",
      header: "Transport",
      text: "StarShip",
    },
  };

  return (
    <>
      <div className="container d-flex justify-content-center mt-2 gap-4">
        {Object.entries(entities).map(([key, value]) => (
          <div key={key}>
            <p>{key}</p>
            <button className="btn btn-primary">{value.header}</button>

            <Card header={value.header} text={value.text} />
            <button className="btn btn-primary">{value.nextUrl}</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
