/* eslint-disable no-empty */
const Controller = require('./Controller');
const CourseServices = require('../services/CourseServices');

const courseServices = new CourseServices();

class CourseController extends Controller {
  constructor() {
    super(courseServices);
  }
}

module.exports = CourseController;