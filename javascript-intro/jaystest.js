let cityName = 'Nairobi';
let countryName = 'Kenya'; 
//let capitalCity2 = 'Ulaanbaatar';
//let countryName2 = 'Mongolia';
//let capitalCity3 = 'Quito';
//let countryName3 = 'Ecuador';
//let capitalCity4 = 'Apia';
//let countryName4 = 'Samoa';



//console.log(`${capitalCity2} is the capital city of ${countryName2}`)
//console.log(capitalCity1, 'is the capital city of', countryName1)
//console.log(`${capitalCity3} is the capital city of ${countryName3}`)
//console.log(capitalCity4, 'is the capital city of', countryName4)

// <variable_name> is the capital city of <variable_name>
// Ulaanbaatar is the capital city of Mongolia
// Nairobi is the capital city of Kenya
// Quito is the capital city of Ecuador
// Apia is the capital city of Samoa

//a faster way to do this is to use a function

displayCapitals(cityName, countryName); //calling the function, very important

//use arrays to call multiple values for one variable, think can my function recieve this array?

function displayCapitals(cityName, countryName) {
    console.log(`${cityName} is the capital city of ${countryName}`);
}