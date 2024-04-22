import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e) => {//엔터키로 등록할 수 있게 설정
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  const onSubmit = () => {
    if (content === "") {
      contentRef.current.focus(); //빈내용으로 추가버튼 누를시 입력란에 효과
      return;
    }
    onCreate(content);
    setContent("");//입력내용 추가 후 입력란 비우기
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeydown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />

      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
