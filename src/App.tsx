import './global/style.scss';

import  Comment  from "./components/Comment/Comment";
import NewComment from './components/NewComment/NewComment';
import { ICommentsData, IData } from 'interfaces/IComment';
import { useEffect, useState } from 'react';
import { json } from 'stream/consumers';

function App(){
  const data: IData = require('./data.json')
  const [comments, setComments] = useState<ICommentsData[]>(data.comments);
  
  useEffect(() => {
    const storagedComments = localStorage.getItem('comments');
    if (!storagedComments) {
      localStorage.setItem("comments", JSON.stringify(comments));      
    } else {
      setComments(JSON.parse(storagedComments || ''))
    }

  }, []);

  function addNewComment(content: string): void {
    const currentDate = new Date();
    const formmatedDate = `${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
    
    const newComment: ICommentsData = {
      id: Math.floor(Math.random() * 20),
      user: {
        image: {
          png: data.currentUser.image.png
        },
        username: 'juliusomo'
      },
      createdAt: formmatedDate,
      content,
      score: 0,
      replies:[],
      replyingTo: ''
    }
    
    setComments([...comments, newComment]);      
    localStorage.setItem('comments', JSON.stringify([...comments, newComment]));
  };

  function deleteComment(id: number, isReply: boolean): void {
    let findMatchedComment: number; 

   if (isReply) {
     comments.forEach(({ replies }: ICommentsData): void => {

       findMatchedComment = replies.findIndex((reply: ICommentsData) => reply.id === id);
       replies.splice(findMatchedComment, 1);   

      });
      
   } else {
    findMatchedComment = comments.findIndex((comment: ICommentsData) => comment.id === id);
    comments.splice(findMatchedComment, 1);
   };

   localStorage.setItem('comments', JSON.stringify(comments));
   setComments(JSON.parse(localStorage.getItem('comments') || ''));
  };

  return (
    <div className="App">
      {
        data !== undefined && <>
          <Comment 
              id='12'
              comments={ comments } 
              deleteComment={deleteComment}       
          />
      
          <NewComment 
            id='novo-comentario--2'
            btnText='send'
            btnTypeAction='send'
            picture={ require(`${ data.currentUser.image.png }`) }
            altText=''
            addNewComment={ addNewComment }
          />    
        
        </>
      }
      
    </div>
  );
}
export default App;
