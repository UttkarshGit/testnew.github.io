function Checkvalid()
{   
    //taking all the values of the input field
    let user=document.getElementById('user_name').value;
    let email=document.getElementById('user_email').value;
    let password=document.getElementById('user_password').value;
    let checkpassword=document.getElementById('user_checkpassword').value;
    let showing=document.getElementById("showing");

    //Checking the length of the username
    if(user.length!=0 & user.length>=8)
    {
       //Checking the length of the email
       if(email.length!=0)
       {
           //checking the lenght of user password
           if(password.length!=0 && checkpassword.length!=0 && password.length>=6 && checkpassword.length>=6)
           {
               // checking both passwords are equal or not
           if(password==checkpassword)
           {
            showing.style.display='block';
            let doc=`<div class="alert alert-success alert-dismissible show" role="alert">
            <strong>Succesfull !!!!!!!!</strong> .
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
            showing.innerHTML=doc;
           }
           else
           {
            showing.style.display='block';
            let doc=`<div class="alert alert-danger alert-dismissible show" role="alert">
            <strong>Password not matched!</strong> .
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
            showing.innerHTML=doc;
           }
        }
        else{
            showing.style.display='block';
            let doc=`<div class="alert alert-danger alert-dismissible show" role="alert">
            <strong>Please insert valid password it should be more that 5 characters!</strong> .
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>`;
            showing.innerHTML=doc;
        }
       }
       else{
        showing.style.display='block';
        let doc=`<div class="alert alert-danger alert-dismissible show" role="alert">
        <strong>Please insert valid email!</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`;
        showing.innerHTML=doc;
       }
    }
    else{
           showing.style.display='block';
           let doc=`<div class="alert alert-danger alert-dismissible show" role="alert">
           <strong>Please insert valid username it should be more that 7 characters!</strong>
           <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>`;
           showing.innerHTML=doc;
    }
    
}