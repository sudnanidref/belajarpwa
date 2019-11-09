$(document).ready(function(){

  var _url = "https://my-json-server.typicode.com/sudnanidref/pwaapi/data";

  var dataResult = '';
  var lastnameResult  = '';
  var last_name = [];


  $.get(_url, function(data){
    $.each(data, function(key, items){

      _last_name = items.last_name

      dataResult += "<div>"
        + "<h3>" + items.first_name + "</h3>"
        + "<p>" + _last_name + "</p>" +
      "</div>";

      if($.inArray(_last_name) == -1){
        last_name.push(_last_name);
        lastnameResult += "<option value='"+_last_name+"'>" + _last_name + "</option>"
      }
    })

    $('#product').html(dataResult);
    $('#lastname_select').html(lastnameResult);
  })

  $("#lastname_select").on('change', function(){
    updateData($(this).val());
    // console.log($(this).val());
  })

  function updateData(last_name){
    console.log('masuukk');
    var dataResult = '';
    var _newUrl = "https://my-json-server.typicode.com/sudnanidref/pwaapi/data?last_name="+last_name;

    console.log(_newUrl);

    $.get(_newUrl, function(data){
      $.each(data, function(key, items){
        _last_name = items.last_name

        dataResult += "<div>"
          + "<h3>" + items.first_name + "</h3>"
          + "<p>" + _last_name + "</p>" +
        "</div>";
      })
      $('#product').html(dataResult);
    })
  }
}) //end of doc.ready

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
