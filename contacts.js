const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("node:crypto");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function read() {
  const contacts = await fs.readFile(contactsPath, { encoding: "utf-8" });
  return JSON.parse(contacts);
}

async function write(data) {
  return await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
}

async function listContacts() {
  return await read();
}

async function getContactById(contactId) {
  const contacts = await read();
  return contacts.find((contact) => contact.id === contactId) || null;
}

async function removeContact(contactId) {
  const contacts = await read();
  const idx = contacts.findIndex((contact) => contact.id === contactId);

  if (idx === -1) return null;
  contacts.splice(idx, 1);
  await write(contacts);

  return contacts[idx];
}

async function addContact(name, email, phone) {
  const contacts = await read();

  const newContact = {
    id: crypto.randomUUID(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);
  await write(contacts);

  return newContact;
}

async function updateContact(contactId, name, email, phone) {
  const contacts = await read();
  const idx = contacts.findIndex((contact) => contact.id === contactId);
  if (idx === -1) return null;
  contacts[idx] = {
    id: contactId,
    name,
    email,
    phone,
  };

  await write(contacts);
  return contacts[idx];
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
