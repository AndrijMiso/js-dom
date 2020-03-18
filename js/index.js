var link = document.querySelector('a');

link.textContent = 'This is sait my Mew Car!';
link.href = 'https://www.facebook.com/groups/1068991656791818/';


var sect = document.querySelector('section');
var para = document.createElement('p');
sect.appendChild(para);
para.textContent = 'We hope you enjoyed the ride.';

// for (let i = 1; i <= 1000; i++) {
//     const p = document.createElement('p')
//     p.textContent = i + ' sam text...';
//     sect.appendChild(p);
// }

const clock = document.querySelector('.clock');
const showClock = () => clock.innerText = (new Date()).toLocaleTimeString(); 
setInterval(showClock, 10000);