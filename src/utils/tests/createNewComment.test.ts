import {
  mock_comment_id,
  mock_comment_content,
  mock_comment_created_at,
  mock_comment_replying_to,
  mock_new_comment,
} from './mock.utils';
import { createNewComment } from '../createNewComment';

jest.mock('uuid', () => ({
  v4: () => mock_comment_id,
}));

it('should be return the correct comment structure', () => {
  jest
    .spyOn(Date.prototype, 'toISOString')
    .mockReturnValue(mock_comment_created_at);

  const newComment = createNewComment({
    content: mock_comment_content,
    replyingTo: mock_comment_replying_to,
  });

  expect(newComment).toEqual(mock_new_comment);
});
