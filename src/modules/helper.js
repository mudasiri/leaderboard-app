const scores = [
  {
    name: 'Mudasir Issah',
    score: 5000,
  },
  {
    name: 'Ali baba',
    score: 500,
  },
  {
    name: 'Ali Issah',
    score: 600,
  },
  {
    name: 'Mudasir Ali',
    score: 5010,
  },
];
// grab ul tag displaying list items
const scoresList = document.getElementById('scorelist');

// create arrow function to loop through and display list items
const displayScores = () => {
  scores.forEach((score) => {
    // append li to ul tag
    scoresList.insertAdjacentHTML('beforeend', `<li class='score-item'>${score.name}: ${score.score}</li>`);
  });
};
export default displayScores;