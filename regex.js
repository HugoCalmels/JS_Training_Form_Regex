/*
let prenom = 'gael';
let regExp = new RegExp('a')

console.log(/a/.test(prenom));
console.log(regExp.test(prenom))
*/

let form = document.querySelector('#loginForm');


//Ecouter la modification du firstname
form.firstname.addEventListener('change', function() {
  validFirstName(this);
});

//Ecouter la modification du name
form.name.addEventListener('change', function() {
  validName(this);
});

//Ecouter la modification du Age
form.age.addEventListener('change', function() {
  validAge(this);
});

//Ecouter la modification de l'email
form.email.addEventListener('change', function() {
  validEmail(this);
});
//Ecouter la modification de l'email ( confirmation )
form.emailConfirmation.addEventListener('change', function() {
  validEmailConfirmation(this);
});

//Ecouter la modification du password
form.password.addEventListener('change', function() {
  validPassword(this);
});
//Ecouter la modification du password ( confirmation )
form.passwordConfirmation.addEventListener('change', function() {
  validPasswordConfirmation(this);
});

//Ecouter la soumission formulaire 
// A refaire c pas propre les messages derreurs
form.addEventListener('submit', function(e) {
  e.preventDefault();
  if( validEmail(form.email) 
  && validPassword(form.password) 
  && (validEmail(form.email) == validEmailConfirmation(form.emailConfirmation))
  && (validPassword(form.password) == validPasswordConfirmation(form.passwordConfirmation))
  && (validName(form.name))
  && (validFirstName(form.firstname))
  && (validAge(form.age))
  )
  { 
    form.submit();
  }
});

//*******************VALIDATION EMAIL ******************** */
const validEmail = function(inputEmail){
  // Creation de la reg exp pour validation email
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 
    'g'
    );

    // on recupere la balise small
    let small = inputEmail.nextElementSibling;

    // on teste l'expression reguliere
    if(emailRegExp.test(inputEmail.value)) { // == true
      small.innerHTML = "Adresse valide";
      small.classList.remove('text-danger');
      small.classList.add('text-success');
      return true;
    } else {
      small.innerHTML = "Adresse non-valide";
      small.classList.remove('text-success');
      small.classList.add('text-danger');
      return false;
    }
};


//*******************VALIDATION PASSWORD ******************** */
const validPassword = function(inputPassword){
  let msg;
  let valid = false;
  // au moins 3 caracteres dans le mot de passe
  if(inputPassword.value.length < 3) { 
    msg='Le mot de passe doit contenir au moins 3 caracteres';
  }
  // au moins 1 màj
  else if(!/[A-Z]/.test(inputPassword.value)) { // doit renvoyer faux avec le !
    msg="Le mot de passe doit contenir au moins 1 majuscule"
  }
  // au moins 1 min
  else if(!/[a-z]/.test(inputPassword.value)) { // doit renvoyer faux avec le !
    msg="Le mot de passe doit contenir au moins 1 minuscule"
  }
  // au moins 1 chiffre
  else if(!/[0-9]/.test(inputPassword.value)) { // doit renvoyer faux avec le !
    msg="Le mot de passe doit contenir au moins 1 chiffre"
  }
  // conditions réunies = mot de passe VALIDE
  else {
    msg=' Le mot de passe est valide';
    valid = true;
  }


// AFFICHAGE
// on recupere la balise small
let small = inputPassword.nextElementSibling;

// on teste l'expression reguliere
if(valid) { // == true
  small.innerHTML = "Mot de passe valide";
  small.classList.remove('text-danger');
  small.classList.add('text-success');
  return true
} else {
  small.innerHTML = msg;
  small.classList.remove('text-success');
  small.classList.add('text-danger');
  return false
}

}

//*******************VALIDATION NAME ******************** */
const validName = function(inputName){
  let msg;
  let valid = false;
  if(inputName.value.length < 3) { 
    msg='Le nom doit contenir au moins 3 caracteres';
  }
  else {
    msg=' Le nom est valide';
    valid = true;
  }

  // AFFICHAGE
// on recupere la balise small
let small = inputName.nextElementSibling;

// on teste l'expression reguliere
if(valid) { // == true
  small.innerHTML = "Nom valide";
  small.classList.remove('text-danger');
  small.classList.add('text-success');
  return true
} else {
  small.innerHTML = msg;
  small.classList.remove('text-success');
  small.classList.add('text-danger');
  return false
}
};

