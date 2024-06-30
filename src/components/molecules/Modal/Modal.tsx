import { ModalPresenter } from "./ModalPresenter";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, children }: ModalProps) => {
  return <ModalPresenter isOpen={isOpen} children={children} />;
};
