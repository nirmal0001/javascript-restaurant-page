export  default function home(e){
    // Title
    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = "Beary's Breakfast Bar";
    e.appendChild(title);

    // Info section
    const info = document.createElement("div");
    info.classList.add("info", "border-style");

    const infoText = document.createElement("p");
    infoText.textContent = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.";
    
    const author = document.createElement("h4");
    author.textContent = "Goldilocks";

    info.appendChild(infoText);
    info.appendChild(author);
    e.appendChild(info);

    // Timing section
    const timing = document.createElement("div");
    timing.classList.add("timing", "border-style");

    const hoursTitle = document.createElement("h3");
    hoursTitle.textContent = "Hours";

    const dl = document.createElement("dl");

    const hours = [
        { day: "Sunday", time: "8am - 8pm" },
        { day: "Monday", time: "6am - 6pm" },
        { day: "Tuesday", time: "6am - 6pm" },
        { day: "Wednesday", time: "6am - 6pm" },
        { day: "Thursday", time: "6am - 10pm" },
        { day: "Friday", time: "6am - 10pm" },
        { day: "Saturday", time: "8am - 10pm" },
    ];

    hours.forEach(({ day, time }) => {
        const dt = document.createElement("dt");
        dt.textContent = day;
        const dd = document.createElement("dd");
        dd.textContent = time;
        dl.appendChild(dt);
        dl.appendChild(dd);
    });

    timing.appendChild(hoursTitle);
    timing.appendChild(dl);
    e.appendChild(timing);

    // Location section
    const location = document.createElement("div");
    location.classList.add("location", "border-style");

    const locationTitle = document.createElement("h3");
    locationTitle.textContent = "Location";

    const address = document.createElement("p");
    address.textContent = "123 Forest Drive, Forestville, Maine";

    location.appendChild(locationTitle);
    location.appendChild(address);
    e.appendChild(location);
}