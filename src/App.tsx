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
            id='new-comment--comment'
            btnText="send"
            picture={require(`${data.currentUser.image.png}`)}
            altText="Comment author avatar"
            data={data}
            comments={comments}
            setComments={setComments}
          />
        </>
      )}
    </div>
  );
}
export default App;
