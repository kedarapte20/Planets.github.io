var favPlanets = new Array();
$.getJSON('https://assignment-machstatz.herokuapp.com/planet', function (data) {
    var planets = JSON.stringify(data);
    var planet = JSON.parse(planets);
    var planet0 = document.getElementById("zero").innerHTML = planet[0].name;
    var planet1 = document.getElementById("one").innerHTML = planet[1].name;
    var planet2 = document.getElementById("two").innerHTML = planet[2].name;
    var planet3 = document.getElementById("three").innerHTML = planet[3].name;
    var planet4 = document.getElementById("four").innerHTML = planet[4].name;
    var planet5 = document.getElementById("five").innerHTML = planet[5].name;
    var planet6 = document.getElementById("six").innerHTML = planet[6].name;
    var planet7 = document.getElementById("seven").innerHTML = planet[7].name;
    var planet8 = document.getElementById("eight").innerHTML = planet[8].name;
    var planet9 = document.getElementById("nine").innerHTML = planet[9].name;
    var planet10 = document.getElementById("ten").innerHTML = planet[10].name;

    var favPlanets = new Array();

    $("#mercury").click(function () {
        var mercuryClick = true;
        if (mercuryClick === true) {
            favPlanets.push(planet0);
        }
        else {
            favPlanets.pop(planet0);
        }
    });

    $("#venus").click(function () {
        var venusClick = true;
        if (venusClick) {
            favPlanets.push(planet1);
        }
        else {
            favPlanets.pop(planet1);
        }
    });

    $("#earth").click(function () {
        var earthClick = true;
        if (earthClick) {
            favPlanets.push(planet2);
        }
        else {
            favPlanets.pop(planet2);
        }
    });

    $("#mars").click(function () {
        var marsClick = true;
        if (marsClick) {
            favPlanets.push(planet3);
        }
        else {
            favPlanets.pop(planet3);
        }
    });
    $("#ceres").click(function () {
        var ceresClick = true;
        if (ceresClick) {
            favPlanets.push(planet4);
        }
        else {
            favPlanets.pop(planet4);
        }
    });
    $("#jupiter").click(function () {
        var jupiterClick = true;
        if (jupiterClick) {
            favPlanets.push(planet5);
        }
        else {
            favPlanets.pop(planet5);
        }
    });
    $("#saturn").click(function () {
        var saturnClick = true;
        if (saturnClick) {
            favPlanets.push(planet6);
        }
        else {
            favPlanets.pop(planet6);
        }
    });
    $("#pluto").click(function () {
        var plutoClick = true;
        if (plutoClick) {
            favPlanets.push(planet7);
        }
        else {
            favPlanets.pop(planet7);
        }
    });
    $("#haumea").click(function () {
        var haumeaClick = true;
        if (haumeaClick) {
            favPlanets.push(planet8);
        }
        else {
            favPlanets.pop(planet8);
        }
    });
    $("#makemake").click(function () {
        var makeClick = true;
        if (makeClick) {
            favPlanets.push(planet9);
        }
        else {
            favPlanets.pop(planet9);
        }
    });
    $("#eris").click(function () {
        var erisClick = true;
        if (erisClick) {
            favPlanets.push(planet10);
        }
        else {
            favPlanets.pop(planet10);
        }
    });
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const btn = document.createElement('button');
    btn.innerText = "Add to Favorites";
    $("table").after(btn);
    btn.setAttribute("id", "element11");
    $("#element11").css("margin", "0 auto");


    const btn1 = document.createElement('button');
    btn1.innerText = "Delete Favorites";
    $("#favPl").after(btn1);
    btn1.setAttribute("id", "element12");



    btn.addEventListener('click', () => {
        $('input[type=checkbox]').prop('checked', false);
        ul = document.createElement('ul');

        document.getElementById('favPl').appendChild(ul);

        favPlanets.forEach(function (item) {

            let li = document.createElement('li');

            ul.appendChild(li);
            li.setAttribute("id", item);

            li.innerHTML += item;
        });

        $(btn1).click(function () {
            $("#favPl").text("");

        });
    });
});
