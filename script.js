"use strict";
const html_code = document.getElementById("html-code");
const css_code = document.getElementById("css-code");
const js_code = document.getElementById("js-code");
const output = document.getElementById("output--screen");
const clear = document.getElementById("clear-button");
const light_mode = document.querySelector(".light-mode");
const dark_mode = document.querySelector(".dark-mode");
const editor_area = document.querySelectorAll(".code");
const secondary_headings = document.querySelectorAll(".heading-secondary");
const footer = document.querySelector(".footer");
const social_links = document.querySelectorAll(".social-links-logo");
const view1 = document.getElementById("view1");
const view2 = document.getElementById("view2");
const view3 = document.getElementById("view3");
const main=document.querySelector(".main");
const editor_portion=document.querySelector(".editor");
const output_portion=document.querySelector(".output");
const divider=document.querySelector(".divider");
/*
  Code for light and dark mode
*/

const code_area_change = function () {
  for (let i = 0; i < editor_area.length; i++) {
    editor_area[i].style.background = "#4d4d4d";
    editor_area[i].style.backgroundColor = "#4d4d4d";
    editor_area[i].style.color = "#e6e6e6";
  }
};
const code_area_change_reset = function () {
  for (let i = 0; i < editor_area.length; i++) {
    editor_area[i].style.background = "#fff";
    editor_area[i].style.backgroundColor = "#fff";
    editor_area[i].style.color = "#000";
  }
};
const heading_color_change = function () {
  for (let i = 0; i < secondary_headings.length; i++) {
    secondary_headings[i].style.color = "#e6e6e6";
  }
};
const heading_color_change_reset = function () {
  for (let i = 0; i < secondary_headings.length; i++) {
    secondary_headings[i].style.color = "#000";
  }
};
const social_links_color_change = function () {
  for (let i = 0; i < social_links.length; i++) {
    social_links[i].style.backgroundColor = "#e6e6e6";
    social_links[i].style.color = "#121212";
  }
};
const social_links_color_change_reset = function () {
  for (let i = 0; i < social_links.length; i++) {
    social_links[i].style.backgroundColor = "#fff";
    social_links[i].style.color = "rgb(133, 130, 130)";
  }
};
light_mode.addEventListener("click", function () {
  dark_mode.classList.remove("active");
  light_mode.classList.add("active");
  document.querySelector("body").style.backgroundColor =
    "rgba(158, 157, 157, 0.356)";
  code_area_change_reset();
  heading_color_change_reset();
  footer.style.color = "#000";
  footer.style.backgroundColor = "rgba(255, 255, 255, 0.26)";
  footer.style.border = "none";
  social_links_color_change_reset();
});
dark_mode.addEventListener("click", function () {
  light_mode.classList.remove("active");
  dark_mode.classList.add("active");
  document.querySelector("body").style.backgroundColor = "#121212";
  code_area_change();
  heading_color_change();
  footer.style.color = "#e6e6e6";
  footer.style.backgroundColor = "#121212";
  footer.style.borderTop = "2px solid #4d4d4d";
  social_links_color_change();
});

/*
  Code for changing the layout
*/
const change_code_area_size=function(){
  for(let i=0;i<editor_area.length;i++){
    editor_area[i].style.width="30%";
  }
};
const change_from_view1_to_view3=function(){
  main.style.flexDirection = "row";
  editor_portion.style.width = "48%";
  editor_portion.classList.remove("flex");
  document.querySelector(".html-editor").style.width = "100%";
  document.querySelector(".css-editor").style.width = "100%";
  document.querySelector(".js-editor").style.width = "100%";
  output_portion.style.width = "48%";
  output.style.height = "92%";
  output.style.width = "100%";
  divider.style.width = "0.8rem";
  divider.style.height = "97%";
  divider.style.background =
    "linear-gradient(to bottom, #ffa033, rgb(236, 236, 144), #ffa033)";
  divider.style.top = "49%";
  divider.style.left = "50%";
  divider.style.transform = "translate(-50%,-50%)";
};
view1.addEventListener("click", function () {
  view2.classList.remove("active");
  view3.classList.remove("active");
  view1.classList.add("active");
  main.style.flexDirection = "row";
  main.style.flexDirection = "column";
  editor_portion.style.width = "100%";
  editor_portion.classList.add("flex");
  editor_portion.style.justifyContent="space-between";
  document.querySelector(".html-editor").style.width="30%";
  document.querySelector(".css-editor").style.width="30%";
  document.querySelector(".js-editor").style.width="30%";
  output_portion.style.width="100%";  
  output.style.height="50rem";  
  divider.style.width="100%";
  divider.style.height="0.8rem";
  divider.style.background =
    "linear-gradient(to right, #ffa033, rgb(236, 236, 144), #ffa033)";
  divider.style.top="40%";
  divider.style.left="50%";
  divider.style.transform="translate(-50%,-50%)";
});
view2.addEventListener("click", function () {
  if (view1.classList.contains("active")) {
    view1.classList.remove("active");
    change_from_view1_to_view3();
    main.style.flexDirection = "row-reverse";
    view2.classList.add("active");
  } 
  else if (view3.classList.contains("active")) {
    view3.classList.remove("active");
    view2.classList.add("active");
    main.style.flexDirection = "row-reverse";
  }
});
view3.addEventListener("click", function () {
  if(view1.classList.contains("active")){
    view1.classList.remove("active");
    change_from_view1_to_view3();
    view3.classList.add("active");
  }
  else if(view2.classList.contains("active")){
    view2.classList.remove("active");
    view3.classList.add("active");
    main.style.flexDirection = "row";
  }
  
});

/*
  Code for taking input from the editor and outpur it
*/

function run() {
  output.contentDocument.body.innerHTML =
    html_code.value + "<style>" + css_code.value + "</style>";
  output.contentWindow.eval(js_code.value);
}

/*
  Code for clearAll button
*/
function clearAll() {
  html_code.value = "";
  css_code.value = "";
  js_code.value = "";
  output.src = "about:blank";
}
clear.addEventListener("click", clearAll);
