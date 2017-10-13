/* Use-case #1:
*  If you need to perform an action in response to this operation.
*/
if(OnYourMarks.GetSet("greeting", "Hello.").Go() >= 0)
{
	console.log("Done. Act accordingly.");
}
else
{
	console.log("Not done. Act accordingly.");
}

/* Use-case #2:
*  If you just want to get it done (or not) and move on.
*  TODO: Uncomment the following code to test.
*/
OnYourMarks.GetSet("greeting", "Hello, devRant!.").Go();