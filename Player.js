#pragma strict

function Start () {
	
}

function Update () {
	if(Input.GetMouseButton(0)){
   transform.position.z += 0.025;
   }
   if(Input.GetMouseButton(1)){
   transform.position.z -= 0.025;
  }

  transform.position.x += 0.025;


}
