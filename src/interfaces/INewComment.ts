import IAvatar from "./IAvatar";

export default interface INewComment extends IAvatar{
    buttonText: string;
    isReplyComment?: boolean;
    usernameToReply?: string;
    placeholderText?: string;
}