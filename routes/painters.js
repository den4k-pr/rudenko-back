const express = require("express")
const router = express.Router();
const { deletePainter, getPainter, createPainters, getPainters } = require('../controlers/painters');
const path = require('path');


router.get('/', getPainters)
router.get('/:id', getPainter)
router.delete('/:id', deletePainter)
router.post('/', createPainters)

module.exports = router;
