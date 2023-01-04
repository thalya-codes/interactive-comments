import "./style.scss";
import HeaderComment from "components/HeaderComment";
import { ICommentsData, IProps } from "interfaces/IComment";
import { useState } from "react";

export default function Comment({ comments, id, deleteComment }: IProps) {
  const [counter, setCounter] = useState(0);

  const incrementScore = (id: number, isReply: boolean) => {
 
    if (isReply) {
      comments.forEach((comment: ICommentsData): void =>
        comment.replies.forEach((reply: ICommentsData): void => {
          reply.id === id && setCounter(reply.score++);
        })
      );
    } else {
      const indexElement: number = comments.findIndex(
        (comment: ICommentsData) => comment.id === id
      );
      setCounter(comments[indexElement].score++);
    }
  };

  const decrementScore = (id: number, isReply: boolean) => {

    if (isReply) {
      comments.forEach((comment: ICommentsData): void =>
        comment.replies.forEach((reply: ICommentsData): void => {
          reply.id === id && reply.score > 0 && setCounter(reply.score--);
        })
      );
    } else {
      const indexElement: number = comments.findIndex(
        (comment: ICommentsData) => comment.id === id
      );
      comments[indexElement].score > 0 &&
        setCounter(comments[indexElement].score--);
    }
  };

  const commentStructure = (data: ICommentsData, isReply: boolean) => {
    return (
      <div
        className="d-flex comment__wrapper justify-content-between comment"
        key={`key-comment-${data.user.username}--${data.id}`}
      >
        <div className="d-flex flex-column align-items-center fw-bold comment__score">
          <button
            className="comment__score-button fw-bold btn"
            onClick={() => incrementScore(data.id, isReply)}
          >
            +
          </button>
          <span className="comment__score-number"> {data.score} </span>
          <button
            className="comment__score-button fw-bold btn"
            onClick={() => decrementScore(data.id, isReply)}
          >
            -
          </button>
        </div>

        <div className="d-flex flex-column w-100">
          <HeaderComment
            id={`header-comment--${data.id}`}
            username={data.user.username}
            picture={require(`../../${data.user.image.png}`)}
            altText=""
            isTheAuthor={data.user.username === "juliusomo" && true}
            createdAt={data.createdAt}
            deleteCommentInfos={{
              id: data.id,
              deleteCommentFunc:deleteComment,              
              isReply: isReply
            }}
          />

          <div className="mt-3 comment__body">
            {isReply && (
              <span className="comment__body-replyingTo">
                @{data.replyingTo}
              </span>
            )}
            <p className="comment__body-paragraph">{data.content}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id={id} className="container">
      {comments.map((comment: ICommentsData) => (
        <>
          {commentStructure(comment, false)}
					
          {comment.replies.length > 0 && (
            <div className="container__replies">
              {comment.replies.map((reply: ICommentsData) =>
                commentStructure(reply, true)
              )}
            </div>
          )}
        </>
      ))}
    </div>
  );
}
