let type = [];

const table = () => {
    document.getElementById("tbl1").innerHTML = type.map((item, index) => {
        return (
            `<tr>
         <td >${item.fname}</td>
        <td>${item.email}</d>
        <td>${item.pwd}</td> 
        <td><input type="checkbox" class='langg'/></td>
        </tr>`
        )
    }).join('');
}
table();
const myfunction = () => {
    const fname = document.getElementById("fname").value;
    console.log(fname);
    const email = document.getElementById("email").value;
    console.log(email);
    const pwd = document.getElementById("pwd").value;
    console.log(pwd);
    const person = { fname: fname, email: email, pwd: pwd, };
    console.log(person);
    type.push(person);
    console.log(type);
    table();
}
table();


function checkAll(e) {
    var checkboxes = document.getElementsByClassName('langg');
    console.log(checkboxes)

    if (e.checked) {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
}

function checkchange() {
    var totalcheckbox = document.querySelectorAll('input[class="langg"]').length;
    var totalchecked = document.querySelectorAll('input[class="langg"]:checked').length;

    if (totalcheckbox == totalchecked) {
        document.getElementsByClassName("lang")[0].checked = true;
    } else {
        document.getElementsByClassName("lang")[0].checked = false;
    }
}