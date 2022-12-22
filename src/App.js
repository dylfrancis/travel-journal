import "./App.css";
import { Header } from "./Components/Header";
import { Card } from "./Components/Card";
import data from "./data";

let cards = data.map((card) => {
  return <Card key={card.id} card={card} />;
});

function App() {
  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}

export default App;
