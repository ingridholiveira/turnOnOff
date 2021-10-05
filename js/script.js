const turnOnOff = document.getElementById('turnOnOff');
const valve = document.getElementById('valve');

function lampBroken () {
    return valve.src.indexOf ('broken') > -1
}

function valveOn () {
    if(!lampBroken ()){
        valve.src = 'img/on.jpg'
    } else {
        alert('Você quebrou a lâmpada! Economize energia!')
    }
}

function valveOff () {
    if(!lampBroken ()){
        valve.src = 'img/off.jpg'
    } else {
        alert('Você quebrou a lâmpada! Economize energia!')
    }
}

function valveBroken () {
    valve.src = 'img/broken.jpg'
}

function valveOnOff () {
    if ( turnOnOff.textContent == 'ACENDE' ) {
        valveOn();
        turnOnOff.textContent = 'APAGA';
    }else{
        valveOff();
        turnOnOff.textContent = 'ACENDE';
    }
}

turnOnOff.addEventListener ( 'click', valveOnOff );
valve.addEventListener('mouseover', valveOn);
valve.addEventListener('mouseleave', valveOff);
valve.addEventListener('dblclick', valveBroken);