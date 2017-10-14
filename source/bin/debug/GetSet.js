var OnYourMarks = OYM = O = _ = Oi =
{
	element: "",
	value: "",
	attribute: "text",

	GetSet: function (element, value, attribute)
	{
		this.element = element;
		this.value = value;
		this.attribute = attribute;

		return this;
	},

	Go: function()
	{
		var existingElement = document.getElementById(this.element) || false;

		if(existingElement)
		{
			if(this.attribute == "text")
				existingElement.innerText = this.value;
			else
				existingElement.innerHTML = this.value;
		}
		else
		{
			return -1;
		}
		
		return this !== null ? 0 : -1;
	}
}