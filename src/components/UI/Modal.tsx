import { forwardRef, useImperativeHandle, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(function Modal(
  { children, onConfirm, onCancel },
  ref
) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
    close() {
      if (dialog.current) {
        dialog.current.close();
      }
    },
  }));

  return createPortal(
    <dialog ref={dialog} className='modal-wrapper'>
      {children}
      <form method='dialog' className='modal-action'>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>OK</button>
      </form>
    </dialog>,
    document.getElementById('modal-root') as HTMLElement
  );
});

export default Modal;
