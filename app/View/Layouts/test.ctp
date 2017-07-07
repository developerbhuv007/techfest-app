
<!DOCTYPE html>
<html>
<head>

<title>Home</title>
<?php echo $this->Html->css(array('bootstrap.min','index','demo','forkit','register')); ?>
<?php echo $this->Html->script(array('jquery.min','index')); ?>
<meta name='viewport' content='user-scalable=0' />
<meta name="viewport" content="width=device-width" />
</head>
<body>
<?php echo $this->fetch('content'); ?>
</body>
</html>