//*******************VALIDATION FIRSTNAME ******************** */
const validFirstName = function(inputFirstname){
  let msg;
  let valid = false;
  if(inputFirstname.value.length < 3) { 
    msg='Le nom doit contenir au moins 3 caracteres';
  }
  else {
    msg=' Le nom est valide';
    valid = true;
  }

  // AFFICHAGE
// on recupere la balise small
let small = inputFirstname.nextElementSibling;

// on teste l'expression reguliere
if(valid) { // == true
  small.innerHTML = "Nom valide";
  small.classList.remove('text-danger');
  small.classList.add('text-success');
  return true
} else {
  small.innerHTML = msg;
  small.classList.remove('text-success');
  small.classList.add('text-danger');
  return false
}
};


//*******************VALIDATION AGE ******************** */
const validAge = function(inputAge){
  let msg;
  let valid = false;
  if(inputAge.value < 18) { 
    msg='Vous devez avoir 18 ans';
  }
  else {
    // msg=' Bravo vous êtes vieux';
    valid = true;
  }

  // AFFICHAGE
// on recupere la balise small
let small = inputAge.nextElementSibling;

// on teste l'expression reguliere
if(valid) { // == true
  small.innerHTML = ' Bravo vous êtes vieux';
  small.classList.remove('text-danger');
  small.classList.add('text-success');
  return true
} else {
  small.innerHTML = msg;
  small.classList.remove('text-success');
  small.classList.add('text-danger');
  return false
}
};


//*******************VALIDATION CONFIRMATION EMAIL ******************** */
const validEmailConfirmation = function(inputEmailConfirmation){
  // Creation de la reg exp pour validation email
  let emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$', 
    'g'
    );

    // on recupere la balise small
    let small = inputEmailConfirmation.nextElementSibling;

    // on teste l'expression reguliere
    if(emailRegExp.test(inputEmailConfirmation.value)) { // == true
      small.innerHTML = "Adresse valide";
      small.classList.remove('text-danger');
      small.classList.add('text-success');
      return true;
    } else {
      small.innerHTML = "Adresse non-valide";
      small.classList.remove('text-success');
      small.classList.add('text-danger');
      return false;
    }
};


//*******************VALIDATION CONFIRMATION PASSWORD ******************** */
const validPasswordConfirmation = function(inputPasswordConfirmation){
  let msg;
  let valid = false;
  // au moins 3 caracteres dans le mot de passe
  if(inputPasswordConfirmation.value.length < 3) { 
    msg='Le mot de passe doit contenir au moins 3 caracteres';
  }
  // au moins 1 màj
  else if(!/[A-Z]/.test(inputPasswordConfirmation.value)) { // doit renvoyer faux avec le !
    msg="Le mot de passe doit contenir au moins 1 majuscule"
  }
  // au moins 1 min
  else if(!/[a-z]/.test(inputPasswordConfirmation.value)) { // doit renvoyer faux avec le !
    msg="Le mot de passe doit contenir au moins 1 minuscule"
  }
  // au moins 1 chiffre
  else if(!/[0-9]/.test(inputPasswordConfirmation.value)) { // doit renvoyer faux avec le !
    msg="Le mot de passe doit contenir au moins 1 chiffre"
  }
  // conditions réunies = mot de passe VALIDE
  else {
    msg=' Le mot de passe est valide';
    valid = true;
  }


// AFFICHAGE
// on recupere la balise small
let small = inputPasswordConfirmation.nextElementSibling;

// on teste l'expression reguliere
if(valid) { // == true
  small.innerHTML = "Mot de passe valide";
  small.classList.remove('text-danger');
  small.classList.add('text-success');
  return true
} else {
  small.innerHTML = msg;
  small.classList.remove('text-success');
  small.classList.add('text-danger');
  return false
}

}