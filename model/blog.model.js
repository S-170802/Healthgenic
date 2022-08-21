const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    blog_topic: String,
    imgurl: String,
    desc: String,
})

module.exports = mongoose.model('blog', blogSchema);