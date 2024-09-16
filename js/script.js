$ (document).ready (function(){
    let $search = $('input#search');
    let $search_img = $('img#search_img');
    let $select_form = $('select#select_form');
    let $icon = $('div#icon_our');
    let $centerText = $('div#centerText');
    let $counter = 0;
    // ОТКРЫТИЕ INPUT
    $icon.on('click', function() {
        $search.css("display", "block");
        $search_img.css("display", "block");
        $select_form.css("display", "none");
        $icon.css("display", "none");
        $centerText.css("margin-top", "15.2%");
        $counter = 1;
        });
        // ЗАКРЫТИЕ INPUT ПРИ КЛИКЕ ПО ДОКУМЕНТУ
        $(document).mouseup( function(e){
            if (!$search.is(e.target) && $search.has(e.target).length === 0 && $counter===1){
                $search.css("display", "none");
                $search_img.css("display", "none");
                $select_form.css({
                    display:"block",
                    marginLeft:"7%",
                    marginTop:"-2%",
                    });
                $icon.css({
                    display:"block",
                    margintop: "22%",
                    marginBottom:"-15%"
                    });
                $centerText.css("margin-top", "14.85%");
                counter = 0;
            }
        });
        $( "#slider-range-min" ).slider({
            range: "min",
            step: 1,
            min: 0,
            max: 100,
            slide: function( event, ui ) {
                let $num = ui.value;
                $num = $num*50000;
                totalSum($num);
                $num = $num.toLocaleString();
                
              $( "#amount" ).val($num + " руб");
            }
          });
          $( "#amount" ).val($( "#slider-range-min" ).slider( "value") +" руб" );
    function totalSum(n){
        let text = document.getElementById("sum_pay");
        let btn_one = document.getElementById("btn_one");
        let btn_two = document.getElementById("btn_two");
        let btn_three = document.getElementById("btn_three");
        let btn_four = document.getElementById("btn_four");
        let btn_five = document.getElementById("btn_five");
        let p = 0;
        let s = n;
        let interest_rate = 4.5/100;
        let ratio = 1 + interest_rate;

        if(btn_one.checked){
            let tmp_1 = Math.pow(ratio, 12);
            p = s*((interest_rate*tmp_1)/(tmp_1-1));
            let p_result = Math.floor(p).toLocaleString();
            text.innerText = p_result + " руб";
        }
        if(btn_two.checked){
            let tmp_1 = Math.pow(ratio, 24);
            p = s*((interest_rate*tmp_1)/(tmp_1-1));
            let p_result = Math.floor(p).toLocaleString();
            text.innerText = p_result + " руб";
        }
        if(btn_three.checked){
            let tmp_1 = Math.pow(ratio, 36);
            p = s*((interest_rate*tmp_1)/(tmp_1-1));
            let p_result = Math.floor(p).toLocaleString();
            text.innerText = p_result + " руб";
        }
        if(btn_four.checked){
            let tmp_1 = Math.pow(ratio, 48);
            p = s*((interest_rate*tmp_1)/(tmp_1-1));
            let p_result = Math.floor(p).toLocaleString();
            text.innerText = p_result + " руб";
        }
        if(btn_five.checked){
            let tmp_1 = Math.pow(ratio, 60);
            p = s*((interest_rate*tmp_1)/(tmp_1-1));
            let p_result = Math.floor(p).toLocaleString();
            text.innerText = p_result + " руб";
        }
    }
    let $slider_button = $('span[tabindex=0]').css({
        backgroundColor:"#D9876C",
        borderRadius: "50px",
        marginTop: "-1%"
        });
        $(window).keyup(function(e){
            var target = $('.checkbox-btn input:focus');
            if (e.keyCode == 9 && $(target).length){
                $(target).parent().addClass('focused');
            }
        });
         
        $('.checkbox-btn input').focusout(function(){
            $(this).parent().removeClass('focused');
        });
        $('#example3').click(function() {
            $('#exampleModal3').arcticmodal({
                closeOnEsc: false,
                closeOnOverlayClick: false,
                overlay: {
                    css: {
                        backgroundColor: '#fff',
                        backgroundImage: 'url(images/overlay.png)',
                        backgroundRepeat: 'repeat',
                        backgroundPosition: '50% 0',
                        opacity: .75
                    }
                }
            });
        });
        $("#tel").mask("+7(999) 999-9999");
        $("#registration-form").validate({
            rules: {
              name: "required",
              email: {
                required: true,
                email: true
              }
            },
            messages: {
              name: "Please specify your name",
              email: {
                required: '<p style = "width: 400px">We need your email address to contact you</p>',
                email: '<p style = "width: 400px"> Your email address must be in the format of name@domain.com</p>'
              }
            }
          });
          $('#select_form').change(function(){
            window.location.href = $(this).val();
        });
        // Бургер
        let menuToggle = document.querySelector(".menuToggle");
      let navigation = document.querySelector(".navigation");
      menuToggle.onclick = function () {
        navigation.classList.toggle("active");
      };
      try {
        fetch(new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { method: 'HEAD', mode: 'no-cors' })).then(function(response) {
          return true;
        }).catch(function(e) {
          var carbonScript = document.createElement("script");
          carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CE7DC2JW&placement=wwwcssscriptcom";
          carbonScript.id = "_carbonads_js";
          document.getElementById("carbon-block").appendChild(carbonScript);
        });
      } catch (error) {
        console.log(error);
      }
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-LLWL5N9CSM');
    });
