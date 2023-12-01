let student1 = [];
let student2 = [];
let student3 = [];
const table1 = () => {
    document.getElementById("tbl1").innerHTML = student1.map((item, index) => {
        return (
            `<tr>
        <td>${item.stname}</td>
        <td>${item.rollnum}</d>
        <td>${item.suname}</td>
        <td>${item.Course}</td>
        <td>${item.scname}</td>
        </tr>`
        )
    })
}
table1();

const table2 = () => {
    document.getElementById("tbl2").innerHTML = student2.map((item, index) => {
        return (
            `<tr>
        <td>${item.stname}</td>
        <td>${item.rollnum}</td>
        <td>${item.suname}</td>
        <td>${item.Course}</td>
        <td>${item.scname}</td>
        </tr>`
        )
    })
}
table2();

const table3 = () => {
    document.getElementById("tbl3").innerHTML = student3.map((item, index) => {
        return (
            `<tr>
            <td>${item.stname}</td>
            <td>${item.rollnum}</td>
            <td>${item.suname}</td>
            <td>${item.Course}</td>
            <td>${item.scname}</td>
            </tr>`
        )
    })
}
table3();

const myfunction = () => {
    const stname = document.getElementById("stname").value;
    console.log(stname);
    const rollnum = document.getElementById("rollnum").value;
    console.log(rollnum);
    const suname = document.getElementById("suname").value;
    console.log(suname);
    const Course = document.getElementById("Course").value;
    console.log(Course);
    const scname = document.getElementById("scname").value;
    console.log(scname);
    const person = { stname: stname, rollnum: rollnum, suname: suname, Course: Course, scname: scname }
    switch (scname) {
        case 'School-1': {
            student1.push(person);
            console.log(student1);
            table1();
            break;
        }

        case 'School-2': {
            student2.push(person);
            console.log(student2);
            table2();
            break;
        }
        case 'School-3': {
            student3.push(person);
            console.log(student3);
            table3();
            break;
        }

    }
}




