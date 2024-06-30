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
    <>
      {isOpen && (
        <div className="w-full h-full absolute left-0 top-0 bg-black bg-opacity-50 z-10">
          <div className="bg-white w-80 h-48 p-4 rounded-md flex flex-col gap-4 justify-center absolute z-20 top-0 left-0 right-0 bottom-0 m-auto">
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
          </div>
        </div>
      )}
    </>
  );
};
