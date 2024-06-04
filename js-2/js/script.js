// String-1 -- frontAgain
function frontAgain(str) {
  if (str.slice(0, 2) === str.slice(-2) && str.length > 1) {
    return true;
  }

  return false;
}

console.log(typeof Number("2") === "number");
console.log("Hello" % 1 === 0);

console.log("Hello".replaceAll("l", "M"));

// String-1 -- withoutX2

function withoutX2(str) {
  if (str.length > 2 && str[0] === "x" && str[1] === "x") {
    return str.slice(2);
  } else if (str.length > 2 && str[0] === "x") {
    return str.slice(1);
  } else if (str.length > 2 && str[1] === "x") {
    return str.replace("x", "");
  } else if (str.length <= 2 && str.includes("x")) {
    return "";
  } else {
    return str;
  }
}

// String-1 -- deFront

function deFront(str) {
  let result;
  if (str[0] === "a" && str[1] === "b") {
    result = "ab" + str.slice(2);
  } else if (str[0] === "a") {
    result = "a" + str.slice(2);
  } else if (str[1] === "b") {
    result = str.slice(1);
  } else {
    result = str.substring(2);
  }
  return result;
}

// String-1 -- startWord

function startWord(str, word) {
  if (str.substr(1, word.length - 1) === word.slice(1)) {
    return str.slice(0, word.length);
  } else {
    return "";
  }
}
