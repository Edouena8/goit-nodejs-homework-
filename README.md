# Terminal tests
## Get and display the entire list of contacts in the form of a table (console.table)

node index.js --action="list"

![Screenshot of getting list of contacts.](https://i.ibb.co/8N6cj8j/list.png)

## Get contact by id.

node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

![Screenshot of getting the contact by id.](https://i.ibb.co/L8gkXzn/get.png)

## Add the contact

node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

![Screenshot of adding the  contact.](https://i.ibb.co/rvrVs5y/add.png)

## Remove the contact

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

![Screenshot of removing the contact.](https://i.ibb.co/pnFhbsn/remove.png)

## Update the contact

node index.js --action="update" --id 5bd066f8-7851-4b7a-934c-1e4d5e651c46 --name Poly --email poly@gmail.com --phone 322-22-22

![Screenshot of updating the contact.](https://i.ibb.co/GTRQf53/update.png)
