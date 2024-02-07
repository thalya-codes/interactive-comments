import { ICommentRightButtons } from "@/interfaces/ICommentRightButtons";
import { Button } from "./Button";

export function CommentRightButtons({
  className,
  isAuthor,
  onShowModal,
  handleEditingMode,
  handleReplyingMode
}: ICommentRightButtons) {
  return isAuthor ? (
    <div className={`flex gap-2  ${className}`}>
      <Button variants='soft-red' onClick={onShowModal}>
        Delete
      </Button>

      <Button
        variants='moderate-blue'
        onClick={handleEditingMode}
        className={className}
      >
        Edit
      </Button>
    </div>
  ) : (
    <Button
      variants='moderate-blue'
      className={className}
      onClick={handleReplyingMode}
    >
      Reply
    </Button>
  );
}
