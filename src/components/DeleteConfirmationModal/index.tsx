import { useDispatch } from 'react-redux';
import { Button } from '../Button';
import { deleteComment } from '@/store/slice';
import { IDeleteConfirmationModal } from '@/interfaces/IDeleteConfirmationModal';

export function DeleteConfirmationModal({
  id,
  parentId,
  onHideModal,
}: IDeleteConfirmationModal) {
  const dispatch = useDispatch();

  const handleDeleteComment = (): void => {
    dispatch(deleteComment({ id, parentId }));
    onHideModal();
  };

  return (
    <div className='fixed h-screen w-screen flex justify-center items-center bg-neutral-dark-blue-opacity-04 top-0 left-0'>
      <div className='flex flex-col gap-3 w-96 xs:w-[310px] bg-white p-4 rounded-md relative z-20'>
        <h2 className='font-bold text-lg text-neutral-dark-blue'>
          Delete comment
        </h2>

        <p className='font-light text-[16px] text-neutral-grayish-blue'>
          Are you sure you want to delete this comment? This
          will remove the comment and can't be undone.
        </p>

        <div className='flex justify-between xs:flex-col xs:gap-4'>
          <Button
            variants='filled-grayish-blue'
            onClick={onHideModal}
          >
            No, cancel
          </Button>

          <Button
            variants='filled-soft-red'
            className='xs:h-11'
            onClick={handleDeleteComment}
          >
            Yes, delete
          </Button>
        </div>
      </div>
    </div>
  );
}
