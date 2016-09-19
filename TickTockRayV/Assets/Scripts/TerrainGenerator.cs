using UnityEngine;
using System.Collections;

public class TerrainGenerator : MonoBehaviour {
	public Transform[] block = new Transform[5];
	const int CHUNK_SIZE = 50;

	// Use this for initialization
	void Start () {
		bool[] level = new bool[CHUNK_SIZE];
		for (int i = 0; i < CHUNK_SIZE; i++)
			level [i] = false;
		
		for (int i = 0; i < CHUNK_SIZE; i++) {
			for (int j = 0; j < CHUNK_SIZE; j++) {
				//Instantiate (block[0], new Vector3 (i, 0, j-0.5f), Quaternion.identity);
				//Instantiate (block[1], new Vector3 (i+CHUNK_SIZE, 0, j), Quaternion.identity);
				Instantiate (block [2], new Vector3 (i, 0, j + CHUNK_SIZE), Quaternion.identity);
				//Instantiate (block[3], new Vector3 (i+CHUNK_SIZE, 0, j+CHUNK_SIZE), Quaternion.identity);
				//if (Random.Range (0, 150000) == 1) {
                if (false) {
					if (level [0])
						level [0] = false;
					else
						level [0] = true;			
				} 

				if (Random.Range (0, 150) == 1) {
					if (level [1])
						level [1] = false;
					else
						level [1] = true;	
				}

				if (level [0])
					Instantiate (block [2], new Vector3 (i, 1.0f, j + CHUNK_SIZE), Quaternion.identity);
				if (level [0] && level [1])
					Instantiate (block [2], new Vector3 (i, 2.0f, j + CHUNK_SIZE), Quaternion.identity);
				//Instantiate (block [2], new Vector3 (i, 3f, j + CHUNK_SIZE), Quaternion.identity);


			}

			if (Random.Range(0, 3)==1) level [0] = false;

		}
		

	
	}
	
	// Update is called once per frame
	void Update () {
	
	}
}
