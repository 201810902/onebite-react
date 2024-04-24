import { useReducer } from "react";

//reducer: 변환기 -> 상태를 실제로 변화시키는 변환기 역할
function reducer() {}
const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  const onClickPlus = () => {
    //인수: 상태가 어떻게 변화되길 원하는지

    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button>+</button>
    </div>
  );
};
export default Exam;
