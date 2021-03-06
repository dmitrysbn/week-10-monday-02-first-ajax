document.addEventListener("DOMContentLoaded", function() {

  var step12Button = document.querySelector('#step12button');
  var step3456Button = document.querySelector('#step3456button');
  var step7Button = document.querySelector('#step7button');
  var step8Button = document.querySelector('#step8button');
  var step8Button2 = document.querySelector('#step8button2');
  var step9Button = document.querySelector('#step9button');

  var section3456 = document.querySelector('#step3456');

  var section7 = document.querySelector('#step7');
  section7.append(document.createElement('p'));
  var section7Paragraph = section7.querySelector('p');

  var section8 = document.querySelector('#step8');
  section8.append(document.createElement('p'));
  var section8Paragraph = section8.querySelector('p');

  var section9 = document.querySelector('#step9');
  section9.append(document.createElement('p'));
  var section9Paragraph = section9.querySelector('p');
  var carList = section9.querySelector('#car-list');

  step12Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      data: {},
      dataType: 'text'
    });
  });

  step3456Button.addEventListener('click', function() {
    var p = document.createElement("p");
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      method: 'GET',
      data: {},
      dataType: 'text'

    }).done(function(responseData) {
        console.log(responseData);
        p.innerText = responseData;
        section3456.append(p);

    }).fail(function(jqXHR, textStatus, errorThrown) {
        console.log("The request failed!");
        p.innerText = jqXHR.responseText;
        section3456.append(p);

    }).always(function() {
      console.log("Hey, the request finished!");
    });
  });

  step7Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/count',
      method: 'GET',
      data: {amount: 5}, // max seems to be 5; increases the count by the amount
      dataType: 'text'

    }).done(function(responseData) {
      section7Paragraph.innerText = responseData;
    });
  });

  step8Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: 'America/Toronto'},
      dataType: 'text'

    }).done(function(responseData) {
      section8Paragraph.innerText = responseData;
    });
  });

  step8Button2.addEventListener('click', function() {
    var timezone = prompt("Please enter the timezone", "e.g. 'America/Toronto'");

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      method: 'GET',
      data: {timezone: timezone},
      dataType: 'text'

    }).done(function(responseData) {
      section8Paragraph.innerText += timezone + ": " + responseData + "\n";

    }).fail(function() {
      section8Paragraph.innerText += timezone + " is not a valid time zone!\n";
    })
  });

  step9Button.addEventListener('click', function() {
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      method: 'GET',
      data: {},
      dataType: 'html'

    }).done(function(responseData) {
      carList.innerHTML += responseData;
    });
  });


});
