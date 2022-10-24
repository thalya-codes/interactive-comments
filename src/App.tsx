import './global/style.scss';

import  Comment  from "./components/Comment/Comment";
import NewComment from './components/NewComment/NewComment';
import { IData } from 'interfaces/IComment';


function App(){
  const data: IData = require('./data.json');

  return (
    <div className="App">
      <Comment 
          id='12'
          data={ data }        
      />
  
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
