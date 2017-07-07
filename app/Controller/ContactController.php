<?php
App::uses('CakeEmail', 'Network/Email');
class ContactController extends AppController {
 
public $components = array('Email');
 /*var $components=array(
                'Email'=>array(
                    'delivery'=>'smtp',
                    'smtpOptions'=>array(
                      'host'=>'localhost',
                      'username'=>'developerbhuv@gmail.com',
                      'password'=>'bhuv',
                      'port'=>25
                      )));*/
	public function index() {

		$this->layout='contact';
		$this->loadModel('feedback');

		if(!empty($this->data)){
			$contact=$this->data[
			'feedback']['number'];
				if($this->feedback->save($this->data)){
					echo "Your data have been saved successfully";
					$this->data=null;
				}else{
					echo "Error";
				}

		
        //$this->Contact->set($this->data);
       
            //send email using the Email component
				 //$this->feedback->set( $this->data );

                   
    
			}
		
		
}

}

