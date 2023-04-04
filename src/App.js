import "./App.css";
import cardData from "./data";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const cardElements = cardData.map((data) => {
    return <Card key={data.id} item={data} />;
  });
  return (
    <div className="App">
      <Header />
      <div className="cards">{cardElements}</div>
    </div>
  );
}

export default App;
