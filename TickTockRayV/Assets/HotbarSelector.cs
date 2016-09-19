using UnityEngine;
using System.Collections;

public class HotbarSelector : MonoBehaviour {
    public Transform[] blockBoxes = new Transform[10];
    static public int selectedBox = 0;

    // Use this for initialization
    void Start () {
        selectBox ();
    }

    // Update is called once per frame
    void Update () {
        selectBox();
    }

    void selectBox () {
        for (int i = 0; i < 9; i++) {
            blockBoxes [i].gameObject.SetActive (false);
            if (i == selectedBox) 
                blockBoxes [i].gameObject.SetActive (true);
        }
    }
}
