using UnityEngine;
using System.Collections;

public class PlayerIO : MonoBehaviour
{

	public static PlayerIO currentPlayerIO;
	public float maxInteractDistance = 16;
	public byte selectedInventory = 1;


	// Use this for initialization
	void Start()
	{
		currentPlayerIO = this;


	}

	// Update is called once per frame
	void Update()
	{
		

		Debug.DrawRay(this.transform.position, this.transform.forward);

		int currentState = RotateInterface.getState();
		if (currentState == RotateInterface.LEFT_CLICK || currentState == RotateInterface.RIGHT_CLICK) {



			Ray ray = new Ray(this.transform.position + new Vector3(0f, 0f, 0.1f), this.transform.forward);
			RaycastHit hit;

			if (Physics.Raycast(ray, out hit, maxInteractDistance)) {

				Chunk chunk = hit.transform.GetComponent<Chunk>();

				if (chunk == null) {
					return;
				}

				if(currentState == RotateInterface.LEFT_CLICK) {

					Vector3 p = hit.point;
					p -= hit.normal / 4;
					chunk.SetBrick(0, p);

				} 


				if(currentState == RotateInterface.RIGHT_CLICK) {

					Vector3 p = hit.point;
					if(selectedInventory != 0) {
						p += hit.normal / 4;

						chunk.SetBrick(selectedInventory, p);


					}
				
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
