var sound : AudioClip;
var startTime : float;
var timeInterval : float;

function PlaySound() {
	GetComponent.<AudioSource>().Play();
}

function Start() {
	GetComponent.<AudioSource>().clip = sound;
	InvokeRepeating("PlaySound", startTime, timeInterval);
}

function Update () {
}

