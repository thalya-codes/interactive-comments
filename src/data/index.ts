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
      content:"first",
      createdAt: '2 days ago',
      score: 0,
      isDeleting: false,
      isEditing: false,
      replyingTo: 'ramsesmiron',
      user: {
        image: {
          png: '../assets/avatars/juliusomo.png',
          webp: '../assets/avatars/juliusomo.webp',
        },
        username: 'juliusomo',
      },
    },
    {
      id: uuid(),
      content:
        "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
      createdAt: '1 month ago',
      score: 12,
      hasAlreadyVoted: false,
      isEditing: false,
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
      createdAt: '2 weeks ago',
      score: 5,
      hasAlreadyVoted: false,
      isEditing: false,
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
          createdAt: '1 week ago',
          score: 4,
          replyingTo: 'maxblagun',
          isEditing: false,
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
          createdAt: '2 days ago',
          score: 2,
          isDeleting: false,
          isEditing: false,
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