using UnityEngine;
using System.Collections;

public class BlockCreateAndDestory : MonoBehaviour {

	const int MAX_HIT_DISTANCE = 10;

	public Transform[] block = new Transform[9];
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		Debug.DrawRay(this.transform.position, this.transform.up*-5);

        if (RotateInterface.getState() == RotateInterface.LEFT_CLICK || RotateInterface.getState() == RotateInterface.RIGHT_CLICK) {

			Ray ray = new Ray(transform.position, this.transform.up * -1);
			RaycastHit hit;

			if (Physics.Raycast(ray, out hit, MAX_HIT_DISTANCE)) {



                if (RotateInterface.getState() == RotateInterface.LEFT_CLICK) {
					Vector3 p = hit.transform.position;


					if (hit.transform.gameObject.name == "Quad")
						p += hit.normal / 2;
                   
					else
						p += hit.normal;


                    if(HotbarSelector.selectedBox == 9)
                    {
                        p.y += 1;
                        GameObject.Find("TickTockRayUser").transform.position = p;
                        return;
                    }

                  //  if (Vector3.Distance (p, this.transform.position) > 0.7f)
                  //  {

                        
                        Instantiate (block[HotbarSelector.selectedBox], p, Quaternion.identity);
                   // }
				}
                if (RotateInterface.getState() == RotateInterface.RIGHT_CLICK) {
                    if (hit.transform.gameObject.name == "Quad")
						Destroy (hit.transform.parent.gameObject);
                    else
						Destroy (hit.transform.gameObject);
				}

            }else{
                
                if(HotbarSelector.selectedBox == 9)
                {
                    HotbarSelector.selectedBox = 0;
                }else{
                    HotbarSelector.selectedBox += 1;
                }
            }
               
		}
	
	}
}
