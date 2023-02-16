//input the name of a country and log the capital of that company
// Example:
// inputCountry = "aUStralia"
// The capital of Australia is Canberra

// Example
// inputCountry = "Banana Republic"
// Sorry!!! No such country exists.


let countries = [
    "Afghanistan", 
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi"
];

let capitals = [
    "Kabul",
    "Tirana",
    "Algiers",
    "Andorra la Vella",
    "Luanda",
    "Saint John's",
    "Buenos Aires",
    "Yerevan",
    "Canberra",
    "Vienna",
    "Baku",
    "Nassau",
    "Manama",
    "Dhaka",
    "Bridgetown",
    "Minsk",
    "Brussels",
    "Belmopan",
    "Porto Novo",
    "Thimphu",
    "La Paz",
    "Sarajevo",
    "Gaborone",
    "Brasilia",
    "Bandar Seri Begawan",
    "Sofia",
    "Ouagadougou",
    "Gitega"
];

let inputCountry = "AfaGhanistan";
let inputCapital;

let countryIndex = countries.indexOf(inputCountry);
let capitalIndex = countryIndex;

    if (countries.includes(inputCountry)) {
        inputCountry.toLowerCase;
        console.log(`The capital of ${inputCountry} is ${capitals[capitalIndex]}.`);
    } else {
        console.log(`Sorry!!! No such country exists.`);
    }
