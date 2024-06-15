export const mock_comment_id =
  '47eaf572-08ff-48e5-93b0-5bbac2535d3e';
export const mock_comment_content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed pulvinar lorem';
export const mock_comment_replying_to = 'thalya.alonso';
export const mock_comment_created_at =
  '2024-06-11T12:33:42.605Z';

export const mock_new_comment = {
  id: mock_comment_id,
  content: mock_comment_content,
  createdAt: mock_comment_created_at,
  score: 0,
  replyingTo: mock_comment_replying_to,
  hasAlreadyVoted: false,
  user: {
    image: {
      png: '../assets/avatars/juliusomo.png',
      webp: '../assets/avatars/juliusomo.webp',
    },
    username: 'juliusomo',
  },
  replies: [],
};
