// Repeatedly play a sound at randomly chosen positions inside a sphere 
// with a given radius and the center at zero. The sound is played with
// a randomly chosen exponentially distributed time interval between
// the sound events.

var sound : AudioClip;
var meanTimeInterval : float;
var radius : float;
var minPitch : float;
var maxPitch : float;

private var currentInterval : float;
private var position : Vector3;

function Start() {
	StartCoroutine("PlaySound");
}

function PlaySound () {

	while ( true ) {
		
		// Sets the position to be somewhere inside a sphere
		// with a given radius and the center at this game object.
		position = Random.insideUnitSphere * radius;
		PlayAudioClip (sound, position);
		
		// The timeInterval to the next sound event is choosen from an exponential
		// distribution with a mean value meanTimeInterval.
		currentInterval = - meanTimeInterval*Mathf.Log(Random.value);
		yield WaitForSeconds(currentInterval);
	}

}

function PlayAudioClip (clip : AudioClip, position : Vector3) {

    var go = new GameObject ("One shot audio");
    var source : AudioSource = go.AddComponent(AudioSource);
	
    go.transform.position = position;
    source.clip = clip;
    source.spatialBlend = 1.0; // Play sound in 3D 
    source.pitch = Random.Range(minPitch, maxPitch);
    source.Play ();
    Destroy (go, clip.length/source.pitch);

}

function Update () {
}