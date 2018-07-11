var isInDarkMode= false;

document.querySelector('button').addEventListener('click', function(){
	if (isInDarkMode){
		document.querySelector('html').style.background="white";
		document.querySelector('html').style.color="black";
	} else{
	document.querySelector('html').style.background = "black";
	document.querySelector('html').style.color= "beige";
	isInDarkMode= true;
	}
});
