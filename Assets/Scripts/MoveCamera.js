var speed : float;

function Update () {
	transform.Translate(speed*Time.deltaTime,0,0);
}