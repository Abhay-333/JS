const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');

btns.forEach(function (buttons) {
  buttons.addEventListener('click', function (event) {
    //  console.log(event.target)  // Gives the details on which element the event is occuring

    const Id = event.target.id;
    
    if (Id === 'blue') {
      body.style.backgroundColor = 'blue';
      body.style.color = 'white';
    } else if (Id === 'gray') {
      body.style.backgroundColor = 'grey';
      body.style.color = 'white';
    } else if (Id === 'yellow') {
      body.style.backgroundColor = 'yellow';
      body.style.color = 'black';
    } else if (Id === 'white') {
      body.style.backgroundColor = 'white';
      body.style.color = 'black';
    }
  });
});
