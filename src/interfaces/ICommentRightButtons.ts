export interface ICommentRightButtons {
    className: string;
    isAuthor: boolean;
    onShowModal: () => void;
    toggleEditingMode: () => void;
    toggleReplyingMode: () => void;
}