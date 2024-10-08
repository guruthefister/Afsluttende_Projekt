import data from "../../assets/JSON/data.json"

export const renderContact = async () => {
    const mpage = document.querySelector("#mainpage");
    mpage.replaceChildren();

    const cardContainer = document.createElement("section");
    cardContainer.id = "cardContainer";
    document.body.appendChild(cardContainer);

    const showImg = document.createElement("img");
    showImg.classList.add("showIMG");
    cardContainer.appendChild(showImg);
    
    const article = document.createElement("article");
    article.classList.add("article");
    cardContainer.appendChild(article);

    const heading = document.createElement("h2");
    heading.classList.add("heading");
    article.appendChild(heading);

    const text = document.createElement("p");
    text.classList.add("text__about");
    article.appendChild(text);

    const returnButton = document.createElement("button");
    returnButton.textContent = data.button;
    returnButton.id = "returnButton";

    mpage.appendChild(cardContainer);
    mpage.appendChild(returnButton);
}
