
totaltime=0;
function select(obj){
	id = obj.getAttribute("id");
	father = document.getElementById("show");
	newchild = obj.cloneNode(true);
	newchild.setAttribute("onclick", "deselect(this)");
	obj.setAttribute("class", "selected");
	newchild.setAttribute("class", "chosen");
	time = prompt("how many time "+ obj.childNodes[0].childNodes[0].nodeValue+obj.childNodes[1].childNodes[0].nodeValue+" do you study" , "0");
	newchild.childNodes[0].childNodes[0].nodeValue = obj.childNodes[0].childNodes[0].nodeValue+ obj.childNodes[1].childNodes[0].nodeValue+":";
	newchild.childNodes[1].childNodes[0].nodeValue = time;
	father.appendChild(newchild);

	father=document.getElementById("score");
		totaltime=1*time+totaltime;
		shownode=document.createTextNode(totaltime);
		father.removeChild(father.childNodes[0]);
		father.appendChild(shownode);
	
}



function deselect(obj){
	nid = obj.getAttribute("id");
	father = obj.parentNode
	father.removeChild(obj);
	ref = document.getElementById(nid);
	ref.setAttribute("class", "free");

	child = obj.cloneNode(true);
	dt = child.childNodes[1].childNodes[0].nodeValue;
	father=document.getElementById("score");
		totaltime=totaltime-dt;
		shownode=document.createTextNode(totaltime);
		father.removeChild(father.childNodes[0]);
		father.appendChild(shownode);
}