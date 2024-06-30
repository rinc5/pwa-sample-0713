import { Modal } from "../molecules/Modal/Modal";

interface DeleteAllModalPresenterProps {
  isOpen: boolean;
  onClick: () => void;
  onClickClose: () => void;
}

export const DeleteAllModalPresenter = ({
  isOpen,
  onClick,
  onClickClose,
}: DeleteAllModalPresenterProps) => {
  return (
    <Modal isOpen={isOpen}>
      <>
        <h1 className="font-bold text-xl text-center w-full">
          全て削除しますか？
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
            onClick={onClick}
          >
            削除する
          </button>
        </div>
      </>
    </Modal>
  );
};
