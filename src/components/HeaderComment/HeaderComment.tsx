import './style.scss';
import Button from '../Button/Button';
import ModalDeleteComment from 'components/ModalDeleteComment';

import UserInfo from "../UserInfo/UserInfo";
import IHeaderComment from "../../interfaces/IHeaderComment";
import { useState } from 'react';

export default function HeaderComment (props: IHeaderComment) {    
    const [show, setShow] = useState(false);

    const handleClose = (): void => setShow(false);
    const handleShow = (): void => setShow(true);

    
    return (
        <div className="d-flex justify-content-between header-comment" >

            <div className=" d-flex justify-content-between align-items-baseline header-comment__userInfo-date">
                <UserInfo 
                    username={ props.username } 
                    picture={ props.picture } 
                    altText="" 
                    isTheAuthor={ props.isTheAuthor }
                />
                <span className="text-secondary header-comment__createdAt">{ props.createdAt }</span> 
            </div>

            <div className='d-flex d-flex align-items-center'>
                {props.isTheAuthor ?
                    <>
                        <Button
                            id={`edit-button-header-comment--${props.id}`}
                            text="Edit"
                            variant='primary'
                            hasIcon= "true"
                            iconName='pencil' 
                            onClick={() => alert('edit button')}             
                        />
                        <ModalDeleteComment 
                            handleClose={handleClose}
                            show={show}
                            deleteCommentInfos={props.deleteCommentInfos}
                        />
                        <Button
                            id={`delete-button-header-comment--${props.id}`}
                            text="Delete"
                            variant='danger'
                            hasIcon= "true"  
                            iconName='garbage'
                            onClick={() => handleShow()}            
                        />        
                    </>
                    :
                    <Button 
                        id={`reply-button-header-comment--${props.id}`}
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