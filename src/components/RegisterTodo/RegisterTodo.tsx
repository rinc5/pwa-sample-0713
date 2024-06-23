import { FieldValues, useForm } from "react-hook-form";
import { RegisterTodoPresenter } from "./RegisterTodoPresenter";
import { LOCAL_STORAGE_NAME } from "../../CONST";

export const RegisterTodo = () => {
  const { register, handleSubmit, reset } = useForm();
  const todos = localStorage.getItem(LOCAL_STORAGE_NAME);
  const parsedTodos = todos != null ? JSON.parse(todos) : [];

  const onClickSubmit = (data: FieldValues): void => {
    let todoData = [...parsedTodos, data];

    // LocalStorageへのデータ追加
    const stringifyData: string = JSON.stringify(todoData);
    localStorage.setItem(LOCAL_STORAGE_NAME, stringifyData);

    // フォーム入力クリア
    reset();
  };

  return (
    <RegisterTodoPresenter
      register={register}
      handleSubmit={handleSubmit}
      onClick={onClickSubmit}
    />
  );
};
