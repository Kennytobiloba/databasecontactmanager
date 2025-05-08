const express = require('express');
const router = express.Router();
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact
} = require('../controller/contactController');

// Route to create a new contact
router.post('/contacts', createContact);

// Route to get all contacts
router.get('/contacts', getAllContacts);

// Route to get a single contact by ID
router.get('/contacts/:id', getContactById);

// Route to update a contact by ID
router.put('/contacts/:id', updateContact);

// Route to delete a contact by ID
router.delete('/contacts/:id', deleteContact);

module.exports = router;