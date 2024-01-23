import { v4 as uuid } from 'uuid';

export default {
  currentUser: {
    image: {
      png: '../assets/avatars/juliusomo.png',
      webp: '../assets/avatars/juliusomo.webp',
    },
    username: 'juliusomo',
  },
  comments: [
    {
      id: uuid(),
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: new Date('2023/12/15').toISOString(),
      score: 12,
      hasAlreadyVoted: false,
      user: {
        image: {
          png: '../assets/avatars/amyrobson.png',
          webp: '../assets/avatars/amyrobson.webp',
        },
        username: 'amyrobson',
      },
      replies: [],
    },
    {
      id: uuid(),
      content:
        "Woah, your project looks awesome! How long have you been coding for? I'm still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
      createdAt: new Date('2024/01/06').toISOString(),
      score: 5,
      hasAlreadyVoted: false,
      user: {
        image: {
          png: '../assets/avatars/maxblagun.png',
          webp: '../assets/avatars/maxblagun.webp',
        },
        username: 'maxblagun',
      },
      replies: [
        {
          id: uuid(),
          content:
            "If you're still new, I'd recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It's very tempting to jump ahead but lay a solid foundation first.",
          createdAt: new Date('2024/01/13').toISOString(),
          score: 4,
          replyingTo: 'maxblagun',
          user: {
            image: {
              png: '../assets/avatars/ramsesmiron.png',
              webp: '../assets/avatars/ramsesmiron.webp',
            },
            username: 'ramsesmiron',
          },
        },
        {
          id: uuid(),
          content:
            "I couldn't agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
          createdAt: new Date('2024/01/18').toISOString(),
          score: 2,
          replyingTo: 'ramsesmiron',
          user: {
            image: {
              png: '../assets/avatars/juliusomo.png',
              webp: '../assets/avatars/juliusomo.webp',
            },
            username: 'juliusomo',
          },
        },
      ],
    },
  ],
};
