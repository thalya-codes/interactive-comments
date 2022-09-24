import Avatar from "./Avatar";
import IUserInfo from "../interfaces/IUserInfo";

export default function UserInfo(props: IUserInfo) {
    return (
        <div className="userinfo">
            <Avatar picture={props.picture} altText={props.altText} />
            {props.isTheAuthorOfBlog && <span className="userinfo__author-marker">YOU</span>}
            <span className="userinfo__username">{props.username}</span>            
        </div>
    )
}