# Beep Boop Translator

#### A program that allows users to input a number and receive a range of numbers translated into "beep-boop".

#### By **Drew Tucker**

## Description

A webpage created with HTML and CSS, and using Javascript to return a range of numbers to the user once the user has inputted a number between 1-99. The returned range will replace certain numbers with "Beep!" or "Boop!" or "I'm sorry Dave, I'm afraid I can't do that." based on certain criteria detailed below.


### Specs
| **Program does nothing with non-numerical units** | User input: "A" | Output: "Please enter a number." |

| **Program replaces any number containing a '0' with the word "Beep!"** | User input: "0" | Output: "Beep!" |

| **Program replaces any number containing a '1' with the word "Boop!"**| User Input: "1" | Output: ""Boop!"" |

| **Program replaces any number divisible by '3' with the phrase "I'm sorry Dave, I'm afraid I can't do that."**| User input: "9" | Output: "I'm sorry Dave, I'm afraid I can't do that." |

| **Program hierarchy checks first if divisible by '3', then checks if it contains a '1', then checks if it contains a '0'. It will then apply the first condition that is met. ** | User input: "120" | Output: "I'm sorry Dave, I'm afraid I can't do that." |

| **Program returns a range of numbers from 0 to the number inputted by the user, replacing valid numbers with the exceptions listed above.**| User input: "10" | Page Displays: "Beep!", "Boop!", 2, "I'm sorry Dave, I'm afraid I can't do that.", 4, 5, "I'm sorry Dave, I'm afraid I can't do that.", 7, 8, "I'm sorry Dave, I'm afraid I can't do that.", "Boop!" |

| **Program will clear and replace previously displayed range of numbers once a new number has been inputted by the user.** |

## Setup/Installation Requirements

1. Clone this repository.
2. Open 'index.html' in your preferred browser of choice.
3. Enter a number into the field provided and receive a translated "beep-boop" return.

## Known Bugs
* No known bugs at this time.

## Technologies Used
* HTML
* CSS
* Javascript
* JQuery-3.2.1
* Bootstrap
* GitHub

## Support and contact details

_Email Drew Tucker at dtuck43@gmail.com with any questions or comments._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_{Drew Tucker}_**
