using UnityEngine;
using System.Collections;

public class NodGesture : MonoBehaviour {
    
    public const int IDLE = 0;
    public const int NOD = 3;

    private static bool NOD_UP = false;
    private float time = 0.0f;

    private static float r;

	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {

        if(NOD_UP)
        {
            time += Time.deltaTime;
        }

        if(time >= 1.0f)
        {
            time = 0.0f;
            NOD_UP = false;
        }

        float rotation = this.transform.rotation.eulerAngles.x;
        r = rotation;
        // If rotation above certain, NOD_UP
        // If rotation below certain, NOD_DOWN
        if(rotation >= 45 && rotation <= 130)
            NOD_UP = true;

	}

    public static int getState()
    {
        if(NOD_UP && (0 <= r && r <= 5) && (350 <= r && r <= 360))
        {
            NOD_UP  = false;
            return NOD;
        }
        else
            return IDLE;
    }
}