const img = document.getElementById('img').children;
////console.log(img['0']);
const scrolBody = 0;
////console.log(scrolBody)
$(document).ready(function(){
  $('#link').fadeIn('slow')
  $(document).scrollTop(0);
  var i =3000;var o = 6000;
  const bodyHeight = $('body').css('height');
  function slideImages(){
    $("#img").css({
      'margin-top':'20rem',
    });
    interval1 = setInterval(()=>{
      $('#slide-right span').css('color', 'gray');
      $(img['0']).css({
        'right':'20rem',
        'padding':'1rem',
        'padding-top':'3rem'
      }),
      $(img['1']).css({
        'right':'11rem',
      })
      $(img['2']).css({
        'right':'4rem',
      })
      $(img['3']).css({
        'right':'-5rem',
      });
      $(img['0'].children['1']).fadeIn(4000);
      if (i==3000){
        clearInterval(interval1);
        //console.log(interval1)
      }else{
        //console.log('error')
      }
      $('#slide-right span').css('color', 'orangered');
    }, 3000);
    interval = setInterval(()=>{
      $('#slide-right span').css('color', 'gray');
      $(img['0']).css({
        'right':'16',
        'padding':'3rem 0 2rem 4rem',
        'z-index':'666'
      }),
      $(img['1']).css({
        'right':'11rem',
        'z-index':'999'
      })
      $(img['2']).css({
        'right':'4rem',
      })
      $(img['3']).css({
        'right':'-5rem',
      });
      $(img['0'].children['1']).css({
        'display':'none'
      });
      $(img['1'].children['1']).fadeIn(4000);
      if (o==6000){
        clearInterval(interval);
        //console.log(interval)
      }
      $('#slide-right span').css('color', 'orangered');
    }, 6000);
  }
  function downOn(){
    if(scrolBody == 0){
      ////console.log(scrolBody)
      setTimeout(()=>{
        $(document).scrollTop($(document).height());
        $('#slide-right').css('display','block');
      },3000)
      ////console.log()
    }
    slideImages();
  }
  downOn();








  function slideDownColors(){
    slideRight = $('#bottom-left').children('span');
    setTimeout(setFunc(), 1000);
    function setFunc(){

    }
  }
  slideDownColors();
});