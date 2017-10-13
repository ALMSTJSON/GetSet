var OnYourMarks = OYM = O = _ = Oi =
{
	element: "",
	value: "",

	GetSet: function (element, value)
	{
		this.element = element;
		this.value = value;
		return this;
	},

	Go: function()
	{
		var existingElement = document.getElementById(this.element) || false;

		if(existingElement)
		{
			existingElement.innerHTML = this.value;
		}
		else
		{
			return -1;
		}
		
		return this !== null ? 0 : -1;
	}
}