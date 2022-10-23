
export default interface IButton {
    id: string;
    text: string;
    typeAction: 'send' | 'update' | 'edit' | 'delete' | 'reply' | 'cancel';
    hasIcon?:string;
    hasBackgroundColor?: string;
    textIsUppercase?: string;
    onClickCustomFunc?: Function;
}