import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import IProps from 'interfaces/IModalDeleteComment';

export default function ModalDeleteComment({ handleClose, show, deleteCommentInfos }: IProps) {
  const { id, isReply, deleteCommentFunc  } = deleteCommentInfos;

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="font-weight-bold">Delete comment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          Are you sure you want to delete this comment? 
          This will remove the comment and can't be undone.
        </Modal.Body>

        <Modal.Footer>
          
          <Button variant="secondary" onClick={(): void => handleClose()}>NO, CANCEL</Button>  

          <Button variant="danger" onClick={(): void => {
            deleteCommentFunc(id, isReply);
            handleClose();
          }}>YES, DELETE</Button>

        </Modal.Footer>

      </Modal>
    </>
  )
}