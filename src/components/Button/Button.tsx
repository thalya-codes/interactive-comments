import './style.scss';

import IButton from "../../interfaces/IButton";

import IconReply from'../../images/icon-reply.svg' ;
import IconEdit from'../../images/icon-edit.svg' ;
import IconDelete from'../../images/icon-delete.svg' ;

export default function Button(props: IButton) {
    const { id, text, typeAction, hasIcon, hasBackgroundColor , textIsUppercase, onClickCustomFunc }:IButton = props; 
 
    const selectButtonBackround = (): string => {
        switch (hasBackgroundColor && typeAction) {
            case 'delete':
                return 'button-backgroundDanger'; 
            case 'cancel': 
                return 'button-backgroundCancel'
            default: 
                return 'button-backgroundDefault';            
        };
    };

    const selectButtonIcon = (): string => {
        switch (hasIcon && typeAction) {
            case 'reply': 
                return IconReply;
            case 'edit': 
                return IconEdit;
            case 'delete': 
                return IconDelete;

            default: 
                return '';
        };
    };

    return (
        <button 
            id={ id } 
            className= {`
                btn fw-bolder d-flex align-items-center button 
                ${ hasBackgroundColor ? 'button--withBackgroundColor' : '' }
                ${ hasIcon ? 'button--withIcon' : '' }
                ${ selectButtonBackround() }
                ${ textIsUppercase ? 'text-uppercase' : '' }
            `}
            onClick={() => onClickCustomFunc?.()}
        >

            { hasIcon && <img className='me-2' src={ selectButtonIcon() } alt=''/> }

            <span className={
                ( typeAction === 'reply' || typeAction === 'edit'  ?  'button__text-reply': 
                    ( typeAction === 'delete' ?  'button__text-delete': '' ) 
                )
            }>{ text }</span> 
        </button>       
    )
}