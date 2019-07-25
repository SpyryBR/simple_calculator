let result = '';
$('button').click(function () {
  document.getElementById("audio").play();
  
  var val = $(this).val()
  
  if(val == '=') {
    let ev = String(eval(result))
    
    result = (ev.length > 10) ? result = ev.slice(0, 10) : result = ev;   
    
    $('.screen-text').text(result)
    
  } else if (val == 'clear') {
    result = result.substring(0, result.length-1);
  } else {
    result += val
  }
  $('.screen-text').text(result.slice(0, 10))

})
