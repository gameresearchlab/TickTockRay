using UnityEngine;
using System.Collections;

public class RotateInterface : MonoBehaviour {

	private static int state;
	public const int IDLE = 0;
	public const int RIGHT_HALF = 1;
	public const int RIGHT_CLICK = 2;
	public const int LEFT_HALF = 3;
	public const int LEFT_CLICK = 4;

	private float zClicked;
	private int framesToWait;
	private int framesWaited;

	//FOR DEBUG ONLY
	public static int click_count;

	// Use this for initialization
	void Start () {
		state = IDLE;
		framesToWait = 60;
		framesWaited = 0;
		zClicked = 0;
		click_count = 0;

	}
	
	// Update is called once per frame
	void Update () {

		float z = GameObject.Find ("Watch").transform.localRotation.eulerAngles.z;

		if(state == RIGHT_CLICK || state == LEFT_CLICK)
		{
			state = IDLE;
		}
		
		if(state != IDLE){
			framesWaited++;

			if(state == RIGHT_HALF && z > zClicked + 30)
			{
				state = RIGHT_CLICK;
				click_count++;
				framesWaited = 0;
			}else if(state == LEFT_HALF && z < zClicked - 30)
			{
				state = LEFT_CLICK;
				click_count++;
				framesWaited = 0;
			}

		}
			
		if(state == IDLE)
		{
			if(50 < z && z < 90){
				state = RIGHT_HALF;
				zClicked = z;
			}else if( 180 < z && z < 290){
				state = LEFT_HALF;
				zClicked = z;
			}
		}

		if(framesWaited == framesToWait){
			framesWaited = 0;
			state = IDLE;
		}
	}

	public static int getState(){
		return state;
	}
}
