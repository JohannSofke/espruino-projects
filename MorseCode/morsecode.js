function ledOn() {
  LED2.write(true);
}

function ledOff() {
  LED2.write(false);
}

function sleep(seconds) {
  const startTime = getTime();
  const endTime = startTime + seconds;
  while (getTime() < endTime) {}
}

function showDot() {
  sleep(0.5);
  ledOn();
  sleep(0.5);
  ledOff();
}

function showLine() {
  sleep(0.5);
  ledOn();
  sleep(1.5);
  ledOff();
}

function A() {
  sleep(1);
  showDot();
  showLine();
}

function B() {
  sleep(1);
  showLine();
  showDot();
  showDot();
  showDot();
}

function C() {
  sleep(1);
  showLine();
  showDot();
  showLine();
  showDot();
}

function D() {
  sleep(1);
  showLine();
  showDot();
  showDot();
}

function E() {
  sleep(1);
  showDot();
}

function F() {
  sleep(1);
  showDot();
  showDot();
  showLine();
  showDot();
}

function G() {
  sleep(1);
  showLine();
  showLine();
  showDot();
}

function H() {
  sleep(1);
  showDot();
  showDot();
  showDot();
  showDot();
}

function I() {
  sleep(1);
  showDot();
  showDot();
}

function J() {
  sleep(1);
  showDot();
  showLine();
  showLine();
  showLine();
}

function K() {
  sleep(1);
  showLine();
  showDot();
  showLine();
}

function L() {
  sleep(1);
  showDot();
  showLine();
  showDot();
  showDot();
}

function M() {
  sleep(1);
  showLine();
  showLine();
}

function N() {
  sleep(1);
  showLine();
  showDot();
}

function O() {
  sleep(1);
  showLine();
  showLine();
  showLine();
}

function P() {
  sleep(1);
  showDot();
  showLine();
  showLine();
  showDot();
}

function Q() {
  sleep(1);
  showLine();
  showLine();
  showDot();
  showLine();
}

function R() {
  sleep(1);
  showDot();
  showLine();
  showDot();
}

function S() {
  sleep(1);
  showDot();
  showDot();
  showDot();
}

function T() {
  sleep(1);
  showLine();
}

function U() {
  sleep(1);
  showDot();
  showDot();
  showLine();
}

function V() {
  sleep(1);
  showDot();
  showDot();
  showDot();
  showLine();
}

function W() {
  sleep(1);
  showDot();
  showLine();
  showLine();
}

function X() {
  sleep(1);
  showLine();
  showDot();
  showDot();
  showLine();
}

function Y() {
  sleep(1);
  showLine();
  showDot();
  showLine();
  showLine();
}

function Z() {
  sleep(1);
  showLine();
  showLine();
  showDot();
  showDot();
}

function showCharacter(input) {
  switch (input) {
    case 'a':
      A();
      break;
    case 'b':
      B();
      break;
    case 'c':
      C();
      break;
    case 'd':
      D();
      break;
    case 'e':
      E();
      break;
    case 'f':
      F();
      break;
    case 'g':
      G();
      break;
    case 'h':
      H();
      break;
    case 'i':
      I();
      break;
    case 'j':
      J();
      break;
    case 'k':
      K();
      break;
    case 'l':
      L();
      break;
    case 'm':
      M();
      break;
    case 'n':
      N();
      break;
    case 'o':
      O();
      break;
    case 'p':
      P();
      break;
    case 'q':
      Q();
      break;
    case 'r':
      R();
      break;
    case 's':
      S();
      break;
    case 't':
      T();
      break;
    case 'u':
      U();
      break;
    case 'v':
      V();
      break;
    case 'w':
      W();
      break;
    case 'x':
      X();
      break;
    case 'y':
      Y();
      break;
    case 'z':
      Z();
      break;
  }
}

function showText(text) {
  LED1.write(false);
  for (let i = 0; i < text.length; i++) {
    showCharacter(text.charAt(i));
  }
  LED1.write(true);
}

setTimeout('showText("HelloWorld")', 500);
