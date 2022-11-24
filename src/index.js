import './index.css';
import { addNewScore, getAllScores} from './modules/helper.js';

const scoreForm = document.getElementById('score-form');
const refreshData = document.getElementById('refresh');

scoreForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let user = document.getElementById('name');
  let score = document.getElementById('score');

  const newScore = {
    user:user.value,
    score:Number(score.value)
  }
  addNewScore(newScore);
  user.value = '';
  score.value = '';
});

refreshData.addEventListener('click', getAllScores);
window.addEventListener('DOMContentLoaded' ,() => {
  getAllScores();
})