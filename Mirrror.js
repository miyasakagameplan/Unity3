#pragma strict

var mir : int = 0 ;


function Start () {
	
}

function Update () {

 //if(Input.GetKeyDown("down")){
 //bflg += 1;
 //}
 if(Input.GetMouseButtonDown(2)){
 mir+= 1;

 }
  switch (mir){

   case 0:
  	   transform.position.y = -18.5;
   break;

   case 1:
  	   transform.position.y = 0;
   break;

   case 2:
  	   mir = 0;
   break;

   }

}