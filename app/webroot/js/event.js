$(window).load(function() { $("#loading_image").delay(500).fadeOut("slow");$("#preloader").delay(500).fadeOut("slow");});

/* Tabs Navigation */
$(document).ready(function() {
    $(".content1 div").hide(); // Initially hide all content
    $(".tabs .selected-tab").attr("class","current"); // Activate first tab
    $(".content1 .selected-div").fadeIn(); // Show first tab content
    
    $('.tabs a').click(function(e) {
        e.preventDefault();        
        $(".content1 div").hide(); //Hide all content
        $(".tabs li").attr("class",""); //Reset id's
        $(this).parent().attr("class","current"); // Activate this
        $('.' + $(this).attr('title')).fadeIn(); // Show content for current tab
    });
    $('.logo').hover(function(){
      $(this).css('height','120px');
      $(this).find("img").css('padding-top','20px');
    },function(){
      $(this).css('height','100px');
      $(this).find("img").css('padding-top','0px');
    });
});//end

// Switching
var classCreation = function(currentPage){
  
$('head').append('<style>.wrapper .page.page'+ currentPage +'{background-color: #66a6b8;background-image: -webkit-gradient(linear, left top, left bottom, color-stop(20%, #66a6b8), color-stop(80%, #5471B9));background-image: -webkit-linear-gradient(-280deg, #66a6b8 20%, #5471B9 80%);background-image: -webkit-linear-gradient(80deg, #66a6b8 20%, #5471B9 80%);background-image: linear-gradient(10deg, #66a6b8 20%, #5471B9 80%);} .wrapper.active-page'+ currentPage +' .page.page'+ currentPage +'{-webkit-transform: scale(1) !important;-ms-transform: scale(1) !important;transform: scale(1) !important;} .wrapper.active-page'+ currentPage +'{ -webkit-transform: translateY(-'+((currentPage-1)*100)+'%) !important;-ms-transform: translateY(-'+((currentPage-1)*100)+'%) !important;transform: translateY(-'+((currentPage-1)*100)+'%) !important; }</style>');}
$(document).ready(function() {
  var $wrap = $(".wrapper"),
        pages,// = $(".page").length,
      scrolling = false,
      currentPage = 1,
      $navPanel = $(".nav-panel"),
      $scrollBtn = $(".scroll-btn"),
      $navBtn = $(".nav-btn");
      //alert(pages);

  /*****************************
  ***** NAVIGATE FUNCTIONS *****
  *****************************/
  function manageClasses() {
    $wrap.removeClass(function (index, css) {
      return (css.match (/(^|\s)active-page\S+/g) || []).join(' ');
    });
    // alert(currentPage);
    classCreation(currentPage);
    $wrap.addClass("active-page" + currentPage);
    $navBtn.removeClass("active");
    $(".nav-btn.nav-page" + currentPage).addClass("active");
    $navPanel.addClass("invisible");
    scrolling = true;
    setTimeout(function() {
      $navPanel.removeClass("invisible");
      scrolling = false;
    }, 1000);
  }
  function navigateUp() {
    if (currentPage > 1) {
      currentPage--;
      if(currentPage==pages){
      $('.scroll-btn.down').css('display','none');
    }
    else{
      if(currentPage==1){
        $('.scroll-btn.up').css('display','none');
      }
      else{
      $('.scroll-btn.up').css('display','block');
      $('.scroll-btn.down').css('display','block');
    }}
      if (Modernizr.csstransforms) {
        manageClasses();
      } else {
        $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 1000);
      }
    }
    else{
      $('.scroll-btn.up').css('display','none');
    }
  }

  function navigateDown() {
    if (currentPage < pages) {
      currentPage++;
      if(currentPage==1){
      $('.scroll-btn.up').css('display','none');
    }
    else{
      if(currentPage==pages){
        $('.scroll-btn.down').css('display','none');
      }
      else{
      $('.scroll-btn.up').css('display','block');
      $('.scroll-btn.down').css('display','block');
    }}
      if (Modernizr.csstransforms) {
        manageClasses();
      } else {
        $wrap.animate({"top": "-" + ( (currentPage - 1) * 100) + "%"}, 1000);
      }
    }
    else{
        $('.scroll-btn.down').css('display','none');
    }
  }

  /*********************
  ***** MOUSEWHEEL *****
  *********************/
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if(check_reg == 0){
    $('.loginpanel').hide('scale');
        $('#login_wrapper').css('display','none');
        m=0;
        check_login=0;
    if (!scrolling) {
      if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
        navigateUp();
      } else { 
        navigateDown();
      }
    }
  }
  });

  /**************************
  ***** RIGHT NAVIGATION ****
  **************************/

  /* NAV UP/DOWN BTN PAGE NAVIGATION */
  $(document).on("click", ".scroll-btn", function() {
    if ($(this).hasClass("up")) {
      navigateUp();
    } else {
      navigateDown();
    }
  });
  
  $(window).keydown(function(e){
    if(check_reg == 0){
        if(e.keyCode==38){
          $('.loginpanel').hide('scale');
        $('#login_wrapper').css('display','none');
        m=0;
        check_login=0;
          navigateUp();
        }
        else if(e.keyCode==40){
          $('.loginpanel').hide('scale');
        $('#login_wrapper').css('display','none');
        m=0;
        check_login=0;
          navigateDown();
        }
      }
  });

  /* NAV CIRCLE DIRECT PAGE BTN */
  
