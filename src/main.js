import "./styles.css"
import home from "./home.js"
import menu from "./menu.js"
import about from "./about.js";
class Cafe {
    constructor(){
        this.navButtons = null;
        this.main = null;
    }
    init(){
        this.dom();
        this.eventLisner();
    }

    dom(){
        this.navButtons = document.querySelectorAll("nav button");
        this.main = document.querySelector('#content');
    }

    eventLisner(){
        this.navButtons.forEach(button => {
            button.addEventListener('click', (e) => this.changePage(e))
        });
    }

    resetButtons(){
        this.navButtons.forEach(
            button => {
                button.classList.remove("button-selected");
            }
        );
    }

    changePage(e){
        e.preventDefault();
        this.resetButtons();
        e.target.classList.add("button-selected");
        let page = e.target.dataset.page;
        this.main.innerHTML = "";
        switch (page) {
            case "home":
                console.log("home");
                home(this.main);
                break;
            case "menu":
                console.log("menu");
                menu(this.main);
                break;
            case "about":
                console.log("about");
                about(this.main);
                break;
        }
    }
}

const cafe = new Cafe();
cafe.init();