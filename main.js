// start the game by changing the startButton to red
const start = document.getElementById('startButton');
const startGame = () => {
  start.style.backgroundColor= '#ff4273';
  start.style.padding='20px';
  start.style.borderRadius='5px';
  start.style.color='white';
  start.innerHTML="Let's go!";
};
start.onclick = startGame;

// change the innerHTML of a btn
const btn = document.getElementById('btn');
const star = document.getElementById('star');
const btnClicked = () => {
  btn.innerHTML="I'm a star";
  btn.style.backgroundColor='#ffe981';
  btn.style.padding='10px';
  star.style.display='inline-block';
  star.style.color='#ffe981';
  star.style.fontSize='24px';
};
btn.addEventListener('click', btnClicked);

// ball change style
const ball = document.getElementById('ball');
const newBall = document.getElementById('newBall');

const newBallShow = () => {
  ball.style.display= "none";
  newBall.style.display="block";
};

ball.onclick=newBallShow;

const getRunner = document.getElementById('get-runner');
const btnRun = document.getElementById('start-runner');
const runner = document.getElementById('runner');
const btnRunGame = () => {
  getRunner.style.display="none";
  btnRun.innerHTML="Click on the runner to start";
  btnRun.style.backgroundColor="#fcfcfc";
  btnRun.style.border="none";
  btnRun.style.color="#fa8383";
  btnRun.style.padding='5px';
  runner.style.display="block";
  running.style.display="none";
}

const running = document.getElementById('running');
const instruction = document.getElementById('instruction');

const runningGame = () => {
  runner.style.display="none";
  running.style.display="block";
  btnRun.style.display="none";
  instruction.style.display="block";
};

btnRun.onclick=btnRunGame;
runner.onclick=runningGame;

const run = () => {
  running.style.width="200px";
};

const moving = (e) => {
  const player1 = document.querySelector('#player1-race .active');
  if (e.key === "m") {
    player1.classList.remove('active');
    player1.nextElementSibling.classList.add('active');
  }
};

const movingToo = (e) => {
  const player2 = document.querySelector('#player2-race .active');
  if (e.key === "n") {
    player2.classList.remove('active');
    player2.nextElementSibling.classList.add('active');
  }
};

document.addEventListener('keyup', (moving));
document.addEventListener('keyup', (movingToo));