//  Back to Events
$('.backToEvents').find('p').click(function(){
  $('#events_wrapper').css('display','none');
  $('#wrapper').css('display','block');
});
// Back to Events end

$('.events_').click(function(){
  var nid=0;
  var pid=$(this).parent().attr('id');
  pages = $('#'+pid).find('li').length;
  if(pid == "tE_")
  {
    $('.wrapper').css('display','none');
    $('#tE').css('display','block');
    nid="#tE";
  }
  else if(pid == "nTE_")
  {
    $('.wrapper').css('display','none');
    $('#nTE').css('display','block');
    nid="#nTE";
  }
  else if(pid == "fE_")
  {
    $('.wrapper').css('display','none');
    $('#fE').css('display','block');
    nid="#fE";
  }
  else{
    $('.wrapper').css('display','none');
    $('#cE').css('display','block');
    nid="#cE";
  }
  var id=0;
  id = $(this).attr('id');
  $('.wrapper').find('#'+id).map(function(){
    $('#wrapper').css('display','none');
    $('#events_wrapper').css('display','block');
   // var eid=parseInt(id.slice(8));
   currentPage = ($('#'+id).index())+1;
    if(currentPage==1){
      $('.scroll-btn').css('display','block');
      $('.scroll-btn.up').css('display','none');
    }
    if(currentPage>1 && currentPage<pages){
      $('.scroll-btn').css('display','block');
    }
    if(currentPage==pages){
      $('.scroll-btn').css('display','block');
      $('.scroll-btn.down').css('display','none');
    }
    classCreation(currentPage);
    $(nid).addClass('active-page'+currentPage);
  });
});

  var nex;
  var currentID = 'technical';
  //begin button events

  $('.events').click(function(){
    nex = $(this).attr("id");
    if(nex == currentID)
      { }
    else if(nex == "non-technical"){
      $('.ca-menu').css('display','none');
      $('#nTE_').css('display','block');
      currentID = nex;
    }
    else if(nex == "filler"){
      $('.ca-menu').css('display','none');
      $('#fE_').css('display','block');
      currentID = nex;
    }
    else if(nex == "cultural"){
      $('.ca-menu').css('display','none');
      $('#cE_').css('display','block');
      currentID = nex;
    }
    else {
      $('.ca-menu').css('display','none');
      $('#tE_').css('display','block');
      currentID = nex;
    }
    $('.events').css('background-color','#008868');
    $(this).css('background-color','#d98218');
  });
//event selection

///////Event register\\\\\\\\\
var check_login=0;


