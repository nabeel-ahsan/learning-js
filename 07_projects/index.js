// project 1

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach((button) => {
  console.log(button);
  button.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    const choice = event.target.id;
    switch (choice) {
      case 'grey':
        body.style.backgroundColor = event.target.id;
        break;
      case 'white':
        body.style.backgroundColor = event.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = event.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;
    }
  });
});
