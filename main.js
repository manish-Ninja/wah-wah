
  var arr = [];

arr[0]= new Image();
arr[0].src = "https://www.planetodisha.com/upload/posts/1726.png";

arr[1]= new Image();
arr[1].src = "https://scontent.frpr2-1.fna.fbcdn.net/v/t1.6435-9/80781629_1237641613105991_3915976121920782336_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=CFKY9THGtrcAX9YyD-e&_nc_ht=scontent.frpr2-1.fna&oh=64ac2d38214d2937c1790015439312e0&oe=60C3847A";

arr[2]= new Image();
arr[2].src = "https://scontent.frpr2-1.fna.fbcdn.net/v/t1.6435-9/80405144_1237641543105998_1427213273068994560_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=NALQQMikiBgAX9J68nW&tn=bhSqRVIDy1rrqC8n&_nc_ht=scontent.frpr2-1.fna&oh=9dc3bb9b8d0bf6b824d7da1e3454dcf8&oe=60C4356A";

arr[3]= new Image();
arr[3].src = "https://scontent.frpr2-1.fna.fbcdn.net/v/t1.6435-9/72738240_1174572286079591_3162316529496752128_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=jKh54V0lGcUAX-F6oCi&_nc_oc=AQnnBHANyPQy6QGAei658c-aErfRAhjk0Lq_oJFP5HxiueKn5qg_oqEGX8kRUGqWHTo&_nc_ht=scontent.frpr2-1.fna&oh=9c158d0ff4d72b6ba17158496594036c&oe=60C55FF1";

arr[4]= new Image();
arr[4].src= "https://scontent.frpr2-1.fna.fbcdn.net/v/t1.6435-9/56691519_1034415750095246_4553474862080851968_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=OJC-URDCLJQAX9LOjur&_nc_ht=scontent.frpr2-1.fna&oh=e51daa16e7f74fd49fc826558ef511d8&oe=60C3A0CA";

arr[5]= new Image();
arr[5].src="https://scontent.frpr2-1.fna.fbcdn.net/v/t1.6435-9/55462358_1026481997555288_5619794007635787776_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=yTmjE9nyG2EAX9Ybwva&_nc_ht=scontent.frpr2-1.fna&oh=7d04d5ead083d4f601fa092fcee14d92&oe=60C5926C";

arr[6]= new Image();
arr[6].src="https://scontent.fnag5-1.fna.fbcdn.net/v/t1.6435-9/54279187_1018146558388832_1358091873293434880_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=gfLBE6D43W4AX_yvht2&_nc_ht=scontent.fnag5-1.fna&oh=a729a67471fb805563734c9653a96fa4&oe=60C534D1";

arr[7]= new Image();
arr[7].src="https://scontent.frpr2-1.fna.fbcdn.net/v/t1.6435-9/79387357_1237642303105922_7490852847500656640_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=Q7UmFV1EnTQAX8oCcN1&_nc_ht=scontent.frpr2-1.fna&oh=9e91a8e4df73f5ae92ce152b69a28283&oe=60C63628";
var i=0;

function slideshow(){
 document.getElementById("change-image").src= arr[i].src;
 i++;
 if(i==arr.length){
  i=0;
 }
 setTimeout(function(){ slideshow(); },2000);
}
 
var el_up = document.getElementById("GFG_UP");
			var el_down = document.getElementById("GFG_DOWN");
			el_up.innerHTML = "Click on the button to disable right click";
			
			function gfg_Run() {
				document.addEventListener('contextmenu',
						event => event.preventDefault());
			}	
/* Open the sidenav */
function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
  }
  
  /* Close/hide the sidenav */
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
  }	