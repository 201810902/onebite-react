const Button = ({ text, color }) => {
  const onClickButton = (e) => {
    console.log(e);
    console.log(text,"버튼을 클릭했습니다");
    // console.log(text);
  };

  return (
    <button onClick={onClickButton} style={{ color: color }}>
      {/* 콜백함수처럼 함수의 이름만 전달하면 된다 */}
      {text} - {color.toUpperCase()}
    </button>
  );
};

Button.defaultProps = {
  color: "black",
};
export default Button;
