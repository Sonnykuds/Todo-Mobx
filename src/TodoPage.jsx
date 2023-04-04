import InputTodo from "./InputTodo";
import DoneTasks from "./FinishedTodos";
import { observer } from "mobx-react";
import { useContext } from "react";
import { Context } from "./context";
import LineGraphDisplay from "./LineGraphDisplay";
const TodoPage = () => {
  const { todo, doneTasksArray } = useContext(Context);
  return (
    <div className="flex flex-col bg-slate-500 items-center justify-center min-h-screen">
      {(todo.length > 0 || doneTasksArray.length > 0) && (
        <div className=" flex items-center justify-center w-1/3 bg-white mb-5">
          <LineGraphDisplay />
        </div>
      )}
      <div className=" flex flex-row w-full items-center justify-center">
        <div className=" flex w-1/2 px-10 items-center justify-center">
          <InputTodo />
        </div>
        {doneTasksArray.length > 0 && (
          <div className=" flex w-1/2 px-10 items-center justify-center">
            <DoneTasks />
          </div>
        )}
      </div>
    </div>
  );
};

export default observer(TodoPage);
