using UnityEngine;
using System.Collections;

public class RespawnAtFall : MonoBehaviour {

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (transform.position.y < -50) {
			transform.position = new Vector3 (45f, 4f, 54f);
		}
	
	}
}
