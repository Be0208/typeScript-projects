"use strict";
var kinds = require("./data/kinds.js");
var select = document.getElementById("kind");
var options = "";
kinds.forEach(function (item) {
  options += '<option value="'.concat(item, '">').concat(item, "</option>");
});
if (select) {
  select.innerHTML = options || "";
}
