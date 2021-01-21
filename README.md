# _{Application Name}_

#### _{Brief description of application}_

#### By _**{List of contributors}**_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Tests

describe: isRomanNumeral()
Test: "It determines if input is a number"
Expect (isRomanNumeral(& LOL *$)).toEqual(false);

Test: "Program limits input of number to be <= 3999"
Expect (isRomanNumeral(4000)).toEqual(false);

Test: "It recognizes single digits"
Expect (toRomanNumeral(9)).toEqual(ones);

Test: "It recognizes double digits"
Expect (toRomanNumeral(10)).toEqual(tens);

Test: "It recognizes triple digits"
Expect (toRomanNumeral(100)).toEqual(hundred);

Test: "It recognizes quadrouple digits"
Expect (toRomanNumeral(1000)).toEqual(thousands);

Test: "It recognizes more than three of the same characters in a row"
Expect (isRomanNumeral(IIII)).toEqual(false);

Test: "It recognizes ones, tens, hundreds, and thousands have to be seperate"
Expect (toRomanNumeral(99)).toEqual(ICIX);

Test: "It recognizes the digits V, L, and D are never repeated"
Expect (isRomanNumeral(VV)).toEqual(false);

describe: toRomanNumeral()
Test: "It converts numbers to their corresponding Roman Numeral symbols"
Expect (toRomanNumeral(1)).toEqual(I);

Test: "It adds the values of all the converted symbols"
Expect (toRomanNumeral(2)).toEqual(II);

Test: "It adds the values of more than three of the same characters in a row plus one additional of the repeated character"
Expect (toRomanNumeral(IIII)).toEqual(V);

Test: "Program will switch to subtraction when equal to false and subtract one of the repeated numeral"
Expect (isRomanNumeral(false)).toEqual(--);




## Known Bugs

* _Any known issues_
* _should go here_

## License

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

## Contact Information

_{Add your contact information here.}_