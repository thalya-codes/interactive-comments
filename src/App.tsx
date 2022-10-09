import './global/style.scss';

import  Comment  from "./components/Comment/Comment";
import Button from './components/Button/Button';

import ICommentsData from "./interfaces/ICommentsData";
import IData from "./interfaces/IData";


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
              <Button
                id="1"
                text="Edit"
                typeAction='edit'
                hasIcon= "true"              
              />
              <Button
                id="2"
                text="Delete"
                typeAction='delete'
                hasIcon= "true"              
              />
            </Comment>
          </>
        ))
      }
    </div>
  );
}
export default App;
