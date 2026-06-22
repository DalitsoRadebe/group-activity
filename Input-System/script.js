// Input: Name, Age, Favorite Subject
//Process: Create a card with the input values, display it on page,
// The card Updates instantly as the user types(no button needed)
// A profile card that changes color(Young=green, Older =blue) based on age group:

//Output: A profile card that displays the user's name, age, and favorite subject, 
//with a background color that changes based on the age group (green for young, blue for older). 
//The card updates in real-time as the user types in the input fields.

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const subjectInput = document.getElementById("subject");
const profileCard = document.getElementById("card");

function updateCard() {
    const name = nameInput.value;
    const age = parseInt(ageInput.value);
    const subject = subjectInput.value;
     profileCard.innerHTML = `<h1>${name}</h1>
                              <h1>Age: ${age}</h1>
                              <h1>Favorite Subject: ${subject}</h1>`;


 
    if(!name|| !age|| !subject){
        profileCard.style.className = "empty"
        profileCard.innerHTML = "Please enter " 

    }
    
    else {

    if (age < 18) {
        profileCard.style.className = "young"
    } else if (age>=18) {
        profileCard.style.className = "adult"
    }
    profileCard.textContent = `Hello ${name}, you are ${age}, you love ${subject}`
}


}

nameInput.addEventListener("input", updateCard);
ageInput.addEventListener("input", updateCard);
subjectInput.addEventListener("input", updateCard);
