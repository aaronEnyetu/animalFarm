import { findById } from '../utils.js';
import { animals } from '../data.js';

const animalImage = document.getElementById('animal-image');
const animalName = document.getElementById('animal-name');
const animalQuote = document.getElementById('animal-quote');

const params = new URLSearchParams(window.location.search);
console.log(params.get('id'), animals);

const farmAnimals = findById(params.get('id'), animals);
console.log(farmAnimals);

animalName.textContent = farmAnimals.name;
animalImage.src = `../assets/${farmAnimals.type}.svg`;
animalQuote.textContent = farmAnimals.says;