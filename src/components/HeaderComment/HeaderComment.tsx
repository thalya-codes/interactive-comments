import './style.scss';
import { useState } from "react";

import UserInfo from "../UserInfo/UserInfo";
import IHeaderComment from "../../interfaces/IHeaderComment";

export default function HeaderComment (props: IHeaderComment) {
    const [isTheAuthorOfBlog, setIsTheAuthorOfBlog ] = useState<boolean>(false);
    
    return (
        <div className="d-flex justify-content-between header-comment" >

            <div className=" d-flex justify-content-between align-items-baseline header-comment__userInfo-date">
                <UserInfo 
                    username={ props.username } 
                    picture={ props.picture } 
                    altText="" 
                    isTheAuthorOfBlog={ isTheAuthorOfBlog }
                />
                <span className="text-secondary header-comment__createdAt">{ props.createdAt }</span> 
            </div>

            <div className='d-flex d-flex align-items-center'>{ props.children }</div>  
        </div>
    )
}