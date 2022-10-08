import Avatar from "./Avatar/Avatar";
import IAvatar from "../interfaces/IAvatar";

export default function ReplyComment(props: IAvatar) {
    return(
        <div className="reply-comment">
            <Avatar picture={ props.picture } altText={ props.altText } />
            <textarea className="form-control" rows={3}></textarea>
            <button type="button" className="btn reply-comment__button">REPLY</button>
        </div>
    )
}