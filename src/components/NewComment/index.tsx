import './style.scss';

import INewComment from "../../interfaces/INewComment";
import Avatar from "../Avatar";
import Button from "../Button";
import React from 'react';

export default function NewComment({
    id, picture, 
    altText, btnVariant,
    btnText, placeholderText, 
    addNewComment 
}: INewComment) {

    const getTextareaValue = (): void => {
        const textarea = document.getElementById(`text-area-${id}`) as HTMLTextAreaElement;
        addNewComment(textarea.value);
        textarea.value = ''
    };

    return (
        <div id={id} className='new-comment'>
            <Avatar picture={picture} altText={altText} />
            <textarea 
                id={`text-area-${id}`}
                className='form-control text-secondary new-comment__textarea'
                rows={3} placeholder={placeholderText && placeholderText}
            />
            <Button 
                id={`btn-new-comment--${ btnVariant }-${ id }`}
                text={btnText}
                hasBackgroundColor={true}
                variant='primary'
                textIsUppercase={true}
                onClick={() => getTextareaValue()}
            />
        </div>
    );
};