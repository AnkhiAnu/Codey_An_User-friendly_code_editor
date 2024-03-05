"use strict";
const html_code = document.getElementById("html-code");
const css_code = document.getElementById("css-code");
const js_code = document.getElementById("js-code");
const output = document.getElementById("output--screen");
const clear = document.getElementById("clear-button");
function run() {
  output.contentDocument.body.innerHTML =
    html_code.value + "<style>" + css_code.value + "</style>";
  output.contentWindow.eval(js_code.value);
}
function clearAll() {
  html_code.value = "";
  css_code.value = "";
  js_code.value = "";
  output.src = "about:blank";
}
clear.addEventListener("click", clearAll);
