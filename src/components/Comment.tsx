import iconReplay from "../images/icon-reply.svg";
import iconDelete from "../images/icon-delete.svg";
import iconeEdit from "../images/icon-edit.svg";

import UserInfo from "./UserInfo";
import { useState } from "react";

export default function Comment()  {
    const [isAResponseComment, setisAResponseComment ] = useState<boolean>(false);
    const [isTheAuthorOfBlog, setIsTheAuthorOfBlog ] = useState<boolean>(false);

    return (
        <div className="comment">
            <div className="comment__header">
                <UserInfo username="" picture="" altText="" isTheAuthorOfBlog={ isTheAuthorOfBlog }/>
                <span className="comment__date">1 month ago</span>   
                
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
                  <button className="btn btn-light comment__button-reply">
                    <img src={ iconReplay } className="comment__button-reply-icon" alt="Arrow icon"/>
                    <span>Reply</span>
                  </button>
                } 

            </div>
            <div className="comment__votes">
                <button className="comment__votes-button btn">+</button>
                <span className="comment__votes-number">12</span>
                <button className="comment__votes-button btn">-</button>
            </div>
            
            <div className="comment__body">
                { isAResponseComment && <a href="#reply"className="comment__body-repliedTo">@usernameReplyTo</a> }
                <p className="comment__paragraph"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat incidunt necessitatibus quasi odit, consequuntur excepturi. Aliquid, repudiandae ipsum? Quas aperiam sint inventore soluta impedit dignissimos velit minima quasi veritatis.</p>
            </div>
        </div>
    )
}