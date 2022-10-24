import './style.scss';
import HeaderComment from 'components/HeaderComment/HeaderComment';
import { Props } from 'interfaces/IComment';
import { ICommentsData } from 'interfaces/IComment';

export default function Comment({ data, id }: Props)  {

    const commentStructure = (data: ICommentsData, isReply: boolean) => {        
        return (
            <div className='d-flex comment__wrapper justify-content-between comment' key={`key-comment-${data.user.username}--${data.id}`}>        
                <div className='d-flex flex-column align-items-center fw-bold comment__score'>
                    <button className='comment__score-button fw-bold btn'>+</button>
                    <span className='comment__score-number'>{ data.score }</span>
                    <button className='comment__score-button fw-bold btn'>-</button>
                </div>    

                <div className='d-flex flex-column comment__header-and-body' >
                    <HeaderComment
                        id={`header-comment--${data.id}`}
                        username={ data.user.username }
                        picture={require(`../../${ data.user.image.png  }`)}
                        altText=''
                        isTheAuthor={ data.user.username === 'juliusomo' && true }
                        createdAt={ data.createdAt }
                    />
                
                    <div className='mt-3 comment__body'>                  
                        { isReply && <span className='comment__body-replyingTo'>@{ data.replyingTo}</span> }
                        <p className='comment__body-paragraph'>{ data.content }</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div id={ id } className='container'>
            <div>
                { data.comments.map((comment: ICommentsData) =>  commentStructure(comment, false)) }
            </div>

            <div className='container__replies'>
                { data.comments.map((comment: ICommentsData) => (
                    comment.replies.map((reply: ICommentsData) => commentStructure(reply, true)))) 
                }
            </div>
        </div>

    );
}