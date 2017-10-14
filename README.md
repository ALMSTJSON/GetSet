# GetSet
GetSet is a JavaScript Micro-library for getting and setting things in HTML Elements. Basically, the idea behind this library is to allow the developer to perform a Get and Set operation in one go.

## Usage
---

Use-case #1:

```js
OnYourMarks.GetSet("main-page-heading", "New Heading").Go();
```

Use-case #2:

```js
if(OnYourMarks.GetSet("main-page-heading", "New Heading").Go() >= 0)
{
	// Success: Do something.
}
else
{
	// Failure: Do something else.
}
```
The `Go` function returns `0` if the operation was successful, otherwise, it returns `-1`.