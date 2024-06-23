import { FieldValues, useForm } from "react-hook-form";
import { RegisterTodoPresenter } from "./RegisterTodoPresenter";
import { LOCAL_STORAGE_NAME } from "../../CONST";

export const RegisterTodo = () => {
  const { register, handleSubmit, reset } = useForm();

  const onClickSubmit = (data: FieldValues): void => {
    console.log("data", data);

    // LocalStorageへのデータ追加
    const stringifyData: string = JSON.stringify(data);
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
