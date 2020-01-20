var a=0;
var k=1;
var opdv=0;
var otpvar=0;
var con=0;
$(document).ready(function()
{
 $("#contents").hide();
 $("#homed").hide();
 $("#logind").hide();
 $("#signupd").hide();
 $("#afterotp").hide();
 $("#opdd1").hide();
 $("#opdd2").hide();
 $("#downarrow").hide();
 $("#contactd").hide();
 $("#aboutd").hide();
 $("#start2").hide();
 $("#start").show(1000);
 $("#welcome").hide();
 $("#welcome2").hide();
 $("#issue-submited").hide();
 $("#start4").hide();

 $("#hidearrow").click(function()
 {
  $("#contents").hide(1000);
  $("#homed").hide(1000);
  $("#logind").hide(1000);
  $("#signupd").hide(1000);
  $("#afterotp").hide(1000);
  $("#opdd1").hide(1000);
  $("#opdd2").hide();
  $("#contactd").hide(1000);
  $("#aboutd").hide(1000);
  $("#downarrow").hide();
  $("#start4").hide(1000);
  $("#uparrow").show();
  $("#start").prop("muted",false);
  $("#start4").prop("muted",true);


 });

 $("#uparrow").click(function()
 {
  $("#uparrow").hide();
  $("#downarrow").show();
  $("#contents").show(1000);
 });

 $("#downarrow").click(function()
 {
  $("#downarrow").hide();
  $("#uparrow").show();
  $("#contents").hide(1000);
 });

 $("#homeb").click(function()
 {
  $("#downarrow").hide();
  $("#uparrow").show();
  $("#contents").hide();
  $("#homed").hide();
  $("#logind").hide();
  $("#signupd").hide();
  $("#afterotp").hide();
  $("#opdd1").hide();
  $("#opdd2").hide();
  $("#contactd").hide();
  $("#aboutd").hide();

  $("#homed").show(1000);
 });

 $("#loginb").click(function()
 {
   $("#downarrow").hide();
   $("#uparrow").show();

   $("#contents").hide();
   $("#homed").hide();
   $("#logind").hide();
   $("#signupd").hide();
   $("#afterotp").hide();
   $("#opdd1").hide();
   $("#opdd2").hide();
   $("#contactd").hide();
   $("#aboutd").hide();

   $("#logind").show(1000);
   });

  $("#signupb").click(function()
  {
   $("#downarrow").hide();
   $("#uparrow").show();

   $("#contents").hide();
   $("#homed").hide();
   $("#opdd1").hide();
   $("#opdd2").hide();
   $("#contactd").hide();
   $("#aboutd").hide();

   $("#signupd").show(1000);
  });

 $("#gotp").click(function()
  {
   $("#downarrow").hide();
   $("#uparrow").show();

   $("#contents").hide();
   $("#homed").hide();
   $("#opdd1").hide();
   $("#opdd2").hide();
   $("#contactd").hide();
   $("#aboutd").hide();

 if(otpvar != 0)
 {
  $("#afterotp").show(1000);
 }
  });

 $("#opdb").click(function()
 {
   if(opdv==0)
   {
  $("#downarrow").hide();
    $("#uparrow").show();

    $("#contents").hide();
    $("#homed").hide();
    $("#logind").hide();
    $("#signupd").hide();
    $("#afterotp").hide();
    $("#opdd2").hide();
    $("#contactd").hide();
    $("#aboutd").hide();

  $("#opdd1").show(1000);
   }
   else
   {
  $("#downarrow").hide();
    $("#uparrow").show();

  $("#contents").hide();
    $("#homed").hide();
    $("#logind").hide();
    $("#signupd").hide();
    $("#afterotp").hide();
    $("#opdd1").hide();
    $("#contactd").hide();
    $("#aboutd").hide();

    $("#opdd2").show(1000);
   }
  });

 $("#continuelog").click(function()
 {
  if(opdv != 0)
  {
     $("#welcome").show(1000);
  }
    });

 $("#continuesnup").click(function()
 {
  if(opdv != 0)
  {
   $("#welcome2").show(1000);
  }
  });

 $("#contactb").click(function()
 {
  $("#contents").hide();
  $("#homed").hide();
  $("#logind").hide();
  $("#signupd").hide();
  $("#afterotp").hide();
  $("#opdd1").hide();
  $("#opdd2").hide();
  $("#aboutd").hide();

  $("#downarrow").hide();
  $("#uparrow").show();

  $("#contactd").show(1000);
 });

 $("#aboutb").click(function()
 {
  $("#contents").hide();
  $("#homed").hide();
  $("#logind").hide();
  $("#signupd").hide();
  $("#afterotp").hide();
  $("#opdd1").hide();
  $("#opdd2").hide();
  $("#contactd").hide();

  $("#downarrow").hide();
  $("#uparrow").show();

  $("#aboutd").show(1000);
 });

 $("#opdb2").click(function()
 {
  if(opdv==0)
   {
  $("#downarrow").hide();
    $("#uparrow").show();

    $("#contents").hide();
    $("#homed").hide();
    $("#logind").hide();
    $("#signupd").hide();
    $("#afterotp").hide();
    $("#opdd2").hide();
    $("#contactd").hide();
    $("#aboutd").hide();

  $("#opdd1").show(1000);
   }
   else
   {
  $("#contactd").hide(1000);
  $("#opdd2").show(1000);
   }
 });

 $("#continueissue").click(function()
 {
  if(con != 0)
  {
   $("#issue-submited").show(1000);
  }
 });

 $("#start3").mouseover(function()
 {
 $("#start4").show(1000);
 $("#start").prop("muted",true);
 $("#start4").prop("muted",false);
 });

});

function validate()
{
 var gmail=window.document.form.email.value;
 var location=gmail.indexOf("@");
 var pass=window.document.form.pass.value;

 if(location == -1)
 {
  alert("Enter valid gmail");
 }

 else if(pass.length < 8)
 {
  alert("Enter at least 8 characters");
 }
  else
 {
  opdv=2;
 }
}
function validate2()
{
 var getotp=window.document.form.otp2.value;
 var newpass=window.document.form.npass.value;
 var conpass=window.document.form.cpass.value;
 var compare="234";

 if(getotp != compare)
 {
  alert("enter otp again");
 }
 else if(newpass !== conpass || newpass < 8)
 {
  alert("Password didn't matched or enter at lest 8 characters, Enter again");
 }
  else
  {
  opdv=2;
  }
}

function validate3()
{
 var gmail2=window.document.form2.email2.value;
 var location=gmail2.indexOf("@");
 var pass2=window.document.form2.pass2.value;
 if(location == -1)
 {
  alert("Enter valid gmail");
 }

 else if(pass2.length < 8)
 {
  alert("Please enter your password");
 }
  else
 {
   con=2;
 }
}

function otp()
{
 var gmail=window.document.form.emailsecond.value;
 var location=gmail.indexOf("@");
 if(location == -1)
 {
  alert("Enter valid gmail");
 }
 else
 {
 alert("your otp = 234 ");
 otpvar = 2;
 }
}
