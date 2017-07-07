
	<div id="gkv_header"></div>
<div id='modal'>
<div id='heading'><h1 align="center">Contact Form </h1></div>
<div id='content'>

<table width="300" height="137" align="center">
	<?php echo $this->Form->create('feedback');?>

<tr>
<td height="30" align="center">Name</td><td> 
 <?php  echo $this->Form->input('name',array('label'=>false,'placeholder'=>'Enter your name','type'=>'text','autofocus','autocomplete'=>'off','class'=>'input','required'));?>
</td></tr>
<td height="30" align="center">Contact No.</td><td> 
 <?php  echo $this->Form->input('number',array('label'=>false,'placeholder'=>'Enter your number','type'=>'number','autofocus','autocomplete'=>'off','class'=>'input','required'));?><div id="error" style="height:auto;width:auto;color:red"></div>
</td></tr>
<td height="30" align="center">Emailid</td><td> 
 <?php  echo $this->Form->input('emailid',array('label'=>false,'placeholder'=>'Enter your emailid','type'=>'email','autofocus','autocomplete'=>'off','class'=>'input','required'));?>
</td></tr>

<tr>
  <td height="30" align="center">Feedback</td><td >
   <?php  echo $this->Form->input('feedback',array('label'=>false,'placeholder'=>'Enter your feedback','type'=>'text','autofocus','autocomplete'=>'off','class'=>'input','required'));?>
</td></tr>
<tr>
  <td></td><td height="24"  >
  <?php echo $this->Form->end("Submit");?>

</table>
<?php


?>
</div>
</div>
