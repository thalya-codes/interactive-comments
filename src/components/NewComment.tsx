import { useEffect } from "react";
import INewComment from "../interfaces/INewComment";
import Avatar from "./Avatar/Avatar";

export default function NewComment(props: INewComment) {
   const addUsernameIntoTextArea = (): void => {       
        const allTextArea = document.querySelectorAll(".new-comment__textarea"); 
        
        allTextArea.forEach((item: Element) => {
            const currentTextArea = item as HTMLTextAreaElement;

            if (props.isReplyComment) {
                currentTextArea.innerText = `@${props.usernameToReply} `
            } else {
                currentTextArea.innerText = '';
            }
        });
        
    };  

    useEffect(() => {
        addUsernameIntoTextArea();
    });
    
    return (
        <div className="new-comment">
            <Avatar picture={ props.picture } altText={ props.altText } />
            <textarea className="form-control new-comment__textarea" rows={3} placeholder={!props.isReplyComment ? props.placeholderText : ''}/>
            <button type="button" className="btn new-comment__button">{ props.buttonText }</button>
        </div>
    );
};