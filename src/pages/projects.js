import data from "../../assets/JSON/data.json"

export const renderProjects = async () => {
    const mpage = document.querySelector("#mainpage");
    mpage.replaceChildren();

    const cardContainer = document.createElement("section");
    cardContainer.id = "cardContainer";
    document.body.appendChild(cardContainer);
    
    const article = document.createElement("article");
    article.classList.add("article");
    cardContainer.appendChild(article);

    const heading = document.createElement("h2");
    heading.classList.add("heading");
    heading.textContent = data.projects[0].headline;
    article.appendChild(heading);

    const text = document.createElement("p");
    text.classList.add("text__about");
    text.textContent = data.projects[0].text;
    article.appendChild(text);

    const showImg = document.createElement("img");
    showImg.classList.add("showIMG");
    showImg.src = data.projects[0].img;
    cardContainer.appendChild(showImg);

    const returnButton = document.createElement("a");
    returnButton.textContent = data.button[0].text;
    returnButton.id = "returnButton";
    returnButton.href = "/"
    returnButton.addEventListener("click", window.route)

    const baggrundButton = document.createElement("div");
    baggrundButton.id = "BGbutton";
    baggrundButton.appendChild(returnButton)

    mpage.appendChild(cardContainer);
    mpage.appendChild(baggrundButton);
}
