// Profile Section
var suggest=document.querySelector('.suggest');
var frnd=document.querySelector(".frnd");
var follow=document.querySelector(".follow");

follow.addEventListener("click",function(){

    if(follow.innerHTML=="Follow"){
        suggest.innerHTML=" ";
        frnd.innerHTML="You are Following.";
        follow.innerHTML="Unfollow";
    }
    else{
        suggest.innerHTML="Suggested for you";
        frnd.innerHTML=" ";
        follow.innerHTML="Follow";
    }
});


// Card Section
var name1=document.querySelector('.name1');
var inform=document.querySelector(".inform");
var rate=document.querySelector(".rate");
var display1=document.querySelector(".display1");
var image=document.querySelector(".image");

var changeme=document.querySelector("#changeme");
var order=document.querySelector("#order");

order.addEventListener("click",function(){
    if(order.innerHTML=="Order"){
        order.innerHTML="Order Cancel";
        display1.innerHTML="Order Placed!!";
        display1.style.color="green";
        order.style.backgroundColor="transparent";
        order.style.color="orange";
        order.style.border="1px solid orange";  
    }else{
        order.innerHTML="Order";
        display1.innerHTML="Order Cancled!! ";
        display1.style.color="red";
        order.style.backgroundColor="orange";
        order.style.color="white";
        order.style.border="1px solid orange";  
    }
    
});

changeme.addEventListener("dblclick",function(){
    if(changeme.innerHTML=="Change Me"){
        name1.innerHTML="Pasta";
        inform.innerHTML="Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs and formed into sheets or other shapes. Pasta has been popular in Italy";
        rate.innerHTML="$50.00";
        image.style.backgroundImage="URL('images/pasta.jpg')";
        // if(changeme.classList.contains("changeMee")){
        //     changeme.classList.remove("changeMee");
        // }
        // changeme.classList.add("nameChange");
        changeme.innerHTML="Change Back";
        changeme.style.backgroundColor="transparent";
        changeme.style.color="orange";
        changeme.style.border="1px solid orange";
    }
    else{
        name1.innerHTML="Burger";
        inform.innerHTML="TA burger is a patty of ground beef grilled and placed between two halves of a bun. Slices of raw onion, lettuce, bacon, mayonnaise, and other ingredients add flavor.";
        rate.innerHTML="$20.00";
        image.style.backgroundImage="URL('images/burger.jpg')";        
        changeme.innerHTML="Change Me";
        changeme.style.backgroundColor="orange";
        changeme.style.color="white";
        changeme.style.border="1px solid orange";
        // if(changeme.classList.contains("nameChange")){
        //     changeme.classList.remove("nameChange");
        // }
        // changeme.classList.add("changeMee");
    }
    
});

// Login Form

var msg=document.querySelector(".msg");
var login1=document.querySelector("#login1");

login1.addEventListener("click",function(){
    
    var user=document.getElementById("user").value;
    var pass=document.getElementById("pass").value;

    // console.log(user);
    // console.log(pass);

    var user=msg.innerHTML=user;
    var pass=msg.innerHTML=pass;
    
    if(user=="admin" && pass=="pass@1234"){
        msg.innerHTML="Login Success!!";
        msg.style.color="green";
    }
    else{
        msg.innerHTML="Login Failed!!";
        msg.style.color="red";
    }
});
