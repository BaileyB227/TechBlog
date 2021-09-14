const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "This is awesome!",
    post_id: 1,
    user_id: 1
  },
  {
    comment_text: "Very cool.",
    post_id: 2,
    user_id: 2
  },
  {
    comment_text: "I love water.",
    post_id: 3,
    user_id: 2
  },
  {
    comment_text: "I want to visit Hawaii",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "I love using Javascript",
    post_id: 5,
    user_id: 1
  },
  {
    comment_text: "Nice site",
    post_id: 6,
    user_id: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;