let type = [];

const table1 = () => {
        document.getElementById("tbl1").innerHTML = type.map((item,index) => {
            return (
                `<tr>
            <td>${item.fname}</td>
            <td>${item.email}</d>
            <td>${item.pwd}</td>
            </tr>`
            )
        }).join('');
    }
    table1();
    const myfunction = () => {
        const fname = document.getElementById("fname").value;
        console.log(fname);
        const email = document.getElementById("email").value;
        console.log(email);
        const pwd = document.getElementById("pwd").value;
        console.log(pwd);
        const person = {fname:fname,email:email,pwd:pwd};
        console.log(person);
        type.push(person);
        console.log(type);
        table1();
    }