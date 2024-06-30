import { DeleteTodoModalPresenter } from "./DeleteTodoModalPresenter";

interface DeleteTodoModalProps {
  isOpen: boolean;
  index: number;
  onClick: (id: number) => void;
  onClickClose: () => void;
}

export const DeleteTodoModal = ({
  isOpen,
  index,
  onClick,
  onClickClose,
}: DeleteTodoModalProps) => {
  return (
    <DeleteTodoModalPresenter
      isOpen={isOpen}
      index={index}
      onClick={onClick}
      onClickClose={onClickClose}
    />
  );
};
