import { pingPong } from './ping-pong';
import { bodyString } from './sample-index';

$(function()
{
  $("body").html(bodyString());

  $("#ping-pong-form").submit(function(event)
  {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element)
    {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
