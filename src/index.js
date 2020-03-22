module.exports = function toReadable(number) {
    let oneTo9 = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine"
    ];
    let tenTo19 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];
    let tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    let convertToString = number.toString();

    if (number === 0) return "zero";

    if (number < 10) {
        return oneTo9[number];
    }
    if (convertToString.length === 2) {
        if (number < 20) {
            return tenTo19[convertToString[1]];
        } else if (convertToString[1] === "0") {
            return tens[convertToString[0]];
        } else
            return tens[convertToString[0]] + " " + oneTo9[convertToString[1]];
    }

    if (convertToString.length === 3) {
        if (convertToString[1] === "0" && convertToString[2] === "0")
            return oneTo9[convertToString[0]] + " hundred";
        else if (convertToString[1] === "1")
            return (
                oneTo9[convertToString[0]] +
                " hundred " +
                tenTo19[convertToString[(1, 2)]]
            );
        else if (convertToString[2] === "0")
            return (
                oneTo9[convertToString[0]] +
                " hundred " +
                tens[convertToString[1]]
            );
        else if (convertToString[1] === "0")
            return (
                oneTo9[convertToString[0]] +
                " hundred" +
                " " +
                oneTo9[convertToString[2]]
            );
        else
            return (
                oneTo9[convertToString[0]] +
                " hundred " +
                tens[convertToString[1]] +
                " " +
                oneTo9[convertToString[2]]
            );
    }
};
