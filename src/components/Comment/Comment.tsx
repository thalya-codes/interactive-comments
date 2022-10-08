import './style.scss';

import UserInfo from "../UserInfo/UserInfo";
import { useState } from "react";

import iconReplay from "../../images/icon-reply.svg";
import iconDelete from "../../images/icon-delete.svg";
import iconeEdit from "../../images/icon-edit.svg";

export default function Comment(props: any)  {
    const [isAResponseComment, setisAResponseComment ] = useState<boolean>(false);
    const [isTheAuthorOfBlog, setIsTheAuthorOfBlog ] = useState<boolean>(false);

    return (
        <div className="d-flex comment__wrapper justify-content-between comment" key={`key-comment-${props.username}--${props.id}`}>        
            <div className="d-flex flex-column align-items-center fw-bold comment__score">
                <button className="comment__score-button fw-bold btn">+</button>
                <span className="comment__score-number">{ props.score }</span>
                <button className="comment__score-button fw-bold btn">-</button>
            </div>    

            <div className="d-flex  flex-column comment__wrapper-score-and-header" >
                <div className="d-flex justify-content-between align-items-baseline comment__header">
                    <div className=" d-flex justify-content-between align-items-baseline comment__header-userInfo-date">
                        <UserInfo 
                            username={props.username} 
                            picture={props.picture} 
                            altText="" 
                            isTheAuthorOfBlog={ isTheAuthorOfBlog }
                        />
                        <span className="text-secondary comment__date">{ props.createdAt }</span>   
                    </div>
                    
                    { isTheAuthorOfBlog ? 
                    <div className="comment__button-group">
                        <button className="comment_button-delete">
                            <img className="comment_button-edit-icon" src={ iconDelete } alt="Trash icon" />
                            <span className="comment_button-edit-text">Delete</span>
                        </button>
                        <button className="comment_button-edit">
                            <img className="comment_button-edit-icon" src={ iconeEdit } alt="Pencil icon" />
                            <span className="comment_button-edit-text">Edit</span>
                        </button>
                    </div>
                    :
                    <button className="btn  comment__button-reply">
                        <img src={ iconReplay } className="comment__button-replycomment__button-reply-icon" alt="Arrow icon"/>
                        <span className="fw-bold mx-2 comment__button-reply-text">Reply</span>
                    </button>
                    } 
                </div>

                <div className="mt-3 comment__body">
                    { isAResponseComment && <a href="#reply"className="comment__body-repliedTo">@{ props.replies }</a> }
                    <p className="comment__paragraph">{ props.content }</p>
                </div>
            </div>
        </div>
    )
}