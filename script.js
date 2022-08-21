const encryptBtn = document.getElementById("encrypt");
const decryptBtn = document.getElementById("decrypt");
const input = document.getElementById("inputText");
const message = document.querySelector(".message");
const copyBtn = document.getElementById("copy")

let string;

encryptBtn.addEventListener("click", encrypt);

decryptBtn.addEventListener("click", decrypt);

copyBtn.addEventListener("click", copy);

function encrypt() {
    string = input.value
    string = string.toLowerCase();

    /*let keys = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat"
    }

    let result = string.replace(/a|e|i|o|u/gi, (matched) => {
        return keys[matched]
    });*/

    let result = []

    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a") {
            result.push("ai")
        } else if (string[i] === "e") {
            result.push("enter")
        } else if (string[i] === "i") {
            result.push("imes")
        } else if (string[i] === "o") {
            result.push("ober")
        } else if (string[i] === "u") {
            result.push("ufat")
        } else {
            result.push(string[i])
        }
    }
    string = result.join("");
    console.log(string)

    message.value = string;
    message.style.background = "none";
}

function decrypt() {
    string = input.value;

    let keys = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u"
    }

    let result = string.replace(/ai|enter|imes|ober|ufat/gi, (matched) => {
        return keys[matched]
    });
    console.log(result)
    message.style.background = "none";
    message.value = result;
}

function copy() {
    message.select();
    document.execCommand("copy");
    message.value = "";
    input.focus();
    input.value = "";
    alert("Texto Copiado!")
}
