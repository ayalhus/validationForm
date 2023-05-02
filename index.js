var button = document.getElementById('btn');

var fName = document.getElementById('first-name');
var lName = document.getElementById('last-name');
var age =   document.getElementById('age');
var gender = document.getElementById('yourGender');

var cont = document.getElementById('container');
var para = document.createElement('p');



button.addEventListener('click', checkInfoTwo);




function checkInfoTwo() {
  
  var errorArray = []
  
  if(document.querySelector('ol')) {
    document.querySelector('ol').remove();
  }
  if(document.querySelector('p')) {
    document.querySelector('p').remove()
  }

   if(Number(age.value) < 18) {
      errorArray.push('you are underage')
    }  if(fName.value.length < 3) {
      errorArray.push('First Name should have more than 3 characters!')
    }  if(lName.value.length < 3 ) {
      errorArray.push('Last Name should have more than 3 characters!')
    } if(gender.value == 'none') {
      errorArray.push('Please specify your gender')
    } if(errorArray.length == 0) {
        para.innerHTML = 'congrats!';
        cont.appendChild(para)
    } if(errorArray.length !== 0) {
      
      
      var list = document.createElement('ol');
      errorArray.forEach(function(el) {
        var li = document.createElement('li');
      li.innerHTML = el
      list.appendChild(li)
      
      })
      console.log(list)
      
      cont.appendChild(list)
    }
  
      }






