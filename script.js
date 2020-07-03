var element	= 	$('.navbar');
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
        $(element).removeClass('.navbar-light');
        $(element).addClass('navbar-transparant');	
        $(element).addClass('fadeInDown');
    } else {
        $(element).addClass('navbar-light');
        $(element).removeClass('navbar-transparant');	
        $(element).removeClass('.fadeInDown');			
    }
});

const popup = document.querySelector('.popup1')
const hide = document.querySelector('.container-frame')
const popupSecond = document.querySelector('.popup2')
const hideSecond = document.querySelector('.second')
const popupThird = document.querySelector('.popup3')
const hideThird = document.querySelector('.third')
const popupFourth = document.querySelector('.popup4')
const hideFourth = document.querySelector('.fourth')
const popupFifth = document.querySelector('.popup5')
const hideFifth = document.querySelector('.fifth')
const popupSixth = document.querySelector('.popup6')
const hideSixth = document.querySelector('.sixth')





myFunction();
function myFunction(){
  popup.addEventListener('click', showPopUp)
  hide.addEventListener('click',removeFrame)
  popupSecond.addEventListener('click', showPopUpSecond)
  hideSecond.addEventListener('click', removeFrameSecond)
  popupThird.addEventListener('click', showPopUpThird)
  hideThird.addEventListener('click', removeFrameThird)
  popupFourth.addEventListener('click', showPopUpFourth)
  hideFourth.addEventListener('click', removeFrameFourth)
  popupFifth.addEventListener('click', showPopUpFifth)
  hideFifth.addEventListener('click', removeFrameFifth)
  popupSixth.addEventListener('click', showPopUpSixth)
  hideSixth.addEventListener('click', removeFrameSixth)
}
const description = document.querySelector('.container-frame');
function showPopUp(){
  description.style.width = '100%';

}
function removeFrame(){
  description.style.width = '0'
}
const descriptionSecond = document.querySelector('.second')
function showPopUpSecond(){
  descriptionSecond.style.width = "100%"
}
function removeFrameSecond(){
  descriptionSecond.style.width ="0";
}
const descriptionThird = document.querySelector('.third')
function showPopUpThird(){
  descriptionThird.style.width = "100%"
}
function removeFrameThird(){
  descriptionThird.style.width ="0";
}
const descriptionFourth = document.querySelector('.fourth')
function showPopUpFourth(){
  descriptionFourth.style.width = "100%"
}
function removeFrameFourth(){
  descriptionFourth.style.width ="0";
}
const descriptionFifth = document.querySelector('.fifth')
function showPopUpFifth(){
  descriptionFifth.style.width = "100%"
}
function removeFrameFifth(){
  descriptionFifth.style.width ="0";
}
const descriptionSixth = document.querySelector('.sixth')
function showPopUpSixth(){
  descriptionSixth.style.width = "100%"
}
function removeFrameSixth(){
  descriptionSixth.style.width ="0";
}

