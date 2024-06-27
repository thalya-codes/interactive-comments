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

  //Reply
  // - realizar os mesmos testes acima
});

