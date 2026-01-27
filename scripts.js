/* console.debug("Loading custom scripts."); */
//console.debug("Reading custom scripts.");
//function includeHTML() {
//  console.debug("Runing includeHTML()");
//  var z, i, element, file, xhttp;
//  /* Loop through a collection of all HTML elements: */
//  z = document.getElementsByTagName("*");
//  for (i = 0; i < z.length; i++) {
//    element = z[i];
//    /*search for elements with a certain atrribute:*/
//    file = element.getAttribute("w3-include-html");
//    if (file) {
//      /* Make an HTTP request using the attribute value as the file name: */
//      xhttp = new XMLHttpRequest();
//      xhttp.onreadystatechange = function() {
//        if (this.readyState == 4) {
//          if (this.status == 200) {element.innerHTML = this.responseText;}
//          if (this.status == 404) {element.innerHTML = "Page not found.";}
//          /* Remove the attribute, and call this function once more: */
//          element.removeAttribute("w3-include-html");
//          includeHTML();
//        }
//      }
//      xhttp.open("GET", file, true);
//      xhttp.send();
//      /* Exit the function: */
//      return;
//    }
//  }
//};
function selectLanguage(lang="en") {
    if (lang == "de") {
        STRINGS = STRINGS_DE;
    }
    else
    {
        STRINGS = STRINGS_EN;
    }
    var active_lang = document.getElementById("lang-"+lang);
    active_lang.class = "lang-selector-active";
};

function insertKString() {
  //console.debug("My test script...");
  var z, i, element, stringname, text;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    element = z[i];
    /*search for elements with a certain atrribute:*/
    stringname = element.getAttribute("kk-string");
    if (stringname) {
        if (stringname in STRINGS) {
            text = STRINGS[stringname];
            // Fall back to english strings
        } else if (stringname in STRINGS_EN) {
            text = STRINGS_EN[stringname];
        } else {
            text = '#';
        }
       element.innerHTML = text;
    }
  }
  //console.debug("My test script ran");
};

function updateLanguage(lang="en") {
    selectLanguage(lang);
    insertKString();
}
