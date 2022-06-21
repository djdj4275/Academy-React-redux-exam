import { useSelector } from "react-redux";
import TodoBox from "./TodoBox";

const TodoBoard = () => {
  const memoList = useSelector((state) => state.memo.memoList);

  return (
    <>
      {memoList.map((list) => (
        <TodoBox
          id={list.id}
          title={list.title}
          memo={list.memo}
          key={list.id}
        ></TodoBox>
      ))}
    </>
  );
};

export default TodoBoard;
