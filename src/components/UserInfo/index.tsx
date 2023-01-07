import './style.scss';
import Avatar from "../Avatar";
import IProps from '../../interfaces/IUserInfo';

export default function UserInfo({ 
    picture, username, 
    altText, isTheAuthor 
}: IProps) {

    return (
        <div className="user-info me-3">
            <Avatar picture={picture} altText={altText} />
            {isTheAuthor && <span className="user-info__author-marker text-white ms-3"> you </span>}
            <span className="fw-bold ms-3">{username}</span>            
        </div>
    )
}