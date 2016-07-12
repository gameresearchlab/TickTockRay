using UnityEngine;
using System.Collections;

public class Menu : MonoBehaviour {


	private bool isHidden;

	// Use this for initialization
	void Start () {

		isHidden = true;
	}
	
	// Update is called once per frame
	void Update () {

		if(Input.GetButtonDown("Fire2")){

			if(isHidden)
			{
				show();	
			}else{
				hide();
			}

		}

		if(!isHidden){

			Transform watch = GameObject.Find("Watch").transform;

			Ray ray = new Ray(watch.position, watch.forward);
			RaycastHit hit;

			Physics.Raycast(ray, out hit);

			if(RotateInterface.getState() == RotateInterface.RIGHT_CLICK || RotateInterface.getState() == RotateInterface.LEFT_CLICK){
				if(hit.collider.gameObject.name == "Item1")
				{
					PlayerIO.currentPlayerIO.selectedInventory = 1;
				}else if(hit.collider.gameObject.name == "Item2")
				{
					PlayerIO.currentPlayerIO.selectedInventory = 2;
				}else if(hit.collider.gameObject.name == "Item3")
				{
					PlayerIO.currentPlayerIO.selectedInventory = 3;
				}else if(hit.collider.gameObject.name == "Item4")
				{
					PlayerIO.currentPlayerIO.selectedInventory = 4;
				}
			}

		}
		
	}
		

	void hide(){
		GameObject[] items = GameObject.FindGameObjectsWithTag("Menu");

		foreach (GameObject item in items){

			item.GetComponent<Renderer>().enabled = false;

		}

	}

	void show(){
		GameObject[] items = GameObject.FindGameObjectsWithTag("Menu");

		foreach (GameObject item in items){

			item.GetComponent<Renderer>().enabled = true;

		}

	}

}
