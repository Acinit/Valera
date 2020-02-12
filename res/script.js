window.onload = createHTML()

var figure0 = ' _<br/>/ \\<br/>\\_/';
var figure1 = '<br/> /|<br/>  |';
var figure2 = '__<br/> _)<br/>/__';
var figure3 = '__<br/> _)<br/>__)';
var figure4 = '<br/>|_|<br/>  |';
var figure5 = ' __<br/>|_<br/>__)';
var figure6 = ' _<br/>/_<br/>\\_)';
var figure7 = '___<br/>  /<br/> /';
var figure8 = ' _<br/>(_)<br/>(_)';
var figure9 = ' _<br/>(_\\<br/> _/';
var point = '<br/>o<br/>o';
var pointTick = 0;

function createHTML() {
    var deg = 0;
    document.getElementById('clock').innerHTML = '<svg id="analogClock" xmlns="http://www.w3.org/2000/svg" version="1.1"></svg>'
    var clockAnalog = document.getElementById('analogClock')
    clockAnalog.innerHTML = `<circle cx="300" cy="300" r="298" stroke="#0D2E45" stroke-width="3" fill="none" />
                             <circle cx="300" cy="300" r="278" stroke="#0D2E45" stroke-width="3" fill="none" />`
    for (var i=0; i<12; i++){
        clockAnalog.innerHTML += '<path transform="rotate('+deg+', 300, 300)" d="M300,2 L300,22" stroke="#0D2E45" stroke-width="3" fill="none" />'
        deg += 30;
    }
    deg=0;
    clockAnalog.innerHTML += '<circle cx="300" cy="300" r="268" stroke="#0D2E45" stroke-width="2" fill="none" />'
    for (var i=0; i<60; i++){
        clockAnalog.innerHTML += '<path transform="rotate('+deg+', 300, 300)" d="M300,23 L300,32" stroke="#0D2E45" stroke-width="3" fill="none" />'
        deg+=6;
    }
    clockAnalog.innerHTML += `<circle cx="300" cy="300" r="238" stroke="#0D2E45" stroke-width="10" fill="none" />
                              <path id="LineS" transform="rotate(0, 300, 300)" d="M300,33 L305,60 L300,70 L295,60 z" stroke="#0D2E45" stroke-width="1" fill="#E5E1ED" />
                              <path id="LineM" transform="rotate(0, 300, 300)" d="M300,23 L305,33 L300,70 L295,33 z" stroke="#E5E1ED" stroke-width="1" fill="#0D2E45" />
                              <path Id="LineH" transform="rotate(0, 300, 300)" d="M300,3 L308,23 L300,70 L292,23 z" stroke="#000" stroke-width="1" fill="#FFF" /> `
    setInterval(analogClockStart, 1);
    document.getElementById('clock').innerHTML += `<div id="digitalСlock"><table class="time"><tr>
                                                  <td class="time" id="h1"></td>
                                                  <td class="time" id="h2"></td>
                                                  <td class="time" id="points1"></td>
                                                  <td class="time" id="m1"></td>
                                                  <td class="time" id="m2"></td>
                                                  <td class="time" id="points2"></td>
                                                  <td class="time" id="s1"></td>
                                                  <td class="time" id="s2"></td>
                                                  </tr ></table >
                                                  <div class="str">Create by DSY</div></div>`;
    setInterval(pointEdit, 900);
    setInterval(digitalClockStart, 100);
}

function analogClockStart(){
    var s = new Date().getSeconds() + '';
    var m = new Date().getMinutes() + '';
    var h = new Date().getHours() + '';
    degS = s * 6;
    degM = m * 6 + s*0.1;
    degH = h * 30 + m * 0.5;
    document.getElementById("LineS").setAttribute("transform", "rotate("+degS+", 300, 300)") 
    document.getElementById("LineM").setAttribute("transform", "rotate("+degM+", 300, 300)") 
    document.getElementById("LineH").setAttribute("transform", "rotate("+degH+", 300, 300)") 
}

function pointEdit() {
    if (pointTick == 1) {
        pointTick = 0;
        document.getElementById('points1').innerHTML = point;
        document.getElementById('points2').innerHTML = point;
    }
    else {
        pointTick = 1;
        document.getElementById('points1').innerHTML = ' ';
        document.getElementById('points2').innerHTML = ' ';
    }

}

