using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;

[ExecuteInEditMode()] 
//[DrawGizmo (GizmoType.Selected)]

[CustomEditor(typeof(WeatherZoneExample_C))] 
public class WeatherZoneEditor_C : Editor {

	public string weatherType = "";
	public Vector3 size = new Vector3(10,10,10);
	public Color zoneColor = new Color(1, 0, 0, 0.5F);

	  enum WeatherTypeDropDown
		{
			Foggy = 1, 
			LightRainOrLightSnowWinterOnly = 2, 
			ThunderStormOrSnowStormWinterOnly = 3, 
			PartlyCloud1 = 4, 
			PartlyCloud2 = 5, 
			PartlyCloud3 = 6, 
			Clear1 = 7,
			Clear2 = 8, 
			Cloudy = 9, 
			ButterfliesSummerOnly = 10,
			MostlyCloudy = 11, 
			HeavyRainNoThunder = 12,  
			FallingLeavesFallOnly = 13
		}
		
		WeatherTypeDropDown editorWeatherType = WeatherTypeDropDown.PartlyCloud1;
	
		
 		public override void OnInspectorGUI () 
	{
		
		WeatherZoneExample_C self = (WeatherZoneExample_C)target;
    
    	//Time Number Variables
    	EditorGUILayout.LabelField("UniStorm Zone Weather System", EditorStyles.boldLabel);
		EditorGUILayout.LabelField("By: Black Horizon Studios", EditorStyles.label);
		EditorGUILayout.Space();
		EditorGUILayout.Space();

		
		EditorGUILayout.LabelField("Zone Weather Options", EditorStyles.boldLabel);
		editorWeatherType = (WeatherTypeDropDown)self.zoneWeather;
		editorWeatherType = (WeatherTypeDropDown)EditorGUILayout.EnumPopup("Zone Weather Type", editorWeatherType);
    	self.zoneWeather = (int)editorWeatherType;

		EditorGUILayout.Space();
		EditorGUILayout.Space();

		self.transform.localScale = EditorGUILayout.Vector3Field("Weather Zone Size", self.transform.localScale);
    	
		if (GUI.changed) 
		{ 
			EditorUtility.SetDirty(self); 
		}
    
    }    
 

}
