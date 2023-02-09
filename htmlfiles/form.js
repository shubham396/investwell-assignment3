const form = document.querySelector("form");
const printArrayButton = document.querySelector("#print");
const output = document.querySelector("#printArray");
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
    fname : document.querySelector("#element1").value,
    lname : document.querySelector("#element2").value,
    phone : document.querySelector("#element3").value,
    gender : document.querySelector("#element4").value,
    email : document.querySelector("#element5").value,
    pass : document.querySelector("#element6").value
  }
  

  secondaryArray.push(obj);
  secondaryMap.set(document.querySelector("#element5").value, obj)
  datagiven(obj);
});

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
let str = '';
for(let i=0; i<secondaryArray.length; i++){
  let obj1 = secondaryArray[i];

  str+="<tr><td>" + obj1.fname + "</td>";
  str+="<td>" + obj1.lname + "</td>";
  str+="<td>" + obj1.phone + "</td>";
  str+="<td>" + obj1.gender + "</td>";
  str+="<td>" + obj1.email + "</td>";
  str+="<td>" + obj1.pass + "<br></td></tr> ";
}
output.innerHTML = str;
document.querySelector("#element1").value="";
document.querySelector("#element2").value="";
document.querySelector("#element3").value="";
document.querySelector("#element4").value="";
document.querySelector("#element5").value="";
document.querySelector("#element6").value="";
});



function datagiven(user) {
  //$(document).ready(function () {
    $.ajax({
      url: "http://localhost:3001/userpost",
      type: "POST",
      data : "user",
      
  success: function(data){
      console.log('success',data);                    
  },
  error: function(error){
    console.log(error);
  }
    })
  }//)
//}

