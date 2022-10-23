import './global/style.scss';

import  Comment  from "./components/Comment/Comment";
import Button from './components/Button/Button';

import ICommentsData from "./interfaces/ICommentsData";
import IData from "./interfaces/IData";
import NewComment from './components/NewComment/NewComment';


function App(){
  const data: IData = require('./data.json');
  const commentsData: ICommentsData[] = data.comments;

  return (
    <div className="App">
      {
        commentsData.map((comment: ICommentsData) => (
          <>
            <Comment 
              id={ comment.id }
              username={ comment.user.username }
              picture={ require(`${ comment.user.image.png  }`) }
              content={ comment.content }
              score={ comment.score }
              replies={ comment.replies }
              createdAt={ comment.createdAt }             
            />

          </>
        ))
      }
        <NewComment 
          id='2'
          btnText='send'
          btnTypeAction='send'
          picture={ require(`${data.currentUser.image.png }`) }
          altText=''
          btnOnClickCustomFunc={() => alert('botao send new comment')}
        />    
    </div>
  );
}
export default App;
