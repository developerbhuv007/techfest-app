<?php  ini_set('max_execution_time',-1); App::uses('CakeEmail', 'Network/Email'); class adminportalController extends AppController {   
  public function beforeFilter() { 
      parent::beforeFilter (); 
    if($this->Session->read('User.jnanagni_fest')=='1'){

      if(!($this->Session->read('User.role')=='organiser' || $this->Session->read('User.role')=='admin' || $this->Session->read('User.role')=='superadmin')){
        $this->redirect('/'); 
      } }
      else{
           $this->Session->setFlash(__("You are not logged in. Kindly log into your account"));
           $this->redirect('/');
          } 
        }   

    public function index($event_id=null) {   $this->layout='adminportal'; $this->loadModel('Event');$this->loadModel('Organisers'); $this->loadModel('Hospitality'); $this->loadModel('About_Jnanagni'); $this->loadModel('Registered_Event'); $this->loadModel('registration'); $this->loadModel('notice');$edit=0;
		if(isset($event_id)){
			$edit=1;
            $event_info=$this->Event->find('first',array('conditions'=>array('event_id'=>$event_id)));
            
            
            $this->set('event_info',$event_info);
		}
         $this->set('edit',$edit);
         $event_name=$this->Event->find('list',array('fields'=>array('event_id','name')));
         $this->set('event_name',$event_name);
		$notice=$this->notice->find('list',array('fields'=>array('notices'),'order'=>array('timestamp'=>'DESC')));
         $event_id=$this->Organisers->find('list',array('conditions'=>array('email'=>$this->Session->read('User.reg_id')),'fields'=>array('event_id'))); 
        //print_r($event_id);exit();
$user_id=$this->Registered_Event->find('list',array('conditions'=>array('eid'=>$event_id,'status'=>1),'fields'=>array('uid'))); $user_info=Set::extract('/registration/.',$this->registration->find('all',array('conditions'=>array('reg_id'=>$user_id)))); $event=$this->Event->find('list',array('fields'=>array('event_id','name')));
         $i=0;
        foreach ($event as $key => $value) {
        	$i++;
        	$data[$i]['name']=$value;
        	$data[$i]['count']=$this->Registered_Event->find('count',array('conditions'=>array('eid'=>$key,'status'=>1)));
        }
        
        
        $this->set('event_count',$data);
          $this->set('notice',$notice); $this->set('user_info',$user_info);  $ormin=$this->find_ormin();  $this->set('ormin_info',$ormin);  $this->set('about_jnanagni',Set::extract('/About_Jnanagni/.',$this->About_Jnanagni->find('all')));  $this->set('hospitality_info',Set::extract('/Hospitality/.',$this->Hospitality->find('all')));  $this->set('event_list',Set::extract('/Event/.',$this->Event->find('all',array('conditions'=>array('status'=>1)))));  if(!empty($this->request->data)){  if(isset($event_id)){
        		if(!empty($this->data)){
                   $data=$this->data;
                   $data['Event']['id']=$event_info['Event']['id'];
                   $data['Event']['event_id']=$event_info['Event']['event_id'];
                   if($data['Event']['image']['name']!=''){
                   	$fileOK = $this->uploadFiles('img/event pics', $data);
                   	$data['Event']['image']=$fileOK['urls']['0'];
                   }else{
                    $data['Event']['image']=$event_info['Event']['image'];

                   }
                   //print_r($data);exit();
		            if($this->Event->save($data)){
		            	$this->Session->setFlash(__('Event details updated successfully'));
			         	$this->redirect('/home/events');
			         }else{
			         	echo "Something went wrong!!";
			         }
        		}

        	}
  $no_of_event=$this->Event->find('count'); $no_of_event+=101; $fileOK = $this->uploadFiles('img/event pics', $this->request->data); $data=$this->request->data; $data['Event']['event_id']="event_".$no_of_event; $data['Event']['image']=$fileOK['urls']['0'];  if($this->Event->save($data)){ $this->redirect('/admin_portal'); }else{ echo "Something went wrong!!"; } }    }  function find_ormin($pdf=null,$role=null){  $this->loadModel('Organisers'); $this->loadModel('Admin');  $organiser=Set::extract('/Organisers/.',$this->Organisers->find('all',array('conditions'=>array('status'=>1)))); $admin=Set::extract('/Admin/.',$this->Admin->find('all',array('conditions'=>array('status'=>1)))); $ormin=array_merge($organiser,$admin); if($pdf==1){ if($role=='admin') $this->generate_pdf_ormin($admin,$role); else if($role=='organiser') $this->generate_pdf_ormin($organiser,$role); else{ $this->generate_pdf_ormin($ormin,$role); } }else{ return $ormin; } $this->autoRender=false; }  protected function generate_pdf_ormin($ormin,$role){  if($role=='both'){ $role='Admin And Organisers'; }  $view=new View($this,false);   $view->viewPath='Elements'; $view->layout=false; $view->set('ormin_info',$ormin); $view->set('role',$role);  $html=$view->render('orminDetails');     ini_set('memory_limit', '512M'); require_once(APP . 'Vendor' . DS . 'dompdf' . DS . 'dompdf_config.inc.php'); spl_autoload_register('DOMPDF_autoload'); $dompdf = new DOMPDF(); $dompdf->set_paper = 'A4'; $dompdf->load_html($html, Configure::read('App.encoding')); $dompdf->render();  $canvas = $dompdf->get_canvas(); $font = Font_Metrics::get_font("helvetica", "bold"); $canvas->page_text(16, 800, "Page: {PAGE_NUM} of {PAGE_COUNT}", $font, 8, array(0,0,0));  $dompdf->stream($role.".pdf");   }  function notices(){
		$this->loadModel('notice');
		if(!empty($this->data)){
			$data=$this->data['notice'];
			$data['name']=$this->Session->read('User.name');
            $data['role']=$this->Session->read('User.role');
            
            if($this->notice->save($data)){
            	$this->Session->setFlash(__("Notice updated successfully"));
                $this->redirect('/admin_portal');
            }else{
            	echo "Something went wrong please try again!";
            }
		}
		$this->autoRender=false;
	} function organisers_form($id=null){   $this->loadModel('Organisers'); $this->loadModel('Admin');  if(!empty($this->request->data)){  $data=$this->request->data; $reg_id=''; $date=date('His'); $password=substr($date,0,3).'@'.substr($date,3,2).'Xz'.substr($date,5); if($data['Organisers']['role']=="admin"){ $admin_data['Admin']=$data['Organisers']; if($id==''){
					$count=$this->Admin->find('count',array('conditions'=>array('email'=>$admin_data['Admin']['email'])));
					if($count!=0){
                        echo "Email address already exists!";exit();
					}
				} if($id!=''){ $admin_data['Admin']['id']=$id; }else{ $no_admin=$this->Admin->find('count')+1; $admin_data['Admin']['id']="Jnanagni_admin_".$no_admin; $reg_id=$admin_data['Admin']['id']; $admin_data['Admin']['password']=md5($password); } if($admin_data['Admin']['image']['name']!=""){ $fileOK = $this->uploadFiles('img/admin pics',$admin_data); $admin_data['Admin']['image']=$fileOK['urls']['0']; }else{ if($id==''){ $admin_data['Admin']['image']=""; }else{ $image=$this->Admin->find('all',array('conditions'=>array('id'=>$id),'fields'=>array('image'))); $admin_data['Admin']['image']=$image['0']['Admin']['image']; } } $savedata=$this->Admin->save($admin_data); }else{ if($id==''){
					$count=$this->Organisers->find('count',array('conditions'=>array('email'=>$data['Organisers']['email'])));
					if($count!=0){
                        echo "Email address already exists!";exit();
					}
				} if($id!=''){ $data['Organisers']['id']=$id; $data['Organisers']['designation']='organiser';  }else{ $no_organiser=$this->Organisers->find('count')+1; $data['Organisers']['id']="Jnanagni_organiser_".$no_organiser; $data['Organisers']['designation']='organiser'; $reg_id=$data['Organisers']['id']; $data['Organisers']['password']=md5($password); } if($data['Organisers']['image']['name']!=""){ $fileOK = $this->uploadFiles('img/organisers pics',$data); $data['Organisers']['image']=$fileOK['urls']['0']; }else{ if($id==''){ $data['Organisers']['image']=""; }else{ $image=$this->Organisers->find('all',array('conditions'=>array('id'=>$id),'fields'=>array('image'))); $data['Organisers']['image']=$image['0']['Organisers']['image']; } }$savedata=$this->Organisers->save($data); } if($savedata){ if($id!=''){ $this->redirect('/admin_portal'); }else{ $this->send_password($data['Organisers']['email'],$password,$reg_id); } }else{ echo "Something went wrong!!"; } } $this->autoRender=false; }  protected function send_password($email,$password,$id){  $Email = new CakeEmail('gmail'); if($Email->from(array('jnanagniofficial.fet@gmail.com' => 'http://www.jnanagni.in')) ->to($email) ->subject('Jnanagni website credentials') ->send("Your registration id is: ".$id."  Your password is: ".$password)){ $this->Session->setFlash(__('The id and password has been sent to '.$email)); $this->redirect('/admin_portal'); }else{ echo "Some error occured Please try later"; }   $this->autoRender=false; }  function hospitality_form(){   $this->loadModel('Hospitality');   if(!empty($this->request->data)){ $this->request->data['Hospitality']['id']=1;  if($this->Hospitality->save($this->request->data)){ $this->redirect('/admin_portal'); }else{ echo "Something went wrong!!"; } } $this->autoRender=false; }  function sponsors_form($sponsor=null){   $this->loadModel('Mega_sponsor'); $this->loadModel('Our_partner'); $this->loadModel('Prev_sponsor');  if(!empty($this->request->data)){  $data=$this->request->data; $folder=''; if($sponsor=="Mega_sponsor") $folder="mega sponsors"; else if($sponsor=="Our_partner") $folder="our partners"; else if($sponsor=="Prev_sponsor") $folder="previous sponsors";  if(!empty($data[$sponsor]['image']['name'])){ $fileOK = $this->uploadFiles('img/sponsors pics/'.$folder, $this->request->data); $data[$sponsor]['image']=$fileOK['urls']['0']; }else{ $data[$sponsor]['image']=""; } if($this->$sponsor->save($data)){ $this->redirect('/admin_portal'); }else{ echo "Something went wrong!!"; } } $this->autoRender=false; }  function about_jnanagni(){ $this->loadModel('About_Jnanagni');  if(!empty($this->request->data)){ $this->request->data['About_Jnanagni']['id']=1; if($this->About_Jnanagni->save($this->request->data)){ $this->redirect('/admin_portal'); }else{ echo "Something went wrong!!"; } } $this->autoRender=false; }  function contact_form(){   $this->loadModel('Contact');  if(!empty($this->request->data)){ if($this->Contact->save($this->request->data)){ $this->redirect('/admin_portal'); }else{ echo "Something went wrong!!"; } } $this->autoRender=false; }  function reachUs_form(){   $this->loadModel('ReachUs');  if(!empty($this->request->data)){   if($this->ReachUs->save($this->request->data)){ $this->redirect('/admin_portal'); }else{ echo "Something went wrong!!"; } } $this->autoRender=false; }  function eventList($event_id=null,$pdf=null,$organiser_id=null){ $this->loadModel('Event'); $this->loadModel('Organisers'); $this->loadModel('Registered_Event'); $this->loadModel('registration');  if($organiser_id!=''){ $event_id=$this->Organisers->find('first',array('conditions'=>array('email'=>$organiser_id),'fields'=>array('event_id'))); if(!empty($event_id)){ $event_id=$event_id['Organisers']['event_id']; }else{ $this->Session->setFlash(__("You have not organised any event yet!!")); $this->redirect('/admin_portal'); } }  $event_details=Set::extract('/Event/.',$this->Event->find('all',array('conditions'=>array('event_id'=>$event_id),'fields'=>array('name','image','organised_by'))));  $organiser_details=Set::extract('/Organisers/.',$this->Organisers->find('all',array('conditions'=>array('id'=>$event_details[0]['organised_by']),'fields'=>array('name','mobile','image'))));  $uid=$this->Registered_Event->find('list',array('conditions'=>array('eid'=>$event_id,'status'=>1),'fields'=>array('uid')));  $user_info=Set::extract('/registration/.',$this->registration->find('all',array('conditions'=>array('reg_id'=>$uid))));    $data['event']=$event_details; $data['organiser']=$organiser_details; $data['user']=$user_info; if($pdf==1){ $this->generate_pdf_participants($user_info,$event_details['0']['name']); }else{ echo json_encode($data); } $this->autoRender=false;  }   protected function generate_pdf_participants($user_info,$event_name){ $view=new View($this,false);   $view->viewPath='Elements'; $view->layout=false; $view->set('event_name',$event_name); $view->set('user_info',$user_info);  $html=$view->render('usersDetail');     ini_set('memory_limit', '512M'); require_once(APP . 'Vendor' . DS . 'dompdf' . DS . 'dompdf_config.inc.php'); spl_autoload_register('DOMPDF_autoload'); $dompdf = new DOMPDF(); $dompdf->set_paper = 'A4'; $dompdf->load_html($html, Configure::read('App.encoding')); $dompdf->render();  $canvas = $dompdf->get_canvas(); $font = Font_Metrics::get_font("helvetica", "bold"); $canvas->page_text(16, 800, "Page: {PAGE_NUM} of {PAGE_COUNT}", $font, 8, array(0,0,0));  $dompdf->stream($event_name." Participants.pdf");  }  function edit_ormin($id){ $this->loadModel('Organisers'); $this->loadModel('Admin'); $organiser=Set::extract('/Organisers/.',$this->Organisers->findByid($id));  if(!empty($organiser)){ echo json_encode($organiser);  }else{ $admin=Set::extract('/Admin/.',$this->Admin->findByid($id)); echo json_encode($admin); } $this->autoRender=false; }  function delete_ormin($id){ $this->loadModel('Organisers'); $this->loadModel('Admin'); $organiser=$this->Organisers->findByid($id);  if(!empty($organiser)){ $organiser['Organisers']['id']=$id; $organiser['Organisers']['status']=0;  $saveinfo=$this->Organisers->save($organiser); }else{ $admin=$this->Admin->findByid($id); $admin['Admin']['id']=$id; $admin['Admin']['status']=0; $saveinfo=$this->Admin->save($admin); } if($saveinfo){ echo 'done'; }else{ echo "Some error occured!! Please try again"; } $this->autoRender=false; } }  