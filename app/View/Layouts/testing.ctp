<!DOCTYPE html>
<html>
<head>

<title>Testing</title>
<?php echo $this->Html->css(array('bootstrap.min','adminportal')); ?>
<?php echo $this->Html->script(array('jquery.min','jquery-ui-1.10.4.custom.min','adminportal')); ?>
</head>
<body>
<?php echo $this->fetch('content'); ?>
</body>
</html>
