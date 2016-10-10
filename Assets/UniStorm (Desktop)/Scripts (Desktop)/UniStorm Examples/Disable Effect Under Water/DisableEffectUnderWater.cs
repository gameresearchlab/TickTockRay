using UnityEngine;
using System.Collections;
using UnityStandardAssets.ImageEffects;

public class DisableEffectUnderWater : MonoBehaviour 
{
	
	public SunShafts _SunShaftsEffect;
	public string TagThatDisables = "Water";
	
	void OnTriggerEnter(Collider other) 
	{
		if (other.gameObject.tag == TagThatDisables)
		{
			//On trigger with water, disable Sun Shafts Image Effect
			_SunShaftsEffect.enabled = false;
		}
	}

	void OnTriggerExit(Collider other) 
	{
		if (other.gameObject.tag == TagThatDisables)
		{
			//On trigger with water, enable Sun Shafts Image Effect
			_SunShaftsEffect.enabled = true;
		}
	}
}
