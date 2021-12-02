const getElement = (selection, multiple = false) => {
  if (multiple) {
    const elements = document.querySelectorAll(selection);
    if (elements) return elements;
  } else {
    const element = document.querySelector(selection);
    if (element) return element;
  }
  throw new Error(`no element selected with selection : ${selection}`);
};
export default getElement;
