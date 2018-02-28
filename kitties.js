// $(document).on('ready', function() {

// });

// $(document).ready(function() {

// });

// $(function() {

// });

$(function() {
  // CSS Selector
  var $firstLi = $('#not-cats li').first();
  $firstLi.text("K");
  $firstLi.css({
    color: 'cyan',
    'background-color': 'teal',
    'font-size': Math.random()*100+'em' 
  });
  $firstLi.css('color', 'red');

  $("ul").sortable();

  // setTimeout(function(){
  //   window.location.reload(1);
  // }, 1000);

  // A native dom element
  var firstImage = document.querySelector('img');
  var $firstImage = $(firstImage);

  // tag 
  var $newH6 = $('<h6>');
  $newH6.text('Awesome Cats Yo');
  $newH6.on('click', function() {
    console.log("clicked the h6");
    console.log($(this));
    $(this).hide();
  });
  // $newH6.appendTo($('body'));
  $('body').append($newH6);

  // $('<h1>asdjfk</h2>')

  for (let emoji of ['🤗', '💩', '🙀']) {
    $('<p>')
    .text('worlds cutest cat ' + emoji)
    .css({
      'color': 'tomato',
      'background-color': 'cyan'
    })
    .appendTo($('body'));
  }




  // Delegation

  $('ul').on('click', 'li', function() {
    $(this).hide();
    console.log("🤗");
    $('<li>').text("hi").appendTo($('ul').first());
    $('img').effect('explode');
  });




  // A function


});