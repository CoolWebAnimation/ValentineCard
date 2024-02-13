$(document).ready(function () {
  $('.container').mouseenter(function () {
    $('.card').stop().animate({
      top: '-90px'
    }, 'slow');
  }).mouseleave(function () {
    $('.card').stop().animate({
      top: 0
    }, 'slow');
  });
});

let no = document.getElementById('no');

no.addEventListener("mouseover", function (e) {
  no.style = `left: ${Math.random() * 80}vw;`
  console.log(no.style)
})

let yes = document.getElementById('yes');

yes.addEventListener("click", function (e) {
  alert("YAYYYYYYYYY!!!!!!!")
})