import { Modal } from "../../molecules/Modal/Modal";

interface DeleteTodoModalPresenterProps {
  isOpen: boolean;
  index: number;
  onClick: (id: number) => void;
  onClickClose: () => void;
}

export const DeleteTodoModalPresenter = ({
  isOpen,
  index,
  onClick,
  onClickClose,
}: DeleteTodoModalPresenterProps) => {
  return (
    <Modal isOpen={isOpen}>
      <>
        <h1 className="font-bold text-xl text-center w-full">
          Todoを削除しますか？
        </h1>
        <div className="flex justify-center gap-2">
          <button
            onClick={onClickClose}
            className="border border-black rounded-md px-4 py-1"
          >
            キャンセル
          </button>
          <button
            className="border border-red-500 bg-red-500 rounded-md text-white px-4 py-1"
            onClick={() => onClick(index)}
          >
            削除する
          </button>
        </div>
      </>
    </Modal>
  );
};
