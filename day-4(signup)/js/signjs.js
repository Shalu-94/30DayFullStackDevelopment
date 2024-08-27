function validation(){
    // get input
    var Name=document.getElementById("myname").value;
    var Email=document.getElementById("myemail").value;
    var Pw=document.getElementById('mypswd').value;
    // reset error msg
    document.getElementById('nameerror').innerHTML='';
    document.getElementById('emailerror').innerHTML='';
    // validate name
    if(Name===''){
        document.getElementById('nameerror').innerHTML='Name is Required';
        return false;
    }
    // email validate
    
    var emailRegEx= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegEx.test(Email)){
        document.getElementById('emailerror').innerHTML='Invalid Email';
        return false;
    }
    if(!((Pw.length)>9)){
        document.getElementById('pswderror').innerHTML='password have atleast 8 charaters';
        return false;

    }
    //  no error in inputs
    alert("Form Submitted Successfully!");
    return true;

}