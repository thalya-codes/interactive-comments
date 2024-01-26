import { RefObject, useState } from 'react';

export function useModal(
  listRef: RefObject<HTMLUListElement>
) {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = (): void => {
    setShowModal(true);
    listRef.current?.classList.add('overflow-hidden');
  };

  const onHideModal = (): void => {
    setShowModal(false);
    listRef.current?.classList.remove('overflow-hidden');
  };

  return {
    showModal,
    onShowModal,
    onHideModal,
  };
}
