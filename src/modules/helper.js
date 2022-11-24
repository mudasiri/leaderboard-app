const gameID = 'GKu1RIiZvbXu9pzTde2x';

// grab ul tag displaying list items
const scoresList = document.getElementById('scorelist');

// create arrow function to loop through and display list items
export const displayScores = (scores) => {
  scoresList.innerHTML = '';
  scores.forEach((score) => {
    // append li to ul tag
    scoresList.insertAdjacentHTML('beforeend', `<li class='score-item'>${score.user}: ${score.score}</li>`);
  });
};

// show status of added form
const showStatus = (message) => {
  const statusDiv = document.getElementById('status');
  if (message.includes('provide')) {
    statusDiv.className = 'error';
  } else {
    statusDiv.className = 'success';
  }
  statusDiv.insertAdjacentHTML('beforeend', `<p>${message}</p>`);
};

export const getAllScores = async () => {
  try {
    const req = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`);
    const data = await req.json();

    if (!req.ok) {
      return data;
    }

    const scores = data.result;
    displayScores(scores);
    return scores;
  } catch (error) {
    return error;
  }
};

export const addNewScore = async (newScore) => {
  try {
    const req = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newScore),
    });
    const data = await req.json();

    if (!req.ok) {
      showStatus(data.message);
      return data;
    }

    getAllScores();
    showStatus(data.result);
    return data;
  } catch (error) {
    return error;
  }
};

export const createNewGame = async () => {
  const gameName = {
    name: 'Mudasir Issah Leaderboard Game',
  };

  try {
    const req = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameName),
    });

    const result = await req.json();

    if (!req.ok) {
      return result;
    }
    return result;
  } catch (error) {
    return error;
  }
};