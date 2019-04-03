import nav from "./nav";
import { top, bottom } from "./footer";
import buttonName from "./button";
import { makeColorStyle } from "./button-styles";
import { footer } from "./footer";
import "./footer.css";
import "./button.css";
import imageURL from "./icon.jpg";
import makeImage from "./image";
const image = makeImage(imageURL);
console.log(imageURL);
const button = buttonName("yay make button");
button.style = makeColorStyle("cyan");
document.body.appendChild(button);
document.body.appendChild(footer);
document.body.appendChild(image);

console.log(nav, bottom, top, buttonName("my button"), makeColorStyle("cyan"));
