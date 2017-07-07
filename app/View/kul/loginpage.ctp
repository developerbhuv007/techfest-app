<title>login panel</title>
	<?php
	$regi="";
	$registered="";
	//session_start();
	//$n="";
	//echo $_SESSION['num'];
	/*if (!(isset($_POST['password']) && isset($_POST['email'])))
	{if(!(isset($_SESSION['flag'])&&$_SESSION['flag']=='1'))
			{echo 'kp';$n=$_SESSION['num'];}
			else
			{echo 'kk';}
	}*/
	if(isset($_POST['login'])) 
	{
		$email=htmlspecialchars($_POST['email']);
		$pass=htmlspecialchars($_POST['password']);
		$con=mysql_connect('localhost','root','password');
		$db= mysql_select_db('test1',$con);
		$sql="SELECT * from login where email='$email' and password='$pass'";
		$result=mysql_query($sql);
		$no=mysql_num_rows($result);
		if($no>0)
			{
				$_SESSION['login']=2;
				$registered="You have been Successfully Logged in";
				header("Location:home.php");
				}
			else
				{
				$_SESSION['login']='';
				$regi="You Have Entered Wrong Password or Email";
				}
					
			$_SESSION['reg']=$registered;
		mysql_close($con);
	}
	?>
    <link rel="stylesheet" href="../css/clogin.css" type="text/css"/>
	<div id="header">
    	<div id="gkv_logo"><img src="../img/gkv.png">
      	</div>
        <div id="gkv_name"><strong><br>Faculty of Engineering & Technology
                	<br>Gurukula Kangri Vishwavidyalaya</strong>
       	</div>
        <div id="swamiji_logo"><img src="../img/founder.png">
        </div>
  	</div>
	<div id="content_div">
   		<div id="main_div">
        	<!--<div style="text-align:center;"><?php //echo $regi;//echo $n;
						 ?></div>-->
        	<div id="login_form">
            	<form name="form1" method="POST" action="loginpage.ctp">
       				<div id="form_table">
                    	<table border="0" id="table">
            				<tr>
            					<th width="40%">Email /Phone &#8250;</th>
                				<td>
                                	<input type="text" name="email" placeholder="Enter Your Email or Phone" autocomplete="off" autofocus required>
                               	</td>
                              
           					</tr><br>
            				<tr>
            					<th>Password &#8250;</th>
                				<td>
                					<input type="password" name="password" placeholder="Enter Your Password" required>
                				</td>
                			
            				</tr>
            				<tr ><th><div id="remember_me"><input type="checkbox" name="remember_me" value="Remember me">Remember me</div></th>
            					<td><div id="forgot_pass">Forgot Password ?</div></td>
            				</tr>
            				<tr>
            					<th></th>
                				<td>
                					<input type="submit" name="login" value="Login">
                				</td>
            				</tr>
     					</table>
                       
             		</div>
   				</form>
     		</div>  
  		</div>
	</div>