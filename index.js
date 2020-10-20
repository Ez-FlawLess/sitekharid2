
var clickedCategory = null;
$('.c-h2').click(function(event){
  var categoriesLocation = $('.categories').offset().top;
  categoriesLocation = categoriesLocation - 80;
  window.scrollTo({top: categoriesLocation, behavior: 'smooth'});
  if ($('.'+clickedCategory).hasClass('clicked-category') == true){
    $('.'+clickedCategory).removeClass('clicked-category');
    $( '.product-section' ).slideUp( "slow", function(){
    });
  }
  clickedCategory = event.target.id;
  $('.'+clickedCategory).addClass('clicked-category');
    $( '.product-section' ).slideDown( "slow", function(){
    });
});

$(document).scroll(function(event){
  var pageTop = $(document).scrollTop();
  if(pageTop > 130){
    $('.fixed-top').css('display','block');
    $('.search-div').css('position', 'fixed');
    $('.search-div').addClass('search-div-center');
  } else if(pageTop<130 && ($('.fixed-top').css('display')) =='block') {
    $('.fixed-top').css('display','none');
    $('.search-div').css('position', 'relative');
    $('.search-div').removeClass('search-div-center');
  }
});

function openMenu() {
  $('.menu').css('width','15%');
}

function closeMenu() {
  $('.menu').css('width','0');
}

function openUserNav() {
  $('.user-section').css('width','100%');
}

function closeUserNav() {
  $('.user-section').css('width','0');
}

//366px vaseye har kala jadid
