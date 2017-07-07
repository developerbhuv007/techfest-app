<?php echo $this->Facebook->html(); ?>
<head>
    <?php echo $this->Html->css('cake.generic'); ?>
</head>
<body>
    <!-- content -->
    
    <!-- end content -->
    <?php echo $this->fetch('content');?>
</body>
<?php echo $this->Facebook->init(); ?> 
</html>
