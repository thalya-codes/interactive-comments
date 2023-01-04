import Modal from 'react-bootstrap/Modal';
import Button from '../Button';
import IProps from 'interfaces/IModalDeleteComment';

export default function ModalDeleteComment({ 
  show,
  handleClose,    
  deleteCommentInfos 
}: IProps) {
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
          
          <Button 
            id='button--cancel-action'
            variant="secondary"
            text='No, Cancel'
            textIsUppercase={true}
            hasBackgroundColor={true}
            onClick={(): void => handleClose()}
          />  

          <Button 
            id="button--confirm-action"
            variant="danger" 
            text='Yes, delete'
            textIsUppercase={true}
            hasBackgroundColor={true}
            onClick={(): void => {
            deleteCommentFunc(id, isReply);
            handleClose();
          }} />

        </Modal.Footer>

      </Modal>
    </>
  )
}