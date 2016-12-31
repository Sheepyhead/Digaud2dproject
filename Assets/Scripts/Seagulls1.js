// Repeatedly play a sound with a given fixed time interval between
// the sound events.

var sound : AudioClip;     // AudioClip to be played
var timeInterval : float;  // Time interval in seconds between sound events

private var currentTime : float;
private var nextTime : float;

function Start() {
    nextTime = 0;	
}

function Update () {

    // Check if it is time for the next sound event
    currentTime = Time.time;
    if ( currentTime >= nextTime ) {
        GetComponent.<AudioSource>().PlayOneShot(sound);
        nextTime = nextTime + timeInterval;
        //print("Time "+ Time.time);
	}
}