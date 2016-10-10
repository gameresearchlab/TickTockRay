
using UnityEditor;
using UnityEngine;
public class UniStormMenu : MonoBehaviour {
	
		
    // Add UniStorm to the menu bar.
    [MenuItem ("Window/UniStorm/Create Weather System/Desktop/JavaScript")]
    static void InstantiateJavaScriptVersion () {
        
	   Selection.activeObject = SceneView.currentDrawingSceneView;
		
		GameObject codeInstantiatedPrefab = GameObject.Instantiate( AssetDatabase.LoadAssetAtPath("Assets/UniStorm (Desktop)/Prefabs (Desktop)/UniStormPrefabs/UniStormPrefab_JS_Basic.prefab", typeof(GameObject))) as GameObject;
		
       codeInstantiatedPrefab.name = "UniStormDesktopPrefab_JS_Basic";
	   codeInstantiatedPrefab.transform.position = new Vector3 (0, 0, 0);
       Selection.activeGameObject = codeInstantiatedPrefab;
    }
	
	[MenuItem ("Window/UniStorm/Create Weather System/Desktop/C#")]
    static void InstantiateCVersion () {	
	   Selection.activeObject = SceneView.currentDrawingSceneView;
		
		GameObject codeInstantiatedPrefab = GameObject.Instantiate( AssetDatabase.LoadAssetAtPath("Assets/UniStorm (Desktop)/Prefabs (Desktop)/UniStormPrefabs/UniStormPrefab_C_Basic.prefab", typeof(GameObject))) as GameObject;
		
       codeInstantiatedPrefab.name = "UniStormDesktopPrefab_C_Basic";
	   codeInstantiatedPrefab.transform.position = new Vector3 (0, 0, 0);
       Selection.activeGameObject = codeInstantiatedPrefab;
    }
	
	[MenuItem ("Window/UniStorm/Create Weather System/Mobile/JavaScript")]
	static void InstantiateJavaScriptVersion_Mobile () {
		
		Selection.activeObject = SceneView.currentDrawingSceneView;
		
		GameObject codeInstantiatedPrefab = GameObject.Instantiate( AssetDatabase.LoadAssetAtPath("Assets/UniStorm (Mobile)/Prefabs (Mobile)/UniStormMobilePrefabs/UniStormMobilePrefab_JS_Basic.prefab", typeof(GameObject))) as GameObject;
		
		codeInstantiatedPrefab.name = "UniStormMobilePrefab_JS_Basic";
		codeInstantiatedPrefab.transform.position = new Vector3 (0, 0, 0);
		Selection.activeGameObject = codeInstantiatedPrefab;
	}
	
	[MenuItem ("Window/UniStorm/Create Weather System/Mobile/C#")]
	static void InstantiateCVersion_Mobile () {	
		Selection.activeObject = SceneView.currentDrawingSceneView;
		
		GameObject codeInstantiatedPrefab = GameObject.Instantiate( AssetDatabase.LoadAssetAtPath("Assets/UniStorm (Mobile)/Prefabs (Mobile)/UniStormMobilePrefabs/UniStormMobilePrefab_C_Basic.prefab", typeof(GameObject))) as GameObject;
		
		codeInstantiatedPrefab.name = "UniStormMobilePrefab_C_Basic";
		codeInstantiatedPrefab.transform.position = new Vector3 (0, 0, 0);
		Selection.activeGameObject = codeInstantiatedPrefab;
	}

	[MenuItem ("Window/UniStorm/Create Climate Zone/C#")]
	static void InstantiateAClimateZoneC () {
		
		Selection.activeObject = SceneView.currentDrawingSceneView;
		//Camera sceneCam = SceneView.currentDrawingSceneView.camera;
		//Vector3 spawnPos = sceneCam.ViewportToWorldPoint(new Vector3(0.5f,0.5f,10f));
		
		GameObject codeInstantiatedPrefab = GameObject.Instantiate( AssetDatabase.LoadAssetAtPath("Assets/UniStorm (Desktop)/Prefabs (Desktop)/UniStorm Zones/Climate Zone C.prefab", typeof(GameObject))) as GameObject;
		//codeInstantiatedPrefab.transform.position = new Vector3 (spawnPos.x, spawnPos.y, spawnPos.z);
		codeInstantiatedPrefab.transform.position = new Vector3 (0, 0, 0);
		
		codeInstantiatedPrefab.name = "Climate Zone C";
	}

