// formula
const akanNameFormula = (CC, YY, MM, DD) => {
    const calculationResult = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7
    const wholeNumber = Number(calculationResult.toFixed())
    console.log(wholeNumber);

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    if (gender == "Male") {
        return maleNames[wholeNumber], 'day'; daysOfTheWeek[wholeNumber];
    } else {
        return femaleNames[wholeNumber]; 'day'; daysOfTheWeek[wholeNumber]
    }

}
function handleClick() {
    // user input
    const birthdayBox = document.getElementById("birthDay")
    const birthMonthBox = document.getElementById("birthMonth")
    const birthYearBox = document.getElementById("birthYear")
    const birthGenderBox = document.getElementById("birthGender")

    // get value
    const birthDay = birthdayBox.value
    const birthMonth = birthMonthBox.value
    const birthYear = birthYearBox.value
    const birthGender = birthGenderBox.value

    console.log(birthDay, birthMonth, birthYear, birthGender)

    // enter gender
    const allGendersArray = ["Male, Female"]
    if (allGendersArray.includes(birthGender)) {
        const centuryVar = String(birthYear).substring(0, 2)
        const yearVar = String(birthYear).substring(2)
        if (birthDay <= 0 || birthDay > 31) {
            alert("Please enter a valid answer")
        } else if (birthMonth <= 0 || birthMonth > 12) {
            alert("please enter a valid answer")
        } else {
            const akanName = akanNameFormula(centuryVar, yearVar, birthMonth, birthDay, birthGender);
            alert('Your name is: ${akanName.name} born on ${akanName.day}')
}
        // else {
        alert("Please enter a valid answer")
    }


}
