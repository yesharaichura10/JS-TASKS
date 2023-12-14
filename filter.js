let data = [];
const table = () => {
    document.getElementById("tbl1").innerHTML = data.map((item, index) => {
        return (
            `<tr>
        <td>${item.fname}</td>
        <td>${item.email}</td>
        <td>${item.pwd}</td>
        <td><button onclick=newfunction(${index})>
        Delete
        </button></td>
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
    const person = {fname:fname,email:email,pwd:pwd};
    console.log(person);
    data.push(person);
    console.log(data);
    table();
}
table();
const newfunction = (value) =>{
    const Deleted = data.filter((item, index) => { return value !== index });

    console.log(Deleted)
    data = Deleted;
table();
}