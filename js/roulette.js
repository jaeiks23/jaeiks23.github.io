(function($) {
    $.fn.extend({
  
      roulette: function(options) {
  
        var defaults = {
          angle: 0,
          angleOffset: -45,
          speed: 5000,
          easing: "easeInOutElastic",
        };
  
        var opt = $.extend(defaults, options);
  
        return this.each(function() {
          var o = opt;
  
          var data = [
            {
              color: '#3f297e',
              text: '구내식당'
            },
            {
              color: '#1d61ac',
              text: '마라탕'
            },
            {
              color: '#169ed8',
              text: '얌샘김밥'
            },
            {
              color: '#209b6c',
              text: '돈까스'
            },
            {
              color: '#60b236',
              text: '비빔밥'
            },
            {
              color: '#efe61f',
              text: '제육'
            },
            {
              color: '#f7a416',
              text: '떡볶이'
            },
            {
              color: '#e6471d',
              text: '햄버거'
            },
            {
              color: '#dc0936',
              text: '짜장면'
            },
            {
              color: '#e5177b',
              text: '덮밥'
            },
            {
              color: '#be107f',
              text: '파볶밥'
            },
            {
              color: '#881f7e',
              text: '우육탕면'
            }
          ];
  
          var $wrap = $(this);
          var $btnStart = $wrap.find("#btn-start");
          var $roulette = $wrap.find(".roulette");
          var wrapW = $wrap.width();
          var angle = o.angle;
          var angleOffset = o.angleOffset;
          var speed = o.speed;
          var esing = o.easing;
          var itemSize = data.length;
          var itemSelector = "item";
          var labelSelector = "label";
          var d = 360 / itemSize;
          var borderTopWidth = wrapW;
          var borderRightWidth = tanDeg(d);
  
          for (i = 1; i <= itemSize; i += 1) {
            var idx = i - 1;
            var rt = i * d + angleOffset;
            var itemHTML = $('<div class="' + itemSelector + '">');
            var labelHTML = '';
                labelHTML += '<p class="' + labelSelector + '">';
                labelHTML += '	<span class="text">' + data[idx].text + '<\/span>';
                labelHTML += '<\/p>';
  
            $roulette.append(itemHTML);
            $roulette.children("." + itemSelector).eq(idx).append(labelHTML);
            $roulette.children("." + itemSelector).eq(idx).css({
              "left": wrapW / 2,
              "top": -wrapW / 2,
              "border-top-width": borderTopWidth,
              "border-right-width": borderRightWidth,
              "border-top-color": data[idx].color,
              "transform": "rotate(" + rt + "deg)"
            });
  
            var textH = parseInt(((2 * Math.PI * wrapW) / d) * .5);
  
            $roulette.children("." + itemSelector).eq(idx).children("." + labelSelector).css({
              "height": textH + 'px',
              "line-height": textH + 'px',
              "transform": 'translateX(' + (textH * 1.3) + 'px) translateY(' + (wrapW * -.3) + 'px) rotateZ(' + (90 + d * .5) + 'deg)'
            });
  
          }
  
          function tanDeg(deg) {
            var rad = deg * Math.PI / 180;
            return wrapW / (1 / Math.tan(rad));
          }
  
  
          $btnStart.on("click", function() {
            rotation();
          });
  
          function rotation() {
  
            var completeA = 360 * r(5, 10) + r(0, 360);
  
            $roulette.rotate({
              angle: angle,
              animateTo: completeA,
              center: ["50%", "50%"],
              easing: $.easing.esing,
              callback: function() {
                var currentA = $(this).getRotateAngle();
  
                console.log(currentA);
  
              },
              duration: speed
            });
          }
  
          function r(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
  
        });
      }
    });
  })(jQuery);
  
  $(function() {
  
    $('.box-roulette').roulette();
  
  });
  function chageClick(){
    let imgs =  document.querySelector('.Projects_img__OAyqd').src;
    console.log(imgs);
    let texts = "https://jaeiks23.github.io/";
    
     if(imgs == texts+"image/project/Minty/Donjon1.png"){
      document.querySelector('.Projects_img__OAyqd').src = "image/project/Minty/Donjon4.png";
         document.querySelector('.Projects_page__zHIqO').innerHTML = "2/4"
     }
     else if(imgs == texts+"image/project/Minty/Donjon4.png"){
      document.querySelector('.Projects_page__zHIqO').innerHTML = "3/4"
      document.querySelector('.Projects_img__OAyqd').src = "image/project/Minty/Donjon3.png";
     }
     else if(imgs == texts+"image/project/Minty/Donjon3.png"){
      document.querySelector('.Projects_page__zHIqO').innerHTML = "4/4"
      document.querySelector('.Projects_img__OAyqd').src= "image/project/Minty/Donjon2.png";
     }
     else if(imgs == texts+"image/project/Minty/Donjon2.png"){
      document.querySelector('.Projects_page__zHIqO').innerHTML = "1/4"
      document.querySelector('.Projects_img__OAyqd').src = "image/project/Minty/Donjon1.png";
     }
 }
 function chageClick2(){
     let imgs =  document.querySelector('.Projects_img__OAyqd').src;
     let texts = "https://jaeiks23.github.io/";
    
      if(imgs == texts+"image/project/Minty/Donjon1.png"){
        document.querySelector('.Projects_img__OAyqd').src = "image/project/Minty/Donjon2.png";
          document.querySelector('.Projects_page__zHIqO').innerHTML = "4/4"
      }
      else if(imgs == texts+"image/project/Minty/Donjon2.png"){
        document.querySelector('.Projects_img__OAyqd').src = "image/project/Minty/Donjon3.png";
          document.querySelector('.Projects_page__zHIqO').innerHTML = "3/4"
      }
      else if(imgs == texts+"image/project/Minty/Donjon3.png"){
        document.querySelector('.Projects_img__OAyqd').src= "image/project/Minty/Donjon4.png";
          document.querySelector('.Projects_page__zHIqO').innerHTML = "2/4"
      }
      else if(imgs == texts+"image/project/Minty/Donjon4.png"){
        document.querySelector('.Projects_img__OAyqd').src = "image/project/Minty/Donjon1.png";
          document.querySelector('.Projects_page__zHIqO').innerHTML = "1/4"
      }
  }
  function chageClick3(){
    let imgs =  document.querySelector('.Projects_img__OAyqd2').src;
    console.log(imgs);
    let texts = "https://jaeiks23.github.io/";
    
     if(imgs == texts+"image/project/team/t1.png"){
      document.querySelector('.Projects_img__OAyqd2').src = "image/project/team/t2.png";
         document.querySelector('.Projects_page__zHIqO2').innerHTML = "2/5"
     }
     else if(imgs == texts+"image/project/team/t2.png"){
      document.querySelector('.Projects_page__zHIqO2').innerHTML = "3/5"
      document.querySelector('.Projects_img__OAyqd2').src = "image/project/team/t3.png";
     }
     else if(imgs == texts+"image/project/team/t3.png"){
      document.querySelector('.Projects_page__zHIqO2').innerHTML = "4/5"
      document.querySelector('.Projects_img__OAyqd2').src= "image/project/team/t4.png";
     }
     else if(imgs == texts+"image/project/team/t4.png"){
      document.querySelector('.Projects_page__zHIqO2').innerHTML = "5/5"
      document.querySelector('.Projects_img__OAyqd2').src = "image/project/team/t5.png";
     }
     else if(imgs == texts+"image/project/team/t5.png"){
      document.querySelector('.Projects_page__zHIqO2').innerHTML = "1/5"
      document.querySelector('.Projects_img__OAyqd2').src = "image/project/team/t1.png";
     }
 }
 function chageClick4(){
     let imgs =  document.querySelector('.Projects_img__OAyqd2').src;
     let texts = "https://jaeiks23.github.io/";
    
      if(imgs == texts+"image/project/team/t1.png"){
        document.querySelector('.Projects_img__OAyqd2').src = "image/project/team/t5.png";
          document.querySelector('.Projects_page__zHIqO2').innerHTML = "4/5"
      }
      else if(imgs == texts+"image/project/team/t4.png"){
        document.querySelector('.Projects_img__OAyqd2').src = "image/project/team/t3.png";
          document.querySelector('.Projects_page__zHIqO2').innerHTML = "3/5"
      }
      else if(imgs == texts+"image/project/team/t3.png"){
        document.querySelector('.Projects_img__OAyqd2').src= "image/project/team/t2.png";
          document.querySelector('.Projects_page__zHIqO2').innerHTML = "2/5"
      }
      else if(imgs == texts+"image/project/team/t2.png"){
        document.querySelector('.Projects_img__OAyqd2').src = "image/project/team/t1.png";
          document.querySelector('.Projects_page__zHIqO2').innerHTML = "1/5"
      }
      else if(imgs == texts+"image/project/team/t5.png"){
        document.querySelector('.Projects_img__OAyqd2').src = "image/project/team/t4.png";
          document.querySelector('.Projects_page__zHIqO2').innerHTML = "4/5"
      }
  }
  function chageClick5(){
    let imgs =  document.querySelector('.Projects_img__OAyqd3').src;
    console.log(imgs);
    let texts = "https://jaeiks23.github.io/";
    
     if(imgs == texts+"image/project/Ref/Re1.png"){
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re2.png";
         document.querySelector('.Projects_page__zHIqO3').innerHTML = "2/10"
     }
     else if(imgs == texts+"image/project/Ref/Re2.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "3/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re3.png";
     }
     else if(imgs == texts+"image/project/Ref/Re3.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "4/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re4.png";
     }
     else if(imgs == texts+"image/project/Ref/Re4.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "5/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re5.png";
     }
     else if(imgs == texts+"image/project/Ref/Re5.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "6/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re6.png";
     }
     else if(imgs == texts+"image/project/Ref/Re6.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "7/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re7.png";
     }
     else if(imgs == texts+"image/project/Ref/Re7.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "8/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re8.png";
     }
     else if(imgs == texts+"image/project/Ref/Re8.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "9/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re9.png";
     }
     else if(imgs == texts+"image/project/Ref/Re9.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "10/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re10.png";
     }
     else if(imgs == texts+"image/project/Ref/Re10.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "1/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re1.png";
     }
 }
 function chageClick6(){
     let imgs =  document.querySelector('.Projects_img__OAyqd3').src;
     let texts = "https://jaeiks23.github.io/";
    
     if(imgs == texts+"image/project/Ref/Re1.png"){
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re10.png";
         document.querySelector('.Projects_page__zHIqO3').innerHTML = "10/10"
     }
     else if(imgs == texts+"image/project/Ref/Re2.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "1/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re1.png";
     }
     else if(imgs == texts+"image/project/Ref/Re3.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "2/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re2.png";
     }
     else if(imgs == texts+"image/project/Ref/Re4.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "3/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re3.png";
     }
     else if(imgs == texts+"image/project/Ref/Re5.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "4/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re4.png";
     }
     else if(imgs == texts+"image/project/Ref/Re6.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "5/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re5.png";
     }
     else if(imgs == texts+"image/project/Ref/Re7.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "6/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re6.png";
     }
     else if(imgs == texts+"image/project/Ref/Re8.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "7/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re7.png";
     }
     else if(imgs == texts+"image/project/Ref/Re9.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "8/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re8.png";
     }
     else if(imgs == texts+"image/project/Ref/Re10.png"){
      document.querySelector('.Projects_page__zHIqO3').innerHTML = "9/10"
      document.querySelector('.Projects_img__OAyqd3').src = "image/project/Ref/Re9.png";
     }
  }