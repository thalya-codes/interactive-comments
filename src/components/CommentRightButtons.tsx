import { ICommentRightButtons } from '@/interfaces/ICommentRightButtons';
import { Button } from './Button';
import { ReplyIcon } from './Icons/ReplyIcon';
import { DeleteIcon } from './Icons/DeleteIcon';
import { EditIcon } from './Icons/EditIcon';

export function CommentRightButtons({
  className,
  isAuthor,
  onShowModal,
  handleEditingMode,
  handleReplyingMode,
}: ICommentRightButtons) {
  const buttonWithIconClass = 'flex gap-2 items-center';

  return isAuthor ? (
    <div className={`flex gap-5  ${className}`}>
      <Button
        variants='soft-red'
        className={buttonWithIconClass}
        onClick={onShowModal}
      >
        <DeleteIcon />
        <span>Delete</span>
      </Button>

      <Button
        variants='moderate-blue'
        className={`${className} ${buttonWithIconClass}`}
        onClick={handleEditingMode}
      >
        <EditIcon />
        <span>Edit</span>
      </Button>
    </div>
  ) : (
    <Button
      variants='moderate-blue'
      className={`${className} ${buttonWithIconClass}`}
      onClick={handleReplyingMode}
    >
      <ReplyIcon />
      <span>Reply</span>
    </Button>
  );
}
