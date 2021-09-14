const { Post } = require('../models');

const postData = [{
        title: 'Awesome',
        content: 'Lorem ipsum.',
        user_id: 1

    },
    {
        title: 'Javascript',
        content: 'Lorem ipsum.',
        user_id: 2
    },
    {
        title: 'Site',
        content: 'Lorem ipsum.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;