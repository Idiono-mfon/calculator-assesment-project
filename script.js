const getElem = (id) => document.getElementById(id);

let errorMsg = "Syntax Error";

// Get specific operator base on string data
const outputOperator = (elem, domElem) => {
  const data = domElem ? elem.id : elem;
  switch (data) {
    case "div":
      return " / ";
    case "plus":
      return "+";
    case "mul":
      return " * ";
    case "minus":
      return " - ";
    case "dot":
      return ".";
    case "pow":
      return "**";
    default:
      return data;
  }
};

const clearExpr = () => {
  getElem("exp-input").textContent = "";
  //getElem("exp-input").textContent = "";
};

const clearOnce = () => {
  let exp = getCurrentScreenData();
  exp = exp.slice(0, exp.length - 1);
  if (getCurrentResult().length !== 0) {
    getElem("result").textContent = "";
  }
  return (getElem("exp-input").textContent = exp);
};

const clearScreen = () => {
  getElem("result").textContent = "";
  getElem("exp-input").textContent = "";
};

const getCurrentScreenData = () => getElem("exp-input").textContent;

const getCurrentResult = () => getElem("result").textContent;

// Display result
const displayVal = (val, domElem = true) => {
  const data = outputOperator(val, domElem);
  const prevExp = getCurrentScreenData();
  const prevResult = getCurrentResult();
  clearExpr();
  getElem("result").textContent = "";
  if (prevResult.length !== 0 && prevResult !== errorMsg) {
    return (getElem("exp-input").textContent = prevResult + data);
  }
  return (getElem("exp-input").textContent = prevExp + data);
};

// Calculate result
const computeResult = () => {
  const exp = getElem("exp-input").textContent;
  try {
    getElem("result").textContent = eval(exp);
  } catch (error) {
    getElem("result").textContent = errorMsg;
  }
};

// Interact with keyboard event
const getKeyboardkey = () => {
  document.addEventListener("keydown", (evt) => {
    if (evt.repeat) {
      console.log("Yes repeated");
    } else {
      const key = evt.key;
      displayVal(key, false);
    }
  });
};

getKeyboardkey();
