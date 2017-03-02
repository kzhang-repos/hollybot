// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require_tree .

$(document).on('turbolinks:load', function(){

    $('#holly-response').append('Holly: Hi, I am a chatbot Kate built. Ask me what skills I have.<br>');
    $('#query').val('');

    $("#query").on('keyup', function (e) {
        if (e.keyCode == 13) {
            getResponse();
        }
    });

    $('#send').on('click', function(e) {
        getResponse();
    });

  function getResponse() {
      var input = $('#query').val();
      $('#holly-response').append('You: ' + input + '<br>');
      $('#holly-response').scrollTop($('#holly-response')[0].scrollHeight);

      var search_restaurant = input.match(/restaurant/i);
      var contact = input.match(/@/i);

      if (search_restaurant) {
          $.ajax({
            url: '/get_restaurants',
            type: 'json',
            method: 'get',
            data: { query: input },
            success: function(data) {
                $('#holly-response').append('Holly: ' + data['response'] + '<br>');
                $('#query').val('');
                $('#holly-response').scrollTop($('#holly-response')[0].scrollHeight);
            }
        });
      } else if (contact) {
          $.ajax({
            url: '/contact',
            type: 'json',
            method: 'get',
            data: { query: input },
            success: function(data) {
                $('#holly-response').append('Holly: ' + data['response'] + '<br>');
                $('#query').val('');
                $('#holly-response').scrollTop($('#holly-response')[0].scrollHeight);
            }
        });
      } else {
          $.ajax({
            url: '/ask_holly',
            type: 'json',
            method: 'get',
            data: { query: input },
            success: function(data) {
                $('#holly-response').append('Holly: ' + data['response'] + '<br>');
                $('#query').val('');
                $('#holly-response').scrollTop($('#holly-response')[0].scrollHeight);
            }
        });
      };
  };
});
