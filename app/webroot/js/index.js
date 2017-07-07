/*$(window).load(function() { $("#loading_image").delay(500).fadeOut("slow");$("#preloader").delay(500).fadeOut("slow");});   (function($) { var defaults = { images: [ 'https://dl.dropboxusercontent.com/s/v1q5hys8grpd4z1/spark.png?dl=0', 'https://dl.dropboxusercontent.com/s/xzlyi7pwrnexdpm/spark2.png?dl=0', 'https://dl.dropboxusercontent.com/s/32zuhfx89i2jrvv/spark3.png?dl=0', 'https://dl.dropboxusercontent.com/s/kvne2tj87ki5com/spark4.png?dl=0' ], total: 20 };  $.firefly = function(settings) { $.firefly.settings = $.extend({}, defaults, settings); if ($.firefly.preloadImages()) { for (i = 0; i < $.firefly.settings.total; i++) { $.firefly.fly($.firefly.create($.firefly.settings.images[$.firefly.random(($.firefly.settings.images).length)])); } } return; };  $.firefly.create = function(img) { spark = $('<img>').attr({ 'src': img }).hide(); $(document.body).append(spark); return spark.css({ 'position': 'absolute', 'z-index': $.firefly.random(1), top: $.firefly.random(($(window).height() - 150)), left: $.firefly.random(($(window).width() - 150)) }).show(); }  $.firefly.fly = function(sp) { $(sp).animate({ top: $.firefly.random(($(window).height() - 150)), left: $.firefly.random(($(window).width() - 150)) }, (($.firefly.random(10) + 5) * 1100), function() { $.firefly.fly(sp) }); };  $.firefly.preloadImages = function() { var preloads = new Object(); for (i = 0; i < ($.firefly.settings.images).length; i++) { preloads[i] = new Image(); preloads[i].src = $.firefly.settings.images[i]; } return true; }  $.firefly.random = function(max) { return Math.ceil(Math.random() * max) - 1; }  })(jQuery);  $(document).ready(function(){ if (screen.width > 960) { $.firefly({ images: ['https://dl.dropboxusercontent.com/s/94fx616lf8lzque/fly1by1.png?dl=0', 'https://dl.dropboxusercontent.com/s/u7tt8mjey1upqs2/fly2by2.png?dl=0'], total: 20 }); }   $('li').hover(function(){ $(this).find('.li_wrap>.left').css({marginLeft:'-120px'}); }, function(){ $(this).find('.li_wrap>.left').css({marginLeft:'0px'}); }); $('.links').hover(function(){ if($(this).height()==91){ $(this).find('.links_wrap').css({marginTop:'-63px'}); } else{ $(this).find('.links_wrap').css({marginTop:'-54px'}); } }, function(){ $(this).find('.links_wrap').css({marginTop:'0px'}); }); $('.logo').click(function(){ $('#home-content').animate({ marginTop:"0px" },"slow"); }); $('.organisers').click(function(){ $('#home-content').animate({ marginTop:"-380px" },"slow"); }); $('.sponsors').click(function(){ $('#home-content').animate({ marginTop:"-760px" },"slow"); }); $('.hospitality').click(function(){ $('#home-content').animate({ marginTop:"-1140px" },"slow"); }); $('#aboutJnanagni').click(function(){ $('#home-content').animate({ marginTop:"-1520px" },"slow"); }); $('#flashBack').click(function(){ $('#home-content').animate({ marginTop:"-1900px" },"slow"); }); $('#webTeam_').click(function(){ $('#home-content').animate({ marginTop:"-2280px" },"slow"); }); $('#contactUs_').click(function(){ $('#home-content').animate({ marginTop:"-2660px" },1000); }); $('#reachUs_').click(function(){ $('#home-content').animate({ marginTop:"-3040px" },1000); });   $('.carousel').carousel(); $(document).bind('keyup', function(e) { if(e.which == 39){ $('.carousel').carousel('next'); } else if(e.which == 37){ $('.carousel').carousel('prev'); } }); $('#carousel-generic>.left').click(function(){ $('.carousel').carousel('prev'); }); $('#carousel-generic>.right').click(function(){ $('.carousel').carousel('next'); }); $('.carousel-indicators>li').click(function(){ $('.carousel-indicators>li').removeClass('active'); $(this).addClass('active'); $('.carousel').carousel($(this).index()); });  $('.organiser').hover(function(){ $(this).children('.organiserDesc').show("clip"); },function(){ $('.organiserDesc').hide("scale"); }); $('.sponsor').hover(function(){ $(this).children('.sponsorDesc').show("clip"); },function(){ $('.sponsorDesc').hide("scale"); }); $('.box_container2').hover(function(){  var width = $(this).outerWidth() / 2;  $(this).find('.left2').animate({ right : width },{easing: 'easeOutBounce', queue:false,duration:1000}); $(this).find('.right2').animate({ left : width },{easing: 'easeOutBounce', queue:false,duration:1000}); }, function(){  $(this).find('.left2').animate({ right : 0 },{easing: 'easeOutBounce',queue:false,duration:1000}); $(this).find('.right2').animate({ left : 0 },{easing: 'easeOutBounce',queue:false,duration:1000});  });  $('.login1').mousedown(function(){ $(this).css('border','0px'); $(this).css('line-height','30px'); }); $('.login1').mouseup(function(){ $(this).css('border-bottom','5px solid #77d'); $(this).css('line-height','25px'); });  var check_login=0; var m=0; $('#login_button').click(function(){ if(m==0){ $('.loginpanel').show('shake',function(){ $('#wrapper :not(#login_button,.loginpanel,.loginpanel *)').click(function(){ $('.loginpanel').hide('scale'); m=0; check_login=0; }); }); m=1; check_login=1; } else{ $('.loginpanel').hide('scale'); m=0; check_login=0; }  });      $('#home_login').click(function(){   var user=$('#username').val(); var pass=$('#password').val();   $.ajax({ url: "/home/login/"+user+'/'+pass, type: "POST", beforeSend: function(xhr) { $('#loader_Show').show(); }  }).done(function(data) { $('#loader_Show').hide(); if(data=='done'){  window.location='/home'; }else{ $('#alert_string').html(data); $('#Jnanagni_Alert_Show').show(); } }).fail(function() { alert('Something Went Wrong ! Please Try Again .. '); }).always(function() { ele.removeAttr('data-processing'); }); }); $('#forgot_submit').click(function(){ var address=window.location;  var email=$('.forgot_email').val();  if(email==''){ $('.forgot_email').focus(); return false; } $.ajax({ url: "/home/forgot_password/"+email, type: "POST", beforeSend: function(xhr) { $('#loader_Show').show(); }  }).done(function(data) { $('#loader_Show').hide(); if(data=='done'){ $('.forgot_pass').fadeOut("slow"); $('#alert_string').html("Password has been sent to your email id"); $('#Jnanagni_Alert_Show').show();  }else{ $('.forgot_email').val(''); $('.forgot_pass').fadeOut("slow"); $('#alert_string').html(data); $('#Jnanagni_Alert_Show').show();  } }).fail(function() { alert('Something Went Wrong ! Please Try Again .. '); }).always(function() { ele.removeAttr('data-processing'); });  });  $('.forgot_close').click(function(){ $('.forgot_pass').fadeOut("slow"); });  $(window).keypress(function(e) { if(e.keyCode==13 && check_login==1){ $('#home_login').click(); } });   $('ul>li').click(function(){ $('ul>li').removeClass('li_active'); $(this).addClass('li_active'); }); $('.logo').click(function(){ $('ul>li').removeClass('li_active'); }); $('.links').click(function(){ $('ul>li').removeClass('li_active'); });  $('#pwd').click(function(){ $('.forgot_pass').fadeIn("slow"); });  $('.box_container2').hover(function(){  $(this).find('.descc').css('height','40px');  },function(){ $(this).find('.descc').css('height','0'); });    });   */

