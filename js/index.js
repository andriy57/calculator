const display = document.querySelector(`.calculator .display`)

document
.querySelectorAll(`.clock`);
.forEach( digit => digit.addEventListener(`click`, digitPressed))

document
.querySelectorAll(`.opers button`);
.forEach( oper => oper.addEventListener(`click`, onkeyPress))

function digitPressed(ev) {
 display.value += ev.target.value;
}
document.querySelector(`.equal`).addEventListener(`click`, eq
display. value = eval
)