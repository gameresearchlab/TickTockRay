

	private var uniStormSystem : UniStormWeatherSystem_JS;
	private var uniStormObject : GameObject;

	var use12hourclock : boolean = false;

	var ClockText : Text;
	var DateText : Text;
	var TempText : Text;
	var WeatherImage : Image;
	var SeasonImage : Image;
	var MoonImage : Image;

	private var WeatherUpdateTimer : float;
	var WeatherUpdateSeconds : float = 30;

	var ClearWeatherIcon : Sprite;
	var MostlyClearWeatherIcon : Sprite;
	var PartlyCloudyWeatherIcon : Sprite;
	var MostlyCloudyWeatherIcon : Sprite;
	var LightRainWeatherIcon : Sprite;
	var HeavyRainWeatherIcon : Sprite;
	var ThunderStormsWeatherIcon : Sprite;
	var LightSnowWeatherIcon : Sprite;
	var HeavySnowWeatherIcon : Sprite;
	var FoggyWeatherIcon : Sprite;
	var WindyWeatherIcon : Sprite;

	var SpringIcon : Sprite;
	var SummerIcon : Sprite;
	var FallIcon : Sprite;
	var WinterIcon : Sprite;
	
	var MoonPhase1Icon : Sprite;
	var MoonPhase2Icon : Sprite;
	var MoonPhase3Icon : Sprite;
	var MoonPhase4Icon : Sprite;
	var MoonPhase5Icon : Sprite;
	var MoonPhase6Icon : Sprite;
	var MoonPhase7Icon : Sprite;
	var MoonPhase8Icon : Sprite;

	// Use this for initialization
	function Start () 
	{
		uniStormObject = GameObject.Find("UniStormSystemEditor");
		uniStormSystem = uniStormObject.GetComponent(UniStormWeatherSystem_JS); 

		WeatherUpdateTimer = WeatherUpdateSeconds - 0.25f;
	}


	function Update () 
	{
		if (!use12hourclock)
		{
			ClockText.text = uniStormSystem.hourCounter.ToString() + ":" + uniStormSystem.minuteCounter.ToString("00");
		}

		if (use12hourclock)
		{
			if (uniStormSystem.hourCounter <= 11)
			{
				ClockText.text = uniStormSystem.hourCounter.ToString() + ":" + uniStormSystem.minuteCounter.ToString("00") + " AM";
			}

			if (uniStormSystem.hourCounter == 0)
			{
				ClockText.text = (uniStormSystem.hourCounter + 12) + ":" + uniStormSystem.minuteCounter.ToString("00") + " AM";
			}

			if (uniStormSystem.hourCounter == 12)
			{
				ClockText.text = uniStormSystem.hourCounter.ToString() + ":" + uniStormSystem.minuteCounter.ToString("00") + " PM";
			}

			if (uniStormSystem.hourCounter >= 13)
			{
				ClockText.text = (uniStormSystem.hourCounter - 12) + ":" + uniStormSystem.minuteCounter.ToString("00") + " PM";
			}
		}

		DateText.text = uniStormSystem.monthCounter.ToString() + "/" + uniStormSystem.dayCounter.ToString() + "/" + uniStormSystem.yearCounter.ToString();
		//WeatherText.text = "Current Weather:" + "\n" + uniStormSystem.weatherString.ToString();
		//TempText.text = "Current Temperature:" + "\n" + uniStormSystem.temperature.ToString() + "°";
		TempText.text = uniStormSystem.temperature.ToString() + "°";

		WeatherUpdateTimer += Time.deltaTime;

		if (WeatherUpdateTimer >= WeatherUpdateSeconds)
		{
			UpdateIcons();
			WeatherUpdateTimer = 0;
		}
	}

	public function UpdateIcons ()
	{
		//Weather Icons
		if (uniStormSystem.weatherString == "Foggy")
		{
			WeatherImage.sprite = FoggyWeatherIcon;
		}
		
		if (uniStormSystem.weatherString == "Light Rain")
		{
			WeatherImage.sprite = LightRainWeatherIcon;
		}
		
		if (uniStormSystem.weatherString == "Heavy Rain & Thunder Storm")
		{
			WeatherImage.sprite = ThunderStormsWeatherIcon;
		}
		
		if (uniStormSystem.weatherString == "Heavy Rain (No Thunder)")
		{
			if (uniStormSystem.temperature > 32)
			{
				WeatherImage.sprite = HeavyRainWeatherIcon;
			}

			if (uniStormSystem.temperature <= 32)
			{
				WeatherImage.sprite = HeavySnowWeatherIcon;
			}
		}
		
		if (uniStormSystem.weatherString == "Light Snow")
		{
			WeatherImage.sprite = LightSnowWeatherIcon;
		}
		
		if (uniStormSystem.weatherString == "Heavy Snow")
		{
			WeatherImage.sprite = HeavySnowWeatherIcon;
		}
		
		if (uniStormSystem.weatherString == "Clear")
		{
			WeatherImage.sprite = ClearWeatherIcon;
		}
		
		if (uniStormSystem.weatherString == "Mostly Clear")
		{
			WeatherImage.sprite = MostlyClearWeatherIcon;
		}
		
		if (uniStormSystem.weatherString == "Partly Cloudy")
		{
			WeatherImage.sprite = PartlyCloudyWeatherIcon;
		}
		
		if (uniStormSystem.weatherString == "Mostly Cloudy")
		{
			WeatherImage.sprite = MostlyCloudyWeatherIcon;
		}
		
		if (uniStormSystem.weatherString == "Falling Fall Leaves")
		{
			WeatherImage.sprite = WindyWeatherIcon;
		}

		//Season Icons
		if (uniStormSystem.isSpring)
		{
			SeasonImage.sprite = SpringIcon;
		}

		if (uniStormSystem.isSummer)
		{
			SeasonImage.sprite = SummerIcon;
		}

		if (uniStormSystem.isFall)
		{
			SeasonImage.sprite = FallIcon;
		}

		if (uniStormSystem.isWinter)
		{
			SeasonImage.sprite = WinterIcon;
		}

		//Moon Icons
		if (uniStormSystem.moonObjectComponent.sharedMaterial == uniStormSystem.moonPhase1)
		{
			MoonImage.sprite = MoonPhase1Icon;
		}

		if (uniStormSystem.moonObjectComponent.sharedMaterial == uniStormSystem.moonPhase2)
		{
			MoonImage.sprite = MoonPhase2Icon;
		}

		if (uniStormSystem.moonObjectComponent.sharedMaterial == uniStormSystem.moonPhase3)
		{
			MoonImage.sprite = MoonPhase3Icon;
		}

		if (uniStormSystem.moonObjectComponent.sharedMaterial == uniStormSystem.moonPhase4)
		{
			MoonImage.sprite = MoonPhase4Icon;
		}

		if (uniStormSystem.moonObjectComponent.sharedMaterial == uniStormSystem.moonPhase5)
		{
			MoonImage.sprite = MoonPhase5Icon;
		}

		if (uniStormSystem.moonObjectComponent.sharedMaterial == uniStormSystem.moonPhase6)
		{
			MoonImage.sprite = MoonPhase6Icon;
		}

		if (uniStormSystem.moonObjectComponent.sharedMaterial == uniStormSystem.moonPhase7)
		{
			MoonImage.sprite = MoonPhase7Icon;
		}

		if (uniStormSystem.moonObjectComponent.sharedMaterial == uniStormSystem.moonPhase8)
		{
			MoonImage.sprite = MoonPhase8Icon;
		}
	}

