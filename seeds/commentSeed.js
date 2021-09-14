const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "This is awesome!",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "I love using Javascript",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "Nice site",
    user_id: 3,
    post_id: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;