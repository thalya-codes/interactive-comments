import './global/style.scss';

import  Comment  from "./components/Comment/Comment";
import ICommentsData from "./interfaces/ICommentsData";
import IData from "./interfaces/IData";
import NewComment from './components/NewComment';
import HeaderComment from './components/HeaderComment/HeaderComment';

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
            >
              <button>Reply</button>
            </Comment>
          </>
        ))
      }
    </div>
  );
}
export default App;
