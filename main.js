$('.home').hide()


console.log(localStorage.setItem("codenum", 4658));

function signup(){
    
    var pseudo= document.getElementById('pseudo').value;
    var password= document.getElementById('pwd').value;
    var code=document.getElementById('codenum').value
        console.log(pseudo);
        console.log(password);
        console.log(code);


    var user = localStorage.getItem('pseudo');
    var userpassword = localStorage.getItem('password');
    var codeGen=localStorage.getItem('code')
    localStorage.setItem("codenum", codeGen)
    console.log(typeof user)
    console.log(typeof codeGen)
        if(user!==pseudo  ){
            localStorage.setItem("pseudo", pseudo);
            localStorage.setItem("password", password);
            localStorage.setItem("codenum", codeGen)
            console.log('user added')
        }

        else{ 
            alert ('Pseudo is already exist') 
        }

}


$('.signup').click(function(){
    
    var pseudo= document.getElementById('pseudo').value;
    var password= document.getElementById('pwd').value;
        if(pseudo==''){
            alert('please check your pseudo ')
        }
        if(password==''){
            alert('please check your password ')
        }

    $('#codenum').fadeOut(200)
    signup()
    window.location.reload()
    
})


function login(){
  
    var pseudo= document.getElementById('pseudo').value;
    var password=document.getElementById('pwd').value;
    var user = localStorage.getItem('pseudo');
    var userpassword = localStorage.getItem('password');

                                console.log("local:",user, userpassword,"input:", pseudo, password)
        if(pseudo===user && password===userpassword){
            $('.container').fadeOut(1000) 
             $('.home').fadeIn(3000)

        }
        else {
            alert('user name or password wrong')
        }
}
$('.signin').click(function(){
   
    $('#codenum').fadeOut(500)
    var user = localStorage.getItem('pseudo');
    var userpassword = localStorage.getItem('password');
      console.log(user, userpassword)
        login()    
})
var money= 0 ; 
var counter = 0
$("#a").click(function(){
counter++  
$("#c1").text('click score: '+counter)
if(counter>50){
    money++ 
alert("You Won 1$")
counter=0
$("#c2").text('your cash: '+money+'$')

}

})