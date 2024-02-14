// my coreer
const careerOnclick01 = document.querySelector('.careerOnclick');
const skillOnclick02 = document.querySelector('.skillOnclick');
const expOnclick03 = document.querySelector('.expOnclick');

const jobUL = document.querySelector('.careerOnclick ul');
const skillUL = document.querySelector('.skillOnclick ul');
const expUL = document.querySelector('.expOnclick ul');

careerOnclick01.addEventListener('click', () => {
  jobUL.classList.toggle('show');
});

skillOnclick02.addEventListener('click', () => {
  skillUL.classList.toggle('show');
});

expOnclick03.addEventListener('click', () => {
  expUL.classList.toggle('show');
});
 

