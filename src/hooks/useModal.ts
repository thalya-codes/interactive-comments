import { useState } from 'react';

export function useModal() {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = (): void => {
    setShowModal(true);
   document.body.classList.add('overflow-hidden');
  };

  const onHideModal = (): void => {
    setShowModal(false);
   document.body.classList.remove('overflow-hidden');
  };

  return {
    showModal,
    onShowModal,
    onHideModal,
  };
}
