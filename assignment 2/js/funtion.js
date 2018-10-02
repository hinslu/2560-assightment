
var totaltime=0; //set a var to count the totaltime
// select  function 
function select(obj){
	id = obj.getAttribute("id"); //get id from selected one
	father = document.getElementById("show"); //get element
	newchild = obj.cloneNode(true); //clone node 
	newchild.setAttribute("onclick", "deselect(this)"); //set attribute to the deselect 
	obj.setAttribute("class", "selected"); //set the class to the seleceted one 
	newchild.setAttribute("class", "chosen"); // set the class to the seleceted one
	time = prompt("how many time "+ obj.childNodes[0].childNodes[0].nodeValue+obj.childNodes[1].childNodes[0].nodeValue+" do you study" , "0");//get time
	newchild.childNodes[0].childNodes[0].nodeValue = obj.childNodes[0].childNodes[0].nodeValue+ obj.childNodes[1].childNodes[0].nodeValue+":"; //set value to the 1st clonenode's childnode
	newchild.childNodes[1].childNodes[0].nodeValue = time; //set value to the 2nd clonenode's childnode
	father.appendChild(newchild); //show the clonenode

    // claculate the totaltime when select 
	father=document.getElementById("score"); //get the last totaltime
		totaltime=1*time+totaltime; //claculate the totaltime
		shownode=document.createTextNode(totaltime); //set the value of the shownode
		father.removeChild(father.childNodes[0]);// remove the node before
		father.appendChild(shownode);// show the new node
	
}

//deselect function
function deselect(obj){
	nid = obj.getAttribute("id");//get id from deselected one
	father = obj.parentNode // set she parentnode of deselected one 
	father.removeChild(obj);// remove the deselected one 
	ref = document.getElementById(nid);// get element
	ref.setAttribute("class", "free");// reselect the class
// claculate the totaltime when deselect
	child = obj.cloneNode(true); // clone the node
	dt = child.childNodes[1].childNodes[0].nodeValue; //get the hour(s) of the deselect one 
	father=document.getElementById("score"); //get element
	totaltime=totaltime-dt; //calculate the totaltime
	shownode=document.createTextNode(totaltime);//set the value of the shownode
	father.removeChild(father.childNodes[0]);//remove the node before
	father.appendChild(shownode);//show the new node
}