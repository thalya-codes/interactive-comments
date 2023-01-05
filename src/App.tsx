import "./global/style.scss";

import Comment from "./components/Comment";
import NewComment from "./components/NewComment";
import { ICommentsData, IData } from "interfaces/IComment";
import { useEffect, useState } from "react";

function App() {
  const data: IData = require("./data");
  const [comments, setComments] = useState<ICommentsData[]>(data.comments);

  useEffect(() => {
    const storagedComments = localStorage.getItem("comments");
    if (!storagedComments) {
      localStorage.setItem("comments", JSON.stringify(comments));
    } else {
      setComments(JSON.parse(storagedComments || ""));
    }
  }, []);

  function addNewComment(content: string): void {
    const currentDate = new Date();
    const formmatedDate = `${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;

    const newComment: ICommentsData = {
      id: Math.floor(Math.random() * 20),
      user: {
        image: {
          png: data.currentUser.image.png,
        },
        username: "juliusomo",
      },
      createdAt: formmatedDate,
      content,
      score: 0,
      replies: [],
      replyingTo: "",
    };

    setComments([...comments, newComment]);
    localStorage.setItem("comments", JSON.stringify([...comments, newComment]));
  }

  return (
    <div className="App">
      {data !== undefined && (
        <>
          {comments.map((comment: ICommentsData): JSX.Element => (
						<div>
							<Comment
								comments={comments}
								comment={comment}
								isReply={false}
								setComments={setComments}
							/>

							{comment.replies.map((reply: ICommentsData): JSX.Element => (
								<Comment
									comments={comments}
									comment={reply}
									isReply={true}
									setComments={setComments}
								/>
							))}
						</div>
					))}

          <NewComment
            id="new-comment"
            btnText="send"
            btnVariant="send"
            picture={require(`${data.currentUser.image.png}`)}
            altText="Comment author avatar"
            addNewComment={addNewComment}
          />
        </>
      )}
    </div>
  );
}
export default App;
