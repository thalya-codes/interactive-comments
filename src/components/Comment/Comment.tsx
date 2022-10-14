import './style.scss';
import { useState } from "react";
import HeaderComment from '../HeaderComment/HeaderComment';

export default function Comment(props: any)  {
    const [isAResponseComment, setisAResponseComment ] = useState<boolean>(false);
    const [isTheAuthorOfBlog, setIsTheAuthorOfBlog ] = useState<boolean>(false);
    
//TODO
/*     const addUsernameIntoTextArea = (): void => {       
        const allTextArea = document.querySelectorAll(".new-comment__textarea"); 
        
        allTextArea.forEach((item: Element) => {
            const currentTextArea = item as HTMLTextAreaElement;

            if (props.isReplyComment && props.usernameAwnswered) {
                currentTextArea.innerText = `@${props.usernameToReply} `
            } else {
                currentTextArea.innerText = '';
            }
        });        
    };  

    useEffect(() => {
        addUsernameIntoTextArea();
    }); */
    return (
        <div className="d-flex comment__wrapper justify-content-between comment" key={`key-comment-${props.username}--${props.id}`}>        
            <div className="d-flex flex-column align-items-center fw-bold comment__score">
                <button className="comment__score-button fw-bold btn">+</button>
                <span className="comment__score-number">{ props.score }</span>
                <button className="comment__score-button fw-bold btn">-</button>
            </div>    

            <div className="d-flex  flex-column comment__wrapper-header-and-body" >
                <HeaderComment
                    username={ props.username }
                    picture={ props.picture }
                    altText=""
                    isTheAuthorOfBlog={ isTheAuthorOfBlog }
                    createdAt={ props.createdAt }
                >{ props.children }</HeaderComment> 
               
                <div className="mt-3 comment__body">
                    { isAResponseComment && <a href="#reply"className="comment__body-repliedTo">@{ props.replies }</a> }
                    <p className="comment__paragraph">{ props.content }</p>
                </div>
            </div>
        </div>
    )
}