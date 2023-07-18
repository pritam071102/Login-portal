function help() {
    document.getElementById("help").innerHTML = "<i>Your password is your gender e.g.'Male'</i>";
    document.getElementsByClassName("help")[0].style.display = "none";
}
function f() {
    document.getElementsByClassName("container1")[0].style.display = "none";
    document.getElementsByClassName("container2")[0].style.display = "block";
    setTimeout(welcome, 7000);
}
function welcome() {
    document.getElementsByClassName("container2")[0].style.display = "none";
    document.getElementsByClassName("container3")[0].style.display = "block";
    var elem1 = document.getElementById("text").value;
    var elem2 = document.getElementById("text1").value;
    if (elem2 == 'Male') {
        document.getElementById("welcome").innerHTML = "You are ready to visit our Website " + "Mr. " + elem1;
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('sunset1.jpeg')";
    }
    else if (elem2 == 'male') {
        document.getElementById("welcome").innerHTML = "You are ready to visit our Website " + "Mr. " + elem1;
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('sunset1.jpeg')";
    }
    else if (elem2 == 'Female') {
        document.getElementById("welcome").innerHTML = "You are ready to visit our Website " + "Miss " + elem1;
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('sunset1.jpeg')";
    }
    else if (elem2 == 'female') {
        document.getElementById("welcome").innerHTML = "You are ready to visit our Website " + "Miss " + elem1;
        document.getElementsByTagName("body")[0].style.backgroundImage = "url('sunset1.jpeg')";
    }
    else {
        document.getElementsByClassName("container3")[0].style.display = "none";
        document.getElementsByTagName("body")[0].classList.add("error");
    }
}
function goto() {
    window.location.href = "https://my-info-2bzhegoy0-pritam071102.vercel.app";
}