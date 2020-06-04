document.addEventListener('click', function() {
  console.log("A click has occured");
});

const reallybig = document.getElementById('reallybig');

document.addEventListener('click', red);
function red () {

  document.getElementById('reallybig').style.backgroundColor = 'red';
};

document.addEventListener('scroll', clear);

function clear () {
  document.getElementById('reallybig').style.backgroundColor = 'white';

}
const shadowboxy = document.getElementById('shadowbox2');

document.addEventListener('mouseover', shadowSwitch);
document.addEventListener('mouseleave', shadowSwitch2);

function shadowSwitch (event) {
  if (event.target.className === 'shadowBox') {
  event.target.setAttribute('style', 'box-shadow: 5px 5px 20px grey;')
  }

}

function shadowSwitch2 (event) {
  if (event.target.className === 'shadowBox') {
    event.target.setAttribute('style', 'box-shadow: 5px 5px 10px grey;');
}
  }
