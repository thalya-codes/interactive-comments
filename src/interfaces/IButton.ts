
export default interface IButton {
    id: string;
    text: string;

    variant?: 'light' | 'primary' | 'secondary' | 'danger';
    iconName?: 'arrow' | 'garbage' | 'pencil';
    hasIcon?:string;
    
    hasBackgroundColor?: string;
    textIsUppercase?: string;
    onClick?: Function;
}