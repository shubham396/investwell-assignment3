const form = document.querySelector("form");
const output = document.querySelector("#printArray");
// const delBtn = document.querySelector("#del_btn");
// const dingdong = document.querySelector("#login");
// const block=document.getElementById('block');




document.getElementById("signup").addEventListener('click', ()=>{
    document.getElementById("signup-form").style.display = "block";
    
    document.getElementById("login-form").style.display = "none";
    document.getElementById("login-table").style.display = "none";
    document.getElementById("update-form").style.display="none";
})
document.getElementById("login").addEventListener('click', ()=>{
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none"; 
})

document.getElementById("loginBtn").addEventListener("click",loginuser);


function loginuser(e){
// document.getElementById("login-form").addEventListener('click', ()=>{  
  e.preventDefault();
  console.log("test");
  document.getElementById("update123").style.display="block";
  var username = document.getElementById("username1").value;
  var password = document.getElementById("password1").value;

  // validation(username);

//newly tabla 
let waxi= { username , password};
  
// console.log(waxi);
$.ajax({
  
  url: "http://localhost:3001/signin",
  type: "POST",
  data : waxi,
  success: function(result){
    
    console.log("hello",result);
    if(typeof result ==="string"){
      alert(result);
    }
    else{
      let str=
      typeof result!="string" > 0
      ? `<tr class = "header">
      <th>Name</th>
      <th>last name</th>
      <th>phone_number</th>
      <th>gender</th>
      <th>Email</th>
      <th>password</th></tr>` 
      :"NO data in databse";

      str += `<tr>
      <td>${result.username}</td>
      <td>${result.last_name}</td>
    
      <td>${result.phone_number}</td>
    
      <td>${result.gender}</td>
    
      <td>${result.email}</td>
       
      </tr>`;

      const output = document.getElementById("login-table");
      output.innerHTML=str;

      }

  },
  error: function(error){
    console.log(error);
  }
})
}







let secondaryArray = [];
let secondaryMap = new Map();

form.addEventListener("submit", (event) => {

  event.preventDefault();

  let obj = {
    username : document.querySelector("#username").value,
    last_name : document.querySelector("#last_name").value,
    phone_number : document.querySelector("#phone_number").value,
    gender : document.querySelector("#gender").value,
    email : document.querySelector("#email").value,
    password : document.querySelector("#password").value ,
   // confirmpassword : document.querySelector("#confirmpassword").value
  }
// console.log("hello kingsta");
 // if(obj.password == obj.confirmpassword){
  console.log("kingsta ")
  console.log(obj);
  secondaryArray.push(obj);
  secondaryMap.set(document.querySelector("#email").value, obj)
  datagiven(obj);
  //}
  // else {
  //   console.log("password and confirm pasword is not match  ");
  //   alert("password not match");
  // }
  
});




// function datashow() {
//   // $(document).ready(function () {
//   $.ajax({
//     url: "http://localhost:9001/user",
//     type: "GET",
//     success: function (result) {
//       console.log(result);
//       var str="";
      
//       for(let i=0;i<result.length;i++){
//         let obj1 = result[i];

//       str+="<tr><td>" + obj1.username + "</td>";
//       str+="<td>" + obj1.last_name + "</td>";
//       str+="<td>" + obj1.phone_number + "</td>";
//       str+="<td>" + obj1.gender + "</td>";
//       str+="<td>" + obj1.email + "</td>";
//       str+="<td>" + obj1.password + "<br></td></tr> ";
//       }
//       document.getElementById("mytable").innerHTML=str;
//     },
//     error: function (error) {
//       console.log(error);
//     }
//   })
//   }



document.getElementById("delete-btn").addEventListener("click", (event) => {
  event.preventDefault();

  let username = document.getElementById("deleteUserData").value;

  const ab ={
    username
  }

console.log("hii");
  $.ajax({
    url: "http://localhost:3001/delete",
    type: "POST",
    data : ab,
    success: function(result){
      console.log("hello",result);

    },
    error: function(error){
      console.log(error);
    }
  })
})


// document.getElementById("update-btn").addEventListener("click", (event) => {
//   event.preventDefault();

//   let username = document.getElementById("updateUserData").value;

//   const cd= {
//     username
//   }

//   console.log("")
//   $.ajax({
//     url: "http://localhost:8001/userupdate",
//     type: "POST",
//     data : user,

//   success : function(data){
//     console.log('profit',data);
//   },
//   error: function(error){
//     console.log(error);
//   } 
//   })
//});

document.getElementById("update123").addEventListener("click", (event) => {
  event.preventDefault();
  document.getElementById("update-form").style.display="block" ;
  document.getElementById("login-form").style.display="none";
     

  
})

// function apiupdate()
    // let username = document.getElementById("update").value;
    document.getElementById("Update").addEventListener("click", (event) => {
       event.preventDefault();
       


  let ibj = {
    username : document.querySelector("#username2").value,
    last_name : document.querySelector("#last_name2").value,
    phone_number : document.querySelector("#phone_number2").value,
    gender : document.querySelector("#gender2").value,
    email : document.querySelector("#email2").value,
    password : document.querySelector("#password2").value ,
    //confirmpassword : document.querySelector("#confirmpassword").value
  }

  console.log("update patch  ")
  // console.log(ibj);
  secondaryArray.push(ibj);
  secondaryMap.set(document.querySelector("#email").value, ibj)
  // datagiven(ibj);


  $.ajax({
    url: "http://localhost:3001/update",
    type: "POST",
    data : ibj,
    
success: function(data){
    console.log('success',data);                    
},
error: function(error){
  console.log(error);
}
  })
}
    )
  




 

function validation(username){
  console.log(secondaryMap.has(username));
  // if(secondaryMap[username]){
  //   // alert("hello vishal");
  // }
  // else{
  //   alert("get lost");
  // }
  
};


// Printing Data

// let str = '';
// for(let i=0; i<secondaryArray.length; i++){
//   let obj1 = secondaryArray[i];

//   str+="<tr><td>" + obj1.username + "</td>";
//   str+="<td>" + obj1.last_name + "</td>";
//   str+="<td>" + obj1.phone_number + "</td>";
//   str+="<td>" + obj1.gender + "</td>";
//   str+="<td>" + obj1.email + "</td>";
//   str+="<td>" + obj1.password + "<br></td></tr> ";
// }

deleteUserData.addEventListener("click",()=>{
  deleting();
})



function datagiven(user) {
  console.log("hello i am shubham")
  //$(document).ready(function () {
    $.ajax({
      url: "http://localhost:3001/userpost",
      type: "POST",
      data : user,
      
  success: function(data){
      console.log('success',data);                    
  },
  error: function(error){
    console.log(error);
  }
    })
  }
//}

// function dataupdate(user){
  


