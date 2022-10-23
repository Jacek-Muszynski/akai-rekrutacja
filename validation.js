function validation() {
    let imie = document.getElementById("first-name").value;
    let nazwisko = document.getElementById("last-name").value;
    let email = document.getElementById("email").value;
    let wynik = "Twoje dane: "+imie+" "+nazwisko+" "+email;
    let sekcje = "";
    if(document.getElementById("frontend-checkbox").checked){
        sekcje += document.getElementById("frontend-checkbox").value+" ";
    }
    if(document.getElementById("backend-checkbox").checked){
        sekcje += document.getElementById("backend-checkbox").value+" ";
    }
    if(document.getElementById("mobile-checkbox").checked){
        sekcje += document.getElementById("mobile-checkbox").value+" ";
    }
    if(document.getElementById("graphics-checkbox").checked){
        sekcje += document.getElementById("graphics-checkbox").value+" ";
    }
    //zmieniamy kolor na czerowny gdy dane źle wypełnione na zielony gdy dobrze
    //Sprawdzamy czy pola są wypłenione
    if(imie == "" || nazwisko == "" || email == 0){
        document.getElementById("wynik").innerHTML = "Wypełnij wszystkie pola";
        document.getElementById("wynik").style.color = "red";
        return;
    }
    //Sprawdzamy czy użytkownik wybrał sekcje
    if(sekcje == ""){
        document.getElementById("wynik").innerHTML = "Zaznacz przynajmniej jedną sekcje";
        document.getElementById("wynik").style.color = "red";
        return;
    }
    //Sprawdzamy czy imie i nazwisko ma wielką literę z przodu
    if(imie[0].toUpperCase() !== imie[0] || nazwisko[0].toUpperCase() !== nazwisko[0]) {
        document.getElementById("wynik").innerHTML = "Wpisz imię i nazwisko z wielkiej litery";
        document.getElementById("wynik").style.color = "red";
        return;   
        }
    //Sprawdzamy czy imię i nazwisko ma więcej niż 2 litery
    if(imie.length <= 2 || nazwisko.length <= 2){
        document.getElementById("wynik").innerHTML = "Imię i nazwisko musi mieć więcej niż 2 litery";
        document.getElementById("wynik").style.color = "red";
        return;
        }
    //Sprawdzamy czy imię i nazwisko nie ma wielkich liter w środku lub na końcu
    for(let i=1; i<imie.length; i++){
        if(imie[i] === imie[i].toUpperCase()){
            document.getElementById("wynik").innerHTML = "Imię nie może mieć wielkiej litery poza pierwszą pozycją";
            document.getElementById("wynik").style.color = "red";
            return;
        }
    }
    for(let i=1; i<nazwisko.length; i++){
        if(nazwisko[i] === nazwisko[i].toUpperCase()){
            document.getElementById("wynik").innerHTML = "Nazwisko nie może mieć wielkiej litery poza pierwszą pozycją";
            document.getElementById("wynik").style.color = "red";
            return;
    }
    }
    //Sprawdzamy czy adres email ma @
    if(!email.includes("@")){
        document.getElementById("wynik").innerHTML = 'Email musi zawierać "@"';
        document.getElementById("wynik").style.color = "red";
        return;
    }
    document.getElementById("wynik").style.color = "green";
    document.getElementById("wynik").innerHTML = "Twoje dane: "+wynik+"<br><br>"+"Wybrane przez ciebie sekcje: "+sekcje;
}