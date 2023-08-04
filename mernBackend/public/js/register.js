// Select all input elements for varification
const name = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const gender = document.registration;
// const language = document.getElementById("language");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");

// function for form varification
function formValidation() {
  
  // checking name length
  if (name.value.length < 2 || name.value.length > 20) {
    alert("Name length should be more than 2 and less than 21");
    name.focus();
    return false;
  }
  // checking email
  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }
  // checking password
  if (!password.value.match(/^.{5,15}$/)) {
    alert("Password length must be between 5-15 characters!");
    password.focus();
    return false;
  }
  // checking phone number
  if (!phoneNumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
    phoneNumber.focus();
    return false;
  }
  // checking gender
  if (gender.gender.value === "") {
    alert("Please select your gender!");
    return false;
  }
  // checking language
//   if (language.value === "") {
//     alert("Please select your language!")
//     return false;
//   }
  // checking zip code
  if (!zipcode.value.match(/^[0-9]{6}$/)) {
    alert("Zip code must be 6 characters long number!");
    zipcode.focus();
    return false;
  }
  return true;
}
// $(document).ready(function (){
    
//     var Validation = (function (){
//         var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         var digitReg = /^\d+$/;
        
//         var isEmail = function (email){
//             return emailReg.test(email);
//         };
//         var isNumber = function (value){
//             return digitReg.test(value);
//         };
//         var isRequire = function (value){
//             return value == "";
//         };
//         var countChars = function (value, count){
//             return value.length == count;
//         };
//         var isChecked = function (el){
//             var hasCheck = false;
//             el.each(function (){
//                 if($(this).prop('checked')){
//                     hasCheck = true;
//                 }
//             });
//             return hasCheck;
//         };
//         return {
//             isEmail : isEmail,
//             isNumber : isNumber,
//             isRequire: isRequire,
//             countChars: countChars,
//             isChecked: isChecked
//         };
//     })();
    
//     var required = $('form').find('[data-required]');
//     var numbers = $('form').find('[data-number]');
//     var emails = $('form').find('[data-email]');
//     var once = $('form').find('[data-once]');
//     var radios = $('.form-item-triple');
//     var groups = [];
//     radios.each(function (){
//         groups.push($(this).find('[data-once]'));
//     });
//     var counts = $('form').find('[data-count]');
    
//     $('#submit').on('click', function (){
//         required.each(function (){
//             if(Validation.isRequire($(this).val())){
//                 $(this).siblings('small.errorReq').show();
//             }
//         });
//         emails.each(function (){
//             if(!Validation.isEmail($(this).val())){
//                 $(this).siblings('small.errorEmail').show();
//             }
//         });
//         $.each(groups, function (){
//             if(!Validation.isChecked($(this))){
//                 $(this).parents('.form-item').find('small.errorOnce').show();
//             }
//         });
//         numbers.each(function (){
//             if(!Validation.isNumber($(this).val())){
//                 $(this).siblings('small.errorNum').show();
//             }
//         });
//         counts.each(function (){
//             if(!Validation.countChars($(this).val(), $(this).data('count'))){
//                 $(this).siblings('small.errorChar').show();
//             }
//         });
//     });
    
//     required.on('keyup blur', function (){
//         if(!Validation.isRequire($(this).val())){
//             $(this).siblings('small.errorReq').hide();
//         }
//     });
//     emails.on('keyup blur', function (){
//         if(Validation.isEmail($(this).val())){
//             $(this).siblings('small.errorEmail').hide();
//         }
//     });
//     once.on('change', function (){
//         $.each(groups, function (i){
//             if(Validation.isChecked(groups[i])){
//                 groups[i].parents('.form-item').find('small.errorOnce').hide();
//             }
//         });
//     });
//     numbers.on('keyup blur', function (){
//         if(Validation.isNumber($(this).val())){
//             $(this).siblings('small.errorNum').hide();
//         }
//     });
//     counts.on('keyup blur', function (){
//          if(Validation.countChars($(this).val(), $(this).data('count'))){
//             $(this).siblings('small.errorChar').hide();
//         }
//     });
    
// });