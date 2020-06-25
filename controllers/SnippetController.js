const Snippet = require('../models/Snippet')
const snippetController = {}

snippetController.snippet = async (req, res) => {
  const user = req.session.finduser
  const allSnippets = await Snippet.find({})
  const snippets = allSnippets.map(newSnippet => ({
    title: newSnippet.title,
    text: newSnippet.text
  }))
  res.render('forum', { snippets, user })
}

snippetController.createusersnippet = async (req, res) => {
  const newSnippet = new Snippet({
    title: req.body.title,
    text: req.body.text
  })
  await newSnippet.save()

  res.redirect('/forum')
}

snippetController.manageposts = async (req, res) => {
  const user = req.session.finduser
  const allSnippets = await Snippet.find({})
  const snippets = allSnippets.map(newSnippet => ({
    title: newSnippet.title,
    text: newSnippet.text,
    id: newSnippet._id
  }))
  console.log(req.params)
  res.render('managePosts', { snippets, user })
}

snippetController.removesnippet = async (req, res) => {
  await Snippet.findOneAndDelete({ _id: req.params.id })
  res.redirect('/managePosts')
}

module.exports = snippetController
