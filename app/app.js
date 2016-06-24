"use strict"

//an object constructor that creates first and last name key value pairs
function Contact(firstname, lastname, addressline1, addressline2, city, stateregion, postalcode, country, telephone, emailaddress) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.addressLine1 = addressline1;
    this.addressLine2 = addressline2;
    this.city = city;
    this.stateRegion = stateregion;
    this.postalCode = postalcode;
    this.country = country;
    this.telephone = telephone;
    this.emailAddress = emailaddress;
}


$(document).ready(function() {
    //run this function on clicking the add contact button
    $("#addcontact").click(function(event){
        event.preventDefault();
        
        //define variables for the input values
        var submittedFirstName = $("#firstname").val();
        var submittedLastName = $("#lastname").val();
        var submittedAddressLine1 = $("#addressline1").val();
        var submittedAddressLine2 = $("#addressline2").val();
        var submittedCity = $("#city").val();
        var submittedStateRegion = $("#stateregion").val();
        var submittedPostalCode = $("#postalcode").val();
        var submittedCountry = $("#country").val();
        var submittedTelephone = $("#telephone").val();
        var submittedEmailAddress = $("#emailaddress").val();

        if (submittedFirstName == "" || submittedLastName == "") {
            alert("Please enter a first and last name");
        }else {
            //define a variable that runs the new contact object constructor with the arguments of first and last name passed in
            var newContact = new Contact(submittedFirstName, submittedLastName, submittedAddressLine1, submittedAddressLine2, submittedCity, submittedStateRegion, submittedPostalCode, submittedCountry, submittedTelephone, submittedEmailAddress);
            
            //append the new contacts first and last names to the list
            $("#contactslist").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>" );
            console.log(newContact);

            $(".contact").last().click(function() {
                $("#contactdetails").show();
                $("#contactdetails h2").text(newContact.firstName + " " + newContact.lastName);
                $("#detail-firstname").text(newContact.firstName);
                $("#detail-lastname").text(newContact.lastName);
                $("#detail-addressline1").text(newContact.addressLine1);
                $("#detail-addressline2").text(newContact.addressLine2);
                $("#detail-city").text(newContact.city);
                $("#detail-state-region").text(newContact.stateRegion);
                $("#detail-postal-code").text(newContact.postalCode);
                $("#detail-country").text(newContact.country);
                $("#detail-telephone").text(newContact.telephone);
                $("#detail-email").text(newContact.emailAddress);
            });

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
        }
    });
});