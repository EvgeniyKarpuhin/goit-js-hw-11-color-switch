const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const btn = {
      startBtn: document.querySelector('button[data-action="start"]'),
      stopBtn: document.querySelector('button[data-action="stop"]')
  }

  let interval = null;

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  
  random = ()=> {
      const color = colors[randomIntegerFromInterval(0, colors.length - 1)]
      document.body.style.backgroundColor = color
  }

btn.startBtn.addEventListener('click', el => interval = interval ? 
interval :
setInterval(() => random(), 1000))

btn.stopBtn.addEventListener('click', el => clearInterval(interval))

