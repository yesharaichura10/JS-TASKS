let records = [];
 const table1 = () => {
    document.getElementById("tbl1").innerHTML = records.map((item,index) => {
      return(
         `<tr>
            <td>${item.fname}</td>
            <td>${item.lname}</td>
            <td>${item.email}</td>
         </tr>`
      )
    }).join('');

    }
    table1();
    const myfunction = () =>{
         const fname = document.getElementById("fname").value;
         console.log(fname);
         const lname = document.getElementById("lname").value;
         console.log(lname);
         const email = document.getElementById("email").value;
         console.log(email);
         const person = {fname:fname , lname:lname , email:email};
         records.push(person);
         console.log(records);
         localStorage.setItem("dataa", JSON.stringify(records));
         table1();
   }
   const handleSort = () => {
      const select = document.getElementById("data").value;

      if (select === "fname"){
         let sorted = records.sort((a,b) => a.fname.localeCompare(b.fname))
         records = sorted;
      }   
     else if (select === "lname"){
         let sorted = records.sort((a,b) => a.lname.localeCompare(b.lname))
         records = sorted;
      }   
      else if (select === "email"){
         let sorted = records.sort((a,b) => a.email.localeCompare(b.email))
         records = sorted;
      }  
      table1();

   }

    
 
