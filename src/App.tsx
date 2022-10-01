import  Comment  from "./components/Comment";
import NewComment from "./components/NewComment";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Comment />
      <NewComment picture="" altText="" buttonText="Reply" placeholderText="Add a comment..."/>
      <Modal />
    </div>
  );
}

export default App;
