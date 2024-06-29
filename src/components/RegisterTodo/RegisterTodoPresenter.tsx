import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { RegisterTodoInputType } from "./RegisterTodo.schema";

interface RegisterTodoPresenterProps {
  register: UseFormRegister<RegisterTodoInputType>;
  handleSubmit: UseFormHandleSubmit<RegisterTodoInputType>;
  onClick: (data: RegisterTodoInputType) => void;
  errors: FieldErrors;
  isDirty: boolean;
}

export function RegisterTodoPresenter({
  register,
  handleSubmit,
  onClick,
  // errors,
  isDirty,
}: RegisterTodoPresenterProps) {
  const disabledSubmitButton = (): boolean => {
    if (isDirty) {
      return false;
    }
    // if (Object.keys(errors).length >= 1) {
    //   console.log("errors", errors);
    //   return true;
    // }

    return true;
  };

  return (
    <div>
      <h2>Todo登録</h2>
      <form onSubmit={handleSubmit(onClick)}>
        <label htmlFor="title">TODO:</label>
        <input id="title" {...register("title")} />
        <button type="submit" disabled={disabledSubmitButton()}>
          登録
        </button>
      </form>
    </div>
  );
}
