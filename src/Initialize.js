import { route } from "./router";
import data from "../assets/JSON/data.json"

export default class Initialize {

  constructor() {

    const header = document.createElement('header');
      header.id = "header";
      document.body.appendChild(header);

    const headline = document.createElement('h1')
      headline.id = "headline";
      headline.innerHTML = data.topBottom[0].header;
      header.appendChild(headline)
        
    const logo = document.createElement('logo');
      logo.id = "logo";
      header.appendChild(logo);

    const mainPage = document.createElement("main");
      mainPage.id = "mainpage";
      document.body.appendChild(mainPage);

    const footer = document.createElement('footer');
      footer.id = "footer";
      footer.textContent = data.topBottom[data.topBottom.length - 1].footer;
      document.body.appendChild(footer);

  } // END constructor
} // END class
