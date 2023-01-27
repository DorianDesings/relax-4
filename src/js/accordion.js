const accordionItems = document.querySelectorAll('.accordion__body');

const hideAllItems = () => {
  accordionItems.forEach(item => (item.style.minHeight = 0));
};

const setAccordionHeight = (element, totalHeight) => {
  hideAllItems();
  element.style.minHeight = totalHeight + 'px';
};
const calculateAccordionHeight = element => {
  let totalHeight = 0;
  [...element.children].forEach(item => (totalHeight += item.clientHeight));
  setAccordionHeight(element, totalHeight);
};

export { calculateAccordionHeight, hideAllItems };
