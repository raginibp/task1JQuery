$(document).ready(function(){
 
 

  $("#fname").blur(function(){
      let fname = $('#fname').val();
      let fname_pattern = "[a-zA-Z]{2,30}$";

      if(!fname.match(fname_pattern)){
      let text;
      text = 'Enter Valid first name ';
      $('#OP1').text(text); 
      }
  });

  $("#lname").blur(function(){
    let lname = $('#lname').val();
    let lname_pattern = "[a-zA-Z]{2,30}$";

    if(!lname.match(lname_pattern)){
    let text;
    text = 'Enter Valid last name ';
    $('#OP2').text(text); 
    }
  });

  $("#adress").blur(function(){
    let adress = $('#adress').val();
    let adress_pattern = " $";

    if(!adress.match(adress_pattern)){
    let text;
    text = 'Enter Valid Adress ';
    $('#OP3').text(text); 
    }
  });

  $("#city").blur(function(){
    let city = $('#city').val();
    let city_pattern = "[a-zA-Z]{2,30}$";

    if(!city.match(city_pattern)){
    let text;
    text = 'Enter Valid city ';
    $('#OP4').text(text); 
    }
  });


  $("#city").blur(function(){
    let city = $('#city').val();
    let city_pattern = "[a-zA-Z]{2,30}$";

    if(!city.match(city_pattern)){
    let text;
    text = 'Enter Valid state/provins';
    $('#OP5').text(text); 
    }
  });

  $("#zip").blur(function(){
    let zip = $('#zip').val();
    let zip_pattern = "^[1-9]{1}[0-9]{5}$";

    if(!zip.match(zip_pattern)){
    let text;
    text = 'Enter Valid Zip code';
    $('#OP6').text(text); 
    }
  });

  $("#phone").blur(function(){
    let phone = $('#phone').val();
    let phone_pattern = "\(([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{3})$";

    if(!phone.match(phone_pattern)){
    let text;
    text = 'Enter Valid phone number ';
    $('#OP7').text(text); 
    }
  });
  $("#email").blur(function(){
    let email = $('#email').val();
    let email_pattern = "/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/";

    if(!email.match(email_pattern)){
    let text;
    text = 'Enter E-mail ID ';
    $('#OP8').text(text); 
    }
  });

  $("#Feedback").blur(function(){
    let Feedback = $('#Feedback').val();
    let Feedback_pattern = "[a-zA-Z]$";

    if(!Feedback.match(Feedback_pattern)){
    let text;
    text = 'Enter Valid first name ';
    $('#OP9').text(text); 
    }
});

$("#suggestion").blur(function(){
  let suggestion = $('#suggestion').val();
  let suggestion_pattern = "[a-zA-Z]$";

  if(!suggestion.match(suggestion_pattern)){
  let text;
  text = 'Enter Valid first name ';
  $('#OP10').text(text); 
  }
});
  
});
