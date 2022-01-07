// formula
const akanNameFormula =(CC, YY, MM, DD) => {
console.log( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7)
}
function handleClick() {
    // user input
    const birthdayBox = document.getElementById("birthDay")
    const birthdayBox = document.getElementById("birthMonth")
    const birthdayBox = document.getElementById("birthYear")
    const birthdayBox = document.getElementById("birthGender")

    // get value
    const birthDay = birthdayBox.value
    const birthMonth = birthdayBox.value
    const birthYear = birthdayBox.value
    const birthGender = birthdayBox.value

    console.log(birthDay, birthMonth, birthYear, birthGender)

    // enter gender
    const allGendersArray = ["Male, Female"]
    if (allGendersArray.includes(birthGender)) {
        const centuryVar = String(birthYear).substring(0, 2)
        const yearVar = String(birthYear).substring(2)
     akanNameFormula(centuryVar, yearVar, birthMonth, birthDay)


    } else {
        alert("Please enter a valid answer")
    }

}