	[MenuItem ("Window/UniStorm/Create Weather Forecaster/Desktop/C#")]
	static void WeatherForewcaster () {	
		Selection.activeObject = SceneView.currentDrawingSceneView;
		
		GameObject codeInstantiatedPrefab = GameObject.Instantiate( AssetDatabase.LoadAssetAtPath("Assets/UniStorm (Desktop)/Prefabs (Desktop)/UniStorm Forecaster/Weather Forecaster.prefab", typeof(GameObject))) as GameObject;
		
		codeInstantiatedPrefab.name = "Weather Forecaster";
		codeInstantiatedPrefab.transform.position = new Vector3 (0, 0, 0);
		Selection.activeGameObject = codeInstantiatedPrefab;
	}
	
	[MenuItem ("Window/UniStorm/Create Weather Zone/JavaScript")]
    static void InstantiateWeatherZoneJS () {

		Selection.activeObject = SceneView.currentDrawingSceneView;
        //Camera sceneCam = SceneView.currentDrawingSceneView.camera;
        //Vector3 spawnPos = sceneCam.ViewportToWorldPoint(new Vector3(0.5f,0.5f,10f));
		
		GameObject codeInstantiatedPrefab = GameObject.Instantiate(AssetDatabase.LoadAssetAtPath("Assets/UniStorm (Desktop)/Prefabs (Desktop)/UniStorm Zones/Weather Zone JS.prefab", typeof(GameObject))) as GameObject;

		//codeInstantiatedPrefab.transform.position = new Vector3 (spawnPos.x, spawnPos.y, spawnPos.z);
		codeInstantiatedPrefab.transform.position = new Vector3 (0, 0, 0);
		
		codeInstantiatedPrefab.name = "WeatherZone_JS";
    }
	
	[MenuItem ("Window/UniStorm/Create Weather Zone/C#")]
    static void InstantiateWeatherZoneC () {
		
		Selection.activeObject = SceneView.currentDrawingSceneView;
        //Camera sceneCam = SceneView.currentDrawingSceneView.camera;
        //Vector3 spawnPos = sceneCam.ViewportToWorldPoint(new Vector3(0.5f,0.5f,10f));
		
		GameObject codeInstantiatedPrefab = GameObject.Instantiate( AssetDatabase.LoadAssetAtPath("Assets/UniStorm (Desktop)/Prefabs (Desktop)/UniStorm Zones/Weather Zone C.prefab", typeof(GameObject))) as GameObject;
		//codeInstantiatedPrefab.transform.position = new Vector3 (spawnPos.x, spawnPos.y, spawnPos.z);
		codeInstantiatedPrefab.transform.position = new Vector3 (0, 0, 0);
		
		codeInstantiatedPrefab.name = "WeatherZone_C";
    }
	

	/*
	[MenuItem ("Window/UniStorm/Create Time Event/JavaScript")]
    static void InstantiateTimeEventJS () {
		GameObject codeInstantiatedPrefab = GameObject.Instantiate( AssetDatabase.LoadAssetAtPath("Assets/UniStorm/Prefabs/UniStormPrefabs/TimeEvent_JS.prefab", typeof(GameObject))) as GameObject;
		codeInstantiatedPrefab.transform.position = new Vector3 (0, 0, 0);
		codeInstantiatedPrefab.name = "TimeEvent_JS";
    }
	
	[MenuItem ("Window/UniStorm/Create Time Event/C#")]
    static void InstantiateTimeEventC () {
		GameObject codeInstantiatedPrefab = GameObject.Instantiate( AssetDatabase.LoadAssetAtPath("Assets/UniStorm/Prefabs/UniStormPrefabs/TimeEvent_C.prefab", typeof(GameObject))) as GameObject;
		codeInstantiatedPrefab.transform.position = new Vector3 (0, 0, 0);
		codeInstantiatedPrefab.name = "TimeEvent_C";
    }
    */
	
   
    [MenuItem ("Window/UniStorm/Documentation/Home")]
    static void Home ()
    {
		Application.OpenURL("http://unistorm-weather-system.wikia.com/wiki/Home");
    }
	
