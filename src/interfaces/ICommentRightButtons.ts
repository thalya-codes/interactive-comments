export interface ICommentRightButtons {
    className: string;
    isAuthor: boolean;
    onShowModal: () => void;
    handleEditingMode: () => void;
    handleReplyingMode: () => void;
}