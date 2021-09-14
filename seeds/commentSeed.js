const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.1",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.2",
    post_id: 1,
    user_id: 3
  },
  {
    comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.3",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.4",
    post_id: 4,
    user_id: 2
  },
  {
    comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.5",
    post_id: 5,
    user_id: 1
  },
  {
    comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.6",
    post_id: 5,
    user_id: 3
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;