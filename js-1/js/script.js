// Warmup-1 -- hasTeen
function hasTeen(a, b, c) {
  if ((a < 20 && a >= 13) || (b < 20 && b >= 13) || (c < 20 && c >= 13)) {
    return true;
  } else {
    return false;
  }
}

// Warmup-1 -- delDel

function delDel(str) {
  if (str.startsWith("del", 1)) {
    return str.replace("del", "");
  } else {
    return str;
  }
}

// Warmup-1 -- mixStart

function mixStart(str) {
  if (str.startsWith("ix", 1)) {
    return true;
  } else {
    return false;
  }
}

// Warmup-1 -- startOz

function startOz(str) {
  if (str[0] === "o" && str[1] === "z") {
    return "oz";
  } else if (str[0] === "o") {
    return "o";
  } else if (str[1] === "z") {
    return "z";
  } else {
    return "";
  }
}

// Warmup-1 -- intMax
function intMax(a, b, c) {
  if (Math.max(a, b, c) === a) {
    return a;
  } else if (Math.max(a, b, c) === b) {
    return b;
  } else if (Math.max(a, b, c) === c) {
    return c;
  }
}

// Warmup-1 -- close10
function close10(a, b) {
  if (Math.abs(10 - a) > Math.abs(10 - b)) {
    return b;
  } else if (Math.abs(10 - a) < Math.abs(10 - b)) {
    return a;
  } else {
    return 0;
  }
}

// Warmup-1 -- in3050

function in3050(a, b) {
  if (
    (a <= 40 && a >= 30 && b <= 40 && b >= 30) ||
    (a <= 50 && a >= 40 && b <= 50 && b >= 40)
  ) {
    return true;
  } else {
    return false;
  }
}

// Warmup-1 -- max1020
function max1020(a, b) {
  if (a >= 10 && a <= 20 && b >= 10 && b <= 20) {
    return Math.max(a, b);
  } else if (a >= 10 && a <= 20) {
    return a;
  } else if (b >= 10 && b <= 20) {
    return b;
  } else {
    return 0;
  }
}

// Warmup-1 -- stringE

function stringE(str) {
  let counte = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") {
      counte++;
    }
  }

  return counte === 1 || counte === 3;
}

// Warmup-1 -- lastDigit

function lastDigit(a, b, c) {
  if (a % 10 === b % 10) {
    return true;
  } else {
    return false;
  }
}

// Warmup-1 -- endUp
function endUp(str) {
  if (str.length > 3) {
    return (
      str.slice(0, str.length - 3) + str.slice(str.length - 3).toUpperCase()
    );
  } else {
    return str.toUpperCase();
  }
}

// Warmup-1 -- everyNth

function everyNth(str, n) {
  let string = "";
  for (let i = 0; i < str.length; i += n) {
    string += str[i];
  }
  return string;
}

// Warmup-1 -- parrotTrouble

function parrotTrouble(talking, hour) {
  if (talking) {
    return hour < 7 || hour > 20;
  } else {
    return false;
  }
}

// Warmup-1 -- posNeg

function posNeg(a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  } else if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
    return true;
  } else {
    return false;
  }
}

function loneTeen(a, b){
  if((a>=13 && a<=19) && (b>19 || b<13)){
    return true;
  } else if((b>=13 && b<=19) && (a>19 || a<13)){
    return true;
  } else {
    return false;
  } 
}