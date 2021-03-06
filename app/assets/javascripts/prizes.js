$( document ).ready(function(){
  $('.pick-winner').click(function(e){
    e.preventDefault();
    var $form = $(this).closest('form');
    $form.closest('div').hide();
    $.ajax({
      url: $form.attr('action'),
      type: 'POST',
      data: $form.serialize(),
      dataType: 'script',
      success: function(d){
        var tweet = JSON.parse(d);
        var $repick = $form.parent().parent().find('form').last()[0];
        $repick.action = '/campaigns/' + tweet[0].campaign_id + '/prizes/' + tweet[0].prize_id + '/winners/' + tweet[0].winner_id;
        $repick.className = "repick-form";
        $repick.removeAttribute('style');
        $form.parent().parent().prepend('<div class="winning-tweet"><blockquote class="twitter-tweet" lang="en"><p>'+tweet[0].text+'</p>&mdash; '+tweet[0].name+' (' + tweet[0].screen_name +') <a href="https://twitter.com/'+tweet[0].screen_name+'/statuses/'+tweet[0].status_id_str+'">'+tweet[0].entry_time+'</a></blockquote><script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script></div>');
        var $hashtag = $('#hashtag').text();
        var prizeText = tweet[0].prize_name;
        
        var tweetText = 'Congratulations! You won ' + prizeText + ' in the ' + $hashtag + ' giveaway!';
        $form.parent().parent().append('<div class="tweet-to-winner btn"><a href="https://twitter.com/intent/tweet?screen_name='+ tweet[0].screen_name + '&text=' + tweetText +'" class="twitter-mention-button" data-size="large" data-related="'+ tweet[0].screen_name +'">Tweet to @'+ tweet[0].screen_name +'</a></div>');
        
      },
      failure: function(){alert('Could not pick winner');}
    });
  });
});

$( document ).ready(function(){
  $('form').on('click','.repick-winner',function(e){
    e.preventDefault();
    var $form = $(this).closest('form');
    $.ajax({
      url: $form.attr('action'),
      type: 'POST',
      data: $form.serialize(),
      dataType: 'script',
      success: function(d){
        $form.hide();
        var pick = $form.parent().find('.no-winner');
        pick[0].removeAttribute('style');
        $form.parent().find('.winning-tweet').remove();
        $form.parent().find('.tweet-to-winner').remove()
      },
      failure: function(){
        alert('Winner could not be repicked. Please try again later');
      }
    });
  });
});



// $( document ).ready(function(){
//   $('.plus-prize').click(function(e){
//     var plusing = $(this).siblings()[3];
//     var minusing = $(this).siblings()[6];
//     e.preventDefault();
//     var original = Number(plusing.textContent);
//     original ++;
//     plusing.textContent = original;
//   });
//   $('.minus-prize').click(function(e){
//     e.preventDefault();
//     var originaly = Number(plusing.textContent);
//     if (pNumber>0) {
//       original--;
//     };
//     plusing.textContent = original;
//   });
// });
    
      // <p>
      // <div class="prize-count" >0</div>
      // <button class="plus-prize">+</button>
      // <button class="minus-prize">-</button>
      // </p>








