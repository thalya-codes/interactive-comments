import "./style.scss";
import HeaderComment from "components/HeaderComment";
import { ICommentsData, IProps } from "interfaces/IComment";
import { useState } from "react";

export default function Comment({
  comments,
  comment,
  isReply,
  setComments
}: IProps) {
  const [score, setScore] = useState(comment.score);

  const incrementScore = (): void => setScore((prev) => prev + 1);
  const decrementScore = (): void => {
    score > 0 && setScore((prev) => prev - 1);
  };

  const deleteComment = (): void => {
    let indexComment: number;
    
    indexComment = comments.findIndex(
      (currentComment: ICommentsData) => currentComment.id === comment.id
    );

    comments.splice(indexComment, 1);

    localStorage.setItem("comments", JSON.stringify(comments));
    setComments(JSON.parse(localStorage.getItem("comments") || ""));
  }

  const deleteReply = (): void => {
    let indexReply: number;

    comments.forEach(({ replies }: ICommentsData): void => {
      indexReply = replies.findIndex((reply: ICommentsData) => reply.id === comment.id);
      replies.splice(indexReply, 1);
    }); 

    localStorage.setItem("comments", JSON.stringify(comments));
    setComments(JSON.parse(localStorage.getItem("comments") || ""));
  }

  return (
    <div className={`comment ${ isReply ? "comment--replies" : "" } d-flex justify-content-between`}
      key={`comment-key-${comment.user.username}--${comment.id}`}
    >
      <div className="comment__score d-flex flex-column align-items-center fw-bold">

        <button
          className="comment__score-button fw-bold border-0 bg-white"
          onClick={() => incrementScore()}
        >+</button>

        <span className="comment__score-number">{score}</span>

        <button 
          className="comment__score-button fw-bold border-0 bg-white" 
          onClick={() => decrementScore()}
        >-</button>
      </div>

      <div className="w-100 d-flex flex-column">
        <HeaderComment
          id={`comment__header--${comment.id}`}
          username={comment.user.username}
          picture={require(`../../${comment.user.image.png}`)}

          altText=""
          isTheAuthor={comment.user.username === "juliusomo" && true}
          createdAt={comment.createdAt}

          deleteCommentInfos={{
            id: comment.id,
            deleteCommentFunc: isReply ? deleteReply :deleteComment,
            isReply: isReply,
          }}
        />

        <div className="comment__body mt-3">
          { isReply && (
            <span className="comment__body-replying-to">
              @{comment.replyingTo}
            </span>
          ) }
          <p className="d-inline">{comment.content}</p>
        </div>
      </div>
    </div>
  );
}
