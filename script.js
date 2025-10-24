
const flipBtn = document.getElementById('flip-btn');
const resultImg = document.getElementById('result-img');
const resultText = document.getElementById('result-text');
const catCount = document.getElementById('cat-count');
const dogCount = document.getElementById('dog-count');
const totalCount = document.getElementById('total-count');
const resetBtn = document.getElementById('reset-btn');


let cats = parseInt(localStorage.getItem('cats')) || 0;
let dogs = parseInt(localStorage.getItem('dogs')) || 0;
let total = cats + dogs;


function updateStats() {
  catCount.textContent = cats;
  dogCount.textContent = dogs;
  totalCount.textContent = total;
}


flipBtn.addEventListener('click', () => {
 
  resultImg.classList.add('flip');
  setTimeout(() => {
    resultImg.classList.remove('flip');

    
    const randomChoice = Math.floor(Math.random() * 2);

    if (randomChoice === 0) {
      resultImg.src = 'images/cat.png';
      resultText.textContent = 'You got Cat!';
      cats++;
    } else {
      resultImg.src = 'images/dog.png';
      resultText.textContent = 'You got Dog!';
      dogs++;
    }

    total = cats + dogs;
    updateStats();

    // Save stats
    localStorage.setItem('cats', cats);
    localStorage.setItem('dogs', dogs);
  }, 500);
});


resetBtn.addEventListener('click', () => {
  cats = 0;
  dogs = 0;
  total = 0;
  localStorage.clear();
  updateStats();
  resultImg.src = 'images/question.png';
  resultText.textContent = 'Click “Flip” to choose!';
});

/
updateStats();
