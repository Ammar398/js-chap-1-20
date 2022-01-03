var student1 = {
    name: "Muhammad Ammar Hussain",
    fathername: "Muhammad Shakir Hussain",
    rollno: " 31067",
    result: "89%",
    contactno: "03172495209",
}
var student2 = {
    name: "Muhammad Ahsan asif ",
    fathername: "Muhammad Asif",
    rollno: " 31087",
    result: "99% ",
    contactno: "03172495299",
}
var student3 = {
    name: "Muslim hussain",
    fathername: "Ammar hussain",
    rollno: " 31097",
    result: "82%",
    contactno: "03172995209",
}
var student4 = {
    name: "Ahmed aKhter",
    fathername: "Akhter",
    rolno: "31047",
    result: " 79 % ",
    contactno: "03178795209",
}
var student5 = {
    name: "Abdul Basit",
    fathername: "Muhammad Asif",
    rollno: " 31057",
    result: " 87 % ",
    contactno: "03198495209",
}
var student6 = {
    name: "Ghulam hussain",
    fathername: "Rasool hussain",
    rollno: " 31897",
    result: " 89 % ",
    contactno: "0319878209",
}
var student7 = {
    name: "Ahmed Raza Yaseen",
    fathername: "Yaseen",
    rollno: " 31957",
    result: " 85 % ",
    contactno: "03799495209",
}
var student8 = {
    name: "Farjad kareem",
    fathername: "Muhammad kareem",
    rollno: " 91057",
    result: " 81 % ",
    contactno: "03198495209",
}
var student9 = {
    name: "Maaz khalid",
    fathername: "Khalid hussain",
    rollno: " 31059",
    result: " 78 % ",
    contactno: "03198495209",
}
var student10 = {
    name: "Noman ali",
    fathername: "Ali murtaza",
    rollno: " 35057",
    result: " 83 % ",
    contactno: "03198495209",
}

var studentlist = [student1, student2, student3, student4, student5 , student6 ,student7, student8 , student9 , student10];
for (var i = 0; i < studentlist.length; i++) {
    studentlist[i].rollno = i + 1;

}

var studentdata = document.getElementById("borotodo");
for (var i = 0; i < studentlist.length; i++) {
    var obj = studentlist[i];

    studentdata.innerHTML += "<tr> <td>" + obj.rollno +
        "</td><td>" + obj.name + "</td> <td>" + obj.fathername + "</td> <td>" + obj.contactno + "</td> <td>" + obj.result + "</td> </tr>";
}

function prop() {
    var inp = document.getElementById("inp");
    var studentdatas = document.getElementById("todoboro")

    for (var i = 0; i < studentlist.length; i++) {
        var std = studentlist[i];
        if (inp.value == std.rollno) {
            studentdatas.innerHTML = "<tr> <td>" + std.rollno +
                "</td><td>" + std.name + "</td> <td>" + std.fathername + "</td> <td>" + std.contactno + "</td> <td>" + std.result + "</td> </tr>";
        }
    }
}