	[MenuItem ("Window/UniStorm/Documentation/Documentation")]
	static void Introduction ()
	{
		Application.OpenURL("http://unistorm-weather-system.wikia.com/wiki/Documentation");
	}

	[MenuItem ("Window/UniStorm/Video Tutorials")]
	static void VideoTutorials ()
	{
		Application.OpenURL("https://www.youtube.com/playlist?list=PLlyiPBj7FznYmPW9NR6U0WKudaeFuAgKL");
	}
	
	[MenuItem ("Window/UniStorm/Documentation/Tutorials")]
    static void Tutorials ()
    {
		Application.OpenURL("http://unistorm-weather-system.wikia.com/wiki/Tutorials");
    }
	
	[MenuItem ("Window/UniStorm/Documentation/Code References")]
    static void CodeReferences ()
    {
		Application.OpenURL("http://unistorm-weather-system.wikia.com/wiki/Code_References");
    }
	
	[MenuItem ("Window/UniStorm/Documentation/Example Scripts")]
    static void ExampleScripts ()
    {
		Application.OpenURL("http://unistorm-weather-system.wikia.com/wiki/Example_Scripts");
    }
	
	[MenuItem ("Window/UniStorm/Documentation/Solutions to Possible Issues")]
    static void Solutions ()
    {
		Application.OpenURL("http://unistorm-weather-system.wikia.com/wiki/Solutions_to_Possible_Issues");
    }

	[MenuItem ("Window/UniStorm/Documentation/Realease Notes")]
    static void PatchNotes ()
    {
		Application.OpenURL("http://unistorm-weather-system.wikia.com/wiki/UniStorm_Patch_Notes");
    }

	[MenuItem ("Window/UniStorm/Beta Features/Test Beta Features")]
	static void DynamicWind ()
	{
		Application.OpenURL("http://unistorm-weather-system.wikia.com/wiki/Beta_Features");
	}

	[MenuItem ("Window/UniStorm/Documentation/Forums")]
	static void Forums ()
	{
		Application.OpenURL("http://forum.unity3d.com/threads/unistorm-v2-0-dynamic-day-night-weather-system-released-now-with-playable-demo.121021/");
	}
	
	[MenuItem ("Window/UniStorm/Customer Service")]
    static void CustomerService ()
    {
		Application.OpenURL("http://blackhorizonstudios.webs.com/customersupport.htm");
    }
	
}

/* 
	   Selection.activeObject = SceneView.currentDrawingSceneView;
       Camera sceneCam = SceneView.currentDrawingSceneView.camera;
       Vector3 spawnPos = sceneCam.ViewportToWorldPoint(new Vector3(0.5f,0.5f,10f));
		
	   GameObject codeInstantiatedPrefab = GameObject.Instantiate( Resources.LoadAssetAtPath("Assets/UniStorm/Prefabs/UniStormPrefabs/UniStormPrefab_JS_New.prefab", typeof(GameObject)), spawnPos, Quaternion.identity) as GameObject;
		
       //GameObject _go = Instantiate (Resources.Load ("Assets/UniStorm/Prefabs/UniStormPrefabs/UniStormPrefab_JS.prefab"), spawnPos, Quaternion.identity) as GameObject;
       codeInstantiatedPrefab.name = "UniStormPrefab_JS";
       Selection.activeGameObject = codeInstantiatedPrefab;
        //GameObject _go = Instantiate (Resources.Load ("Assets/UniStorm/Prefabs/UniStormPrefabs/UniStormPrefab_JS.prefab"), spawnPos, Quaternion.identity) as GameObject;
       */