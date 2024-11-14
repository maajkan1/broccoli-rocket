// state = all den data som appen har lagrat utifrån vad användaren gör
// state innheåller också vår config eller "start-värden"

const state = {
	shop: [
		//{ vegetable: "Broccoli", amount: 12, color: "green" },
		//{ vegetable: "Potato", amount: 25, color: "brown" },
		//{ vegetable: "Onion", amount: 8 },
	],
	order: [],
	addVegetable: function (vegetable, amount, color) {
		const vegetables = [ {veg: 'Cucumber', emoji: '🥒'},
			{veg: 'Carrot' , emoji: '🥕'},
			{veg: 'Avocado', emoji: '🥑'},
			{veg: 'Mushroom', emoji: '🍄'},
			{veg: 'Eggplant', emoji: '🍆'},
			{veg: 'Potato', emoji: '🥔'},
			{veg: 'Corn', emoji: '🌽'},
			{veg: 'Pepper', emoji: '🌶️'},
			{veg: 'Broccoli', emoji: '🥦'},
			{veg: 'Garlic', emoji: '🧄'},
			{veg: 'Onion', emoji: '🧅'}
]
let vegEmoji = '';
const normalizedVegetable = vegetable.toLowerCase();
for (const item of vegetables) {
	if (item.veg.toLowerCase() === normalizedVegetable) {
		vegEmoji = item.emoji;
		break;
	}
}

		// add vegetable
		this.shop.push({ vegetable, amount, color, vegEmoji });
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
        const buttons = document.createElement("div");
		// lägg till text i div-taggen, ta text ifrån state
		vegetable.innerHTML = `${v.vegEmoji}${v.vegetable} (amount: ${v.amount})${
			v.color === undefined ? "" : ", " + v.color
		}`;
		const addButton = document.createElement("button");
		addButton.innerHTML = '+';	
		addButton.onclick = function () {
			v.amount +++ 1;
			renderShop();
		};
		const minusButton = document.createElement("button");
		minusButton.innerHTML = '-';
		minusButton.onclick = function () {
			if (v.amount > 0) v.amount -= 1;
			renderShop();
		};
		buttons.appendChild(minusButton);
		buttons.appendChild(addButton);
		// lägg till nya div-taggen i DOMen
		vegetable.appendChild(buttons);
		shopDiv.appendChild(vegetable);
	}
};

// här kommer appen:

state.addVegetable("Cucumber", 34, "Green");
renderShop();

document.querySelector(".add-vegetable").addEventListener("click", (e) => {
	e.preventDefault();

	//console.log(document.querySelector("#vegetable").value);
	//console.log(document.querySelector("#amount").value);
    //console.log(document.querySelector("#color").value);
	state.addVegetable(
		document.querySelector("#vegetable").value,
		document.querySelector("#amount").value,
		document.querySelector("#colors").value
	);

	//console.log(state);

	renderShop();

	//Gör att formen blir nollställd med e.prevdefault()
	const vegetableInput = document.getElementById('vegetable');
	const amountInput = document.getElementById('amount');
	const colorInput = document.getElementById('colors');
	vegetableInput.value = "";
    amountInput.value = "";
	colorInput.value = "";
});
