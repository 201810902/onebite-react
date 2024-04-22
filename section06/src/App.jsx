import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const onClickButton = (value) => {
    setCount(count + value);
  }

  const solution = (num_list) => {
    let even = [];
    let odd = [];
    let answer = 0;
    for (let i = 0; i < num_list.length; i++){
      (num_list[i] % 2 == 0) ? push.even(num_list[i]) : push.odd(num_list[i]);
    }
  }
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
