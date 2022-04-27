var disabled = 0;
function disableEnableField() {
  if (disabled == 1) {
    //disable
    document.getElementById("other-field").disabled = true;
    disabled = 0;
  } else {
    //enable again
    document.getElementById("other-field").disabled = false;
    disabled = 1;
  }
}
function myFunction() {
  document.getElementById("myForm").reset();
}
