import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMemo } from "../store";

const TodoContainer = () => {
  const [title, setTitle] = useState("");
  const [memo, setMemo] = useState("");
  const dispatch = useDispatch();

  const subMemo = (e) => {
    e.preventDefault();
    dispatch(addMemo({ title: title, memo: memo }));
    setTitle("");
    setMemo("");
  };

  const titletext = (e) => {
    setTitle(e.target.value);
  };

  const memotext = (e) => {
    setMemo(e.target.value);
  };

  return (
    <>
      <h1>메모하는 공간입니다</h1>
      <form onSubmit={subMemo}>
        <input type="text" onChange={titletext} value={title} style={{width: "220px"}} />
        <br></br>
        <textarea
          cols="30"
          rows="10"
          onChange={memotext}
          value={memo}
        ></textarea>
        <br></br>
        <input type="submit" value="입력" />
      </form>
      <hr></hr>
    </>
  );
};

export default TodoContainer;
