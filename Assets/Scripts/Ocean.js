// Volume fade up and down applied to a looped sound

var sound : AudioClip; // Assign an AudioClip in the GUI

var minLevel : float;  // Min volume level during fade
var maxLevel : float;  // Max volume level during fade
var upSlope  : float;  // Unit increase per seconds in the fade up process
var downSlope: float;  // Unit decrease per seconds in the fade down process

private var fadeUp : boolean;
private var level  : float;

function dB2a( dB : float ) : float
// Convert dB to absolute amplitude
// dB =   0 is converted to an amplitude of 1.0
// dB =  -6 is converted to 0.5
// dB = -12 is converted to 0.25, etc.
// dB < -90 is converted to 0.0
{
	if ( dB >   0 ) return 1.0;
	if ( dB < -90 ) return 0.0;
	return ( Mathf.Pow(10.0, dB/20.0) );
}

function Start(){
	GetComponent.<AudioSource>().clip = sound;
	GetComponent.<AudioSource>().loop = true;
	GetComponent.<AudioSource>().Play();
	fadeUp = false;
	level = maxLevel;
}

function FixedUpdate () {

	GetComponent.<AudioSource>().volume = level;	

	if ( fadeUp ) 
	{
		level = level + upSlope*Time.deltaTime;
		if ( level > maxLevel )
		{
			level = maxLevel;
			fadeUp = false;
		}
	}
	else 
	{
		level = level - downSlope*Time.deltaTime;
		if ( level < minLevel ) 
		{
			level = minLevel;
			fadeUp = true;
		}
	}

}