function digitalClockStart() {
    var s = new Date().getSeconds() + '';
    var m = new Date().getMinutes() + '';
    var h = new Date().getHours() + '';
    var strH = h.split('');
    var strM = m.split('');
    var strS = s.split('');
    if (strH[1] == null) {
        var x1;
        if (strH[0] == 0 || strH[0] == null) { x1 = figure0 }
        if (strH[0] == 1) { x1 = figure1 }; if (strH[0] == 2) { x1 = figure2 }; if (strH[0] == 3) { x1 = figure3 }
        if (strH[0] == 4) { x1 = figure4 }; if (strH[0] == 5) { x1 = figure5 }; if (strH[0] == 6) { x1 = figure6 }
        if (strH[0] == 7) { x1 = figure7 }; if (strH[0] == 8) { x1 = figure8 }; if (strH[0] == 9) { x1 = figure9 }
        document.getElementById('h1').innerHTML = figure0;
        document.getElementById('h2').innerHTML = x1;
    }
    else {
        var x1;
        var x2;
        if (strH[0] == 0 || strH[0] == null) { x1 = figure0 }
        if (strH[0] == 1) { x2 = figure1 }; if (strH[0] == 2) { x2 = figure2 }; if (strH[0] == 3) { x2 = figure3 }
        if (strH[0] == 4) { x2 = figure4 }; if (strH[0] == 5) { x2 = figure5 }; if (strH[0] == 6) { x2 = figure6 }
        if (strH[0] == 7) { x2 = figure7 }; if (strH[0] == 8) { x2 = figure8 }; if (strH[0] == 9) { x2 = figure9 }
        if (strH[1] == 0 || strH[0] == null) { x1 = figure0 }
        if (strH[1] == 1) { x1 = figure1 }; if (strH[1] == 2) { x1 = figure2 }; if (strH[1] == 3) { x1 = figure3 }
        if (strH[1] == 4) { x1 = figure4 }; if (strH[1] == 5) { x1 = figure5 }; if (strH[1] == 6) { x1 = figure6 }
        if (strH[1] == 7) { x1 = figure7 }; if (strH[1] == 8) { x1 = figure8 }; if (strH[1] == 9) { x1 = figure9 }
        document.getElementById('h1').innerHTML = x2;
        document.getElementById('h2').innerHTML = x1;
    }

    if (strM[1] == null) {
        var x1;
        if (strM[0] == 0 || strM[0] == null) { x1 = figure0 }
        if (strM[0] == 1) { x1 = figure1 }; if (strM[0] == 2) { x1 = figure2 }; if (strM[0] == 3) { x1 = figure3 }
        if (strM[0] == 4) { x1 = figure4 }; if (strM[0] == 5) { x1 = figure5 }; if (strM[0] == 6) { x1 = figure6 }
        if (strM[0] == 7) { x1 = figure7 }; if (strM[0] == 8) { x1 = figure8 }; if (strM[0] == 9) { x1 = figure9 }
        document.getElementById('m1').innerHTML = figure0;
        document.getElementById('m2').innerHTML = x1;
    }
    else {
        var x1;
        var x2;
        if (strM[0] == 0 || strM[0] == null) { x1 = figure0 }
        if (strM[0] == 1) { x2 = figure1 }; if (strM[0] == 2) { x2 = figure2 }; if (strM[0] == 3) { x2 = figure3 }
        if (strM[0] == 4) { x2 = figure4 }; if (strM[0] == 5) { x2 = figure5 }; if (strM[0] == 6) { x2 = figure6 }
        if (strM[0] == 7) { x2 = figure7 }; if (strM[0] == 8) { x2 = figure8 }; if (strM[0] == 9) { x2 = figure9 }
        if (strM[1] == 0 || strM[0] == null) { x1 = figure0 }
        if (strM[1] == 1) { x1 = figure1 }; if (strM[1] == 2) { x1 = figure2 }; if (strM[1] == 3) { x1 = figure3 }
        if (strM[1] == 4) { x1 = figure4 }; if (strM[1] == 5) { x1 = figure5 }; if (strM[1] == 6) { x1 = figure6 }
        if (strM[1] == 7) { x1 = figure7 }; if (strM[1] == 8) { x1 = figure8 }; if (strM[1] == 9) { x1 = figure9 }
        document.getElementById('m1').innerHTML = x2;
        document.getElementById('m2').innerHTML = x1;
    }

    if (strS[1] == null) {
        var x1;
        if (strS[0] == 0 || strS[0] == null) { x1 = figure0 }
        if (strS[0] == 1) { x1 = figure1 }; if (strS[0] == 2) { x1 = figure2 }; if (strS[0] == 3) { x1 = figure3 }
        if (strS[0] == 4) { x1 = figure4 }; if (strS[0] == 5) { x1 = figure5 }; if (strS[0] == 6) { x1 = figure6 }
        if (strS[0] == 7) { x1 = figure7 }; if (strS[0] == 8) { x1 = figure8 }; if (strS[0] == 9) { x1 = figure9 }
        document.getElementById('s1').innerHTML = figure0;
        document.getElementById('s2').innerHTML = x1;
    }
    else {
        var x1;
        var x2;
        if (strS[0] == 0 || strS[0] == null) { x1 = figure0 }
        if (strS[0] == 1) { x2 = figure1 }; if (strS[0] == 2) { x2 = figure2 }; if (strS[0] == 3) { x2 = figure3 }
        if (strS[0] == 4) { x2 = figure4 }; if (strS[0] == 5) { x2 = figure5 }; if (strS[0] == 6) { x2 = figure6 }
        if (strS[0] == 7) { x2 = figure7 }; if (strS[0] == 8) { x2 = figure8 }; if (strS[0] == 9) { x2 = figure9 }
        if (strS[1] == 0 || strS[0] == null) { x1 = figure0 }
        if (strS[1] == 1) { x1 = figure1 }; if (strS[1] == 2) { x1 = figure2 }; if (strS[1] == 3) { x1 = figure3 }
        if (strS[1] == 4) { x1 = figure4 }; if (strS[1] == 5) { x1 = figure5 }; if (strS[1] == 6) { x1 = figure6 }
        if (strS[1] == 7) { x1 = figure7 }; if (strS[1] == 8) { x1 = figure8 }; if (strS[1] == 9) { x1 = figure9 }
        document.getElementById('s1').innerHTML = x2;
        document.getElementById('s2').innerHTML = x1;
    }
}