//background js
//]
$(window).load(function() { $("#loading_image").delay(500).fadeOut("slow");$("#preloader").delay(500).fadeOut("slow");});

//$(window).load(function() { $(".loading").lettering(); });
(function($) {
    var defaults = {
        images: [
            'https://dl.dropboxusercontent.com/s/v1q5hys8grpd4z1/spark.png?dl=0',
            'https://dl.dropboxusercontent.com/s/xzlyi7pwrnexdpm/spark2.png?dl=0',
            'https://dl.dropboxusercontent.com/s/32zuhfx89i2jrvv/spark3.png?dl=0',
            'https://dl.dropboxusercontent.com/s/kvne2tj87ki5com/spark4.png?dl=0'
        ],
        total: 20
    };

    $.firefly = function(settings) {
        $.firefly.settings = $.extend({}, defaults, settings);
        if ($.firefly.preloadImages()) {
            for (i = 0; i < $.firefly.settings.total; i++) {
                $.firefly.fly($.firefly.create($.firefly.settings.images[$.firefly.random(($.firefly.settings.images).length)]));
            }
        }
        return;
    };

    $.firefly.create = function(img) {
        spark = $('<img>').attr({
            'src': img
        }).hide();
        $(document.body).append(spark);
        return spark.css({
            'position': 'absolute',
            'z-index': $.firefly.random(1),
            top: $.firefly.random(($(window).height() - 150)), //offsets
            left: $.firefly.random(($(window).width() - 150)) //offsets
        }).show();
    }

    $.firefly.fly = function(sp) {
        $(sp).animate({
            top: $.firefly.random(($(window).height() - 150)), //offsets
            left: $.firefly.random(($(window).width() - 150))
        }, (($.firefly.random(10) + 5) * 1100), function() {
            $.firefly.fly(sp)
        });
    };

    $.firefly.preloadImages = function() {
        var preloads = new Object();
        for (i = 0; i < ($.firefly.settings.images).length; i++) {
            preloads[i] = new Image();
            preloads[i].src = $.firefly.settings.images[i];
        }
        return true;
    }

    $.firefly.random = function(max) {
        return Math.ceil(Math.random() * max) - 1;
    }

})(jQuery);

