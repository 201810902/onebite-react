import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import { useState, useEffect, useRef } from "react";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const isMount = useRef(false);

  //1. 마운트(mount) : 탄생
  useEffect(() => {
    console.log("mount");
  }, []);

  //2. 업데이트(Update) : 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update");
  });

  //3. 언마운트(Unmount) : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  const solution = (num_list) => {
    let even = [];
    let odd = [];
    let answer = 0;
    for (let i = 0; i < num_list.length; i++) {
      num_list[i] % 2 == 0 ? push.even(num_list[i]) : push.odd(num_list[i]);
    }
  };
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
