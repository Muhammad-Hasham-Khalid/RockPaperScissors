Person = {
    "scissors": false,
    "paper": false,
    "rock": false,
}
Computer = {
    "scissors": false,
    "paper": false,
    "rock": false,
}
win = {
    "Person": false,
    "Computer": false,
    "draw": false,
}

function initializer() {
    Person.rock = false;
    Person.scissors = false;
    Person.paper = false;
    Computer.rock = false;
    Computer.paper = false;
    Computer.scissors = false;
    win.Person = false;
    win.Computer = false;
    win.draw = false;
    document.getElementById("one").src = "white.png";
    document.getElementById("two").src = "white.png";
    //console.log(Person, Computer, win)
    document.getElementById("out").innerHTML = ""
    return 0;
}

function checkWinOrLose() {
    if ((Person.scissors && Computer.rock) || (Computer.paper && Person.rock) || (Computer.scissors && Person.paper))
        win.Computer = true;
    else if ((Person.scissors && Computer.paper) || (Person.rock && Computer.scissors) || (Person.paper && Computer.rock))
        win.Person = true;
    else if ((Person.scissors && Computer.scissors) || (Person.paper && Computer.paper) || (Person.rock && Computer.rock))
        win.draw = true;
    if (win.Computer) {
        //  alert("----Computer Wins----");
        document.getElementById("out").innerHTML = "---Computer Wins---";
    } else if (win.Person) {
        //  alert("----Player Won----");
        document.getElementById("out").innerHTML = "----Player Wins----";
    } else if (win.draw) {
        //alert("----Round Draw----");
        document.getElementById("out").innerHTML = "----Game Draw----";
    }
}

function computer() {
    var choice;
    choice = parseInt(Math.random() * 3);
    // console.log(choice)
    if (choice == 0) {
        Computer.paper = true;
        document.getElementById("two").src = "paper.png";
    } else if (choice == 1) {
        Computer.rock = true;
        document.getElementById("two").src = "rock.png";
    } else if (choice == 2) {
        Computer.scissors = true;
        document.getElementById("two").src = "scissors.png";
    }
    checkWinOrLose();
}

function rock() {
    initializer();
    Person.rock = true;
    computer();
    document.getElementById("one").src = "rock.png";

}

function paper() {
    initializer();
    Person.paper = true;
    document.getElementById("one").src = "paper.png";
    computer();
}

function scissors() {
    initializer();
    Person.scissors = true;
    document.getElementById("one").src = "scissors.png";
    computer();
}