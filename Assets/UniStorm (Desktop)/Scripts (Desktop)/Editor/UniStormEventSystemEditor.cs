using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using UnityEditor;


[System.Serializable]
[CustomEditor(typeof(UniStormEventSystem))] 
public class UniStormEventSystemEditor : Editor 
{
	enum VariableToAlter
	{
		weather = 0,
		temperature = 1,
		minute = 2,
		hour = 3,
		day = 4
	}

	enum CustomEventType
	{
		_OnTrigger = 0,
		_OnCollision = 1,
		_Input = 2,
		_Codition
	}

	VariableToAlter editorVariableToAlter = VariableToAlter.weather;
	CustomEventType editorCustomEventType = CustomEventType._OnTrigger;

	public override void OnInspectorGUI () 
	{
		UniStormEventSystem self = (UniStormEventSystem)target;

		EditorGUILayout.LabelField("UniStorm Event System", EditorStyles.boldLabel);
		EditorGUILayout.LabelField("By: Black Horizon Studios", EditorStyles.label);
		EditorGUILayout.Space();


		editorVariableToAlter = (VariableToAlter)self.intToString;
		editorVariableToAlter = (VariableToAlter)EditorGUILayout.EnumPopup("Variable", editorVariableToAlter);
		self.intToString = (int)editorVariableToAlter;

		EditorGUILayout.Space();

		if (self.intToString == 0)
		{
			EditorGUILayout.LabelField("Type (int)", EditorStyles.label);

			EditorGUILayout.Space();

			self.intToAlter = EditorGUILayout.IntField ("Weather", self.intToAlter);
		}

		if (self.intToString == 1)
		{
			//EditorGUILayout.LabelField("Variable Type: int", EditorStyles.boldLabel);
			self.intToAlter = EditorGUILayout.IntField ("Temperature", self.intToAlter);
		}

		EditorGUILayout.Space();

		editorCustomEventType = (CustomEventType)self.eventType;
		editorCustomEventType = (CustomEventType)EditorGUILayout.EnumPopup("Event Type", editorCustomEventType);
		self.eventType = (int)editorCustomEventType;

		EditorGUILayout.Space();

		if (self.eventType == 0 || self.eventType == 1)
		{
			self.tagName = EditorGUILayout.TextField("Tag Name", self.tagName);
		}
	}
}
