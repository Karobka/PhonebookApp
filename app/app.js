//an object constructor that creates first and last name key value pairs
function Contact(firstname, lastname) {
    this.firstName = firstname;
    this.lastName = lastname;
}


$(document).ready(function() {
    //run this function on clicking the add contact button
    $("#addcontact").click(function(event){
        event.preventDefault();
        
        //define variables for the input values
        var submittedFirstName = $("input#firstname").val();
        var submittedLastName = $("input#lastname").val();
        
        //define a variable that runs the new contact object constructor with the arguments of first and last name passed in
        var newContact = new Contact(submittedFirstName, submittedLastName);
        
        //append the new contacts first and last names to the list
        $("#contactslist").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>" );

        //clear form inputs
        $("#firstname").val("");
        $("#lastname").val("");
        $("#addressline1").val("");
        $("#addressline2").val("");
        $("#city").val("");
        $("#stateregion").val("");
        $("#postalcode").val("");
        $("#country").val("");
        $("#telephone").val("");
        $("#emailaddress").val("");
    });
});