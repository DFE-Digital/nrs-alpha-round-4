const express = require('express')
const router = express.Router()
const jobs = require('./data/jobs.json')

// Add your routes here - above the module.exports line
router.get('/results', function (req, res) {
  res.render('results', jobs)
})
router.get('/routes', function (req, res) {
  res.render('routes', jobs)
})
router.get('/details', function (req, res) {
  res.render('details', jobs)
})
router.get('/step-by-step-2', function (req, res) {
  res.render('step-by-step-2', jobs)
})

module.exports = router
