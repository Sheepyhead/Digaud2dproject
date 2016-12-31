// Repeatedly play a sound at randomly chosen positions inside a sphere 
// with a given radius and the center at zero. The sound is played with
// a randomly chosen exponentially distributed time interval between
// the sound events.

var sound : AudioClip;
var meanTimeInterval : float;
var radius : float;

private var currentTime : float;
private var currentInterval : float;
private var nextTime : float;
private var position : Vector3;

function Start() {
	nextTime = 0;
}

function Update () {

	currentTime = Time.time;
	if ( currentTime >= nextTime ) {
	
		// Sets the position to be somewhere inside a sphere
		// with a given radius and the center at zero.
		position = Random.insideUnitSphere * radius;		
		PlayAudioClipAt(position);
		
		// The timeInterval to the next sound event is choosen from an exponential
		// distribution with a mean value meanTimeInterval.
		currentInterval = - meanTimeInterval*Mathf.Log(Random.value);
		nextTime = nextTime + currentInterval;
	}
}

function PlayAudioClipAt (position : Vector3) {

	var audio : AudioSource = GetComponent(AudioSource);
	var transform : Transform = GetComponent(Transform);
	
	transform.position = position;
	print("Position "+ transform.position.x + " " + transform.position.y + " " + transform.position.z);
	audio.spatialBlend = 1.0; // Play sound in 3D
	audio.clip = sound;
	audio.pitch = Random.Range(0.6, 1.4);
	audio.Play();

}