$(document).ready(function(){
if (screen.width > 960) {
        $.firefly({
            images: ['https://dl.dropboxusercontent.com/s/94fx616lf8lzque/fly1by1.png?dl=0', 'https://dl.dropboxusercontent.com/s/u7tt8mjey1upqs2/fly2by2.png?dl=0'],
            total: 20
        });
    }//end background

//nav icons animation

$('li').hover(function(){
  $(this).find('.li_wrap>.left').css({marginLeft:'-120px'});
  },
  function(){
    $(this).find('.li_wrap>.left').css({marginLeft:'0px'});
});//end
// //footer links animation
$('.links').hover(function(){
if($(this).height()==91){
  $(this).find('.links_wrap').css({marginTop:'-63px'});
}
else{
    $(this).find('.links_wrap').css({marginTop:'-54px'});
}
},
function(){
  $(this).find('.links_wrap').css({marginTop:'0px'});
});//end
//links content movement
$('.logo').click(function(){
    $('#home-content').animate({
        marginTop:"0px"
    },"slow");
});
$('.organisers').click(function(){
    $('#home-content').animate({
        marginTop:"-380px"
    },"slow");
});
$('.sponsors').click(function(){
    $('#home-content').animate({
        marginTop:"-760px"
    },"slow");
});
$('.hospitality').click(function(){
    $('#home-content').animate({
        marginTop:"-1140px"
    },"slow");
});
$('#aboutJnanagni').click(function(){
    $('#home-content').animate({
        marginTop:"-1520px"
    },"slow");
});
$('#flashBack').click(function(){
   $('#home-content').animate({
        marginTop:"-1900px"
    },"slow");
});
$('#webTeam_').click(function(){
    $('#home-content').animate({
        marginTop:"-2280px"
    },"slow");
});
$('#contactUs_').click(function(){
    $('#home-content').animate({
        marginTop:"-2660px"
    },1000);
});
$('#reachUs_').click(function(){
    $('#home-content').animate({
        marginTop:"-3040px"
    },1000);
});

//end
//------------   slide show script   --------------//
$('.carousel').carousel();
$(document).bind('keyup', function(e) {
        if(e.which == 39){
            $('.carousel').carousel('next');
        }
        else if(e.which == 37){
            $('.carousel').carousel('prev');
        }
    });
$('#carousel-generic>.left').click(function(){
    $('.carousel').carousel('prev');
});
$('#carousel-generic>.right').click(function(){
   $('.carousel').carousel('next');
});
$('.carousel-indicators>li').click(function(){
    $('.carousel-indicators>li').removeClass('active');
    $(this).addClass('active');
    $('.carousel').carousel($(this).index());
});
//------------         end         ----------------//
//begin orgniser image description show
$('.organiser').hover(function(){
    $(this).children('.organiserDesc').show("clip");
},function(){
    $('.organiserDesc').hide("scale");
});//end
//begin sponsor image description show
$('.sponsor').hover(function(){
    $(this).children('.sponsorDesc').show("clip");
},function(){
    $('.sponsorDesc').hide("scale");
});//end
//webteam
$('.box_container2').hover(function(){
            
            var width = $(this).outerWidth() / 2;
            
            $(this).find('.left2').animate({ right : width },{easing: 'easeOutBounce', queue:false,duration:1000});
            $(this).find('.right2').animate({ left : width },{easing: 'easeOutBounce', queue:false,duration:1000});
        }, function(){
            
            $(this).find('.left2').animate({ right : 0 },{easing: 'easeOutBounce',queue:false,duration:1000});
            $(this).find('.right2').animate({ left : 0 },{easing: 'easeOutBounce',queue:false,duration:1000});
            
        });
//end
//login form
//begin login form js
   $('.login1').mousedown(function(){
    $(this).css('border','0px');
    $(this).css('line-height','30px');
     });
    $('.login1').mouseup(function(){
       $(this).css('border-bottom','5px solid #77d');
         $(this).css('line-height','25px');
     });

var check_login=0;
var m=0;
$('#login_button').click(function(){
    if(m==0){
        $('.loginpanel').show('shake',function(){
            $('#wrapper :not(#login_button,.loginpanel,.loginpanel *)').click(function(){
                $('.loginpanel').hide('scale');
        m=0;
        check_login=0;
            });
        });
        m=1;
        check_login=1;
    }
    else{
        $('.loginpanel').hide('scale');
        m=0;
        check_login=0;
    }

});



//end
//authentication script
/*$("#wrapper").find(':not(.loginpanel,#login_button)').click(function(){
    $('.loginpanel').hide('scale');
    m=0;
    check_login=0;
});*/

$('#home_login').click(function(){

       
       var user=$('#username').val();
       var pass=$('#password').val();
       /*var rem=$('#remember').val();
       alert(rem);*/

       $.ajax({
            url: "/home/login/"+user+'/'+pass,
            type: "POST",
            beforeSend: function(xhr) {
                $('#loader_Show').show();
              }

       }).done(function(data) {
                 $('#loader_Show').hide();
                if(data=='done'){
                    
                    window.location='/home';
                }else{
                    $('#alert_string').html(data);
                    $('#Jnanagni_Alert_Show').show();
                }
         }).fail(function() {
                      alert('Something Went Wrong ! Please Try Again .. ');
            }).always(function() {
                      ele.removeAttr('data-processing');
               });
    });//ends here

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
                     $('.forgot_pass').fadeOut("slow");
                    $('#alert_string').html("Password has been sent to your email id");
                    $('#Jnanagni_Alert_Show').show();
                    //window.location=address;
                }else{
                    $('.forgot_email').val('');
                    $('.forgot_pass').fadeOut("slow");
                    $('#alert_string').html(data);
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

     $(window).keypress(function(e) {
      if(e.keyCode==13 && check_login==1){
        $('#home_login').click();
      }
    });

    /*$(this).bind('contextmenu',function(e){
         e.preventDefault();
    });*/

    // ----------------- nav ul li active script ------------//
    $('ul>li').click(function(){
        $('ul>li').removeClass('li_active');
        $(this).addClass('li_active');
    });
    $('.logo').click(function(){
        $('ul>li').removeClass('li_active');
        });
    $('.links').click(function(){
        $('ul>li').removeClass('li_active');
    });
    // ----------------- nav ul li active script end ------------//
    $('#pwd').click(function(){
        $('.forgot_pass').fadeIn("slow");
    });
    //---------  web team  ----------//
    $('.box_container2').hover(function(){

            $(this).find('.descc').css('height','40px');
        
    },function(){
        $(this).find('.descc').css('height','0');
    });
    
    //--------- web team end ---------//
   
});


