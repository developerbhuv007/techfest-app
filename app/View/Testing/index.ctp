<div class="col-sm-12 col-md-12 main_head">WELCOME   ADMIN<div class="logout">Logout</div>
</div>
<div class="col-sm-2 col-md-2 left_bar">
	<div class="col-sm-12 aimg">
		<img src="img/find_user.png" class="img-responsive img-circle lpic" alt="Responsive image">
	</div>

	<div class="col-sm-12 LperTab" id="event">Event</div>
	<div class="col-sm-12 LperTab" id="organisers">Organisers</div>
	<div class="col-sm-12 LperTab" id="hospitiality">Hospitality</div>
	<div class="col-sm-12 LperTab" id="sponsers">Sponsers</div>
	<div class="col-sm-12 LperTab" id="contactus">Contact Us</div>
	<div class="col-sm-12 LperTab" id="reachus">Reach Us</div>
</div>
<div class="col-sm-10 col-md-10 right_bar">
	<div class="col-sm-12 fixied" style="top:10;">
			<img src="img/back.png"></img>
	</div>
	<div class="perabsolute MainEvent" style="position:absolute; display:none;">
	<div class=" col-sm-offset-1 col-sm-10 headingofTab">Event Filling Form</div>
	<?php echo $this->Form->create('event',array('enctype'=>'multipart/form-data'));?>

	<div class="col-sm-12 Eperdiv">
		<div class="col-sm-3 label">Name<span class="spanred">*</span></div>
		<div class="col-sm-9 right"><?php echo $this->Form->input('name',array('label'=>false,'placeholder'=>'Enter your name','type'=>'text','class'=>'col-sm-8 form-control textwidth','id'=>'ename'));?><div class="col-sm-4 Fvalidation" id="JSevent_name">Please filled out this filled</div></div>
	</div>

	<div class="col-sm-12 Eperdiv">
		<div class="col-sm-3 label">Category<span class="spanred">*</span></div>
		<div class="col-sm-9 right">
			<?php echo $this->Form->input('category', 
        array(
            'options' => array('technical' => 'Technical', 'non-technical' => 
    
    'Non-Technical','filler' => 'Filler', 'cultural' => 'Cultural'), 
    
             
            'empty' =>'---SELECT---',
            'label' => false,
            'class'=>'col-sm-8 form-control input-sm textwidth',
            'id'=>'ecategory'
        )
    );?>
			
			<div class="col-sm-4 Fvalidation"id="JSevent_category">Please filled out this filled</div>
		</div>
	</div>

	<div class="col-sm-12 Eperdiv">
		<div class="col-sm-3 label">Task<span class="spanred">*</span></div>
		<div class="col-sm-9 right"><?php echo $this->Form->input('task',array('label'=>false,'type'=>'textarea','placeholder'=>'Enter Description','class'=>'col-sm-10 form-control textareawidth','id'=>'etask'));?><div class="col-sm-2 Fvalidation"id="JSevent_task">Please filled out this filled</div></div>
	</div>

	

	<div class="Eperdiv">
		<div class="right endspace"><?php echo $this->Form->end("Submit");?></div>
	</div>
	

	</div>


	<div class="col-sm-12 perabsolute MainOrganiser" style="position:absolute; display:block;">
		<?php echo $this->Form->create('organisers',array('enctype'=>'multipart/form-data'));?>

	<div class="Eperdiv">
		<div class="label">Name<span class="spanred">*</span></div>
		<div class="right"><?php echo $this->Form->input('name',array('label'=>false,'placeholder'=>'Enter your name','type'=>'text','class'=>'textwidth','id'=>'ename'));?><div class="" id="JSevent_name">Please filled out this filled</div></div>
	</div>

	<div class="Eperdiv">
		<div class="">Category<span class="spanred">*</span></div>
		<div class="">
			<?php echo $this->Form->input('category', 
        array(
            'options' => array('technical' => 'Technical', 'non-technical' => 
    
    'Non-Technical','filler' => 'Filler', 'cultural' => 'Cultural'), 
    
             
            'empty' =>'---SELECT---',
            'label' => false,
            'class'=>'form-control input-sm textwidth',
            'id'=>'ecategory'
        )
    );?>
			
			<div class="Fvalidation"id="JSevent_category">Please filled out this filled</div>
		</div>
	</div>

	

	<div class="Eperdiv">
		<div class="right endspace"><?php $a=array('id'=>'kuta','value'=>'dusra');echo $this->Form->end($a);?></div>
	</div>	
	</div>

	<!--<div class="col-sm-12 perabsolute MainHospitality" style="position:absolute; display:none;">
		<div class="col-sm-12 Registration_charge firstpadding">
			<div class="col-sm-1 pointstext">1</div>
			<div class="col-sm-11 content"><span id="RCshow">Registration charge</span></div>
			<div class="col-sm-12 RCSH hospitialityCommon"style="display:none">
			<div class="col-sm-12 RCperdiv" id="registration_area">
				<div class="col-sm-4 label">Description</div>
				<div class="col-sm-8 text">
					<textarea class="form-control textareawidth" id="RCdescription" placeholder="Enter your Context" rows="3"></textarea>
				</div>
			</div>
			</div>
		</div>

		<div class="col-sm-12 Accomodation_charge">
			<div class="col-sm-1 Apointstext">2</div>
			<div class="col-sm-11 Acontent"><span id="AMshow">Accomodation charge</span></div>
			<div class="col-sm-12 ACSH hospitialityCommon" style="display:none">
			<div class="col-sm-12 ACperdiv">
				<div class="col-sm-4 label">Accommodation</div>
				<div class="col-sm-8 text">
					<input type="text" class="form-control textwidth" id="Accommodation" placeholder="200">
				</div>
			</div>

			<div class="col-sm-12 ACperdiv">
				<div class="col-sm-4 label">Fooding</div>
				<div class="col-sm-8 text">
					<input type="text" class="form-control textwidth" id="Fooding" placeholder="300">
				</div>
			</div>

			<div class="col-sm-12 ACperdiv">
				<div class="col-sm-4 label">Accommodation + Fooding</div>
				<div class="col-sm-8 text">
					<input type="text" class="form-control textwidth" id="Accommodationfooding" placeholder="500">
				</div>
			</div>
			</div>
		</div>
		<div class="col-sm-12 Cultural_Night_charge">
			<div class="col-sm-1 Cpointstext">3</div>
			<div class="col-sm-11 Ccontent"><span id="CNCshow">Cultural Night charge</span></div>
			<div class="col-sm-12 CNCSH hospitialityCommon" style="display:none">
			<div class="col-sm-12 CNCperdiv">
				<div class="col-sm-4 label">Entry Fees + Food Coupon</div>
				<div class="col-sm-8 text">
					<input type="text" class="form-control textwidth" id="feesandcoupon" placeholder="1000">
				</div>
			</div>
			<div class="col-sm-12 CNCperdiv">
				<div class="col-sm-4 label">Description</div>
				<div class="col-sm-8 text">
					<textarea class="form-control textareawidth" id="CNCdescription" placeholder="Enter your Context" rows="3"></textarea>
				</div>
			</div>
			</div>
		</div>
		<div class="col-sm-12 ReachFet_charge">
			<div class="col-sm-1 Rpointstext">4</div>
			<div class="col-sm-11 Rcontent"><span id="RFshow">Reach Fet</span></div>
			<div class="col-sm-12 RFSH hospitialityCommon" style="display:none">
			<div class="col-sm-12 RFperdiv">
				<div class="col-sm-4 label">Description</div>
				<div class="col-sm-8 text">
					<textarea class="form-control textareawidth" id="RNdescription" placeholder="Enter your Context" rows="3"></textarea>
				</div>
			</div>

			<div class="col-sm-offset-5 col-sm-2 btnMOT">Mode of Transport</div>

			<div class="col-sm-12 RFperdiv MOTshow" style="display:none;">
				<div class="col-sm-4 label">By Local Bus</div>
				<div class="col-sm-8 text">
					<textarea class="form-control smtextareawidth" id="RFMOTNO1" placeholder="Enter your Context" rows="3"></textarea>
				</div>
			</div>

			<div class="col-sm-12 RFperdiv MOTshow" style="display:none;">
				<div class="col-sm-4 label">By Roadways Bus</div>
				<div class="col-sm-8 text">
					<textarea class="form-control smtextareawidth" id="RFMOTNO2" placeholder="Enter your Context" rows="3"></textarea>
				</div>
			</div>

			<div class="col-sm-12 RFperdiv MOTshow" style="display:none;">
				<div class="col-sm-4 label">By Auto</div>
				<div class="col-sm-8 text">
					<textarea class="form-control smtextareawidth" id="RFMOTNO3" placeholder="Enter your Context" rows="3"></textarea>
				</div>
			</div>

			<div class="col-sm-12 RFperdiv MOTshow" style="display:none;">
				<div class="col-sm-4 label">By College Bus</div>
				<div class="col-sm-8 text">
					<textarea class="form-control smtextareawidth" id="RFMOTNO4" placeholder="Enter your Context" rows="3"></textarea>
				</div>
			</div>

			
			</div>
		</div>
		<div class="col-sm-offset-5 col-sm-7 hospitalityspace">
					<button type="button" class="btn btn-info" id="Hsubmit">Submit</button>
		</div>
	</div>

	<div class="col-sm-12 perabsolute MainSponsers" style="position:absolute; display:none;">
		<div class="col-sm-12 SponsersTab firstpadding">
			<div class="col-sm-1 numbertext">1</div>
			<div class="col-sm-11 headingtext"><span class="MSshow">Mega Sponsers</span></div>
			<div class="col-sm-12 megaSH sponsorsCommon" style="display:none;">
				<div class="col-sm-12 SNperdiv">
					<div class="col-sm-4 label">Description</div>
					<div class="col-sm-8 text">
						<textarea class="form-control" id="megasponsors" placeholder="Enter your Context" rows="3"></textarea>
					</div>
				</div>
				<div class="col-sm-12 SNperdiv">
					<div class="col-sm-4 MSupload btn btn-warning"><input type="file" class="forMSimg" id="MSsponor"><span class="glyphicon glyphicon-plus"></span>Uplode Image</input></div>
				</div>
				<div class="col-sm-12 SNperdiv">
						<button type="button" class="btn btn-info" id="megasubmit">Submit</button>
				</div>
			</div>
		</div>

		<div class="col-sm-12 SponsersTab firstpadding">
			<div class="col-sm-1 numbertext">2</div>
			<div class="col-sm-11 headingtext"><span class="OPshow">Our Partners</span></div>
			<div class="col-sm-12 ourSH sponsorsCommon" style="display:none;">
				<div class="col-sm-12 OPperdiv">
					<div class="col-sm-4 label">Description</div>
					<div class="col-sm-8 text">
						<textarea class="form-control" id="ourpartners" placeholder="Enter your Context" rows="3"></textarea>
					</div>
				</div>
				<div class="col-sm-12 OPperdiv">
					<div class="col-sm-4 OPupload btn btn-warning"><input type="file" class="forOPimg" id="OPsponsor"><span class="glyphicon glyphicon-plus"></span>Uplode Image</input></div>
				</div>
				<div class="col-sm-12 OPperdiv">
						<button type="button" class="btn btn-info" id="oursubmit">Submit</button>
				</div>
			</div>
		</div>

		<div class="col-sm-12 SponsersTab firstpadding ">
			<div class="col-sm-1 numbertext">3</div>
			<div class="col-sm-11 headingtext"><span class="LYSshow">Last Year Sponsers</span></div>
			<div class="col-sm-12 lastyearSH sponsorsCommon" style="display:none;">
				<div class="col-sm-12 LYSNperdiv">
					<div class="col-sm-4 label">Description</div>
					<div class="col-sm-8 text">
						<textarea class="form-control" id="LYsponsors" placeholder="Enter your Context" rows="3"></textarea>
					</div>
				</div>
				<div class="col-sm-12 LYSNperdiv">
					<div class="col-sm-4 LYSupload btn btn-warning"><input type="file" class="forLYSimg" id="LYSsponsor"><span class="glyphicon glyphicon-plus"></span>Uplode Image</input></div>
				</div>
				<div class="col-sm-12 LYSNperdiv">
						<button type="button" class="btn btn-info" id="oursubmit">Submit</button>
				</div>
			</div>
		</div>
	</div>

	<div class="perabsolute MainContactus" style="position:absolute; display:none;">
		Rperabsolute MainContactus
	</div>

	<div class="perabsolute MainReachus" style="position:absolute; display:none;">
		Rperabsolute MainReachus
	</div>-->

</div>
