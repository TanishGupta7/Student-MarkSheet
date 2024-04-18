var a, b, c, d, e;

function doTotal() {
    a = document.getElementById("c").value;
    b = document.getElementById("cpp").value;
    c = document.getElementById("java").value;
    d = document.getElementById("pyt").value;
    e = document.getElementById("js").value;
    var total = parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e);
    document.getElementById("mrkstotal").value = total;
}
function doPer() {
    a = document.getElementById("c").value;
    b = document.getElementById("cpp").value;
    c = document.getElementById("java").value;
    d = document.getElementById("pyt").value;
    e = document.getElementById("js").value;
    var total = (parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e)) / 5;
    document.getElementById("mrksper").value = total;
}
function doGrade() {
    a = document.getElementById("c").value;
    b = document.getElementById("cpp").value;
    c = document.getElementById("java").value;
    d = document.getElementById("pyt").value;
    e = document.getElementById("js").value;
    var marks = (parseFloat(a) + parseFloat(b) + parseFloat(c) + parseFloat(d) + parseFloat(e)) / 5;

    if (marks < 0 || marks > 100) {
        document.getElementById("mrksgrade").value = "Wrong Entry!";
    }
    else if (marks < 50) {
        document.getElementById("mrksgrade").value = "Grade F";
    }
    else if (marks >= 50 && marks < 60) {
        document.getElementById("mrksgrade").value = "Grade D";
    }
    else if (marks >= 60 && marks < 70) {
        document.getElementById("mrksgrade").value = "Grade C";
    }
    else if (marks >= 70 && marks < 80) {
        document.getElementById("mrksgrade").value = "Grade B";
    }
    else if (marks >= 80 && marks < 90) {
        document.getElementById("mrksgrade").value = "Grade A";
    }
    else {
        document.getElementById("mrksgrade").value = "Grade A+";
    }

}
function doClear() {
    document.getElementById("c").value = " ";
    document.getElementById("cpp").value = " ";
    document.getElementById("java").value = " ";
    document.getElementById("pyt").value = " ";
    document.getElementById("js").value = " ";
    document.getElementById("mrkstotal").value = " ";
    document.getElementById("mrksper").value = " ";
    document.getElementById("mrksgrade").value = " ";
}
function chkc() {
    var refA = document.getElementById("c");
    var errA = document.getElementById("errA");
    var val = refA.value;

    if (val == "") {
        refA.style.backgroundColor = "red";
        errA.innerHTML = "Fill marks please.!";
    }
    else if (isNaN(val) == true) {
        refA.style.backgroundColor = "red";
        errA.innerHTML = "Fill number only.!";
    }
    else if (val > 100) {
        refA.style.backgroundColor = "red";
        errA.innerHTML = "Fill marks less than 100.!";
    }
    else {
        refA.style.backgroundColor = "green";
        errA.innerHTML = "Good.!";
    }
}

// function chkcpp(txtRef,errRef){
//       if(txtRef.value==""){
//         txtRef.style.backgroundColor="red";
//         errRef.innerHTML="Fill marks please.!";
//       }     
//        else if(val>100){
//         txtRef.style.backgroundColor="red";
//         errRef.innerHTML="Fill marks less than 100.!";
//        }
//        else{
//         txtRef.style.backgroundColor="green";
//         errRef.innerHTML="Good.!";
//        }
// }


function chkcpp() {
    var refB = document.getElementById("cpp");
    var errB = document.getElementById("errB");
    var val = refB.value;

    if (val == "") {
        refB.style.backgroundColor = "red";
        errB.innerHTML = "Fill marks please.!";
    }
    else if (isNaN(val) == true) {
        refB.style.backgroundColor = "red";
        errB.innerHTML = "Fill number only.!";
    }
    else if (val > 100) {
        refB.style.backgroundColor = "red";
        errB.innerHTML = "Fill marks less than 100.!";
    }
    else {
        refB.style.backgroundColor = "green";
        errB.innerHTML = "Good.!";
    }
} 
function chkcpp() {
    var refB = document.getElementById("cpp");
    var errB = document.getElementById("errB");
    var val = refB.value;

    if (val == "") {
        refB.style.backgroundColor = "red";
        errB.innerHTML = "Fill marks please.!";
    }
    else if (isNaN(val) == true) {
        refB.style.backgroundColor = "red";
        errB.innerHTML = "Fill number only.!";
    }
    else if (val > 100) {
        refB.style.backgroundColor = "red";
        errB.innerHTML = "Fill marks less than 100.!";
    }
    else {
        refB.style.backgroundColor = "green";
        errB.innerHTML = "Good.!";
    }
}
function chkjava() {
    var refC = document.getElementById("java");
    var errC = document.getElementById("errC");
    var val = refC.value;

    if (val == "") {
        refC.style.backgroundColor = "red";
        errC.innerHTML = "Fill marks please.!";
    }
    else if (isNaN(val) == true) {
        refC.style.backgroundColor = "red";
        errC.innerHTML = "Fill number only.!";
    }
    else if (val > 100) {
        refC.style.backgroundColor = "red";
        errC.innerHTML = "Fill marks less than 100.!";
    }
    else {
        refC.style.backgroundColor = "green";
        errC.innerHTML = "Good.!";
    }
}
function chkpyt() {
    var refD = document.getElementById("pyt");
    var errD = document.getElementById("errD");
    var val = refD.value;

    if (val == "") {
        refD.style.backgroundColor = "red";
        errD.innerHTML = "Fill marks please.!";
    }
    else if (isNaN(val) == true) {
        refD.style.backgroundColor = "red";
        errD.innerHTML = "Fill number only.!";
    }
    else if (val > 100) {
        refD.style.backgroundColor = "red";
        errD.innerHTML = "Fill marks less than 100.!";
    }
    else {
        refD.style.backgroundColor = "green";
        errD.innerHTML = "Good.!";
    }
}
function chkjs() {
    var refE = document.getElementById("js");
    var errE = document.getElementById("errE");
    var val = refE.value;

    if (val == "") {
        refE.style.backgroundColor = "red";
        errE.innerHTML = "Fill marks please.!";
    }
    else if (isNaN(val) == true) {
        refE.style.backgroundColor = "red";
        errE.innerHTML = "Fill number only.!";
    }
    else if (val > 100) {
        refE.style.backgroundColor = "red";
        errE.innerHTML = "Fill marks less than 100.!";
    }
    else {
        refE.style.backgroundColor = "green";
        errE.innerHTML = "Good.!";
    }
    if (document.getElementById("c").style.backgroundColor == "green" && document.getElementById("cpp").style.backgroundColor == "green" && document.getElementById("java").style.backgroundColor == "green" && document.getElementById("pyt").style.backgroundColor == "green" && document.getElementById("js").style.backgroundColor == "green") {
        {
            document.getElementById("btntotal").disabled = false;
            document.getElementById("btnper").disabled = false;
            document.getElementById("btngrade").disabled = false;
        }
    }
    else {
        document.getElementById("btntotal").disabled = true;
        document.getElementById("btnper").disabled = true;
        document.getElementById("btngrade").disabled = true;
    }
}