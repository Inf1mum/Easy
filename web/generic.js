document.addEventListener("DOMContentLoaded", function (event) {


 how.addEventListener("click", function () {
  content.innerHTML = '<div w3-include-html="howToPlay/howToPlay.html"></div>'
  w3IncludeHTML();
 });


 contacts.addEventListener("click", function () {
  content.innerHTML = '<div w3-include-html="contacts/contacts.html"></div>'
  w3IncludeHTML();
 });

 levels.addEventListener("click", function () {
  content.innerHTML = '<div w3-include-html="levels/tableLevels.html"></div>'
  w3IncludeHTML();
 });

});

