/**
 * stopPropagation()
 * @param e
 */
var onClick = function (e) {
    var $el = e.target;
    e.stopPropagation();
    $el.style.backgroundColor = 'yellow';
    alert('CLICK!');
};
//document.body.onclick = onClick;
box3.onclick = onClick;
box1.onclick = onClick;
box2.onclick = onClick;

/**
 * preventDefault()
 * @param e
 */
var onClickDef = function (e) {
    var $el = e.target;
    e.preventDefault();
    $el.style.backgroundColor = 'yellow';
    alert('CLICK!');
};
//document.body.onclick = onClickDef;
box4.onclick = onClickDef;
box5.onclick = onClickDef;
box6.onclick = onClickDef;


