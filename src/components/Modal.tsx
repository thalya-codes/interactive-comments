export default function Modal() {
    const confirmCommentDeletion =  (): void => {};
    const cancelCommentDeletion = (): void => {};

    return (
        <div className="modal-delete-comment">
            <h3 className="h3">Delete Comment</h3>
            <p className="lead fs-5">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
           
            <div className="d-flex">
                <button className="btn btn-secondary text-uppercase pt-2 pb-2 ps-4 pe-4"
                    onClick={():void => cancelCommentDeletion()}
                >No, cancel</button>

                <button className="btn btn-danger text-uppercase pt-2 pb-2 ps-4 pe-4"
                    onClick={():void => confirmCommentDeletion()}
                >Yes, delete</button>
            </div>
        </div>
    );
};