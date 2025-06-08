export default function menu(e) {
    // Title
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Beary's Breakfast Menu";
    e.appendChild(title);

    // Coffee menu section
    const coffeeMenu = document.createElement("div");
    coffeeMenu.classList.add("timing", "border-style");

    const coffeeHeading = document.createElement("h3");
    coffeeHeading.textContent = "Coffee Menu";

    const dl = document.createElement("dl");

    const coffees = [
        { name: "Bearccino", price: "₹120" },
        { name: "Honey Drip Brew", price: "₹150" },
        { name: "Porridge Latte", price: "₹130" },
        { name: "Forest Espresso", price: "₹100" },
    ];

    coffees.forEach(({ name, price }) => {
        const dt = document.createElement("dt");
        dt.textContent = name;

        const dd = document.createElement("dd");
        dd.textContent = price;

        dl.appendChild(dt);
        dl.appendChild(dd);
    });

    coffeeMenu.appendChild(coffeeHeading);
    coffeeMenu.appendChild(dl);
    e.appendChild(coffeeMenu);
}
