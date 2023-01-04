import './style.scss';
import Avatar from "../Avatar";
import IUserInfo from "../../interfaces/IUserInfo";

export default function UserInfo({ 
    picture, username, 
    altText, isTheAuthor 
}: IUserInfo) {

    return (
        <div className="userInfo me-3">
            <Avatar picture={picture} altText={altText} />
            {isTheAuthor && <span className="text-white ms-3 userInfo__author-marker"> you </span>}
            <span className="fw-bold ms-3  userInfo__username">{username}</span>            
        </div>
    )
}