import iconReplay from "../images/icon-reply.svg"

export default function Comment()  {
    return (
        <div className="comment">
            <div className="comment__header">
                <img className="comment__user-picture" src="" alt="" />
                <span className="comment__username">amyrobson</span>
                <span className="comment__date">1 month ago</span>                
                <button className="btn btn-light comment__button-reply">
                    <img src={iconReplay} className="comment__button-reply-icon" />
                    <span>Reply</span>
                </button>
            </div>
            <div className="comment__votes">
                <button className="comment__votes-button btn">+</button>
                <span className="comment__votes-number">12</span>
                <button className="comment__votes-button btn">-</button>
            </div>
            <p className="comment__body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat incidunt necessitatibus quasi odit, consequuntur excepturi. Aliquid, repudiandae ipsum? Quas aperiam sint inventore soluta impedit dignissimos velit minima quasi veritatis.
            </p>
        </div>
    )
}