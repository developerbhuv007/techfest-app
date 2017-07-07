	<?php 
		/*$num="";
		$f="";
		//session_start();s
		$reg=$_SESSION['reg'];
		if(!(isset($_SESSION['login']) && $_SESSION['login']!=''))
		{	
			$num="You Must be Logged in first";
			$f='1';
			//$_SESSION['login']=3;
			$_SESSION['flag']=$f;
			$_SESSION['num']=$num;
			header("Location:loginpage.ctp");
		}
		/*if(isset($_POST['logout']))
			{
				$num="You have been Successfully Logged Out";
				$f='2';
				session_destroy();
				header("Location:login page.php");
				}*/
	?>
    <link rel="stylesheet" href="../css/home.css" type="text/css"/>
    <script type="text/javascript" language="javascript">
		function logout()
		{	<?php session_destroy();?>
			//window.location.form2.logout("login page.php");
			}
	</script>
	<title>Home</title>
	<div class="body">
		<div class="upper_headrer">
    	<div class="head">
        	<div class="head_logo_img"><img src="../img/gkv.png"></div>
				<div class="head_text"><br>
					 Faculty of Engineering and Technology<br>
					Gurukula Kangri Vishwavidyalaya, Haridwar, Uttrakhand
				</div>
				<div class="head_sn_img"><img src="../img/founder.png"></div>
            
       	</div>
        
    	</div>
    
    <div class="task_bar">
    	<div class="welcome_logout">
        	<div class="welcome">
            	<div class="welcome_name">Welcome <span>User Name</span></div>
            </div>
            
            <div class="logout_div">
            	
            	<div class="logout_button">
                <form name="form2" method="post" action="home.php">
                	<input type="submit" name="logout" value="logout" onClick="logout()">	
                </form>
                </div>
            </div>
        </div>
    </div>
        <div id="left_div">
        	<div id="profile">
        		<div id="profile_img">
                </div>
                <div id="user_name">User Name
                </div>
           	</div>
        </div>
        <div id="right_div">
 			<div style="text-align:center;"><?php //echo $reg; ?></div>
           	<div id="chat_wrap">
            	<div id="chat_icon">
                	 <div id="chat_cap"><figcaption>Chat</figcaption>
                </div>
                </div>
          	</div>
        </div>
 	</div>