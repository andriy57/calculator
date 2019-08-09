const display = document.querySelector(`.calculator .display`)

document
.querySelectorAll(`.clock`);
.forEach( digit => digit.addEventListener(`click`, digitPressed))

document
.querySelectorAll(`.opers button`);
.forEach( oper => oper.addEventListener(`click`, onkeyPress))

document.querySelector(`.equal`).addEventListener(`click`, digitPressed
display. value = eval
)
function digitPressed(ev) {
 display.value += ev.target.value;
}