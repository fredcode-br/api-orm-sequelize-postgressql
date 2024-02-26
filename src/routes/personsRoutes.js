const { Router } = require('express');
const PersonController = require('../controllers/PersonController.js');

const personController = new PersonController();

const router = Router();

router.get('/persons', (req, res) => personController.getAll(req, res));
router.get('/persons/:id', (req, res) => personController.getOneByID(req, res));
router.post('/persons', (req, res) => personController.create(req, res));
router.put('/persons/:id', (req, res) => personController.update(req, res));
router.delete('/persons/:id', (req, res) => personController.delete(req, res));

module.exports = router;