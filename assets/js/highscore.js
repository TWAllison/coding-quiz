var showHighscore = function () {

    var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];

    highscore.sort(function (a, b) {
        return b.score - a.score;
    });

                              
    highscore.forEach(function (score) {
        var scoreLi = document.createElement("li");
        scoreLi.textContent = score.initials + " - " +score.score;

        var olEl = document.querySelector('#highscore');
        olEl.appendChild(scoreLi);
    });
}

function clearHighscore() {
    window.localStorage.removeItem("highscore");
    window.location.reload();
}

document.getElementById("clear").onclick = clearHighscore;

showHighscore();