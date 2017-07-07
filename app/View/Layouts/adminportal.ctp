<!DOCTYPE html>
<html>
<head>

<title>Admin Portal</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
  <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css" rel="stylesheet">
  <script>window.jQuery || document.write('<script src="../js/jquery.min.js"><\/script>')</script>
  <script>window.jQuery.ui || document.write('<script src="../js/jquery-ui-1.10.4.custom.min.js"><\/script>')</script>
  <script>
    $(document).ready(function() {
    var bodyColor = $('body').css('color');
    if(bodyColor != 'rgb(51, 51, 51)') {
    $("head").prepend('<link rel="stylesheet" href="../css/bootstrap.min.css">');}});
  </script>

<?php echo $this->Html->css(array('adminportal')); ?>
<?php echo $this->Html->script(array('adminportal')); ?>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<?php echo $this->Session->flash();?>	
<?php echo $this->fetch('content'); ?>
</body>
</html>
