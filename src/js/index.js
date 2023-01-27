// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import { calculateAccordionHeight } from './accordion';

const accordionElement = document.getElementById('accordion');

accordionElement.addEventListener('click', e => {
  const element = e.target.nextElementSibling;
  calculateAccordionHeight(element);
});
