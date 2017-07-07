
$(window).load(function() { $("#loading_image").delay(500).fadeOut("slow");$("#preloader").delay(500).fadeOut("slow");});

$(document).ready(function(){
/*
	$(this).bind("contextmenu", function(e) {
        e.preventDefault();
    });*/
    
	$('.logo').hover(function(){
      $(this).css('height','120px');
      $(this).find("img").css('padding-top','20px');
    },function(){
      $(this).css('height','100px');
      $(this).find("img").css('padding-top','0px');
    });

	$(".logout").mousedown(function(){
		$(this).css({'border':'0px','padding-top':'5px'});
	});
	$(".logout").mouseup(function(){
		$(this).css({'border-bottom':'5px solid #77d','padding-top':'2px'});
	});

	$('.LperTab').click(function(){
		$('.LperTab').css({'background':'none','color':'white'});
		$(this).css({'background':'#f4f4fc','z-index':'2','margin-left':'1px','color':'black'});
	});
	$('#event').css({'background':'#f4f4fc','z-index':'2','margin-left':'1px','color':'black'});
	$('#eventDetails').css({'background':'#f4f4fc','z-index':'2','margin-left':'1px','color':'black'});

	$('#event').click(function(){
		$('.perabsolute').hide();
		$('.MainEvent').show();
	});

	$('#eventDetails').click(function(){
		$('.perabsolute').hide();
		$('.MainEvet_deatils').show();
	});

	$('#AboutJnanagni').click(function(){
		$('.perabsolute').hide();
		$('.MainAbout_jnanagni').show();
	});

	$('#organisers').click(function(){
		$('.perabsolute').hide();
		$('.MainOrganiser').show();
	});

	$('#hospitiality').click(function(){
		$('.perabsolute').hide();
		$('.MainHospitality').show();
	});

	$('#sponsers').click(function(){
		$('.perabsolute').hide();
		$('.MainSponsers').show();
	});

	$('#contactus').click(function(){
		$('.perabsolute').hide();
		$('.MainContactus').show();
	});

	$('#reachus').click(function(){
		$('.perabsolute').hide();
		$('.MainReachus').show();
	});

	$('#event_list').click(function(){
		$('.perabsolute').hide();
		$('.Event_list').show();
	});

	/**$('#Admin_Organisers').click(function(){
		$('.perabsolute').hide();
		$('.Admin_Organisers').show();
		alert("hello");
	});**/

	$('#admin').click(function(){
		$('.perabsolute').hide();
		$('.adminANDorganisers').show();
	});	

	var a=0;
	$('#RCshow').click(function(){
          if(a==0)
          {
            $('.hospitialityCommon').hide("fold",1000);
			$('.RCSH').slideToggle('slow');
            a=1;
          }
          else
          {
            $('.hospitialityCommon').hide("fold",1000);
            a=0;
          }
	});
	var b=0;
	$('#AMshow').click(function(){
		  if(b==0)
          {
            $('.hospitialityCommon').hide("fold",1000);
			$('.ACSH').slideToggle('slow');
            b=1;
          }
          else
          {
            $('.hospitialityCommon').hide("fold",1000);
            b=0;
          }




	});
	var c=0;
	$('#CNCshow').click(function(){
		    if(c==0)
          {
            $('.hospitialityCommon').hide("fold",1000);
			$('.CNCSH').slideToggle('slow');
            c=1;
          }
          else
          {
            $('.hospitialityCommon').hide("fold",1000);
            c=0;
          }

	});
	var d=0;
	$('#RFshow').click(function(){
		  if(d==0)
          {
            $('.hospitialityCommon').hide("fold",1000);
			$('.RFSH').slideToggle('slow');
            d=1;
          }
          else
          {
            $('.hospitialityCommon').hide("fold",1000);
            d=0;
          }



	});

	$('.btnMOT').click(function(){
			$('.MOTshow').slideToggle('slow');
	});

    var a=0;
	$('.MSshow').click(function(){
		  if(a==0)
		  {
			$('.sponsorsCommon').hide("fold",1000);
			$('.megaSH').slideToggle(1000);
			a=1;
		  }
		  else
		  {
			$('.sponsorsCommon').hide("fold",1000);
			a=0;
		  }
	});

	var b=0;
	$('.OPshow').click(function(){
		  if(b==0)
		  {
		    $('.sponsorsCommon').hide("fold",1000);
			$('.ourSH').slideToggle(1000);
			b=1;
		  }
		  else
		  {
		    $('.sponsorsCommon').hide("fold",1000);
			b=0;
		  }
	});
	var c=0;
	$('.LYSshow').click(function(){
		  if(c==0)
		  {
		    $('.sponsorsCommon').hide('fold',1000);
			$('.lastyearSH').slideToggle(1000);
			c=1;
		  }
		  else
		  {
		    $('.sponsorsCommon').hide('fold',1000);
		    c=0;
		  }
	});

   $('#no_prize').change(function(){
    	$(".dynamic_boxes").empty();
    	var z=$("#no_prize").val(); 
    	
    	var x=0;
       	if(x==0)
       	{
	       	for(i=1;i<=z;i++)
	    	{
	    	var toappend="<div class='col-sm-12 Eperdiv'><div class='col-sm-3 label'>Prize "+i+"</div><div class='col-sm-9 right'><input type='text' name='Prize"+i+"' class='col-sm-8 form-control textwidth' id='prize"+i+"' placeholder='300' ></div></div>";
	    	$(".dynamic_boxes").append(toappend);			
	    	}
	    	x=1;
    	}
    });

   $('#no_contact').change(function(){
    	$(".dynamic_boxes_contact").empty();
    	var z=$("#no_contact").val(); 
    	
    	var x=0;
       	if(x==0)
       	{
	       	for(i=1;i<=z;i++)
	    	{
	    	var toappend="<div class='contact_lable col-xs-12' style='color:black;font-size:22px;padding-left:27%;'><U>Contact "+i+"</U></div><div class='col-sm-12 Eperdiv'><div class='col-sm-3 label'>Name</div><div class='col-sm-9 right'><input type='text' class='col-sm-8 form-control textwidth' id='contact_name"+i+"' placeholder='Enter Name'></div></div><div class='col-sm-12 Eperdiv'><div class='col-sm-3 label'>Mobile Number</div><div class='col-sm-9 right'><input type='text' class='col-sm-8 form-control textwidth' id='contact_number_"+i+"' placeholder='Enter Mobile Number'></div></div>";
	    	$(".dynamic_boxes_contact").append(toappend);			
	    	}
	    	x=1;
	    	/**<?php echo $this->Form->input('contact_name_"+i+"',array('label'=>false,'type'=>'text','placeholder'=>'Enter Name','class'=>'col-sm-8 form-control textwidth','id'=>'contact_name"+i+"'));?>*/
    	}
    });


         
    

	/*****************Event Start****************/

	$('#submit_event').click(function(){
		$('.Fvalidation').hide();
		var status=true;
		var event_name = $('#ename').val();
		var event_category = $('#ecategory').val();
		var event_task = $('#etask').val();
		var event_description = $('#edescription').val();
		var event_rules = $('#erules').val();
		var event_judgingCriteria = $('#judging_criteria').val();
		var event_contact = $('#econtact').val();
		var event_organiser = $('#eorganiser').val();

		if(event_name == ""){
			$('#JSevent_name').show();
			status=false;
		}
		if(event_category == ""){
			$('#JSevent_category').show();
			status=false;
		}
		if(event_task == ""){
			$('#JSevent_task').show();
			status=false;
		}
		if(event_description == ""){
			$('#JSevent_description').show();
			status=false;
		}
		if(event_rules == ""){
			$('#JSevent_rules').show();
			status=false;
		}
		if(event_judgingCriteria == ""){
			$('#JSevent_judging').show();
			status=false;
		}
		if(event_contact == ""){
			$('#JSevent_contact').show();
			status=false;
		}
		if(event_organiser == ""){
			$('#JSevent_organiser').show();
			status=false;
		}


		return status;
		/****/

	});

	/*****************Event End*****************/




  

    /*******************Organiser Start********************/

    $('#submit_organisers').click(function(){
    	$('.Fvalidation').hide();
    	var submit_ok=true;	
    	var organiser_names = $('#Oname').val();
    	var organiser_designation = $('#Odesignation').val();
    	var organiser_mobile = $('#Omobile').val();
    	var organiser_email = $('#Oemail').val();
	    if(organiser_names == ""){
            $('.Oname_show').show();
            submit_ok=false;
        }
        if(organiser_designation == ""){
            $('.Odesignation_show').show();
            submit_ok=false;
        }
        if(organiser_mobile == ""){
            $('.Omobile_show').show();
            submit_ok=false;
        }
        if(organiser_email == ""){
            $('.Oemail_show').show();
            submit_ok=false;
        }

        return submit_ok;
    });
    
    
    /*******************Organiser End********************/

    /*******************Start ContactUs End*************************/

    $('#Contact_submit').click(function(){
    	$('.Fvalidation').hide();
    	var submit_ok=true;	
    	var contactus_query = $('#Contactus_query').val();
    	var contactus_name = $('#Contactus_name').val();
    	var contactus_mobile = $('#contactus_mobile').val();

	    if(contactus_query == ""){
            $('#FV_contactus_query').show();
            submit_ok=false;
        }
        if(contactus_name == ""){
            $('#FV_contactus_name').show();
            submit_ok=false;
        }
        if(contactus_mobile == ""){
            $('#FV_contactus_mobile').show();
            submit_ok=false;
        }

        return submit_ok;
    });

/*******************ContactUs End*************************/

    /*******************Start reachus End*************************/

    $('#Reachus_submit').click(function(){
    	$('.Fvalidation').hide();
    	var submit_ok=true;	
    	var reachus_info = $('#Reachus_info').val();
    	var reachus_address = $('#Reachus_address').val();

	    if(reachus_info == ""){
            $('.FV_reachus_information').show();
            submit_ok=false;
        }
        if(reachus_address == ""){
            $('.FV_reachus_address').show();
            submit_ok=false;
        }

        return submit_ok;
    });

/*******************reachus End*************************/


/*******************start admin/organiser End*************************/
	$('.admin_add_button').click(function(){
		$('.adminOrganiser_field').slideToggle();
	});
    var a=0;
	$('#Arole').change(function(){

        $('.addtodesignation').hide();
        var role=$(this).val();
        if(role=="admin"){
        	$('.addtodesignation').show();
        	a=1;
        }else{
        	$('.addtodesignation').hide();
        	a=0;
        }
	});
	$('#submit_admin').click(function(){
		$('.Fvalidation').hide();
    	var submit_ok=true;	
    	var adminOrg_name = $('#Aname').val();
    	var adminOrg_role = $('#Arole').val();
    	//var adminOrg_designation = $('#Adesignatiom').val();
    	var adminOrg_mobile = $('#Amobile').val();
    	var adminOrg_email = $('#Aemail').val();

	    if(adminOrg_name == ""){
            $('.adminOrganiser_name').show();
            submit_ok=false;
        }
        if(adminOrg_role == ""){
            $('.adminOrganiser_role').show();
            submit_ok=false;
        }
        if(a==1){
            if(adminOrg_designation == ""){
            $('.adminOrganiser_designation').show();
            submit_ok=false;
            }	
        }
       
        if(adminOrg_mobile == ""){
            $('.adminOrganiser_mobile').show();
            submit_ok=false;
        }
        if(adminOrg_email == ""){
            $('.adminOrganiser_email').show();
            submit_ok=false;
        }

        return submit_ok;
        $('.adminOrganiser_field').hide();
    });

/*******************admin/organiser End*************************/

/*******************pdf generation**************************/

       $('.pdf').click(function(){
       	var event_id=$(this).attr('id');
       	window.location='/admin_portal/eventList/'+event_id+'/1';
       });

/*******************end*************************************/


/*******************Sponsors Start*************************/

	$('#megasubmit').click(function(){
		$('.Fvalidation').hide();
		var status=true;
		var mega_link = $('#megasponsors_link').val();
		var mega_description = $('#megasponsors_description').val();

		if(mega_link == ""){
			$('#JSsponsors_link').show();
			status=false;
		}
		if(mega_description == ""){
			$('#JSsponsors_description').show();
			status=false;
		}

		return status;

	});


	$('#oursubmit').click(function(){
		$('.Fvalidation').hide();
		var status=true;
		var our_link = $('#ourpartner_link').val();
		var our_description = $('#ourpartner_description').val();

		if(our_link == ""){
			$('#JSoursponsors_link').show();
			status=false;
		}
		if(our_description == ""){
			$('#JSoursponsors_description').show();
			status=false;
		}

		return status;

	});

	$('#lastyearsponsorsubmit').click(function(){
		$('.Fvalidation').hide();
		var status=true;
		var lastYear_link = $('#lastsponsor_link').val();
		var lastYear_description = $('#lastsponsor_description').val();

		if(lastYear_link == ""){
			$('#JSlastYsponsors_link').show();
			status=false;
		}
		if(lastYear_description == ""){
			$('#JSlastYsponsors_description').show();
			status=false;
		}

		return status;

	});

/*******************Sponsors End*************************/



  /*********start Event List**********/
	$('.eventName').click(function(){
		var id=$(this).attr('id');
		$('.pdf').attr('id',id);
		$.ajax({
            url: "/admin_portal/eventList/"+id,
            type: "POST",
            dataType: "json",
            beforeSend: function(xhr) {
                $('#eventList_loading_image').show();
                 $('#list_of_event').hide();
              }

       }).done(function(data) {
            	$('#eventList_loading_image').hide();
                $('#list_of_event').show();
            var str='<table border="1" width="100%" class="forhidden">'+				
						'<tr>'+
							'<td style="font-size:20px;"><strong>S No.</strong></td>'+
							'<td><strong>Name</strong></td>'+
							'<td><strong>Mobile No</strong></td>'+
							'<td><strong>E-mail</strong></td>'+
							'<td><strong>Institute</strong></td>'+
							'<td><strong>Year</strong></td>'+
							'<td><strong>City</strong></td>'+
							'<td><strong>Delete</strong></td>'+
						'</tr>';
                 $.each(data.event,function(i,v){
                  $('#admin_eventName').html(v.name);
                  $('#admin_eventImage').attr('src',v.image);    
                 });
                 $.each(data.organiser,function(i,v){
                  $('#admin_eventOrganiserName').html(v.name);
                  $('#admin_eventOrganiserMobile').html(v.mobile);
                  $('#admin_eventOrganiserImage').attr('src',v.image);    
                 });
                 var a=0;
                 $.each(data.user,function(i,v){
                 	
                  str+='<tr>'+
							'<td>'+(++a)+'</td>'+
							'<td>'+v.name+'</td>'+
							'<td>'+v.mobile+'</td>'+
							'<td>'+v.email+'</td>'+
							'<td>'+v.Institute+'</td>'+
							'<td>'+v.year+'</td>'+
							'<td>'+v.city+'</td>'+
							'<td>Delete</td>'+
						'</tr>';   
                 });
                 str+='</table>';
                 $('#admin_eventParticipants').html(str);


         }).fail(function() {
                      alert('Something Went Wrong ! Please Try Again .. ');
            }).always(function() {
                      ele.removeAttr('data-processing');
               });
            
		$('.allEvents').css({'width':'18%','margin':'0','border-right':'1px solid silver','float':'left','min-height':'600px;'});
		$('.allEvents').animate({'margin':'0'});
		
	});
	/*********End start Event List**********/

	/*********Editing script****************/

    $('.ormin_edit').click(function(){
    	var id=$(this).attr('id');

    	$.ajax({
            url: "/admin_portal/edit_ormin/"+id,
            type: "POST",
            dataType: "json",
            beforeSend: function(xhr) {
                
                $('#loader_Show').show(); 
              }

       }).done(function(data) {
                $('#loader_Show').hide();
           
           $.each(data,function(i,v){
               $('#Aname').val(v.name);
               $('#Arole').val(v.role);
               $('#Amobile').val(v.mobile);
               $('#Aemail').val(v.email);

               if(v.role=='admin'){
               	$('#Adesignation').val(v.designation);
               	$('.addtodesignation').show();
        		a=1;
               }else{
               	$('.addtodesignation').hide();
        		a=0;
               }
               $('#OrganisersIndexForm').attr('action','/admin_portal/organisers_form/'+v.id);
           });  
           $('.admin_add_button').click();

         }).fail(function() {
                      alert('Something Went Wrong ! Please Try Again .. ');
            }).always(function() {
                      ele.removeAttr('data-processing');
               });

    });

	/*********End**************************/
		/*********Deleting script****************/

    $('.ormin_delete').click(function(){

	    var x=confirm("Are you sure you want to delete this entry");
    	var id=$(this).attr('id');
         if(x==false){
         	return false;
         }
    	$.ajax({
            url: "/admin_portal/delete_ormin/"+id,
            type: "POST",
            beforeSend: function(xhr) {
               $('#loader_Show').show();
              }
       }).done(function(data) {
       	       $('#loader_Show').hide();
       	   if(data=='done'){ 
	          $('#alert_string').html('Entry deleted successfully');
	          $('#Jnanagni_Alert_Show').show();
	          window.location='/admin_portal';
      		}else{
      			$('#alert_string').html(data);
	          $('#Jnanagni_Alert_Show').show();
      		}
         }).fail(function() {
                      alert('Something Went Wrong ! Please Try Again .. ');
            }).always(function() {
                      ele.removeAttr('data-processing');
               });

    });

	/*********End**************************/

	$('.ormin_pdf').click(function(){
		var role=$('#role_category').val();
		if(role==''){
			$('#role_category').focus();
			return false;
		}
   			
   		window.location='/admin_portal/find_ormin/1/'+role;


	});

	$('.organiser_pdf').click(function(){
		var id=$(this).attr('id');

		window.location='/admin_portal/eventList/null/1/'+id;
	});

});
  
	