"use strict";

//an object constructor that creates first and last name key value pairs
function Contact(firstname, lastname, telephone, emailaddress) {
    this.firstName = firstname;
    this.lastName = lastname;
    this.telephone = telephone;
    this.emailAddress = emailaddress;
    this.addresses = [];
}

//an object constructor for an address
function Address(addressline1, addressline2, city, stateregion, postalcode, country) {
    this.addressLine1 = addressline1;
    this.addressLine2 = addressline2;
    this.city = city;
    this.stateRegion = stateregion;
    this.postalCode = postalcode;
    this.country = country;
}

//a method that concactinates a full name
Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function() {
    return this.addressLine1 + ", " + this.city + ", " + this.stateRegion;
}


$(document).ready(function() {
    // on clicking add another address button append a set of address forms
    $("#addanotheraddress").click(function(event){
        event.preventDefault();
        $("#new-addresses").append(
            "<div class='new-address-extra'>" + 
                "<hr>" +
                "<div class='form-group'>" +
                "<label class='control-label col-sm-2' for='new-addressline1'>Address:</label>" +
                "<div class='col-sm-10'>" +
                    "<input type='text' class='form-control new-addressline1'>" +
                "</div>" +
            "</div>" +
            "<div class='form-group'>" +
                "<label class='control-label col-sm-2' for='new-addressline2'></label>" +
                "<div class='col-sm-10'>" +
                    "<input type='text' class='form-control new-addressline2'>" +
                "</div>" +
            "</div>" +
            "<div class='form-group'>" +
                "<label class='control-label col-sm-2' for='new-city'>City:</label>" +
                "<div class='col-sm-10'>" +
                    "<input type='text' class='form-control new-city'>" +
                "</div>" +
            "</div>" +
            "<div class='form-group'>" +
                "<label class='control-label col-sm-2' for='new-stateregion'>State/Province/Region:</label>" +
                "<div class='col-sm-10'>" +
                    "<input type='text' class='form-control new-stateregion'>" +
                "</div>" +
            "</div>" +
            "<div class='form-group'>" +
                "<label class='control-label col-sm-2' for='new-postalcode'>ZIP/Postal Code:</label>" +
                "<div class='col-sm-10'>" +
                    "<input type='text' class='form-control new-postalcode'>" +
                "</div>" +
            "</div>" +
            "<div class='form-group'>" +
                "<label class='control-label col-sm-2' for='new-country'>Country:</label>" +
                "<div class='col-sm-10'>" +
                    "<input type='text' class='form-control new-country'>" +
                "</div>" +
            "</div>");
    });

    //run this function on clicking the add contact button
    $("#addcontact").click(function(event){
        event.preventDefault();
        //define variables for the input values
        var submittedFirstName = $("#firstname").val();
        var submittedLastName = $("#lastname").val();
        var submittedTelephone = $("#telephone").val();
        var submittedEmailAddress = $("#emailaddress").val();
        
        //define a variable that runs the new contact object constructor with the arguments of the person's info passed in.
        var newContact = new Contact(submittedFirstName, submittedLastName, submittedTelephone, submittedEmailAddress);
        
        //do not allow blank name fields
        if (submittedFirstName == "" || submittedLastName == "") {
            alert("Please enter a first and last name");
        }else {
            
            //for each new address div define these variables for the given values
            $(".new-address, .new-address-extra").each(function() {
                var submittedAddressLine1 = $(this).find(".new-addressline1").val();
                var submittedAddressLine2 = $(this).find(".new-addressline2").val();
                var submittedCity = $(this).find(".new-city").val();
                var submittedStateRegion = $(this).find(".new-stateregion").val();
                var submittedPostalCode = $(this).find(".new-postalcode").val();
                var submittedCountry = $(this).find(".new-country").val();
                //create new address object with values
                var newAddress = new Address(submittedAddressLine1, submittedAddressLine2, submittedCity, submittedStateRegion, submittedPostalCode, submittedCountry);
                //push the new address to the addresses array
                newContact.addresses.push(newAddress);
            });
        
            //append the new contacts first and last names to the list
            $("#contactslist").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>" );
            console.log(newContact);

            $(".contact").last().click(function() {
                $("#contactdetails").show();
                $("#contactdetails h2").text(newContact.fullName());
                $("#detail-firstname").text(newContact.firstName);
                $("#detail-lastname").text(newContact.lastName);
                $("#moreaddresses").text("");
                newContact.addresses.forEach(function(address) {
                    $("#moreaddresses").append("<li>" + address.fullAddress() + "</li>");
                });
                $("#detail-telephone").text(newContact.telephone);
                $("#detail-email").text(newContact.emailAddress);
            });

            //clear form inputs
            $("#firstname").val("");
            $("#lastname").val("");
            $(".new-addressline1").val("");
            $(".new-addressline2").val("");
            $(".new-city").val("");
            $(".new-stateregion").val("");
            $(".new-postalcode").val("");
            $(".new-country").val("");
            $("#telephone").val("");
            $("#emailaddress").val("");
            $(".new-address-extra").remove();
        }

    });



});