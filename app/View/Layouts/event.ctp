<!DOCTYPE html>
<html>
<!--



                                                                           WElCOME TO 




      ___________________   _____          ___            _________                        __________________    ____          ___    _______________________
     /                   / |     \        |   |          /  _____  \                      |                  \  |    \        |   |  /                       \
    /________     ______/  |      \       |   |         /  /     \  \                     |    ______________/  |     \       |   |  \________        _______/
            /    /         |       \      |   |        /  /       \  \                    |   |                 |      \      |   |           \      /
           /    /          |   |\   \     |   |       /  /         \  \                   |   |                 |   |\  \     |   |            |    | 
          /    /           |   | \   \    |   |      /  /___________\  \                  |   |     _________   |   | \  \    |   |            |    |
         /    /            |   |  \   \   |   |     /  _______________  \                 |   |    /         \  |   |  \  \   |   |            |    |
  ____  /    /             |   |   \   \  |   |    /  /               \  \                |   |    \_____    |  |   |   \  \  |   |            |    |
 /   / /    /              |   |    \   \ |   |   /  /                 \  \               |   |          \   |  |   |    \  \ |   |    ________/    \________
/   /_/    /               |   |     \   \|   |  /  /                   \  \              |   \__________/   |  |   |     \  \|   |   /                      \
\_________/                |___|      \_______| /__/                     \__\    NA       \_________________/   |___|      \______|   \______________________/  



-->  
<head>
<title>Jnanagni | Fire Of Wisdom | Faculty Of Engineering And Technology, Haridwar | TechFest</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.3/js/bootstrap.min.js"></script>
  <script src='http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.0.6/modernizr.min.js' type='text/javascript'></script>
  
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
  <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">

  <script>window.jQuery || document.write('<script src="../js/jquery.min.js"><\/script>')</script>
  <script>window.jQuery.ui || document.write('<script src="../js/jquery-ui-1.10.4.custom.min.js"><\/script>')</script>
  <script>if(typeof($.fn.modal) === 'undefined') {document.write('<script src="../js/bootstrap.min.js"><\/script>')}

</script>
<script type='text/javascript'>
  window.Modernizr || document.write('<script src="../js/modernizr.js">\x3C/script>')
</script>
  <script>
    $(document).ready(function() {
    var bodyColor = $('body').css('color');
    if(bodyColor != 'rgb(51, 51, 51)') {
    $("head").prepend('<link rel="stylesheet" href="../css/bootstrap.min.css">');}});
  </script>
  <script>
    (function($){
        var $span = $('<span class="fa" style="display:none"></span>').appendTo('body');
        if ($span.css('fontFamily') !== 'FontAwesome' ) {
            // Fallback Link
            $('head').append('<link href="../css/font-awesome.min.css" rel="stylesheet">');
        }
        $span.remove();
    })(jQuery);
    </script>

<?php echo $this->Html->css(array('event','register')); ?>
<?php echo $this->Html->script(array('event','register')); ?>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<?php echo $this->fetch('content'); ?>
<?php echo $this->Html->script(array('forkit'));?>
</body>
</html>