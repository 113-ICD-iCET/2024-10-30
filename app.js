// console.log(Math.floor((Math.random()*10)+1));

// class Customer{
//     private String name;
//     private String address;
//     private int age;
//     private double salary;

//     Customer(name){
//         this.name=name;
//     }

//     // get
//     // set

//     public void setName(name){
//         this.name=name;
//     }

//     public void setAge(age){
//         if(age>18){
//             this.age=age;
//         }

//     }


// }




// saman.name="nimal"

// class Customer{
//     name;
//     age;
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }




// let customer2 = new Customer("saman",12);

// console.log(customer2);


// Customer saman = new Customer("saman");

// let customer = {
//     name: "saman",
//     age: 18,
//     address: "panadura",
//     salary: 7500.00
// }

// let customers = [
//     {
//         name: "saman",
//         age: 20,
//         address: "panadura"
//     },
//     {
//         name: "nimal",
//         age: "31",
//         address: "kalutara"
//     },
//     {
//         name: "sunil",
//         age: 51,
//         address: "moratuwa"
//     }

// ];

// customers.push({
//     name: "siripala",
//     age: 78,
//     address: "matugama"
// })

// customers.push({
//     name: "siripala",
//     age: 78,
//     address: "matugama"
// })


// function loadTable(){
//     let tblCustomerList =document.getElementById("tblCustomerList");
//     let body=`
//            <tr>
//             <th>Name</th>
//             <th>address</th>
//             <th>age</th>
//         </tr>`;

//     customers.forEach(customer =>{
//         body+=`
//         <tr>
//             <td>${customer.name}</td>
//             <td>${customer.address}</td>
//             <td>${customer.age}</td>
//         </tr>`;
//     })
//     tblCustomerList.innerHTML=body;
//     console.log(body);


// }
// loadTable();
// function addCustomer() {
//     let custName = document.getElementById("txtName").value;
//     let custAddress = document.getElementById("txtAddress").value;
//     let custAge = document.getElementById("txtAge").value;

//     customers.push({
//         name:custName,
//         address:custAddress,
//         age:custAge
//     });
//     loadTable();
//     console.log(customers);
// }

// -------------------------------------------------------------------------------------

let customer = {
    name: "saman",
    age: 20,
    address: "gampaha",
    email: "saman@gmail.com"
}

let customerList = [{
    name: "saman",
    age: 20,
    address: "gampaha",
    email: "saman@gmil.com"
}, {
    name: "nimal",
    age: 30,
    address: "panadura",
    email: "nimal@gmail.com"
}, {
    name: "nimal",
    age: 30,
    address: "panadura",
    email: "nimal@gmail.com"
}, {
    name: "nimal",
    age: 30,
    address: "panadura",
    email: "nimal@gmail.com"
}, {
    name: "nimal",
    age: 30,
    address: "panadura",
    email: "nimal@gmail.com"
}, {
    name: "nimal",
    age: 30,
    address: "panadura",
    email: "nimal@gmail.com"
}, {
    name: "nimal",
    age: 30,
    address: "panadura",
    email: "nimal@gmail.com"
}, {
    name: "nimal",
    age: 30,
    address: "panadura",
    email: "nimal@gmail.com"
}];

// for(let i =0; i<customerList.length;i++){
//     console.log(customerList[i]);

// }

// for(let customer of customerList){
//     console.log(customer);
// }

// let tblCustomers = document.getElementById("tblCustomerList");

// let tblBody="";

// customerList.forEach((customer) =>{
//   //  console.log(customer);
//     tblBody+=`
//             <tr>
//             <td>${customer.name}</td>
//             <td>${customer.address}</td>
//             <td>${customer.age}</td>
//             <td>${customer.email}</td>
//         </tr>`;  
// })
// tblCustomers.innerHTML=tblBody;

// //console.log(tblBody);


// //console.log(customerList[0]);

// // -----------------------------------------------------------------

// let customerNameList = document.getElementById("custNameList");
// let listBody="";
// customerList.forEach((customer)=>{
//     listBody+=`<li>${customer.name}</li>`
// })

// customerNameList.innerHTML=listBody;

// console.log(customerNameList);


// let col =document.getElementById("row");
// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(dataList => {
//         let colBody="";
//         dataList.forEach(product => {
//             colBody+=`
//         <div class="col" >
//             <div class="card" style="width: 18rem;">
//                 <img src=${product.image} class="card-img-top" alt="...">
//                  <div class="card-body">
//                     <h5 class="card-title">${product.title}</h5>
//                     <p class="card-text">${product.description}</p>
//                     <p>Price : ${product.price}$</p>
//                     <a href="#" class="btn btn-primary">Buy Now -> </a>
//                 </div>
//             </div>
//                  </div>
//             `
//         });
//         col.innerHTML=colBody;
//     })