$('.register-btn').click(function(){

  var id=$(this).attr('id');
  var event_id=$(this).attr('id').slice(9);
  $.ajax({
            url: "/home/eventRegister/"+event_id,
            type: "POST",
            beforeSend: function(xhr) {
                $('#loader_Show').show();
              }

       }).done(function(data) {
                 $('#loader_Show').hide();
                if(data=="register"){
                  $('#registerAlert_string').html("You have successfully registered for this event");
                  
                  $('#'+id).hide();
                  $('#vngister_'+event_id).show();
                }else if(data=="unregister"){
                  $('#registerAlert_string').html("You have successfully un-registered for this event");
                  
                  $('#'+id).hide();
                  $('#vrgister_'+event_id).show();
                }else{
                  $('#registerAlert_string').html(data);
                    
                  
                  //check_login=1;
                }
                $('#Jnanagni_Alert_Show').show();
         }).fail(function() {
                      alert('Something Went Wrong ! Please Try Again .. ');
            }).always(function() {
                      ele.removeAttr('data-processing');
               });
});


//-------------  login button Event -------------\\
                $('form>.login').mousedown(function(){
                                     
                       $(this).css('border','0px');
                       $(this).css('line-height','30px');
                 });
         

                 $('form>.login').mouseup(function(){
                       $(this).css('border-bottom','5px solid #77d');
                       $(this).css('line-height','25px');
                 });

var m=0;
$('.login-btn').click(function(){
    if(m==0){
        $('.loginpanel').show('shake');
        $('#login_wrapper').css('display','block');
        m=1;
        check_login=1;
    }
    else{
        $('.loginpanel').hide('scale');
        $('#login_wrapper').css('display','none');
        m=0;
        check_login=0;
    }   
});
$('#login_wrapper').click(function(){
        $('.loginpanel').hide('scale');
        $(this).css('display','none');
        m=0;
        check_login=0;
});
$('#login_wrapper').css({'width':$(window).width()+'px','height':$(window).height()+'px'});
$(window).keypress(function(e) {
      if(e.keyCode==13 && check_login==1){
        $('#event_login').click();
      }
    });

 /*$(this).bind("contextmenu", function(e) {
        e.preventDefault();
    });*/



  
//forgot password script//
    $('#forgot_submit').click(function(){
        var address=window.location;
        
        var email=$('.forgot_email').val();

          if(email==''){
            $('.forgot_email').focus();
            return false;
          }
          $.ajax({
            url: "/home/forgot_password/"+email,
            type: "POST",
            beforeSend: function(xhr) {
                $('#loader_Show').show();
              }

       }).done(function(data) {
               $('#loader_Show').hide(); 
                if(data=='done'){
                    $('#registerAlert_string').html("Password has been sent to your email id");
                    $('.forgot_pass').hide();
                    $('#Jnanagni_Alert_Show').show();
                    //window.location='/home/events';
                }else{
                    $('.forgot_email').val('');
                    $('.forgot_pass').fadeOut("slow");
                    $('#registerAlert_string').html(data);
                    $('#Jnanagni_Alert_Show').show();

                }
         }).fail(function() {
                      alert('Something Went Wrong ! Please Try Again .. ');
            }).always(function() {
                      ele.removeAttr('data-processing');
               });

    });

 $('.forgot_close').click(function(){
        $('.forgot_pass').fadeOut("slow");
    });

$('#event_login').click(function(){
       
       var user=$('#username').val();
       var pass=$('#password').val();
       
       $.ajax({
            url: "/home/login/"+user+'/'+pass,
            type: "POST",
            beforeSend: function(xhr) {
                $('#loader_Show').show();
              }

       }).done(function(data) {
                 $('#loader_Show').hide();
                if(data=='done'){
                    window.location='/home/events';
                }else{
                    $('#registerAlert_string').html(data);
                    $('#Jnanagni_Alert_Show').show();
                }
         }).fail(function() {
                      alert('Something Went Wrong ! Please Try Again .. ');
            }).always(function() {
                      ele.removeAttr('data-processing');
               });
    });//ends here




// $('* :not(.login)').click(function(){
//   if(m == 1){
//   $('.loginpanel').hide('scale');
//     m=0;
//   }      
// });
var check_reg = 0;
  $('#event_signup').click(function(){
    $('#regForm').show("slide",1000);
    $('.loginpanel').hide();
    m=0;
    check_reg = 1;
  });
  $('.close-button').click(function(){
    $('#regForm').hide();
    check_reg = 0;
  });

  $('#pwd').click(function(){
        $('.forgot_pass').fadeIn("slow");
        
    });
  $(window).resize(function(){
    var mar = $(window).width() - 865;
    $('#events_category').css('margin-left',+mar+'px');
  });
});
// Switching Starting
