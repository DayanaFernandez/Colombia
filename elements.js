function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;}
 {
    var x = document.forms["myForm"]["email"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;}
{
    var x = document.forms["myForm"]["birthday"].value;
    if (x == "") {
        alert("Birthday needs to be entered");
        return false;}
{
    var x = document.forms["myForm"]["website"].value;
    if (x == "") {
        alert("Please provide your webpage");
        return false;}
{
    var x = document.forms["myForm"]["cellphone"].value;
    if (x == "") {
        alert("Please provide your cellphone number");
        return false;}