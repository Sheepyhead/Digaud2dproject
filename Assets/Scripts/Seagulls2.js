// Repeatedly play a sound at randomly chosen positions inside a sphere 
// with a given radius and the center at zero. The sound is played with
// a randomly chosen time interval between the sound events.

var sound : AudioClip; // AudioClip to be played
var minTime : float;   // Minimum time interval in seconds between sound events
var maxTime : float;   // Maximum time interval in seconds between sound events
var radius : float;    // Radius of sphere in world units

private var currentTime : float;
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
        AudioSource.PlayClipAtPoint(sound, position);
		
        // The timeInterval to the next sound event is choosen randomly 
        // between minTime and maxTime.
        timeInterval = Random.Range(minTime, maxTime);
        nextTime = nextTime + timeInterval;
    }

}