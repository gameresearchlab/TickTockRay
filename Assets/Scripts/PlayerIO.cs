using UnityEngine;
using System.Collections;

public class PlayerIO : MonoBehaviour {

	public static PlayerIO currentPlayerIO;
	public float maxInteractDistance = 8;
	public byte selectedInventory = 0;
	public bool resetCamera = false;
	public Vector3 campos;


	// Use this for initialization
	void Start () {
		currentPlayerIO = this;


	}
	
	// Update is called once per frame
	void Update () {
		float z = GameObject.Find ("Watch").transform.localRotation.eulerAngles.z;

			//Ray ray = GetComponent<Camera>().ViewportPointToRay(new Vector3(0.5f,0.5f,0.5f));

		Ray ray = new Ray( GameObject.Find("Cursor").transform.position, Vector3.forward);
		Debug.DrawRay( GameObject.Find("Cursor").transform.position, Vector3.forward);

			RaycastHit hit;
			if (Physics.Raycast (ray,out hit, maxInteractDistance)) {
				Chunk chunk = hit.transform.GetComponent<Chunk>();
				if (chunk == null){
					return;
				}
				
			
				if ( z >= 220 && z <= 270){
					Vector3 p = hit.point;
					p -= hit.normal / 4;
					chunk.SetBrick(0, p);

				} 


				if ( z >= 45 && z <= 60) {
					Vector3 p = hit.point;
				if (selectedInventory != 0){
						p += hit.normal / 4;

						chunk.SetBrick(selectedInventory,p);
				}
				
			} 

//			if (Input.GetMouseButtonDown(2)) {
//					Vector3 p = hit.point;
//					p -= hit.normal / 4;
//					selectedInventory = chunk.GetByte(p);
//
//				} 

			}
	


}
}