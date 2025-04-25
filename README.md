![CI](https://github.com/APaud3l/inventory-manager-backend/actions/workflows/test.yml/badge.svg)

# inventory-manager-backend
Creating a simple Inventory Manager API, primarily focusing on testing

Endpoints:

GET /items
POST /items - Create a new stock, requires name, price
PATH /items/:id - Update stock
DELETE /items/:id 

GET /health

## DRY Test Design: Generalised vs Hardcoded

expect(response.body.username).toBe("Adam");

expect(response.body.username).toBe(newUser.username);

## Explanation of test cases
Why do we use .send(newItem)?
- It simulates sending a JSON body like a real frontend would.

What does .expect(201) do?
- It ensures the route returned "created successfully" status — exactly what we want from a POST.

Why POST before GET?
- To guarantee the DB has something to return

Array.isArray(...)
- Validates response format

.toHaveProperty(...)
- Confirms Schema Shape

Why not test GET on an empty DB?
- That’s a valid test too, but this one ensures data exists and checks response structure.

Why test for array and length?
- Just checking 200 isn't enough. We want to confirm what we got back and its structure.

## Github Actions

- If tests pass, you see a Green CHECK in Github.

- If tests fail, you see a red X and detailed logs to debug.

-----------------------------
### Extra:
Adding Github Actions Badge to README.md

```
![CI](https://github.com/<your-username>/<your-repo>/actions/workflows/test.yml/badge.svg)
```
When tests pass → green badge<br>

When tests fail → red badge<br>

Auto updates on every push or PR <br>

It tells everyone (and future-you) that this project has automated testing in place.

Super cool feature to flex! 😎

