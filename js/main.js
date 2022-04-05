
$(window).on('load', function() {
  setTimeout(function() {
      $('body').addClass('is-start');
  },500);
});
$(function(){
/*  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var w_height = $(window).height();
    if( scrollTop > ( w_height / 2 ) ) {
      $('.p-cover.js-move, .p-headerCover.js-move').addClass('is-active');
    } else {
      $('.p-cover.js-move, .p-headerCover.js-move').removeClass('is-active');
    }
  });*/
  $('.js-action').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
    if (isInView) {
      $(this).addClass("is-move");
    }
  });
  kvsize();
  setTimeout(function() {
//    backposi();
  }, 200);
});
var timer = false;
$(window).resize(function() {
    if (timer !== false) {
        clearTimeout(timer);
    }
    timer = setTimeout(function() {
//      backposi();
//      kvsize();
    }, 200);
});

function backsize() {
  var fImg = $('#flower').width();
  var bSize = fImg / 24;
  $('.p-back, .p-header').css({
    'background-size': bSize * 2,
  });
  return bSize;
}
function backposi() {
  var size = backsize();
  var fImgPos = $('#flower').offset().top;
  var tPos = decimalPart(fImgPos / size) * size;
  var backPos = 'center ' + tPos + 'px';
  $('.p-back, .p-header').css({
    'background-position': backPos,
  })
}
function decimalPart(num){
  var numStr = num+'';
  var dotIdx  = numStr.indexOf("."),
  result  = "0." + (dotIdx > -1 ? numStr.substring(dotIdx + 1) : "0");
  return  parseFloat( ((num>0)?'+':'-') + result );
}
function kvsize() {
  var hWindow = $(window).height();
  $('.p-kv').css({
    'height': hWindow,
  });
}

/*$(function(){
  $('.p-poemBtn').on('click', function(){
    if ($('.p-poem').hasClass('is-open') ) {
      $('.p-poem').removeClass('is-open');
      $('body').removeClass('is-poemOpen');
    } else {
      $('.p-poem').addClass('is-open');
      $('body').addClass('is-poemOpen');
    }
  });
});*/

// $(function() {
//   $('.p-poemBtn').magnificPopup({
//    type:'inline',
//     fixedContentPos: true,
//     callbacks: {
//       open: function() {
//         closeBtn();
//       },
//     },
//     mainClass: 'mfp-fade02',
// 		removalDelay: 200
//   });
// });

// function closeBtn(){
//   $('.p-popPoem__closeBtn').on('click',function(){
//     $('.p-poemBtn').magnificPopup('close');
//   });
// }

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.p-cover.js-move, .p-headerCover.js-move').addClass('is-active');
    } else {
      $('.p-cover.js-move, .p-headerCover.js-move').removeClass('is-active');
    }
  });
});

