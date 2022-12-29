import './style.scss';
import Button from '../Button/Button';

import UserInfo from "../UserInfo/UserInfo";
import IHeaderComment from "../../interfaces/IHeaderComment";

export default function HeaderComment (props: IHeaderComment) {    ;
    
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
                            typeAction='edit'
                            hasIcon= "true" 
                            onClickCustomFunc={() => alert('edit button')}             
                        />
                        <Button
                            id={`delete-button-header-comment--${props.id}`}
                            text="Delete"
                            typeAction='delete'
                            hasIcon= "true"  
                            onClickCustomFunc={() => {
                                const { id, isReply, deleteCommentFunc  } = props.deleteCommentInfos
                                deleteCommentFunc(id, isReply);
                            }}            
                        />
                    </>
                    :
                    <Button 
                        id={`reply-button-header-comment--${props.id}`}
                        text="Reply"
                        typeAction='reply'
                        hasIcon='true'
                        onClickCustomFunc={() => alert('reply button')}      
                    />
                    
                }
            </div>  
        </div>
    )
}