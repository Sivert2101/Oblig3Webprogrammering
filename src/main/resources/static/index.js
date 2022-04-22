function regBillet() {
    document.getElementById("filmF").innerHTML = "";
    document.getElementById("antallF").innerHTML = "";
    document.getElementById("fornavnF").innerHTML = "";
    document.getElementById("etternavnF").innerHTML = "";
    document.getElementById("telefonnrF").innerHTML = "";
    document.getElementById("epostF").innerHTML = "";
    let test = true;
    let film = document.getElementById("film").value;
    if (film === "Velg film her") {
        document.getElementById("filmF").innerHTML = "Du må velge film";
        test = false;
    }

    let antall = document.getElementById("antall").value;
    if (antall === "") {
        document.getElementById("antallF").innerHTML = "Må skrive noe inn i antall";
        test = false;
    }

    let fornavn = document.getElementById("fornavn").value;
    if (fornavn === "") {
        document.getElementById("fornavnF").innerHTML = "Må skrive noe inn i fornavnet";
        test = false;
    }

    let etternavn = document.getElementById("etternavn").value;
    if (etternavn === "") {
        document.getElementById("etternavnF").innerHTML = "Må skrive noe inn i etternavnet";
        test = false;
    }

    let telefonnr = document.getElementById("telefonnr").value;
    if (telefonnr === "") {
        document.getElementById("telefonnrF").innerHTML = "Må skrive noe inn i telefonnr";
        test = false;
    }

    let epost = document.getElementById("epost").value;
    if (epost === "") {
        document.getElementById("epostF").innerHTML = "Må skrive noe inn i epost";
        test = false;
    }

    if (test) {
        const billet = {
            film: $("#film").val(),
            antall: $("#antall").val(),
            fornavn: $("#fornavn").val(),
            etternavn: $("#etternavn").val(),
            telefonnr: $("#telefonnr").val(),
            epost: $("#epost").val()
        };
        console.log(billet);

        $.post("/lagre", billet, function (){
            hentAlle();
        });
        $("#film").val("Velg film her");
        $("#antall").val("");
        $("#fornavn").val("");
        $("#etternavn").val("");
        $("#telefonnr").val("");
        $("#epost").val("");
    }
}

function hentAlle(){
    $.get("/hentAlle", function (data){
        formaterData(data);
    });
}

function formaterData(billet) {
    let ut = "<table class='table table-striped'><tr>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnr</th>" +
        "<th>Epost</th></tr>";
    for (const i of billet) {
        ut += "<tr>" +
            "<td>" + i.film + "</td>" +
            "<td>" + i.antall + "</td>" +
            "<td>" + i.fornavn + "</td>" +
            "<td>" + i.etternavn + "</td>" +
            "<td>" + i.telefonnr + "</td>" +
            "<td>" + i.epost + "</td></tr>";
    }
    ut += "</table>";
    $("#billettene").html(ut);
}

function slettAlle() {
    $.get("/slettAlle", function () {
        hentAlle();
    });
}