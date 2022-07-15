const input = document.querySelector("input[type='range']");
for (const event of ["input", "change"])
	input.addEventListener(event, (e) => update(e.target));

function update(input) {
	for (const data of ["min", "max", "value"])
		if (input[data]) input.style.setProperty(`--${data}`, input[data]);
}

update(input);