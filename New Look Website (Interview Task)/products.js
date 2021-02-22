
///////////// CAROUSEL //////////////////////////////////////////

var imgList = document.getElementById('imgList');
var scrollRight = document.getElementById('scroll-right');
var scrollLeft = document.getElementById('scroll-left');

// When a user clicks on the right arrow, the ul will scroll 750px to the right
scrollRight.addEventListener('click', (event) => {
    imgList.scrollBy(750, 0);
});

// When a user clicks on the left arrow, the ul will scroll 750px to the left
scrollLeft.addEventListener('click', (event) => {
    imgList.scrollBy(-750, 0);
});



/////////////////// SEARCH BAR  /////////////////////////////////////

function search_product() { 
    let input = document.getElementById('searchbar').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('product'); 
    let y = document.getElementsByClassName('title');
      
    for (i = 0; i < x.length; i++) {  
        if (!y[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="inline-block";                  
        } 
    } 
} 


/////////////////////// FILTER /////////////////////////////////////////

function filter(){

}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

///////////////// PRICE RANGE //////////////////////////////

var number1;
var number2;

(function() {
	const parent = document.querySelector('.range-slider');

	if (!parent) {
		return;
	}

	const rangeS = parent.querySelectorAll('input[type="range"]'),
	      numberS = parent.querySelectorAll('input[type="number"]');

	rangeS.forEach((el) => {
		el.oninput = () => {
			let slide1 = parseFloat(rangeS[0].value),
				slide2 = parseFloat(rangeS[1].value);

			if (slide1 > slide2) {
				[slide1, slide2] = [slide2, slide1];
			}

			numberS[0].value = slide1;
			numberS[1].value = slide2;
		}
	});

	numberS.forEach((el) => {
		el.oninput = () => {
			let number1 = parseFloat(numberS[0].value),
				number2 = parseFloat(numberS[1].value);

			if (number1 > number2) {
				let tmp = number1;
				numberS[0].value = number2;
				numberS[1].value = tmp;
			}

			rangeS[0].value = number1;
			rangeS[1].value = number2;
            

           
            
		}
	});
 } 
 
)();



document.getElementById("min").addEventListener("change", minFunction);

function minFunction() {
 
    first_val = document.getElementById("min");
    price_val = document.getElementsByClassName("price");
    product_view = document.getElementsByClassName("product");

    for (i = 0; i < price_val.length; i++) {  
        if (price_val[i].innerHTML < first_val.value) { 

            product_view[i].style.display="none"; 
        } 
        else { 
            product_view[i].style.display="inline-block";                  
        } 
    } 
    
}

document.getElementById("max").addEventListener("change", maxFunction);

function maxFunction() {
 
    let second_val = document.getElementById("max");
    let price_val = document.getElementsByClassName("price");
    let product_view = document.getElementsByClassName("product");
    


    for (i = 0; i < price_val.length; i++) {  
        if (price_val[i].innerHTML > second_val.value) { 

            product_view[i].style.display="none"; 
        } 
        else if (price_val[i].innerHTML < second_val.value) { 
            product_view[i].style.display="inline-block";                  
        } 
    } 
    
    
}


/////////////// POPUP ///////////////////////////////////////////////////////////



// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var modal8 = document.getElementById("myModal8");
var modal9 = document.getElementById("myModal9");
var modal10 = document.getElementById("myModal10");
var modal11 = document.getElementById("myModal11");
var modal12 = document.getElementById("myModal12");
var modal13 = document.getElementById("myModal13");
var modal14 = document.getElementById("myModal14");
var modal15 = document.getElementById("myModal15");
var modal16 = document.getElementById("myModal16");
var modal17 = document.getElementById("myModal17");
var modal18 = document.getElementById("myModal18");
var modal19 = document.getElementById("myModal19");
var modal20 = document.getElementById("myModal20");



// Get the image and insert it inside the modal 

var img_prod1 = document.getElementById("prod1");
var desc1 = document.getElementById("desc1");

var img_prod2 = document.getElementById("prod2");
var desc2 = document.getElementById("desc2");

var img_prod3 = document.getElementById("prod3");
var desc1 = document.getElementById("desc3");

var img_prod4 = document.getElementById("prod4");
var desc1 = document.getElementById("desc4");

var img_prod5 = document.getElementById("prod5");
var desc1 = document.getElementById("desc5");

var img_prod6 = document.getElementById("prod6");
var desc1 = document.getElementById("desc6");

var img_prod7 = document.getElementById("prod7");
var desc1 = document.getElementById("desc7");

var img_prod8 = document.getElementById("prod8");
var desc1 = document.getElementById("desc8");

var img_prod9 = document.getElementById("prod9");
var desc1 = document.getElementById("desc9");

var img_prod10 = document.getElementById("prod10");
var desc1 = document.getElementById("desc10");

var img_prod11 = document.getElementById("prod11");
var desc1 = document.getElementById("desc11");

var img_prod12 = document.getElementById("prod12");
var desc1 = document.getElementById("desc12");

var img_prod13 = document.getElementById("prod13");
var desc1 = document.getElementById("desc13");

var img_prod14 = document.getElementById("prod14");
var desc1 = document.getElementById("desc14");

var img_prod15 = document.getElementById("prod15");
var desc1 = document.getElementById("desc15");

var img_prod16 = document.getElementById("prod16");
var desc1 = document.getElementById("desc16");

var img_prod17 = document.getElementById("prod17");
var desc1 = document.getElementById("desc17");

var img_prod18 = document.getElementById("prod18");
var desc1 = document.getElementById("desc18");

var img_prod19 = document.getElementById("prod19");
var desc1 = document.getElementById("desc19");

var img_prod20 = document.getElementById("prod20");
var desc1 = document.getElementById("desc20");


//Show modal on click

img_prod1.onclick = function(){
  modal1.style.display = "block";
}

img_prod2.onclick = function(){
  modal2.style.display = "block";
}

img_prod3.onclick = function(){
  modal3.style.display = "block";
}

img_prod4.onclick = function(){
  modal4.style.display = "block";
}

img_prod5.onclick = function(){
  modal5.style.display = "block";
}

img_prod6.onclick = function(){
  modal6.style.display = "block";
}

img_prod7.onclick = function(){
  modal7.style.display = "block";
}

img_prod8.onclick = function(){
  modal8.style.display = "block";
}

img_prod9.onclick = function(){
  modal9.style.display = "block";
}

img_prod10.onclick = function(){
  modal10.style.display = "block";
}

img_prod11.onclick = function(){
  modal11.style.display = "block";
}

img_prod12.onclick = function(){
  modal12.style.display = "block";
}

img_prod13.onclick = function(){
  modal13.style.display = "block";
}

img_prod14.onclick = function(){
  modal14.style.display = "block";
}

img_prod15.onclick = function(){
  modal15.style.display = "block";
}

img_prod16.onclick = function(){
  modal16.style.display = "block";
}

img_prod17.onclick = function(){
  modal17.style.display = "block";
}

img_prod18.onclick = function(){
  modal18.style.display = "block";
}

img_prod19.onclick = function(){
  modal19.style.display = "block";
}

img_prod20.onclick = function(){
  modal20.style.display = "block";
}
    



// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];
var span5 = document.getElementsByClassName("close")[4];
var span6 = document.getElementsByClassName("close")[5];
var span7 = document.getElementsByClassName("close")[6];
var span8 = document.getElementsByClassName("close")[7];
var span9 = document.getElementsByClassName("close")[8];
var span10 = document.getElementsByClassName("close")[9];
var span11 = document.getElementsByClassName("close")[10];
var span12 = document.getElementsByClassName("close")[11];
var span13 = document.getElementsByClassName("close")[12];
var span14 = document.getElementsByClassName("close")[13];
var span15 = document.getElementsByClassName("close")[14];
var span16 = document.getElementsByClassName("close")[15];
var span17 = document.getElementsByClassName("close")[16];
var span18 = document.getElementsByClassName("close")[17];
var span19 = document.getElementsByClassName("close")[18];
var span20 = document.getElementsByClassName("close")[19];


// When the user clicks on <span> (x), close the modal

span1.onclick = function() {
    modal1.style.display = "none"; 
}

span2.onclick = function() {
    modal2.style.display = "none"; 
}

span3.onclick = function() {
    modal3.style.display = "none"; 
}

span4.onclick = function() {
    modal4.style.display = "none"; 
}

span5.onclick = function() {
    modal5.style.display = "none"; 
}

span6.onclick = function() {
    modal6.style.display = "none"; 
}

span7.onclick = function() {
    modal7.style.display = "none"; 
}

span8.onclick = function() {
    modal8.style.display = "none"; 
}

span9.onclick = function() {
    modal9.style.display = "none"; 
}

span10.onclick = function() {
    modal10.style.display = "none"; 
}

span11.onclick = function() {
    modal11.style.display = "none"; 
}

span12.onclick = function() {
    modal12.style.display = "none"; 
}

span13.onclick = function() {
    modal13.style.display = "none"; 
}

span14.onclick = function() {
    modal14.style.display = "none"; 
}

span15.onclick = function() {
    modal15.style.display = "none"; 
}

span16.onclick = function() {
    modal16.style.display = "none"; 
}

span17.onclick = function() {
    modal17.style.display = "none"; 
}

span18.onclick = function() {
    modal18.style.display = "none"; 
}

span19.onclick = function() {
    modal19.style.display = "none"; 
}

span20.onclick = function() {
    modal20.style.display = "none"; 
}









