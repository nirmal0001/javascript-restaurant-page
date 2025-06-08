export default function about(e) {
    // Title
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "About Beary's Breakfast";
    e.appendChild(title);

    // Info section
    const info = document.createElement("div");
    info.classList.add("info", "border-style");

    const aboutText = document.createElement("p");
    aboutText.textContent = "Nestled in the heart of Forestville, Beary’s Breakfast has been serving hearty, homemade breakfasts to woodland wanderers and hungry hikers since 1999. Inspired by rustic forest charm, we pride ourselves on warm porridge, fresh coffee, and a place that feels like home.";

    const founder = document.createElement("h4");
    founder.textContent = "– Papa Bear, Founder";

    info.appendChild(aboutText);
    info.appendChild(founder);
    e.appendChild(info);
}
