
export default interface IButton {
    id: string;
    text: string;

    variant?: 'light' | 'primary' | 'secondary' | 'danger';
    iconName?: 'arrow' | 'garbage' | 'pencil';
    hasIcon?:string;
    
    hasBackgroundColor?: true;
    textIsUppercase?: boolean;
    onClick?: Function;
}