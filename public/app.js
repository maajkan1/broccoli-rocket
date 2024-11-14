// state = all den data som appen har lagrat utifrån vad användaren gör
// state innheåller också vår config eller "start-värden"

const state = {
	shop: [
		{ vegetable: "Broccoli", amount: 12, color: "green" },
		{ vegetable: "Potato", amount: 25, color: "brown" },
		{ vegetable: "Onion", amount: 8 },
	],
	order: [],
	addVegetable: function (vegetable, amount) {
		// add vegetable
		this.shop.push({ vegetable, amount });
	},
};

// console.log(state.shop[1].amount);
// console.log(state.shop[0].color);

// document.querySelector(".shop").innerHTML = state.shop[1].amount;

// dynamiskt bygga GUI med conditional rendering med ternary operator
// render = ändrar / visa upp "nya" GUI

const renderShop = () => {
	// tömma shop-diven först!
	const shopDiv = document.querySelector(".shop");
	shopDiv.innerHTML = "";

	for (const v of state.shop) {
		// skapa ny div-tag
		const vegetable = document.createElement("div");

		// lägg till text i div-taggen, ta text ifrån state
		vegetable.innerHTML = `${v.vegetable} (amount: ${v.amount})${
			v.color === undefined ? "" : ", " + v.color
		}`;

		// lägg till nya div-taggen i DOMen
		shopDiv.appendChild(vegetable);
	}
};

// här kommer appen:

state.addVegetable("Cucumber", 34);
renderShop();

document.querySelector(".add-vegetable").addEventListener("click", (e) => {
	e.preventDefault();

	//console.log(document.querySelector("#vegetable").value);
	//console.log(document.querySelector("#amount").value);

	state.addVegetable(
		document.querySelector("#vegetable").value,
		document.querySelector("#amount").value
	);

	//console.log(state);

	renderShop();
});
