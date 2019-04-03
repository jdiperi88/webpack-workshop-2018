//take a str, the button label and return a element
const makeButton = buttonName => {
  const buttonLabel = `Button: ${buttonName}`;
  let button = document.createElement("button");
  button.innerText = buttonLabel;
  return button;
};

module.exports = makeButton;
