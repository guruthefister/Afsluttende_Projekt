import data from "../../assets/JSON/data.json"
import { route } from "../router";

export const renderHome = () => {
const mpage = document.querySelector("#mainpage");
    mpage.replaceChildren();

/* loader af options */
const index = document.createElement("div");
index.id = "container";

data.content.forEach(element => {
    const wrapper = document.createElement("a");
    wrapper.id = "wrapper";
    wrapper.href = element.hr;
    wrapper.addEventListener("click", route)

    const caption = document.createElement("h2");
    caption.textContent = element.text;
    caption.id = "caption";

    const readmore = document.createElement("p");
    readmore.textContent = element.readMore;
    readmore.id = "readmore";

    wrapper.appendChild(caption);
    wrapper.appendChild(readmore)
    index.appendChild(wrapper);
});
mpage.appendChild(index);
/* loader af options */

};
