import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { RegisterTodoInputType } from "./RegisterTodo.schema";

interface RegisterTodoPresenterProps {
  register: UseFormRegister<RegisterTodoInputType>;
  handleSubmit: UseFormHandleSubmit<RegisterTodoInputType>;
  onClick: (data: RegisterTodoInputType) => void;
  isDirty: boolean;
}

export function RegisterTodoPresenter({
  register,
  handleSubmit,
  onClick,
  isDirty,
}: RegisterTodoPresenterProps) {
  const disabledSubmitButton = (): boolean => {
    if (isDirty) {
      return false;
    }

    return true;
  };

  return (
    <div className="w-full md:w-1/2 mx-auto">
      <form
        onSubmit={handleSubmit(onClick)}
        className="flex flex-col items-center gap-4"
      >
        <div className="flex gap-x-2">
          <label htmlFor="title">Todo</label>
          <input
            id="title"
            {...register("title")}
            className="border border-black rounded-md"
            placeholder="Todoを入力"
          />
        </div>

        <div className="w-full text-center">
          <button
            type="submit"
            disabled={disabledSubmitButton()}
            className="border border-green-600 bg-green-600 text-white rounded-md w-full md:w-1/3 disabled:bg-slate-500 disabled:border-slate-500 disabled:text-opacity-30"
          >
            登録
          </button>
        </div>
      </form>
    </div>
  );
}
