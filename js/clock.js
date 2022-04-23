const clockTitle = document.querySelector('h1#clock');

function getTime() {
  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
  clockTitle.innerText = 
`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

}
setInterval(getTime, 1000);