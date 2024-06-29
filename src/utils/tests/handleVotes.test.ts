import {
  decrementOnlyOnce,
  decrementVotesAndAlterVoteStatus,
  incrementAndAlterVoteStatus,
  incrementOnlyOnce,
  maintainScoreAndStatusVoteValue,
} from './utils/handleVotesTest.utils';
import { mock_comments } from './utils/mock.utils';

describe('comments votes tests', () => {
  it('should increment score and alter comment vote status to true', () => {
    const comment = mock_comments[1];

    incrementAndAlterVoteStatus({
      comment: comment,
      state: mock_comments,
      expectedScore: comment.score + 1,
    });
  });

  it('should maintain the current comment score and vote status', () => {
    maintainScoreAndStatusVoteValue({
      comment: mock_comments[1],
      state: mock_comments,
    });
  });

  it('should decrement comment votes and alter voted status to false', () => {
    const comment = mock_comments[0];

    decrementVotesAndAlterVoteStatus({
      comment: comment,
      state: mock_comments,
      expectedScore: comment.score - 1,
    });
  });

  it('should decrement only once', () => {
    decrementOnlyOnce({
      comment: mock_comments[0],
      state: mock_comments,
      expectedScore: 2,
    });
  });

  it('should increment only once', () => {
    incrementOnlyOnce({
      comment: mock_comments[1],
      state: mock_comments,
      expectedScore: 2,
    });
  });
});

describe('replies votes tests', () => {
  const parentComment = mock_comments[1];

  it('should increment score and alter comment vote status to true', () => {
    const comment = parentComment.replies[0];

    incrementAndAlterVoteStatus({
      comment: comment,
      state: mock_comments,
      parentId: parentComment.id,
      expectedScore: comment.score + 1,
    });
  });

  it('should maintain the current comment score and vote status', () => {
    maintainScoreAndStatusVoteValue({
      comment: mock_comments[1],
      state: mock_comments,
    });
  });

  it('should decrement comment votes and alter voted status to false', () => {
    const reply = parentComment.replies[1];

    decrementVotesAndAlterVoteStatus({
      comment: reply,
      state: mock_comments,
      expectedScore: reply.score - 1,
      parentId: parentComment.id,
    });
  });

  it('should decrement only once', () => {
    const reply = parentComment.replies[1]; 

    decrementOnlyOnce({
      comment: reply,
      state: mock_comments,
      expectedScore: 2,
      parentId: parentComment.id,
    });
  });

  it('should increment only once', () => {
    const reply = parentComment.replies[0];

    incrementOnlyOnce({
      comment: reply,
      state: mock_comments,
      expectedScore: 4,
      parentId: parentComment.id,
    });
  });
});