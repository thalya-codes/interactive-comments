import './style.scss';

import IButton from "../../interfaces/IButton";

import ArrowIcon from'../../images/icon-reply.svg' ;
import PencilIcon from'../../images/icon-edit.svg' ;
import GarbageIcon from'../../images/icon-delete.svg' ;

export default function Button({ 
	id, text, hasIcon, 
	hasBackgroundColor , 
	textIsUppercase, onClick, variant, iconName
}: IButton) {
 
    function selectButtonIcon(): string {
			if (iconName === 'arrow')
					return ArrowIcon;
			if (iconName === 'pencil')
					return PencilIcon;
			return GarbageIcon;
    }
		
    return (
			<button 
				id={ id } 
				className= {`
						button--${variant || 'light'}
						btn fw-bolder d-flex align-items-center justify-content-center  button 
						${ hasIcon ? 'button--with-icon' : '' }
						${hasBackgroundColor ? 'button--with-background' :  ''}
						${ textIsUppercase ? 'text-uppercase' : '' }
				`}
				onClick={() => onClick?.()}
			>
				{ iconName && <img className='me-2' src={ selectButtonIcon() } alt=''/> }

				{ text }			
			</button>       
    )
}