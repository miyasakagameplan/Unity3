#pragma strict

var real : int = 0 ;


function Start () {
	
}

function Update () {

 //if(Input.GetKeyDown("down")){
 //bflg += 1;
 //}
 if(Input.GetMouseButtonDown(2)){
 real += 1;

 }
  switch (real){

   case 0:
  	   transform.position.y = 0;
   break;

   case 1:
  	   transform.position.y = -18.5;
   break;

   case 2:
  	   real = 0;
   break;

   }

}