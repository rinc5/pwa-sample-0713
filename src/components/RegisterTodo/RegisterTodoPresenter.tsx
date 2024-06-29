import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface RegisterTodoPresenterProps {
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClick: (data: FieldValues) => void;
}

export function RegisterTodoPresenter({
  register,
  handleSubmit,
  onClick,
}: RegisterTodoPresenterProps) {
  return (
    <div>
      <h2>Todo登録</h2>
      <form onSubmit={handleSubmit(onClick)}>
        <label htmlFor="todo">TODO:</label>
        <input id="todo" {...register("todo")} />
        <button type="submit">登録</button>
      </form>
    </div>
  );
}
