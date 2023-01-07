import './style.scss';
import { useState } from 'react';
import Button from '../Button';
import ModalDeleteComment from 'components/ModalDeleteComment';

import UserInfo from "../UserInfo";
import IProps from "../../interfaces/IHeaderComment";

export default function HeaderComment ({
    id, username, picture,
    altText, createdAt, isTheAuthor,
    deleteCommentInfos
}: IProps) {    
    const [show, setShow] = useState(false);

    const handleClose = (): void => setShow(false);
    const handleShow = (): void => setShow(true);
    
    return (
        <div className="header-comment d-flex justify-content-between" >

            <div className="header-comment__user-info d-flex justify-content-between align-items-baseline">
                <UserInfo 
                    username={username} 
                    picture={picture} 
                    altText={altText} 
                    isTheAuthor={isTheAuthor}
                />
                <span className="text-secondary">{createdAt}</span> 
            </div>

            <div className='d-flex d-flex align-items-center'>
                {isTheAuthor ?
                    <>
                        <Button
                            id={`header-comment__btn-edit--${id}`}
                            text="Edit"
                            variant='primary'
                            hasIcon= "true"
                            iconName='pencil' 
                            onClick={() => alert('edit button')}             
                        />
                        <ModalDeleteComment 
                            handleClose={handleClose}
                            show={show}
                            deleteCommentInfos={deleteCommentInfos}
                        />
                        <Button
                            id={`header-comment__btn-delete--${id}`}
                            text="Delete"
                            variant='danger'
                            hasIcon= "true"  
                            iconName='garbage'
                            onClick={() => handleShow()}            
                        />        
                    </>
                    :
                    <Button 
                        id={`header-comment__btn-reply--${id}`}
                        text="Reply"
                        variant='primary'
                        hasIcon='true'
                        iconName='arrow'
                        onClick={() => alert('reply button')}      
                    />
                    
                }
            </div>  
        </div>
    )
}