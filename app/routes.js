const express = require('express')
const router = express.Router()

const jobs = require('./data/jobs.json')
const courses = require('./data/courses.json')

// Add your routes here - above the module.exports line
router.get('/results', function (req, res) {
  res.render('results', jobs)
})

router.get('/details', function (req, res) {
  res.render('details', jobs)
})
router.get('/step-by-step-2', function (req, res) {
  res.render('step-by-step-2', jobs)
})
router.get('/step-by-step-3', function (req, res) {
  res.render('step-by-step-3', jobs)
})
router.get('/course-results', function (req, res) {
  res.render('course-results', courses)
})
router.get('/course-detail', function (req, res) {
  res.render('course-detail', courses)
})
router.get('/provider', function (req, res) {
  res.render('provider', courses)
})

module.exports = router
