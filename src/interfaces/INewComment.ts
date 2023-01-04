import IAvatar from "./IAvatar";

export default interface INewComment extends IAvatar{
    id: string;
    placeholderText?: string;    
    btnVariant: 'send';
    btnText: string;
    addNewComment: Function;
}