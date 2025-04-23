# inventory-manager-backend

Creating a simple Inventory Manager API, primarily focusing on testing

## Endpoints

- GET /items
- POST /items - create new stock, requires name, price
- PATCH /items/id - update stock
- DELETE /items/:id

- GET /health


## DRY Test Design: Generalised vs Hardcoded

expect(response.body.username).toBe("Adam")

expect(response.body.username).toBe(newUser.username)