import './style.scss';

import INewComment from "../../interfaces/INewComment";
import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";

export default function NewComment(props: INewComment) {
   const { 
        id, picture, 
        altText, 
        placeholderText = 'Add comment...', 
        btnText,
        btnTypeAction, 
        btnOnClickCustomFunc
    } : INewComment = props;

    return (
        <div className='new-comment'>
            <Avatar picture={ picture } altText={ altText } />
            <textarea 
                className='form-control text-secondary new-comment__textarea'
                rows={3} placeholder={ placeholderText && placeholderText }
            />
            <Button 
                id={ `btn-new-comment--${ btnTypeAction }-${ id }` }
                text={ btnText }
                hasBackgroundColor='true'
                typeAction={ btnTypeAction }
                textIsUppercase='true'
                onClickCustomFunc={ btnOnClickCustomFunc }
            />
        </div>
    );
};