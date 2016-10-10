using UnityEngine;
using System.Collections;

public class Splash : MonoBehaviour {

	// Use this for initialization
    void Start () {
       
    }

    private bool stop = false;
    // Update is called once per frame
    void Update () {

        if(stop)
            return;

        GameObject.Find("TickTockRayUser").transform.position = new Vector3(25, 9, 74);

        Debug.DrawLine(GameObject.Find("Main Camera").transform.position, GameObject.Find("Main Camera").transform.position +
            GameObject.Find("Main Camera").transform.forward);

        if(Input.GetButtonDown("Fire1"))
        {
            this.gameObject.SetActive(false);

            stop = true;
        }
	
	}
}
