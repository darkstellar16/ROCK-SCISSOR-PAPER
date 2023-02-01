
function pc() {
    const opt = ["1", "2", "3"];
    const ans = Math.floor(Math.random() * opt.length);
    const x = document.getElementById("b2");
    if (ans === 0) {
        x.innerHTML = `<img src="sciss.png">`;
        document.getElementById("b1").style.backgroundColor = "#FF4370";
    }
    else if (ans === 1) {
        x.innerHTML = `<img src="rock.png">`;
        document.getElementById("b1").style.backgroundColor = "#FFD600";
    }
    else {
        x.innerHTML = `<img src = "paper.png">`;
        document.getElementById("b1").style.backgroundColor = "#CC00FF";
    }
    return ans + 1;
}

var x = 1;
var y = 1;
function scissor() {
    let ans1 = pc();

    if (ans1 === 1) {
        y = 0;
        document.getElementById("try").style.display = "block";
    }
    else if (ans1 === 3) {
        document.getElementById("w").innerHTML = "YOU WIN";
        document.getElementById("score").innerHTML = x++;
        document.getElementById("try").style.display = "none";
        document.getElementById("a1").style.boxShadow="0px 0px 0px 25px #031e8063";
        document.getElementById("b1").style.boxShadow="0px 0px 0px 0px ";

    }
    else if (ans1 === 2) {
        document.getElementById("w").innerHTML = "YOU LOST";
        document.getElementById("try").style.display = "none";
        document.getElementById("b1").style.boxShadow="0px 0px 0px 25px #031e8063";
        document.getElementById("a1").style.boxShadow="0px 0px 0px 0px ";

    }
}

function rocks() {
    let ans2 = pc();
    if (ans2 === 2) {
        y = 0;
        document.getElementById("try").style.display = "block";
    }
    else if (ans2 === 1) {
        document.getElementById("w").innerHTML = "YOU WIN";
        document.getElementById("score").innerHTML = x++;
        document.getElementById("try").style.display = "none";
        document.getElementById("a1").style.boxShadow="0px 0px 0px 25px #031e8063";
        document.getElementById("b1").style.boxShadow="0px 0px 0px 0px ";


    }
    else if (ans2 === 3) {
        document.getElementById("w").innerHTML = "YOU LOST";
        document.getElementById("try").style.display = "none";
        document.getElementById("b1").style.boxShadow="0px 0px 0px 25px #031e8063";
        document.getElementById("a1").style.boxShadow="0px 0px 0px 0px ";


    }
}

function papers() {
    let ans3 = pc();
    if (ans3 === 3) {
        y = 0;
        document.getElementById("try").style.display = "block";

    }
    else if (ans3 === 2) {
        document.getElementById("w").innerHTML = "YOU WIN";
        document.getElementById("score").innerHTML = x++;
        document.getElementById("try").style.display = "none";
        document.getElementById("a1").style.boxShadow="0px 0px 0px 25px #031e8063";
        document.getElementById("b1").style.boxShadow="0px 0px 0px 0px ";



    }
    else if (ans3 === 1) {
        document.getElementById("w").innerHTML = "YOU LOST";
        document.getElementById("try").style.display = "none";
        document.getElementById("b1").style.boxShadow="0px 0px 0px 25px #031e8063";
        document.getElementById("a1").style.boxShadow="0px 0px 0px 0px ";

    }
}

var btn1 = document.getElementById("sciss");
btn1.addEventListener('click', function () {
    scissor();
    if (y === 0) {
        document.getElementById("try").style.display = "block";
        document.getElementById("two").style.display = "block";
        y = 1;
    }
    else {
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "block";
        let x = document.getElementById("a2");
        x.innerHTML = `<img src="sciss.png">`;
        document.getElementById("a1").style.backgroundColor = "#FF4370";
    }
})

var btn2 = document.getElementById("rock");
btn2.addEventListener('click', function () {
    rocks();
    if (y === 0) {
        document.getElementById("try").style.display = "block";
        document.getElementById("two").style.display = "block";
        y = 1;
    }
    else {
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "block";
        let x = document.getElementById("a2");
        x.innerHTML = `<img src="rock.png">`;
        document.getElementById("a1").style.backgroundColor = "#FFD600";
    }

})

var btn3 = document.getElementById("paper");
btn3.addEventListener('click', function () {
    papers();
    if (y === 0) {
        document.getElementById("try").style.display = "block";
        document.getElementById("two").style.display = "block";
        y = 1;
    }
    else {
        document.getElementById("two").style.display = "none";
        document.getElementById("three").style.display = "block";
        let x = document.getElementById("a2");
        x.innerHTML = `<img src="paper.png">`;
        document.getElementById("a1").style.backgroundColor = "#CC00FF";
    }
})

var plybtn = document.getElementById("play");
plybtn.addEventListener('click', function () {

    document.getElementById("two").style.display = "block";
    document.getElementById("three").style.display = "none";

})
var plybtn1 = document.getElementById("four1");
plybtn1.addEventListener('click', function () {

    document.getElementById("four").classList.add("show");
})

document.getElementById("rule1").addEventListener('click', function () {
    document.getElementById("four").classList.toggle("show");
})