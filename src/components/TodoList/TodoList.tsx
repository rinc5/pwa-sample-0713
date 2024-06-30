import { LOCAL_STORAGE_NAME } from "../../CONST";
import { Dispatch, SetStateAction, useState } from "react";
import { TodoItem, TodoListPresenter } from "./TodoListPresenter";

interface TodoListProps {
  todoList: TodoItem[];
  setTodoList: Dispatch<SetStateAction<TodoItem[]>>;
}

export function TodoList({ todoList, setTodoList }: TodoListProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [todoIndex, setTodoIndex] = useState<number>(NaN);
  /**
   * Todo削除
   */
  const deleteItem = (id: number): void => {
    const deletedTodoList: TodoItem[] = todoList.filter(
      (_, index) => index !== id
    );
    const stringify: string = JSON.stringify(deletedTodoList);
    localStorage.setItem(LOCAL_STORAGE_NAME, stringify);

    setTodoList(deletedTodoList);

    setIsOpen(false);
  };

  /**
   * モーダル開く
   */
  const openModal = (index: number): void => {
    setIsOpen(true);
    setTodoIndex(index);
  };

  /**
   * モーダル閉じる
   */
  const closeModal = (): void => {
    setIsOpen(false);
  };

  return (
    <TodoListPresenter
      todoList={todoList}
      deleteItem={deleteItem}
      isOpen={isOpen}
      openModal={openModal}
      todoIndex={todoIndex}
      closeModal={closeModal}
    />
  );
}
