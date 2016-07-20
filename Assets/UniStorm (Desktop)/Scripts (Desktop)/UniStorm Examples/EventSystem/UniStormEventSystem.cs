using UnityEngine;
using System.Collections;

public class UniStormEventSystem : MonoBehaviour 
{
	public UniStormWeatherSystem_C uniStormSystem;
	public GameObject uniStormObject;

	public int intToString = 0;
	public string variableName;

	public string stringToAlter;
	public int intToAlter;
	public float floatToAlter;

	public int eventType;
	public string tagName;

	public string code;

	//Grab the UniStorm System
	void Start () 
	{
		uniStormObject = GameObject.Find("UniStormSystemEditor");
		uniStormSystem = uniStormObject.GetComponent<UniStormWeatherSystem_C>(); 

		if (intToString == 0)
		{
			variableName = "weatherForecaster";
		}

		if (intToString == 1)
		{
			variableName = "temperature";
		}

		if (intToString == 2)
		{
			variableName = "minuteCounter";
		}

		if (intToString == 3)
		{
			variableName = "hourCounter";
		}

		if (intToString == 4)
		{
			variableName = "dayCounter";
		}
	}

	void Update () 
	{
		if (intToString == 0)
		{
			//uniStormSystem.weatherForecaster = intToAlter;
			//uniStormSystem.variableAsString = variableName;
			//uniStormSystem.variableAsString = intToAlter;

			//eval(code);
		}
	}
}
