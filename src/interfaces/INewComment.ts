import IAvatar from "./IAvatar";

export default interface INewComment extends IAvatar{
    id: string;
    placeholderText?: string;    
    btnTypeAction: 'send' | 'reply';
    btnText: string;
    addNewComment: Function;
}