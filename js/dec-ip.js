const handleClick = () => {
    // user input
    const birthdayBox = document.getElementById("birthDay")
    const birthdayBox = document.getElementById("birthMonth")
    const birthdayBox = document.getElementById("birthYear")
    const birthdayBox = document.getElementById("birthGender")
    
    // get value
    const birthDay = birthdayBox.value;
    const birthMonth = birthdayBox.value;
    const birthYear = birthdayBox.value;
    const birthGender = birthdayBox.value;

    console.log(birthDay, birthMonth, birthYear, birthGender)
}