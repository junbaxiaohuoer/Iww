// JavaScript Document
var x = 0;
var y = 0;
var z = 0;
var t = 0;
var t1 = 0;
var t2 = 0;
var t3 = 0;
function c(){
	var chilk = document.getElementById("close");
	var none = document.getElementById("yunfei");
	none.style.display='none';
}
function hiden(){
	x = x+1;
	var btn = document.getElementById("btn");
	var show = document.getElementById("hiden");
	var li = document.getElementById("li");
	
	if(x%2!=0){
	show.style.display = 'block';
	btn.value = "Destination＞＞＞＞▼"
	}else{
		show.style.display = 'none';
		btn.value = "Destination＞＞＞＞▲"
		}
}
function outer(){
	var btn = document.getElementById("btn");
	var show = document.getElementById("hiden");
	var obj_lis = document.getElementById("ul").getElementsByTagName("li");
    	for(i=0;i<obj_lis.length;i++){
        obj_lis[i].onclick = function(){
            btn.value = this.innerHTML;
			show.style.display='none';
        }
    }
}
function sopping(){
	y = y+1;
	var a = document.getElementById("a");
	var b = document.getElementById("b");
	var Popup = document.getElementById("Popup");
	if(y%2==0){
		Popup.style.display = 'none';
		a.style.display = 'inline-block'
		b.style.display = 'inline-block'
	}else{
	Popup.style.display = 'block';
	a.style.display = 'none'
	b.style.display = 'none'
	}
}
function show(){
	z = z+1;
	var hiden = document.getElementById("zhuti");
	var hiden1 = document.getElementById("zhuti1");
	
	if(z%2==0){
		hiden.style.display='block';
		hiden1.style.display='none';
		
	}else{
		hiden.style.display='none';
		hiden1.style.display='block';
	}
}
function one(){
	var once = document.getElementById("commodity_display");
		once.onmouseover = function (o){
			once.style.height='600px';
			once.style.transitionDuration='0.5s';
			once.style.boxShadow='0px 0px 20px #ccc';
		}
		once.onmouseout = function (p){
			once.style.height='380px';
			once.style.transitionDuration='0.5';
			once.style.boxShadow='none';
			}
}
function two(){
	var once = document.getElementById("commodity_display1");
		once.onmouseover = function (o){
			once.style.height='600px';
			once.style.transitionDuration='0.5s';
			once.style.boxShadow='0px 0px 20px #ccc';
		}
		once.onmouseout = function (p){
			once.style.height='380px';
			once.style.transitionDuration='0.5';
			once.style.boxShadow='none';
			}
}
function three(){
	var once = document.getElementById("commodity_display2");
		once.onmouseover = function (o){
			once.style.height='600px';
			once.style.transitionDuration='0.5s';
			once.style.boxShadow='0px 0px 20px #ccc';
		}
		once.onmouseout = function (p){
			once.style.height='380px';
			once.style.transitionDuration='0.5';
			once.style.boxShadow='none';
			}
}
function four(){
	var once = document.getElementById("commodity_display3");
		once.onmouseover = function (o){
			once.style.height='600px';
			once.style.transitionDuration='0.5s';
			once.style.boxShadow='0px 0px 20px #ccc';
		}
		once.onmouseout = function (p){
			once.style.height='380px';
			once.style.transitionDuration='0.5';
			once.style.boxShadow='none';
			}
}
function UP(){
	t = t + 1;
	var up = document.getElementById("up");
	var text = document.getElementById("text");
	text.value = t;
}
function UP1(){
	t1 = t1 + 1;
	var up = document.getElementById("up1");
	var text = document.getElementById("text1");
	text.value = t1;
}
function UP2(){
	t2 = t2 + 1;
	var up = document.getElementById("up2");
	var text = document.getElementById("text2");
	text.value = t2;
}
function UP3(){
	t3 = t3+ 1;
	var up = document.getElementById("up3");
	var text = document.getElementById("text3");
	text.value = t3;
}
function down(){
	var down = document.getElementById("down");
	var text = document.getElementById("text");
	if(text.value==0){
		down.style.backgroundColor='';
		}else{
			t = t - 1;
			text.value = t;
		}
}
function down1(){
	var down = document.getElementById("down1");
	var text = document.getElementById("text1");
	if(text.value==0){
		down.style.backgroundColor='';
		}else{
			t1 = t1 - 1;
			text.value = t1;
		}
}
function down2(){
	var down = document.getElementById("down2");
	var text = document.getElementById("text2");
	if(text.value==0){
		down.style.backgroundColor='';
		}else{
			t2 = t2 - 1;
			text.value = t2;
		}
}
function down3(){
	var down = document.getElementById("down3");
	var text = document.getElementById("text3");
	if(text.value==0){
		down.style.backgroundColor='';
		}else{
			t3 = t3 - 1;
			text.value = t3;
		}
}