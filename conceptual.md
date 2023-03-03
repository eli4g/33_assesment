### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
	- Using the async/await keywords in parallel or using the Promise/all keyword
	- using .then() to chain on multiple asynchronous requests
	- 

- What is a Promise?
	- A Promise is an object that is effectively a single guarantee of return a value in the future

- What are the differences between an async function and a regular function?
	- An async function will not run automatically when the code runs

- What is the difference between Node.js and Express.js?
	- Node.js is a javascript server environment
	- Express.js is a framework that is built to run within the Node environment and is similar to Flask within Python

- What is the error-first callback pattern?
	- This is a way of factoring code to first check if the code runs in a try statement and then if anything fails, returning an error to handle the issue

- What is middleware?

	Middleware is code that runs in between the request/response cycle.  It is function based in express and has access to the 'req' and 'res' objects.

- What does the `next` function do?
	- The `next` function will allow the request to continue processing and will go to the next route

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
	- The requests are being made sequentially, even though they are not connected/dependent on each other
	- This can be re-factored to use promises for each request or use the Promise.all function to run all 3 in parallel
	-  

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
