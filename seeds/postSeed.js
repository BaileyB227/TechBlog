const { Post } = require('../models');

const postData = [{
        title: 'Awesome',
        content: 'This is awesome!',
        user_id: 1

    },
    {
        title: 'Javascript',
        content: 'I love using Javascript',
        user_id: 2
    },
    {
        title: 'Site',
        content: 'Nice site',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;