module.exports = function toReadable(number) {
    // 0-20
    let tyArray = [
        "zero",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let enArray = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    let numArray = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    if (number >= 0) {
        if (number >= 0 && number < 20) {
            return enArray[number];
        } else if (number >= 20 && number < 100) {
            if (number % 10 === 0) {
                return tyArray[Math.floor(number / 10)];
            }

            return (
                tyArray[Math.floor(number / 10)] + " " + numArray[number % 10]
            );
        } else if (number >= 100 && number % 100 === 0) {
            if (number === 100) {
                return "one hundred";
            }
            return numArray[Math.floor(number / 100)] + " " + "hundred";
        } else if (number > 100 && number < 120) {
            return (
                numArray[Math.floor(number / 100)] +
                " " +
                "hundred " +
                enArray[number % 100]
            );
        } else if (number > 200 && number < 220) {
            return (
                numArray[Math.floor(number / 100)] +
                " " +
                "hundred " +
                enArray[number % 100]
            );
        } else if (number > 300 && number < 320) {
            return (
                numArray[Math.floor(number / 100)] +
                " " +
                "hundred " +
                enArray[number % 100]
            );
        } else if (number > 400 && number < 420) {
            return (
                numArray[Math.floor(number / 100)] +
                " " +
                "hundred " +
                enArray[number % 100]
            );
        } else if (number > 500 && number < 520) {
            return (
                numArray[Math.floor(number / 100)] +
                " " +
                "hundred " +
                enArray[number % 100]
            );
        } else if (number > 600 && number < 620) {
            return (
                numArray[Math.floor(number / 100)] +
                " " +
                "hundred " +
                enArray[number % 100]
            );
        } else if (number > 700 && number < 720) {
            return (
                numArray[Math.floor(number / 100)] +
                " " +
                "hundred " +
                enArray[number % 100]
            );
        } else if (number > 800 && number < 820) {
            return (
                numArray[Math.floor(number / 100)] +
                " " +
                "hundred " +
                enArray[number % 100]
            );
        }
        // 911 -- nine hun fifty two
        else if (number > 900 && number < 920) {
            return (
                numArray[Math.floor(number / 100)] +
                " " +
                "hundred " +
                enArray[number % 100]
            );
        }

        //Чтобы в конце zero не вставляло
        else if (number >= 120 && (number % 100) % 10 === 0) {
            return (
                numArray[Math.floor(number / 100)] +
                " " +
                "hundred " +
                tyArray[Math.floor(Math.floor(number % 100) / 10)]
            );
        }

        // 932
        else {
            return (
                numArray[Math.floor(number / 100)] +
                " " +
                "hundred " +
                tyArray[Math.floor(Math.floor(number % 100) / 10)] +
                " " +
                enArray[(number % 100) % 10]
            );
        }
    }
};
