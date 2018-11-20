// JavaScript Document
function lo(){
	var h = document.getElementById("home");
	var h1 = document.getElementById("home1");
	var dl = document.getElementById("dl1");
	h1.style.transitionDelay='0s';
	h1.style.transform='scale(0)';
	h1.style.opacity='0';
	h1.style.transitionDuration='1s';
	h.style.transform='scale(1)';
	h.style.opacity='1';
	h.style.transitionDelay='0.5s';
	h.style.transitionDuration='1s';
}
function zc(){
	var h = document.getElementById("home");
	var h1 = document.getElementById("home1");
	var zc = document.getElementById("zc");
	h.style.transitionDelay='0s';
	h.style.transform='scale(0)';
	h.style.opacity='0';
	h.style.transitionDuration='1s';
	h1.style.transform='scale(1)';
	h1.style.opacity='1';
	h1.style.transitionDelay='0.5s';
	h1.style.transitionDuration='1s';	
}
function a(){
	var text = document.getElementById("text").value;
	var password = document.getElementById("password").value;
	if(text.length == 0){
		alert('用户名为空');
	}else if(password.length == 0){
		alert('密码为空');
		}//else{
//			alert('登陆成功');
//			}
}
function b(){
	var text = document.getElementById("text1").value;
	var password = document.getElementById("password1").value;
	if(text.length == 0){
		alert('用户名为空');
	}else if(password.length == 0){
		alert('密码为空');
		}//else{
//			alert('登陆成功');
//			}
}