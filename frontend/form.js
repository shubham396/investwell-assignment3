const form = document.querySelector("form");
const printArrayButton = document.querySelector("#print");
const output = document.querySelector("#printArray");
// const delBtn = document.querySelector("#del_btn");
// const dingdong = document.querySelector("#login");
// const block=document.getElementById('block');




document.getElementById("signup").addEventListener('click', ()=>{
    document.getElementById("signup-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
})
document.getElementById("login").addEventListener('click', ()=>{
    document.getElementById("login-form").style.display = "block";
    document.getElementById("signup-form").style.display = "none"; 
})


document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  validation(username);
}); 



let secondaryArray = [];
let secondaryMap = new Map();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let obj = {
    first_name : document.querySelector("#first_name").value,
    last_name : document.querySelector("#last_name").value,
    phone_number : document.querySelector("#phone_number").value,
    gender : document.querySelector("#gender").value,
    email : document.querySelector("#email").value,
    password : document.querySelector("#password").value
  }
  
  // console.log(obj);
  secondaryArray.push(obj);
  secondaryMap.set(document.querySelector("#email").value, obj)
  datagiven(obj);
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

//       str+="<tr><td>" + obj1.first_name + "</td>";
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

  let first_name = document.getElementById("deleteUserData").value;

  const ab ={
    first_name
  }

console.log("hii");
  $.ajax({
    url: "http://localhost:9001/delete",
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

//   let first_name = document.getElementById("updateUserData").value;

//   const cd= {
//     first_name
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
printArrayButton.addEventListener("click", () => {
// let str = '';
// for(let i=0; i<secondaryArray.length; i++){
//   let obj1 = secondaryArray[i];

//   str+="<tr><td>" + obj1.first_name + "</td>";
//   str+="<td>" + obj1.last_name + "</td>";
//   str+="<td>" + obj1.phone_number + "</td>";
//   str+="<td>" + obj1.gender + "</td>";
//   str+="<td>" + obj1.email + "</td>";
//   str+="<td>" + obj1.password + "<br></td></tr> ";
// }
output.innerHTML = str;
document.querySelector("#first_name").value="";
document.querySelector("#last_name").value="";
document.querySelector("#phone_number").value="";
document.querySelector("#gender").value="";
document.querySelector("#email").value="";
document.querySelector("#password").value="";
});

// delBtn.addEventListener("click",()=>{
//   deleting();
// })


function datagiven(user) {
  console.log("hhhhh")
  //$(document).ready(function () {
    $.ajax({
      url: "http://localhost:9001/userpost",
      type: "POST",
      data : user,
      
  success: function(data){
      console.log('success',data);                    
  },
  error: function(error){
    console.log(error);
  }
    })
  }//)
//}

// function dataupdate(user){
  

