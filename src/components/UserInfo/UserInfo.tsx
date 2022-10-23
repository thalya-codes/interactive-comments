import './style.scss';
import Avatar from "../Avatar/Avatar";
import IUserInfo from "../../interfaces/IUserInfo";

export default function UserInfo(props: IUserInfo) {
    return (
        <div className="userInfo me-3">
            <Avatar picture={ props.picture } altText={ props.altText } />
            { props.isTheAuthor && <span className="text-white ms-3 userInfo__author-marker"> you </span>}
            <span className="fw-bold ms-3  userInfo__username">{ props.username }</span>            
        </div>
    )
}