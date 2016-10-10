//UniStorm Weather System Editor JavaScript Version 2.1.3 @ Copyright
//Black Horizon Studios

@CustomEditor (UniStormWeatherSystem_JS)
class UniStormEditor_JS extends Editor {

	  enum StartTimeDropDown 
	  {
	  	Morning = 1, 
	  	Day = 2, 
	  	Evening = 3, 
	  	Night = 4
	  }
	  
	  //Spring Weather Odds
	  enum WeatherChanceDropDown1
	  {
	  	_20 = 20, 
	  	_40 = 40, 
	  	_60 = 60, 
	  	_80 = 80
	  }
	  
	  //Summer Weather Odds
	   enum WeatherChanceDropDown2
	  {
	  	_20 = 20, 
	  	_40 = 40, 
	  	_60 = 60, 
	  	_80 = 80
	  }
	  
	  //Fall Weather Odds
	   enum WeatherChanceDropDown3
	  {
	  	_20 = 20, 
	  	_40 = 40, 
	  	_60 = 60, 
	  	_80 = 80
	  }
	  
	  //Winter Weather Odds
	   enum WeatherChanceDropDown4
	  {
	  	_20 = 20, 
	  	_40 = 40, 
	  	_60 = 60, 
	  	_80 = 80
	  }
	  
	  enum MonthDropDown
		{
			January = 1,
			February = 2,
			March = 3,
			April = 4,
			May = 5,
			June = 6,
			July = 7,
			August = 8,
			September = 9,
			October = 10,
			November = 11,
			December = 12
	    }
	  
	  enum WeatherTypeDropDown
	  {
		Foggy = 1, 
		LightRainOrLightSnowWinterOnly = 2, 
		ThunderStormOrSnowStormWinterOnly = 3, 
		PartlyCloudy = 4, 
		//PartlyCloud2 = 5, 
		//PartlyCloud3 = 6, 
		MostlyClear = 7,
		Sunny = 8, 
		//Cloudy = 9, 
		LightningBugsSummerOnly = 10,
		MostlyCloudy = 11, 
		HeavyRainNoThunder = 12,  
		FallingLeavesFallOnly = 13
	  }
	  
	   enum MoonPhaseDropDown
		{
			NewMoon = 1,
			WaxingCresent = 2,
			FirstQuarter = 3,
			WaxingGibbous = 4,
			FullMoon = 5,
			WaningGibbous = 6,
			ThirdQuater = 7,
			WaningCresent = 8
		}
		
	   enum FogModeDropDown
	   {
	    	linear = 1,
	    	exponential = 2,
	    	exp2 = 3
	   }
		
	   enum CloudDensityDropDown
	   {
	    	low = 1,
	    	high = 2
	   }
	   
	   enum DayShadowTypeDropDown
	   {
	    	Hard = 1,
	    	Soft = 2
	   }
	   
	   enum NightShadowTypeDropDown
	   {
	    	Hard = 1,
	    	Soft = 2
	   }
	   
	   enum LightningShadowTypeDropDown
	   {
	    	Hard = 1,
	    	Soft = 2
	   }
	   
	   enum CloudTypeDropDown
		{
			Dynamic = 1,
			NonDynamic = 2
		}
	
		enum TemperatureDropDown
		{
			Fahrenheit = 1,
			Celsius = 2
		}
		
		enum CalendarDropDown
	   {
	    	Standard = 1,
	    	Custom = 2
	   }
	   
	   enum GenerateDateAndTime
	   {
		Yes = 1,
		No = 2
	   }
	   
	   enum DayHourDropDown
		{
			_0 = 0,
			_1,
			_2,
			_3,
			_4,
			_5,
			_6,
			_7,
			_8,
			_9,
			_10,
			_11,
			_12,
			_13,
			_14,
			_15,
			_16,
			_17,
			_18,
			_19,
			_20,
			_21,
			_22,
			_23
		}

		enum NightHourDropDown
		{
			_0 = 0,
			_1,
			_2,
			_3,
			_4,
			_5,
			_6,
			_7,
			_8,
			_9,
			_10,
			_11,
			_12,
			_13,
			_14,
			_15,
			_16,
			_17,
			_18,
			_19,
			_20,
			_21,
			_22,
			_23
		}
		
		enum StartTimeNew
	    {
			_0 = 0,
			_1,
			_2,
			_3,
			_4,
			_5,
			_6,
			_7,
			_8,
			_9,
			_10,
			_11,
			_12,
			_13,
			_14,
			_15,
			_16,
			_17,
			_18,
			_19,
			_20,
			_21,
			_22,
			_23
	    }
	
	  //public StartTimeDropDown : editorStartTime = StartTimeDropDown.Day;
	  var editorStartTime = StartTimeDropDown.Day;
	  var editorWeatherChance1 = WeatherChanceDropDown1._40;
	  var editorWeatherChance2 = WeatherChanceDropDown2._40;
	  var editorWeatherChance3 = WeatherChanceDropDown3._40;
	  var editorWeatherChance4 = WeatherChanceDropDown4._40;
	  var editorMonth = MonthDropDown.January;
	  var editorWeatherType = WeatherTypeDropDown.PartlyCloudy;
	  var editorMoonPhase = MoonPhaseDropDown.FullMoon;
	  var editorCalendarType = CalendarDropDown.Standard;
	  
	  var editorFogMode = FogModeDropDown.linear;
	  var editorCloudDensity = CloudDensityDropDown.high;
	  
	  var editorDayShadowType = DayShadowTypeDropDown.Hard;
	  var editorNightShadowType = NightShadowTypeDropDown.Hard;
	  var editorLightningShadowType = LightningShadowTypeDropDown.Hard;
	  
	  var editorCloudType = CloudTypeDropDown.Dynamic;
	  var editorTemperature = TemperatureDropDown.Fahrenheit;
	  
	  var editorDayHour = DayHourDropDown._6;
	  var editorNightHour = NightHourDropDown._18;
	  var editorStartTimeNew = StartTimeNew._18;
	  
	  var editorGenerateDateAndTime = GenerateDateAndTime.Yes;
	   
	  var showAdvancedOptions : boolean = true;
  	  var confirmationToGenerate : boolean = false;
  	  
  	  var TabNumberProp : SerializedProperty;
	var TabString : String[] = ["Climate Options", "Time Options", "Weather Options", "Wind Options", "Atmosphere Options", "Fog Options", "Lightning Options", "Temperature Options", "Sun Options", "Moon Options", "Precipitation Options", "GUI Options", "Sound Manager Options", "Color Options", "Object Options", "Show All Options"];

	function OnEnable () 
	{
		//Int Serialized Properties
		TabNumberProp = serializedObject.FindProperty ("TabNumber");
	}

    function OnInspectorGUI () 
    {
   	 	serializedObject.Update ();
    
    	EditorGUILayout.LabelField("UniStorm Weather System", EditorStyles.boldLabel);
		EditorGUILayout.LabelField("By: Black Horizon Studios", EditorStyles.label);
		EditorGUILayout.Space();
		EditorGUILayout.Space();

		EditorGUILayout.HelpBox("Current Time: " + target.hourCounter + ":" + target.minuteCounter.ToString("00"), MessageType.None, true);
		EditorGUILayout.HelpBox("Date: " + target.monthCounter + "/" + target.dayCounter + "/" + target.yearCounter, MessageType.None, true);

		if (target.calendarType == 1)
		{
			EditorGUILayout.HelpBox("Day of the Week: " + target.UniStormDate.DayOfWeek, MessageType.None, true);
		}

		EditorGUILayout.HelpBox("Current Weather: " + target.weatherString, MessageType.None, true);

		if (target.temperatureType == 1)
		{
			EditorGUILayout.HelpBox("Current Temperature: " + target.temperature + " °F", MessageType.None, true);
		}

		if (target.temperatureType == 2)
		{
			EditorGUILayout.HelpBox("Current Temperature: " + target.temperature + " °C", MessageType.None, true);
		}

		EditorGUILayout.Space();
		EditorGUILayout.Space();


		TabNumberProp.intValue = GUILayout.SelectionGrid (TabNumberProp.intValue, TabString, 2);

		EditorGUILayout.Space();
		EditorGUILayout.Space();

		if(TabNumberProp.intValue == 15 && GUILayout.Button("Generate Climate"))
		{
			confirmationToGenerate = !confirmationToGenerate;
		}

		

		if (TabNumberProp.intValue == 0 || confirmationToGenerate && TabNumberProp.intValue == 15)
		{
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Generate Climate will randomize several UniStorm settings to generate a climate for you. This includeds Weather Odds, Min and Max Temperautes (as well as calculating your seasonal averages), Starting Time, Date, Starting Weather, Moon Phases, and more. This can be useful for testing randomized settings or even generating a climate for your games. The Presets all use real world data (excluding the Random Preset) to give you a well rounded generated climate of that type.", MessageType.None, true);
			}
			
			EditorGUILayout.HelpBox("Generating a new climate will change your current settings. This process cannot be undone. However, you can always reset to the default settings we used with our demos.", MessageType.Warning, true);

			EditorGUILayout.Space();
			EditorGUILayout.Space();
			
			editorGenerateDateAndTime = target.generateDateAndTime;
			editorGenerateDateAndTime = EditorGUILayout.EnumPopup("Generate Additional Factors", editorGenerateDateAndTime);
	    	target.generateDateAndTime = editorGenerateDateAndTime;
	    	
	    	if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Generate Additional Factors will randomly generate your Starting Time, Date, Weather, and Moon Phase. This is useful to test out various factors with UniStorm without have to set everything manually.", MessageType.None, true);
			}

			if(GUILayout.Button("Random"))
			{
				if (target.generateDateAndTime == 1)
				{
					target.startTimeHour = Random.Range(0, 24);
					target.startTimeMinute = Random.Range(0, 60);
					target.dayCounter = Random.Range(1, 30);
					target.monthCounter = Random.Range(1, 13);
					target.yearCounter = Random.Range(1, 3000);
					target.weatherForecaster = Random.Range(1, 14);
					target.moonPhaseCalculator = Random.Range(0, 9);
				}

				if (target.temperatureType == 1)
				{
					target.minSpringTemp = Random.Range(35, 45);
					target.maxSpringTemp = Random.Range(46, 60);
					target.startingSpringTemp = (target.minSpringTemp + target.maxSpringTemp) / 2;
					
					target.minSummerTemp = Random.Range(70, 80);
					target.maxSummerTemp = Random.Range(81, 115);
					target.startingSummerTemp = (target.minSummerTemp + target.maxSummerTemp) / 2;
					
					target.minFallTemp = Random.Range(35, 45);
					target.maxFallTemp = Random.Range(46, 60);
					target.startingFallTemp = (target.minFallTemp + target.maxFallTemp) / 2;
					
					target.minWinterTemp = Random.Range(-25, 0);
					target.maxWinterTemp = Random.Range(1, 40);
					target.startingWinterTemp = (target.minWinterTemp + target.maxWinterTemp) / 2;
				}
				
				if (target.temperatureType == 2)
				{
					target.minSpringTemp = ((Random.Range(35, 45)) - 32) * 5/9;
					target.maxSpringTemp = ((Random.Range(46, 60)) - 32) * 5/9;
					target.startingSpringTemp = (target.minSpringTemp + target.maxSpringTemp) / 2;
					
					target.minSummerTemp = ((Random.Range(70, 80)) - 32) * 5/9;
					target.maxSummerTemp = ((Random.Range(81, 115)) - 32) * 5/9;
					target.startingSummerTemp = (target.minSummerTemp + target.maxSummerTemp) / 2;
					
					target.minFallTemp = ((Random.Range(35, 45)) - 32) * 5/9;
					target.maxFallTemp = ((Random.Range(46, 60)) - 32) * 5/9;
					target.startingFallTemp = (target.minFallTemp + target.maxFallTemp) / 2;
					
					target.minWinterTemp = ((Random.Range(-25, 0)) - 32) * 5/9;
					target.maxWinterTemp = ((Random.Range(1, 40)) - 32) * 5/9;
					target.startingWinterTemp = (target.minWinterTemp + target.maxWinterTemp) / 2;
				}
			}

			EditorGUILayout.HelpBox("A Random Climate will generate a random climate with no real world data. Everything is completely randomized, while still being realistic. This can give you very unique results which you can then alter how you'd like.", MessageType.None, true);

			EditorGUILayout.Space();
			EditorGUILayout.Space();

			if(GUILayout.Button("Rainforest"))
			{
				if (target.generateDateAndTime == 1)
				{
					target.startTimeHour = Random.Range(0, 24);
					target.startTimeMinute = Random.Range(0, 60);
					target.dayCounter = Random.Range(1, 30);
					target.monthCounter = Random.Range(1, 13);
					target.yearCounter = Random.Range(1, 3000);
					target.weatherForecaster = Random.Range(1, 14);
					target.moonPhaseCalculator = Random.Range(0, 9);
				}

				target.weatherChanceSpring = 80;
				target.weatherChanceSummer = 80;
				target.weatherChanceFall = 80;
				target.weatherChanceWinter = 80;

				if (target.temperatureType == 1)
				{
					target.minSpringTemp = Random.Range(75, 80);
					target.maxSpringTemp = Random.Range(80, 85);
					target.startingSpringTemp = (target.minSpringTemp + target.maxSpringTemp) / 2;
					
					target.minSummerTemp = Random.Range(80, 85);
					target.maxSummerTemp = Random.Range(85, 93);
					target.startingSummerTemp = (target.minSummerTemp + target.maxSummerTemp) / 2;
					
					target.minFallTemp = Random.Range(75, 80);
					target.maxFallTemp = Random.Range(80, 85);
					target.startingFallTemp = (target.minFallTemp + target.maxFallTemp) / 2;
					
					target.minWinterTemp = Random.Range(68, 70);
					target.maxWinterTemp = Random.Range(70, 75);
					target.startingWinterTemp = (target.minWinterTemp + target.maxWinterTemp) / 2;
				}
				
				if (target.temperatureType == 2)
				{
					target.minSpringTemp = ((Random.Range(75, 80)) - 32) * 5/9;
					target.maxSpringTemp = ((Random.Range(80, 85)) - 32) * 5/9;
					target.startingSpringTemp = (target.minSpringTemp + target.maxSpringTemp) / 2;
					
					target.minSummerTemp = ((Random.Range(80, 85)) - 32) * 5/9;
					target.maxSummerTemp = ((Random.Range(85, 93)) - 32) * 5/9;
					target.startingSummerTemp = (target.minSummerTemp + target.maxSummerTemp) / 2;
					
					target.minFallTemp = ((Random.Range(75, 80)) - 32) * 5/9;
					target.maxFallTemp = ((Random.Range(80, 85)) - 32) * 5/9;
					target.startingFallTemp = (target.minFallTemp + target.maxFallTemp) / 2;
					
					target.minWinterTemp = ((Random.Range(68, 70)) - 32) * 5/9;
					target.maxWinterTemp = ((Random.Range(70, 75)) - 32) * 5/9;
					target.startingWinterTemp = (target.minWinterTemp + target.maxWinterTemp) / 2;
				}
			}

			EditorGUILayout.HelpBox("The Rainforest Preset will generate a random Rainforest like Climate according to real world data.\n\nThe Rainforest climate consists of high odds of precipitation evenly distributed throughout the year. The yearly average temperature is relatively warm. It ralely exceeds 90° during the summer months and rarely falls below 68° during the winter.\n\nAfter your climate has been generated, you can tweak the settings to your liking.", MessageType.None, true);

			EditorGUILayout.Space();
			EditorGUILayout.Space();

			if(GUILayout.Button("Desert"))
			{
				if (target.generateDateAndTime == 1)
				{
					target.startTimeHour = Random.Range(0, 24);
					target.startTimeMinute = Random.Range(0, 60);
					target.dayCounter = Random.Range(1, 30);
					target.monthCounter = Random.Range(1, 13);
					target.yearCounter = Random.Range(1, 3000);
					target.weatherForecaster = Random.Range(1, 14);
					target.moonPhaseCalculator = Random.Range(0, 9);
				}

				target.weatherChanceSpring = 20;
				target.weatherChanceSummer = 20;
				target.weatherChanceFall = 20;
				target.weatherChanceWinter = 20;

				if (target.temperatureType == 1)
				{
					target.minSpringTemp = Random.Range(70, 85);
					target.maxSpringTemp = Random.Range(85, 90);
					target.startingSpringTemp = (target.minSpringTemp + target.maxSpringTemp) / 2;
					
					target.minSummerTemp = Random.Range(90, 95);
					target.maxSummerTemp = Random.Range(100, 120);
					target.startingSummerTemp = (target.minSummerTemp + target.maxSummerTemp) / 2;
					
					target.minFallTemp = Random.Range(70, 85);
					target.maxFallTemp = Random.Range(85, 90);
					target.startingFallTemp = (target.minFallTemp + target.maxFallTemp) / 2;
					
					target.minWinterTemp = Random.Range(0, 50);
					target.maxWinterTemp = Random.Range(50, 60);
					target.startingWinterTemp = (target.minWinterTemp + target.maxWinterTemp) / 2;
				}
				
				if (target.temperatureType == 2)
				{
					target.minSpringTemp = ((Random.Range(70, 85)) - 32) * 5/9;
					target.maxSpringTemp = ((Random.Range(85, 90)) - 32) * 5/9;
					target.startingSpringTemp = (target.minSpringTemp + target.maxSpringTemp) / 2;
					
					target.minSummerTemp = ((Random.Range(90, 95)) - 32) * 5/9;
					target.maxSummerTemp = ((Random.Range(100, 120)) - 32) * 5/9;
					target.startingSummerTemp = (target.minSummerTemp + target.maxSummerTemp) / 2;
					
					target.minFallTemp = ((Random.Range(70, 85)) - 32) * 5/9;
					target.maxFallTemp = ((Random.Range(85, 90)) - 32) * 5/9;
					target.startingFallTemp = (target.minFallTemp + target.maxFallTemp) / 2;
					
					target.minWinterTemp = ((Random.Range(0, 50)) - 32) * 5/9;
					target.maxWinterTemp = ((Random.Range(50, 60)) - 32) * 5/9;
					target.startingWinterTemp = (target.minWinterTemp + target.maxWinterTemp) / 2;
				}
			}

			EditorGUILayout.HelpBox("The Desert Preset will generate a random Desert like Climate according to real world data.\n\nThe Desert climate consists of very low odds of precipitation throughout the year. The average temperature is very hot duirng the Summer, but can be very cold during the Winter. Temperatures can often exceed 100° during the summer months and fall as cold as 0° during the winter.\n\nAfter your climate has been generated, you can tweak the settings to your liking.", MessageType.None, true);

			EditorGUILayout.Space();

			if(GUILayout.Button("Mountainous"))
			{
				if (target.generateDateAndTime == 1)
				{
					target.startTimeHour = Random.Range(0, 24);
					target.startTimeMinute = Random.Range(0, 60);
					target.dayCounter = Random.Range(1, 30);
					target.monthCounter = Random.Range(1, 13);
					target.yearCounter = Random.Range(1, 3000);
					target.weatherForecaster = Random.Range(1, 14);
					target.moonPhaseCalculator = Random.Range(0, 9);
				}

				target.weatherChanceSpring = 60;
				target.weatherChanceSummer = 60;
				target.weatherChanceFall = 60;
				target.weatherChanceWinter = 60;

				if (target.temperatureType == 1)
				{
					target.minSpringTemp = Random.Range(45, 55);
					target.maxSpringTemp = Random.Range(55, 70);
					target.startingSpringTemp = (target.minSpringTemp + target.maxSpringTemp) / 2;
					
					target.minSummerTemp = Random.Range(70, 90);
					target.maxSummerTemp = Random.Range(90, 96);
					target.startingSummerTemp = (target.minSummerTemp + target.maxSummerTemp) / 2;
					
					target.minFallTemp = Random.Range(40, 50);
					target.maxFallTemp = Random.Range(50, 65);
					target.startingFallTemp = (target.minFallTemp + target.maxFallTemp) / 2;
					
					target.minWinterTemp = Random.Range(-30, 10);
					target.maxWinterTemp = Random.Range(10, 30);
					target.startingWinterTemp = (target.minWinterTemp + target.maxWinterTemp) / 2;
				}
				
				if (target.temperatureType == 2)
				{
					target.minSpringTemp = ((Random.Range(45, 55)) - 32) * 5/9;
					target.maxSpringTemp = ((Random.Range(55, 70)) - 32) * 5/9;
					target.startingSpringTemp = (target.minSpringTemp + target.maxSpringTemp) / 2;
					
					target.minSummerTemp = ((Random.Range(70, 90)) - 32) * 5/9;
					target.maxSummerTemp = ((Random.Range(90, 96)) - 32) * 5/9;
					target.startingSummerTemp = (target.minSummerTemp + target.maxSummerTemp) / 2;
					
					target.minFallTemp = ((Random.Range(40, 50)) - 32) * 5/9;
					target.maxFallTemp = ((Random.Range(50, 65)) - 32) * 5/9;
					target.startingFallTemp = (target.minFallTemp + target.maxFallTemp) / 2;
					
					target.minWinterTemp = ((Random.Range(-30, 10)) - 32) * 5/9;
					target.maxWinterTemp = ((Random.Range(10, 30)) - 32) * 5/9;
					target.startingWinterTemp = (target.minWinterTemp + target.maxWinterTemp) / 2;
				}
			}

			EditorGUILayout.HelpBox("The Mountainous Preset will generate a random Mountainous like Climate according to real world data. \n\nThe Mountainous climate consists of medium to high odds of precipitation throughout the year. The average temperature is relatively mild during the Summer and very cold during the Winter. Temperatures can rarely exceed 86° during the summer months and fall as cold as -22° during the winter.\n\nAfter your climate has been generated, you can tweak the settings to your liking.", MessageType.None, true);

			EditorGUILayout.Space();

			if(GUILayout.Button("Grassland"))
			{
				if (target.generateDateAndTime == 1)
				{
					target.startTimeHour = Random.Range(0, 24);
					target.startTimeMinute = Random.Range(0, 60);
					target.dayCounter = Random.Range(1, 30);
					target.monthCounter = Random.Range(1, 13);
					target.yearCounter = Random.Range(1, 3000);
					target.weatherForecaster = Random.Range(1, 14);
					target.moonPhaseCalculator = Random.Range(0, 9);
				}
				
				target.weatherChanceSpring = 60;
				target.weatherChanceSummer = 60;
				target.weatherChanceFall = 20;
				target.weatherChanceWinter = 20;
				
				if (target.temperatureType == 1)
				{
					target.minSpringTemp = Random.Range(50, 85);
					target.maxSpringTemp = Random.Range(85, 90);
					target.startingSpringTemp = (target.minSpringTemp + target.maxSpringTemp) / 2;
					
					target.minSummerTemp = Random.Range(90, 95);
					target.maxSummerTemp = Random.Range(95, 115);
					target.startingSummerTemp = (target.minSummerTemp + target.maxSummerTemp) / 2;
					
					target.minFallTemp = Random.Range(50, 85);
					target.maxFallTemp = Random.Range(85, 90);
					target.startingFallTemp = (target.minFallTemp + target.maxFallTemp) / 2;
					
					target.minWinterTemp = Random.Range(30, 40);
					target.maxWinterTemp = Random.Range(40, 50);
					target.startingWinterTemp = (target.minWinterTemp + target.maxWinterTemp) / 2;
				}
				
				if (target.temperatureType == 2)
				{
					target.minSpringTemp = ((Random.Range(50, 85)) - 32) * 5/9;
					target.maxSpringTemp = ((Random.Range(85, 90)) - 32) * 5/9;
					target.startingSpringTemp = (target.minSpringTemp + target.maxSpringTemp) / 2;
					
					target.minSummerTemp = ((Random.Range(90, 95)) - 32) * 5/9;
					target.maxSummerTemp = ((Random.Range(95, 115)) - 32) * 5/9;
					target.startingSummerTemp = (target.minSummerTemp + target.maxSummerTemp) / 2;
					
					target.minFallTemp = ((Random.Range(50, 85)) - 32) * 5/9;
					target.maxFallTemp = ((Random.Range(85, 90)) - 32) * 5/9;
					target.startingFallTemp = (target.minFallTemp + target.maxFallTemp) / 2;
					
					target.minWinterTemp = ((Random.Range(30, 40)) - 32) * 5/9;
					target.maxWinterTemp = ((Random.Range(40, 50)) - 32) * 5/9;
					target.startingWinterTemp = (target.minWinterTemp + target.maxWinterTemp) / 2;
				}
			}
			
			EditorGUILayout.HelpBox("The Grassland Preset will generate a random Grassland like Climate according to real world data. \n\nThe Grassland climate consists of medium odds of precipitation mainly in the Spring and Summer months. The average temperature is hot during the Summer and cold during the Winter. Temperatures can exceed 100° during the summer months and fall as cold as 30° during the winter.\n\nAfter your climate has been generated, you can tweak the settings to your liking.", MessageType.None, true);
			
			EditorGUILayout.Space();
			
			if(GUILayout.Button("Alien Climate"))
			{
				if (target.generateDateAndTime == 1)
				{
					target.startTimeHour = Random.Range(0, 24);
					target.startTimeMinute = Random.Range(0, 60);
					target.dayCounter = Random.Range(1, 30);
					target.monthCounter = Random.Range(1, 13);
					target.yearCounter = Random.Range(1, 3000);
					target.weatherForecaster = Random.Range(1, 14);
					target.moonPhaseCalculator = Random.Range(0, 9);
				}
				
				target.weatherChanceSpring = 60;
				target.weatherChanceSummer = 60;
				target.weatherChanceFall = 20;
				target.weatherChanceWinter = 20;

				target.lightningColor = new Color((Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f);

				target.moonColor = new Color((Random.Range(100.0f, 150.0f))/255.0f, (Random.Range(100.0f, 150.0f))/255.0f, (Random.Range(100.0f, 150.0f))/255.0f);

				target.stormCloudColor1 = new Color((Random.Range(50.0f, 150.0f))/255.0f, (Random.Range(50.0f, 150.0f))/255.0f, (Random.Range(50.0f, 150.0f))/255.0f);
				target.stormCloudColor2 = new Color((Random.Range(25.0f, 150.0f))/255.0f, (Random.Range(25.0f, 150.0f))/255.0f, (Random.Range(25.0f, 150.0f))/255.0f);

				target.cloudColorMorning = new Color((Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f);
				target.cloudColorDay = new Color((Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f);
				target.cloudColorEvening = new Color((Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f);
				target.cloudColorNight = new Color((Random.Range(50.0f, 150.0f))/255.0f, (Random.Range(50.0f, 150.0f))/255.0f, (Random.Range(50.0f, 150.0f))/255.0f);

				target.MorningAmbientLight = new Color((Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f);
				target.MiddayAmbientLight = new Color((Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f);
				target.DuskAmbientLight = new Color((Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f);
				target.NightAmbientLight = new Color((Random.Range(0, 80.0f))/255.0f, (Random.Range(0, 80.0f))/255.0f, (Random.Range(0, 80.0f))/255.0f);
				target.TwilightAmbientLight = new Color((Random.Range(50.0f, 150.0f))/255.0f, (Random.Range(50.0f, 150.0f))/255.0f, (Random.Range(50.0f, 150.0f))/255.0f);

				target.SunMorning = new Color((Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f);
				target.SunDay = new Color((Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f);
				target.SunDusk = new Color((Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f, (Random.Range(200.0f, 255.0f))/255.0f);
				target.SunNight = Color.black;

				target.fogMorningColor = new Color((Random.Range(50.0f, 150.0f))/255.0f, (Random.Range(50.0f, 150.0f))/255.0f, (Random.Range(50.0f, 150.0f))/255.0f);
				target.fogDayColor = new Color((Random.Range(50.0f, 150.0f))/255.0f, (Random.Range(50.0f, 150.0f))/255.0f, (Random.Range(50.0f, 150.0f))/255.0f);
				target.fogDuskColor = new Color((Random.Range(50.0f, 150.0f))/255.0f, (Random.Range(50.0f, 150.0f))/255.0f, (Random.Range(50.0f, 150.0f))/255.0f);
				target.fogNightColor = new Color((Random.Range(10.0f, 25.0f))/255.0f, (Random.Range(10.0f, 25.0f))/255.0f, (Random.Range(10.0f, 25.0f))/255.0f);

				target.stormyFogColorMorning = new Color((Random.Range(50.0f, 100.0f))/255.0f, (Random.Range(50.0f, 100.0f))/255.0f, (Random.Range(50.0f, 100.0f))/255.0f);
				target.stormyFogColorDay = new Color((Random.Range(50.0f, 125.0f))/255.0f, (Random.Range(50.0f, 125.0f))/255.0f, (Random.Range(50.0f, 125.0f))/255.0f);
				target.stormyFogColorEvening = new Color((Random.Range(50.0f, 100.0f))/255.0f, (Random.Range(50.0f, 100.0f))/255.0f, (Random.Range(50.0f, 100.0f))/255.0f);
				target.stormyFogColorNight = new Color((Random.Range(10.0f, 25.0f))/255.0f, (Random.Range(10.0f, 25.0f))/255.0f, (Random.Range(10.0f, 25.0f))/255.0f);

				target.MorningAtmosphericLight = new Color((Random.Range(100.0f, 255.0f))/255.0f, (Random.Range(100.0f, 255.0f))/255.0f, (Random.Range(100.0f, 255.0f))/255.0f);
				target.MiddayAtmosphericLight = new Color((Random.Range(100.0f, 255.0f))/255.0f, (Random.Range(100.0f, 255.0f))/255.0f, (Random.Range(100.0f, 255.0f))/255.0f);
				target.DuskAtmosphericLight = new Color((Random.Range(100.0f, 255.0f))/255.0f, (Random.Range(100.0f, 255.0f))/255.0f, (Random.Range(100.0f, 255.0f))/255.0f);

				target.skyColorMorning = new Color((Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f);
				target.skyColorDay = new Color((Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f);
				target.skyColorEvening = new Color((Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f);
				target.nightTintColor = new Color((Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f, (Random.Range(0, 255.0f))/255.0f);
				
				if (target.temperatureType == 1)
				{
					target.minSpringTemp = Random.Range(-500, 100);
					target.maxSpringTemp = Random.Range(100, 500);
					target.startingSpringTemp = (target.minSpringTemp + target.maxSpringTemp) / 2;
					
					target.minSummerTemp = Random.Range(-500, 100);
					target.maxSummerTemp = Random.Range(100, 500);
					target.startingSummerTemp = (target.minSummerTemp + target.maxSummerTemp) / 2;
					
					target.minFallTemp = Random.Range(-500, 100);
					target.maxFallTemp = Random.Range(100, 500);
					target.startingFallTemp = (target.minFallTemp + target.maxFallTemp) / 2;
					
					target.minWinterTemp = Random.Range(-500, 100);
					target.maxWinterTemp = Random.Range(100, 500);
					target.startingWinterTemp = (target.minWinterTemp + target.maxWinterTemp) / 2;
				}
				
				if (target.temperatureType == 2)
				{
					target.minSpringTemp = ((Random.Range(50, 85)) - 32) * 5/9;
					target.maxSpringTemp = ((Random.Range(85, 90)) - 32) * 5/9;
					target.startingSpringTemp = (target.minSpringTemp + target.maxSpringTemp) / 2;
					
					target.minSummerTemp = ((Random.Range(90, 95)) - 32) * 5/9;
					target.maxSummerTemp = ((Random.Range(95, 115)) - 32) * 5/9;
					target.startingSummerTemp = (target.minSummerTemp + target.maxSummerTemp) / 2;
					
					target.minFallTemp = ((Random.Range(50, 85)) - 32) * 5/9;
					target.maxFallTemp = ((Random.Range(85, 90)) - 32) * 5/9;
					target.startingFallTemp = (target.minFallTemp + target.maxFallTemp) / 2;
					
					target.minWinterTemp = ((Random.Range(30, 40)) - 32) * 5/9;
					target.maxWinterTemp = ((Random.Range(40, 50)) - 32) * 5/9;
					target.startingWinterTemp = (target.minWinterTemp + target.maxWinterTemp) / 2;
				}
			}
			
			EditorGUILayout.HelpBox("The Alien Climate Preset is different than the other climate generator presets. \n\nThe Alien Climate Setting will generate a randomized alien-like climate with extreme temperatures, randomized color values, and other settings that may only be found on alien planets. Expect the settings to be a bit wild. We have ensured that certain colors have been eliminated such as black for truly unique and wild planets. We also have a default color setting that will reset the colors generated back to UniStorm's default colors if needed. \n\nAfter your climate has been generated, you can tweak the settings to your liking.", MessageType.None, true);
			
			EditorGUILayout.Space();

			if(GUILayout.Button("Reset Colors and Settings to Default"))
			{
				
				target.lightningColor = new Color((164)/255.0f, (198)/255.0f, (223)/255.0f);
				
				target.moonColor = new Color((110)/255.0f, (128)/255.0f, (139)/255.0f);
				
				target.stormCloudColor1 = new Color((81)/255.0f, (81)/255.0f, (81)/255.0f);
				target.stormCloudColor2 = new Color((49)/255.0f, (49)/255.0f, (49)/255.0f);
				
				target.cloudColorMorning = new Color((171)/255.0f, (162)/255.0f, (152)/255.0f);
				target.cloudColorDay = new Color((255)/255.0f, (255)/255.0f, (255)/255.0f);
				target.cloudColorEvening = new Color((148)/255.0f, (141)/255.0f, (133)/255.0f);
				target.cloudColorNight = new Color((212)/255.0f, (212)/255.0f, (212)/255.0f);
				
				target.MorningAmbientLight = new Color((206)/255.0f, (187)/255.0f, (144)/255.0f);
				target.MiddayAmbientLight = new Color((151)/255.0f, (152)/255.0f, (143)/255.0f);
				target.DuskAmbientLight = new Color((234)/255.0f, (205)/255.0f, (172)/255.0f);
				target.NightAmbientLight = new Color((33)/255.0f, (38)/255.0f, (38)/255.0f);
				target.TwilightAmbientLight = new Color((127)/255.0f, (143)/255.0f, (150)/255.0f);
				
				target.SunMorning = new Color((235)/255.0f, (184)/255.0f, (0)/255.0f);
				target.SunDay = new Color((232)/255.0f, (229)/255.0f, (219)/255.0f);
				target.SunDusk = new Color((255)/255.0f, (184)/255.0f, (0)/255.0f);
				target.SunNight = Color.black;
				
				target.fogMorningColor = new Color((68)/255.0f, (54)/255.0f, (40)/255.0f);
				target.fogDayColor = new Color((162)/255.0f, (170)/255.0f, (176)/255.0f);
				target.fogDuskColor = new Color((73)/255.0f, (60)/255.0f, (45)/255.0f);
				target.fogNightColor = new Color((33)/255.0f, (33)/255.0f, (33)/255.0f);
				
				target.stormyFogColorMorning = new Color((82)/255.0f, (82)/255.0f, (82)/255.0f);
				target.stormyFogColorDay = new Color((120)/255.0f, (120)/255.0f, (120)/255.0f);
				target.stormyFogColorEvening = new Color((75)/255.0f, (75)/255.0f, (75)/255.0f);
				target.stormyFogColorNight = new Color((36)/255.0f, (36)/255.0f, (36)/255.0f);
				
				target.MorningAtmosphericLight = new Color((201)/255.0f, (136)/255.0f, (0)/255.0f);
				target.MiddayAtmosphericLight = new Color((231)/255.0f, (190)/255.0f, (102)/255.0f);
				target.DuskAtmosphericLight = new Color((191)/255.0f, (130)/255.0f, (0)/255.0f);
				
				target.skyColorMorning = new Color((255)/255.0f, (255)/255.0f, (255)/255.0f);
				target.skyColorDay = new Color((195)/255.0f, (169)/255.0f, (141)/255.0f);
				target.skyColorEvening = new Color((231)/255.0f, (234)/255.0f, (234)/255.0f);
				target.nightTintColor = new Color((25)/255.0f, (60)/255.0f, (38)/255.0f);
				
				target.startTimeHour = 11;
				target.startTimeMinute = 0;
				target.dayCounter = 15;
				target.monthCounter = 6;
				target.yearCounter = 2015;
				target.weatherForecaster = 4;
				target.moonPhaseCalculator = 3;
				target.weatherChanceSpring = 60;
				target.weatherChanceSummer = 20;
				target.weatherChanceFall = 40;
				target.weatherChanceWinter = 80;
				
				if (target.temperatureType == 1)
				{
					target.minSpringTemp = 45;
					target.maxSpringTemp = 65;
					target.minSummerTemp = 70;;
					target.maxSummerTemp = 100;
					target.minFallTemp = 35;
					target.maxFallTemp = 55;
					target.minWinterTemp = 0;
					target.maxWinterTemp = 40;
					
					target.startingSpringTemp = 55;
					target.startingSummerTemp = 85;
					target.startingFallTemp = 45;
					target.startingWinterTemp = 30;
				}
				
				if (target.temperatureType == 2)
				{
					target.minSpringTemp = ((45) - 32) * 5/9;
					target.maxSpringTemp = ((65) - 32) * 5/9;
					target.minSummerTemp = ((70) - 32) * 5/9;
					target.maxSummerTemp = ((100) - 32) * 5/9;
					target.minFallTemp = ((35) - 32) * 5/9;
					target.maxFallTemp = ((55) - 32) * 5/9;
					target.minWinterTemp = ((0) - 32) * 5/9;
					target.maxWinterTemp = ((40) - 32) * 5/9;
					
					target.startingSpringTemp = ((55) - 32) * 5/9;
					target.startingSummerTemp = ((85) - 32) * 5/9;
					target.startingFallTemp = ((45) - 32) * 5/9;
					target.startingWinterTemp = ((30) - 32) * 5/9;
				}
			}
			
			
			EditorGUILayout.Space();

			if(GUILayout.Button("Reset to Default settings"))
			{
				target.startTimeHour = 11;
				target.startTimeMinute = 0;
				target.dayCounter = 15;
				target.monthCounter = 6;
				target.yearCounter = 2015;
				target.weatherForecaster = 4;
				target.moonPhaseCalculator = 3;
				target.weatherChanceSpring = 60;
				target.weatherChanceSummer = 20;
				target.weatherChanceFall = 40;
				target.weatherChanceWinter = 80;

				if (target.temperatureType == 1)
				{
					target.minSpringTemp = 45;
					target.maxSpringTemp = 65;
					target.minSummerTemp = 70;;
					target.maxSummerTemp = 100;
					target.minFallTemp = 35;
					target.maxFallTemp = 55;
					target.minWinterTemp = 0;
					target.maxWinterTemp = 40;
					
					target.startingSpringTemp = 55;
					target.startingSummerTemp = 85;
					target.startingFallTemp = 45;
					target.startingWinterTemp = 30;
				}
				
				if (target.temperatureType == 2)
				{
					target.minSpringTemp = ((45) - 32) * 5/9;
					target.maxSpringTemp = ((65) - 32) * 5/9;
					target.minSummerTemp = ((70) - 32) * 5/9;
					target.maxSummerTemp = ((100) - 32) * 5/9;
					target.minFallTemp = ((35) - 32) * 5/9;
					target.maxFallTemp = ((55) - 32) * 5/9;
					target.minWinterTemp = ((0) - 32) * 5/9;
					target.maxWinterTemp = ((40) - 32) * 5/9;
					
					target.startingSpringTemp = ((55) - 32) * 5/9;
					target.startingSummerTemp = ((85) - 32) * 5/9;
					target.startingFallTemp = ((45) - 32) * 5/9;
					target.startingWinterTemp = ((30) - 32) * 5/9;
				}
			}

			EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
		}

		if (target.weatherForecaster == 5 || target.weatherForecaster == 6 || target.weatherForecaster == 9)
		{
			target.weatherForecaster = Random.Range(1, 14);
		}

		
			
		var showOrHide_timeOptions : String = "Show";
		if(target.timeOptions)
			showOrHide_timeOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_timeOptions + " Time Options"))
		{
			target.timeOptions = !target.timeOptions;
		}
        
        if (target.timeOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 1)
		{
			EditorGUILayout.LabelField("Time Options", EditorStyles.boldLabel);
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("The current UniStorm time is displayed with these variables. Setting the Starting Time will start UniStorm at that specific time of day according to the Hour and Minute. Time variables can be used to create events, quests, and effects at specific times.", MessageType.None, true);
			}
			
			editorStartTimeNew = target.startTimeHour;
			editorStartTimeNew = EditorGUILayout.EnumPopup("Start Time Hour", editorStartTimeNew);
	    	target.startTimeHour = editorStartTimeNew;
	    	
	    	if (target.startTimeMinute <= 9)
			{
				EditorGUILayout.LabelField("Your day will start at " + target.startTimeHour + ":0" + target.startTimeMinute, EditorStyles.miniButton); //objectFieldThumb
			}

			if (target.startTimeMinute >= 10)
			{
				EditorGUILayout.LabelField("Your day will start at " + target.startTimeHour + ":" + target.startTimeMinute, EditorStyles.miniButton); //objectFieldThumb
			}

			target.startTimeMinute = EditorGUILayout.IntSlider ("Start Time Minute", target.startTimeMinute, 0, 59);

	    	EditorGUILayout.Space();
	    	
	    	target.minuteCounter = EditorGUILayout.IntField ("Minutes", target.minuteCounter);
	    	target.hourCounter = EditorGUILayout.IntField ("Hours", target.hourCounter);
	    	target.dayCounter = EditorGUILayout.IntField ("Days", target.dayCounter);
	    	
	    	if (target.calendarType == 1)
	    	{
	    		editorMonth = target.monthCounter;
				editorMonth = EditorGUILayout.EnumPopup("Month", editorMonth);
	    		target.monthCounter = editorMonth;
	    	}
	    	
	    	if (target.calendarType == 2)
	    	{	
		
				EditorGUILayout.Space();	
		    	EditorGUILayout.HelpBox("While Custom Calendar is enabled, UniStorm will display numbers for months.", MessageType.Warning, true);
		    	
	    		target.monthCounter = EditorGUILayout.IntField ("Months", target.monthCounter);
	    		
	    		EditorGUILayout.Space();
	    	}
	    	
	    	target.yearCounter = EditorGUILayout.IntField ("Years", target.yearCounter);
	    	
	    	EditorGUILayout.Space();
	    	
	    	EditorGUILayout.Space();

				if (target.helpOptions == true)
				{
					EditorGUILayout.HelpBox("Starting Day Hour determins what time UniStorm will start using the Day Length time. This allows you to make your days longer or short than nights, if desired.", MessageType.None, true);
				}

				editorDayHour = target.dayLengthHour;
				editorDayHour = EditorGUILayout.EnumPopup("Starting Day Hour", editorDayHour);
				target.dayLengthHour = editorDayHour;

				if (target.dayLengthHour > target.nightLengthHour || target.dayLengthHour == target.nightLengthHour)
				{
					EditorGUILayout.HelpBox("Your Starting Day Hour can't be higher than, or equal to, your Starting Night Hour.", MessageType.Warning, true);
				}

				EditorGUILayout.Space();

				EditorGUILayout.LabelField("Your in-game Day will start at " + target.dayLengthHour + ":00", EditorStyles.miniButton); //objectFieldThumb

				EditorGUILayout.Space();

				if (target.helpOptions == true)
				{
					EditorGUILayout.HelpBox("The Day Length is calculated by how many real-time minutes pass until UniStorm switches to night, based on the hour you've set for Starting Night Hour. A value of 60 would give you 1 hour long days. This can be changed to any value that's desired.", MessageType.None, true);
				}


				target.dayLength = EditorGUILayout.FloatField ("Day Length", target.dayLength); 

				EditorGUILayout.Space();
				EditorGUILayout.Space();

				if (target.helpOptions == true)
				{
					EditorGUILayout.HelpBox("Starting Night Hour determins what time UniStorm will start using the Night Length time. This allows you to make your nights longer or short than days, if desired.", MessageType.None, true);
				}

				editorNightHour = target.nightLengthHour;
				editorNightHour = EditorGUILayout.EnumPopup("Starting Night Hour", editorNightHour);
				target.nightLengthHour = editorNightHour;

				if (target.nightLengthHour < target.dayLengthHour)
				{
					EditorGUILayout.HelpBox("Your Starting Night Hour can't be lower than, or equal to, your Starting Day Hour.", MessageType.Warning, true);
				}

				EditorGUILayout.Space();
				
				EditorGUILayout.LabelField("Your in-game Night will start at " + target.nightLengthHour + ":00", EditorStyles.miniButton); //objectFieldThumb
				
				EditorGUILayout.Space();

				EditorGUILayout.Space();
				EditorGUILayout.Space();

				if (target.helpOptions == true)
				{
					EditorGUILayout.HelpBox("The Night Length is calculated by how many real-time minutes pass until UniStorm switches to day, based on the hour you've set for Starting Day Hour. A value of 60 would give you 1 hour long nights. This can be changed to any value that's desired.", MessageType.None, true);
				}


				target.nightLength = EditorGUILayout.FloatField ("Night Length", target.nightLength); 

				EditorGUILayout.Space();
				EditorGUILayout.Space();

				if (target.helpOptions == true)
				{
					EditorGUILayout.HelpBox("Time Stopped will stop UniStorm's time and sun from moving, but will allow the clouds to keep animating.", MessageType.None, true);
				} 
	    	
	    	EditorGUILayout.Space();
	    	
	    	if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Time Stopped will stop UniStorm's time and sun from moving, but will allow the clouds to keep animating.", MessageType.None, true);
	    	}
	    	
	    	target.timeStopped = EditorGUILayout.Toggle ("Time Stopped",target.timeStopped);
	    	
	    	EditorGUILayout.Space();
	    	
	    	editorCalendarType = target.calendarType;
			editorCalendarType = EditorGUILayout.EnumPopup("Calendar Type", editorCalendarType);
	    	target.calendarType = editorCalendarType;
	    	
	    	if (target.calendarType == 1)
	    	{
	    		if (target.helpOptions == true)
				{	
					EditorGUILayout.Space();
					
		    		EditorGUILayout.HelpBox("While the Calendar Type is set to Standard, UniStorm will have standard calendar calculations. This includes the automatic calculation of Leap Year.", MessageType.None, true);
		    	}
	    	}
	    	
	    	if (target.calendarType == 2)
	    	{	
	    		EditorGUILayout.Space();
	    		
	    		target.numberOfDaysInMonth = EditorGUILayout.IntField ("Days In Month", target.numberOfDaysInMonth);
	    		target.numberOfMonthsInYear = EditorGUILayout.IntField ("Months In Year", target.numberOfMonthsInYear);
	    		
	    		if (target.helpOptions == true)
				{	
					EditorGUILayout.Space();
					
		    		EditorGUILayout.HelpBox("While the Calendar Type is set to Custom, UniStorm will choose the values you set within the Editor to calculate Days, Months, and Years. The Month will be changed and listed as a number value.", MessageType.None, true);
		    	}
	    	}
	    	
	    	EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
    	}
    	
    	
    	
			
		var showOrHide_weatherOptions : String = "Show";
		if(target.weathersOptions)
			showOrHide_weatherOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_weatherOptions + " Weather Options"))
		{
			target.weatherOptions = !target.weatherOptions;
		}
        
        if (target.weatherOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 2)
		{
			EditorGUILayout.LabelField("Weather Options", EditorStyles.boldLabel);
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("The Weather Options allow you to control weather and the speed of sky related components. The Weather Type allows you to manually change UniStorm's weather to any weather that's listed in the drop down menu. This can be used for starting weather or be changed while testing out your scene. The Cloud Thickness controls how thick the dynamic clouds will render.", MessageType.None, true);
	    	}
	    	
	    	EditorGUILayout.Space();
	    	
	    	if (target.cloudType == 1)
	    	{ 	
	    		editorCloudDensity = target.cloudDensity;
				editorCloudDensity = EditorGUILayout.EnumPopup("Cloud Thickness", editorCloudDensity);
	    		target.cloudDensity = editorCloudDensity;    	
	    	}
	    	
	    	EditorGUILayout.Space();
			
			if (target.cloudDensity == 1)
			{
				EditorGUILayout.HelpBox("Low Cloud Thickness will render less dense clouds. This option is for people who like the look of lighter and more faint looking clouds.", MessageType.Info, true);
			}
			
			if (target.cloudDensity == 2)
			{
				EditorGUILayout.HelpBox("High Cloud Thickness will render clouds more dense. This option is for people who like the look of thick noticable clouds.", MessageType.Info, true);
			}
	    	
	    	EditorGUILayout.Space();
			
			editorCloudType = target.cloudType;
			editorCloudType = EditorGUILayout.EnumPopup("Cloud Type", editorCloudType);
	    	target.cloudType = editorCloudType;
	    	
	    	
			
			EditorGUILayout.Space();
			
			if (target.cloudType == 1)
			{
				EditorGUILayout.HelpBox("While using Dynamic Cloud UniStorm's clouds will form dynamically. This allows no two clouds in the sky to look the same. Dynamic clouds also look more relalistic and have much more diveristy. This options also affects UniStorm's Storm Clouds.", MessageType.Info, true);
			}
			
			if (target.cloudType == 2)
			{
				EditorGUILayout.HelpBox("While using Non Dynamic clouds, UniStorm will revert back to version 1.6 clouds. Some features may also be disabled both in the UniStorm Editor and visually (Such as clouds being masked along the horizon). These clouds have more of a 'Skyrim' look compared to Dynamic Clouds. These clouds still animate. This option is availble for those who prefer this look over the Dynamic Clouds. ", MessageType.Info, true);
			}
	    	
	    	//target.cloudSpeed = EditorGUILayout.IntField ("Cloud Speed", target.cloudSpeed);
	    	target.cloudSpeed = EditorGUILayout.IntSlider ("Cloud Speed", target.cloudSpeed, 0, 50);
	    	//target.heavyCloudSpeed = EditorGUILayout.FloatField ("Storm Cloud Speed", target.heavyCloudSpeed);
	    	target.heavyCloudSpeed = EditorGUILayout.IntSlider ("Storm Cloud Speed", target.heavyCloudSpeed, 0, 50);
	    	
	    	EditorGUILayout.Space();
	    	
	    	target.starSpeed = EditorGUILayout.IntField ("Star Scroll Speed", target.starSpeed);
	    	target.starRotationSpeed = EditorGUILayout.IntField ("Star Rotation Speed", target.starRotationSpeed);	
	    	
	    	EditorGUILayout.Space();
	    	
	    	editorWeatherType = target.weatherForecaster;
			editorWeatherType = EditorGUILayout.EnumPopup("Weather Type", editorWeatherType);
	    	target.weatherForecaster = editorWeatherType;
	    	
	    	EditorGUILayout.Space();
	    	
	    	if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Static Weather will stop the weather from ever changing making it static. However, you can still change it manully.", MessageType.None, true);
	    	}

	    	target.staticWeather = EditorGUILayout.Toggle ("Static Weather",target.staticWeather); 
	    	
	    	EditorGUILayout.Space();
	    	
	    	if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("If Instant Starting Weather is enabled, weather will be instantly faded in on start bypassing the transitioning of weather. This function can also be called to bypass weather transitions for instance, loading a player's game or an event.", MessageType.None, true);
			}

			target.useInstantStartingWeather = EditorGUILayout.Toggle ("Instant Starting Weather",target.useInstantStartingWeather);

			EditorGUILayout.Space();
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("The Weather Odds control the weather odds for each season. A value of 20% gives a 20% chance that the weather will change where 80% would give you an 80% chance. UniStorm's advanced algorithm handles the rest and generates you dynamic weather according to your weather odds for each season.", MessageType.None, true);
	    	}
	    	
			EditorGUILayout.LabelField("Weather Odds", EditorStyles.miniLabel);
	    	
	    	editorWeatherChance1 = target.weatherChanceSpring;
			editorWeatherChance1 = EditorGUILayout.EnumPopup("Spring %", editorWeatherChance1);
	    	target.weatherChanceSpring = editorWeatherChance1;
	    	
	    	editorWeatherChance2 = target.weatherChanceSummer;
			editorWeatherChance2 = EditorGUILayout.EnumPopup("Summer %", editorWeatherChance2);
	    	target.weatherChanceSummer = editorWeatherChance2;
	    	
	    	editorWeatherChance3 = target.weatherChanceFall;
			editorWeatherChance3 = EditorGUILayout.EnumPopup("Fall %", editorWeatherChance3);
	    	target.weatherChanceFall = editorWeatherChance3;
	    	
	    	editorWeatherChance4 = target.weatherChanceWinter;
			editorWeatherChance4 = EditorGUILayout.EnumPopup("Winter %", editorWeatherChance4);
	    	target.weatherChanceWinter = editorWeatherChance4;
	    	
	    	EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
    	}
    	
    	
			
		var showOrHide_windOptions : String = "Show";
		if(target.windOptions)
			showOrHide_windOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_windOptions + " Wind Options"))
		{
			target.windOptions = !target.windOptions;
		}
        
        if (target.WindOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 3)
		{
			EditorGUILayout.LabelField("Wind Options", EditorStyles.boldLabel);
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Here you can adjust the wind settings for the terrain's grass. UniStorm will use the normal wind settings during none precipitation weather types and will slowly transition into stormy wind during precipitation weather types.", MessageType.None, true);
			}

			EditorGUILayout.Space();

			target.normalGrassWavingAmount = EditorGUILayout.Slider ("Normal Grass Wind Speed", target.normalGrassWavingAmount, 0.1f, 1.0f);
			target.stormGrassWavingAmount = EditorGUILayout.Slider ("Stormy Grass Wind Speed", target.stormGrassWavingAmount, 0.1f, 1.0f);

			EditorGUILayout.Space();


			target.normalGrassWavingSpeed = EditorGUILayout.Slider ("Normal Grass Wind Size", target.normalGrassWavingSpeed, 0.1f, 1.0f);
			target.stormGrassWavingSpeed = EditorGUILayout.Slider ("Stormy Grass Wind Size", target.stormGrassWavingSpeed, 0.1f, 1.0f);

			EditorGUILayout.Space();

			target.normalGrassWavingStrength = EditorGUILayout.Slider ("Normal Grass Wind Bending", target.normalGrassWavingStrength, 0.1f, 1.0f);
			target.stormGrassWavingStrength = EditorGUILayout.Slider ("Stormy Grass Wind Bending", target.stormGrassWavingStrength, 0.1f, 1.0f);
			
			EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
		}
    	
    	
    		
    	
			
		var showOrHide_atmosphereOptions : String = "Show";
		if(target.atmosphereOptions)
			showOrHide_atmosphereOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_atmosphereOptions + " Atmosphere Options"))
		{
			target.atmosphereOptions = !target.atmosphereOptions;
		}
        
        if (target.atmosphereOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 4)
		{
			EditorGUILayout.LabelField("Atmosphere Options", EditorStyles.boldLabel);			
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("UniStorm now uses a Physically Based Skybox shader. This shader allows you to adjust factors of the atmosphere that affect the color of the sky which changes according to the angle of the Sun.", MessageType.None, true);
	    	}
			
			target.skyColorMorning = EditorGUILayout.ColorField("Sky Tint Color Morning", target.skyColorMorning);
			target.skyColorDay = EditorGUILayout.ColorField("Sky Tint Color Day", target.skyColorDay);
			target.skyColorEvening = EditorGUILayout.ColorField("Sky Tint Color Evening", target.skyColorEvening);
			//target.skyColorNight = EditorGUILayout.ColorField("Sky Tint Color Night", target.skyColorNight);
			
			EditorGUILayout.Space();

			target.nightTintColor = EditorGUILayout.ColorField("Sky Tint Color Night", target.nightTintColor);
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Sky Tint Color Night allows you to adjust the color of the sky when it's night. Note: This color option also affects the overall tint of the Procedural Skybox. Darker colors tend to work best.", MessageType.None, true);
			}

			EditorGUILayout.Space();

			target.groundColor = EditorGUILayout.ColorField("Ground Color", target.groundColor);

			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Here you can adjust the Skybox Tint and Ground colors. The procedural skybox shader will accurately shade according to the time of day and angle of the sun.", MessageType.Info, true);
			}
			
			EditorGUILayout.Space();
			EditorGUILayout.Space();
			
			target.atmosphereThickness = EditorGUILayout.Slider ("Atmosphere Thickness", target.atmosphereThickness, 0.0f, 5.0);
			
			EditorGUILayout.Space();
			
			target.exposure = EditorGUILayout.Slider ("Exposure", target.exposure, 0.0f, 8.0);
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Here you can adjust the Atmosphere Thickness and Exposure. These values allow you to control how thick the atosphere is and how much light is scattered.", MessageType.Info, true);	
			}
			
			EditorGUILayout.Space();
			EditorGUILayout.Space();

			target.starBrightness = EditorGUILayout.ColorField("Star Brightness", target.starBrightness);

			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Star Brightness allows you to adjust how bright your stars will shine. Use the color from white to balck to adjust this. Note: UniStorm uses the alpha amount so adjusting it won't affect the star's brightness.", MessageType.None, true);
			}
			
			EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
		}
								
    	
			
		var showOrHide_fogOptions : String = "Show";
		if(target.fogOptions)
			showOrHide_fogOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_fogOptions + " Fog Options"))
		{
			target.fogOptions = !target.fogOptions;
		}
        
        if (target.fogOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 5)
		{
	    	EditorGUILayout.Space();
			EditorGUILayout.LabelField("Fog Options", EditorStyles.boldLabel);
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("The Fog Options allow you to control all densities of Unity's fog. Unity has 3 fog modes; Linear, Exponential, and Exp2. UniStorm will adjust the options according to the fog mode you've selected. Auto Enable Fog will enable Unity's Fog automatically if the check box is checked.", MessageType.None, true);
			}
			
			EditorGUILayout.Space();
			
			target.useUnityFog = EditorGUILayout.Toggle ("Auto Enable Fog?",target.useUnityFog);
			
			EditorGUILayout.Space();
			
			editorFogMode = target.fogMode;
			editorFogMode = EditorGUILayout.EnumPopup("Fog Mode", editorFogMode);
	    	target.fogMode = editorFogMode;
	    	
	    	EditorGUILayout.Space();
			
			if (target.fogMode == 1)
			{
				target.stormyFogDistanceStart = EditorGUILayout.IntSlider ("Stormy Fog Start Distance", target.stormyFogDistanceStart, -400, 1000);
	    		target.stormyFogDistance = EditorGUILayout.IntSlider ("Stormy Fog End Distance", target.stormyFogDistance, 200, 2500);
	    		target.fogStartDistance = EditorGUILayout.IntSlider ("Regular Fog Start Distance", target.fogStartDistance, -400, 1000);
	    		target.fogEndDistance = EditorGUILayout.IntSlider ("Regular Fog End Distance", target.fogEndDistance, 200, 5000);
	    	}
	    	
	    	if (target.fogMode == 2 || target.fogMode == 3)
			{
	    		target.fogDensity = EditorGUILayout.FloatField ("Fog Density", target.fogDensity);
	    	}
	    	
	    	EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
    	}
    	
    	
    	
    	
			
		var showOrHide_lightningOptions : String = "Show";
		if(target.lightningOptions)
			showOrHide_lightningOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_lightningOptions + " Lightning Options"))
		{
			target.lightningOptions = !target.lightningOptions;
		}
        
        if (target.lightningOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 6)
		{
			EditorGUILayout.LabelField("Lightning Options", EditorStyles.boldLabel);
			EditorGUILayout.Space();
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("These settings allow you to adjust any lightning and thunder related options. These features will only happen during the Thunder Storm weather type.", MessageType.None, true);
			}
			
			EditorGUILayout.Space();
			
			target.shadowsLightning = EditorGUILayout.Toggle ("Shadows Enabled?",target.shadowsLightning);
			
			
			if (target.shadowsLightning)
			{
				EditorGUILayout.Space();
				
				editorLightningShadowType = target.lightningShadowType;
				editorLightningShadowType = EditorGUILayout.EnumPopup("Shadow Type", editorLightningShadowType);
	    		target.lightningShadowType = editorLightningShadowType;
	    		
	    		EditorGUILayout.Space();
	    		
	    		target.lightningShadowIntensity = EditorGUILayout.Slider ("Shadow Intensity", target.lightningShadowIntensity, 0, 1.0);
				
			}
			
			EditorGUILayout.Space();
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("The lighting intesity settings control the possible minimum and maximum light intensity of the lightning.", MessageType.None, true);
			}
			
			target.lightningColor = EditorGUILayout.ColorField("Lightning Color", target.lightningColor);
			
			EditorGUILayout.Space();
			
			target.minIntensity = EditorGUILayout.Slider ("Min Lightning Intensity", target.minIntensity, 0.5f, 1.5);
			target.maxIntensity = EditorGUILayout.Slider ("Max Lightning Intensity", target.maxIntensity, 0.5f, 1.5);
			
			EditorGUILayout.Space();
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("The minimum and maximum wait controls the seconds between each lightning strike.", MessageType.None, true);
			}
			
			target.lightningMinChance = EditorGUILayout.IntSlider ("Min Wait", target.lightningMinChance, 1.0f, 20.0);
			target.lightningMaxChance = EditorGUILayout.IntSlider ("Max Wait", target.lightningMaxChance, 10.0f, 40.0);
			
			EditorGUILayout.Space();
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("The flash length controls how quickly the lightning flashes on and off.", MessageType.None, true);
			}
			
			target.lightningFlashLength = EditorGUILayout.Slider ("Lightning Flash Length", target.lightningFlashLength, 0.4f, 1.2);
			
			EditorGUILayout.Space();
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Here you can add custom thunder sounds if desired. UniStorm will play them randomly each lightning strike.", MessageType.None, true);
			}
			
			var thunderSound1 : boolean = !EditorUtility.IsPersistent (target);
	    	target.thunderSound1 = EditorGUILayout.ObjectField ("Thunder Sound 1", target.thunderSound1, AudioClip, thunderSound1);
	    	var thunderSound2 : boolean = !EditorUtility.IsPersistent (target);
	    	target.thunderSound2 = EditorGUILayout.ObjectField ("Thunder Sound 2", target.thunderSound2, AudioClip, thunderSound2);
	    	var thunderSound3 : boolean = !EditorUtility.IsPersistent (target);
	    	target.thunderSound3 = EditorGUILayout.ObjectField ("Thunder Sound 3", target.thunderSound3, AudioClip, thunderSound3);
	    	var thunderSound4 : boolean = !EditorUtility.IsPersistent (target);
	    	target.thunderSound4 = EditorGUILayout.ObjectField ("Thunder Sound 4", target.thunderSound4, AudioClip, thunderSound4);
	    	var thunderSound5 : boolean = !EditorUtility.IsPersistent (target);
	    	target.thunderSound5 = EditorGUILayout.ObjectField ("Thunder Sound 5", target.thunderSound5, AudioClip, thunderSound5);
	    	
	    	EditorGUILayout.Space();
	    	
	    	if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("This Game Object controls where the lightning strikes happen and should be attached to the position axis of (0,0,0) of your player. UniStorm will randomly spawn lightning strikes around your player.", MessageType.None, true);
			}
	    	
	    	var lightningSpawn : boolean = !EditorUtility.IsPersistent (target);
	        target.lightningSpawn = EditorGUILayout.ObjectField ("Lightning Bolt Spawn", target.lightningSpawn, Transform, lightningSpawn);
	        
	        EditorGUILayout.Space();
	        
	        if (target.helpOptions == true)
			{
	       		EditorGUILayout.HelpBox("You can add a custom lightning strike here if desired and UniStorm will spawn random strikes according to your player's position.", MessageType.None, true);
	        }
	        
	        var lightningBolt1 : boolean = !EditorUtility.IsPersistent (target);
	        target.lightningBolt1 = EditorGUILayout.ObjectField ("Lightning Bolt", target.lightningBolt1, GameObject, lightningBolt1);
	        
	        EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
        }
        
    	
    	
			
		var showOrHide_temperatureOptions : String = "Show";
		if(target.temperatureOptions)
			showOrHide_temperatureOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_temperatureOptions + " Temperature Options"))
		{
			target.temperatureOptions = !target.temperatureOptions;
		}
        
        if (target.temperatureOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 7)
	   {
	    	//Temperature OPtions
			EditorGUILayout.LabelField("Temperature Options", EditorStyles.boldLabel); 
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("With the Temperature Options you can see the current temperature and adjust many temperature related settings.", MessageType.None, true);
			}
			
			editorTemperature = target.temperatureType;
			editorTemperature = EditorGUILayout.EnumPopup("Temperature Type", editorTemperature);
	    	target.temperatureType = editorTemperature;
	    	
	    	target.temperature = EditorGUILayout.IntField ("Current Temperature", target.temperature);
			
			if (target.temperatureType == 1)
			{
				EditorGUILayout.HelpBox("While using the Fahrenheit temperature type, UniStorm will snow at a temperature of 32 degrees or below.", MessageType.Info, true);
			}
			
			if (target.temperatureType == 2)
			{
				target.temperature = EditorGUILayout.IntField ("Current Temperature", target.temperature);

				EditorGUILayout.HelpBox("While using the Celsuis temperature type, UniStorm will snow at a temperature of 0 degrees or below.", MessageType.Info, true);
			}
			
			EditorGUILayout.Space();
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Here you can adjust the minimum and maximum temperature for each month. UniStorm will generate realistic temperature fluctuations according to your minimum and maximums. This is done both hourly and daily.", MessageType.None, true);
			}
			
			target.startingSpringTemp = EditorGUILayout.IntField ("Starting Spring Temp", target.startingSpringTemp);
			target.minSpringTemp = EditorGUILayout.IntField ("Min Spring", target.minSpringTemp);
			target.maxSpringTemp = EditorGUILayout.IntField ("Max Spring", target.maxSpringTemp);
			EditorGUILayout.Space();
			target.startingSummerTemp = EditorGUILayout.IntField ("Starting Summer Temp", target.startingSummerTemp);
			target.minSummerTemp = EditorGUILayout.IntField ("Min Summer", target.minSummerTemp);
			target.maxSummerTemp = EditorGUILayout.IntField ("Max Summer", target.maxSummerTemp);
			EditorGUILayout.Space();
			target.startingFallTemp = EditorGUILayout.IntField ("Starting Fall Temp", target.startingFallTemp);
			target.minFallTemp = EditorGUILayout.IntField ("Min Fall", target.minFallTemp);
			target.maxFallTemp = EditorGUILayout.IntField ("Max Fall", target.maxFallTemp);
			EditorGUILayout.Space();
			target.startingWinterTemp = EditorGUILayout.IntField ("Starting Winter Temp", target.startingWinterTemp);
			target.minWinterTemp = EditorGUILayout.IntField ("Min Winter", target.minWinterTemp);
			target.maxWinterTemp = EditorGUILayout.IntField ("Max Winter", target.maxWinterTemp);
			
			EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
		}
		
    	
    	
			
		var showOrHide_sunOptions : String = "Show";
		if(target.sunOptions)
			showOrHide_sunOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_sunOptions + " Sun Options"))
		{
			target.sunOptions = !target.sunOptions;
		}
        
        if (target.sunOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 8)
		{
	    	//Sun Intensity
			EditorGUILayout.LabelField("Sun Options", EditorStyles.boldLabel);
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("With the Sun Options you can control things like Sun Rotation, Sun Light and Sun Shadow Intensity, and whether or not you would like to enable or disable shadows for the Sun. Adjusting the Sun Rotation rotates the Sun's rising and setting posistions. You can rotate the Sun 360 degrees to perfectly suit your needs. The Sun Max Intensity is the max intesity the Sun will reach for the day. The Enable Shadows check box controls whether or not the Sun will use shadows.", MessageType.None, true);
	    	}
	    	
	    	EditorGUILayout.Space();
	    	
	    	//target.sunIntensity = EditorGUILayout.FloatField ("Sun Intensity", target.sunIntensity);
	    	target.maxSunIntensity = EditorGUILayout.Slider ("Max Sun Intensity", target.maxSunIntensity, 0.5f, 8);
	    	
	    	EditorGUILayout.Space();
	    	
	    	target.sunSize = EditorGUILayout.Slider ("Sun Size", target.sunSize, 0, 0.1f);
	    	
	    	EditorGUILayout.Space();

			target.HeavyRainSunIntensity = EditorGUILayout.Slider ("Stormy Sun Intensity", target.HeavyRainSunIntensity, 0f, 4);

				if (target.helpOptions == true)
				{
					EditorGUILayout.HelpBox("Stormy Sun Intensity controls how much sun is aloud during precipitation weather types, including Foggy and Cloudy. This allows the sun to still be shinning when it's raining, snowing, cloudy, or foggy. Keeping the sun on, during precipitation weather types, can improve the shading of objects and the terrain.", MessageType.None, true);
				}
	    	
	    	EditorGUILayout.Space();
	    	
	    	target.shadowsDuringDay = EditorGUILayout.Toggle ("Shadows Enabled?",target.shadowsDuringDay);
			
			if (target.shadowsDuringDay)
			{
				EditorGUILayout.Space();
				
				editorDayShadowType = target.dayShadowType;
				editorDayShadowType = EditorGUILayout.EnumPopup("Shadow Type", editorDayShadowType);
	    		target.dayShadowType = editorDayShadowType;
	    		
	    		EditorGUILayout.Space();
	    	
				target.dayShadowIntensity = EditorGUILayout.Slider ("Shadow Intensity", target.dayShadowIntensity, 0, 1.0);
			}
			
			EditorGUILayout.Space();
	    	
	    	target.sunAngle = EditorGUILayout.IntSlider ("Sun Rotation", target.sunAngle, -180, 180);
	    	
	    	EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
    	}
    	
    	
    	
			
		var showOrHide_moonOptions : String = "Show";
		if(target.moonOptions)
			showOrHide_moonOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_moonOptions + " Moon Options"))
		{
			target.moonOptions = !target.moonOptions;
		}
        
        if (target.moonOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 9)
		{
	    	EditorGUILayout.Space();
			EditorGUILayout.LabelField("Moon Options", EditorStyles.boldLabel);
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("The Moon Options allow you to choose the starting moon phase. There are a total of 8 moon phases that are updated each day. The moon phase will continue to cycle and starts with the moon phase you choose. You can change the materials of the moon pahases and UniStorm will cycle throught them accordingly.", MessageType.None, true);
			}
			
			EditorGUILayout.Space();
			
			target.moonLightIntensity = EditorGUILayout.Slider ("Moonlight Intensity", target.moonLightIntensity, 0, 1.0f);
			
			EditorGUILayout.Space();

			target.stormyMoonLightIntensity = EditorGUILayout.Slider ("Stormy Moon Intensity", target.stormyMoonLightIntensity, 0, 1.0f);
			
			EditorGUILayout.Space();
			
			target.moonColor = EditorGUILayout.ColorField("Moon Color", target.moonColor);
			
			EditorGUILayout.Space();
			
			target.shadowsDuringNight = EditorGUILayout.Toggle ("Shadows Enabled?",target.shadowsDuringNight);
			
			if (target.shadowsDuringNight)
			{
				EditorGUILayout.Space();
				
				editorNightShadowType = target.nightShadowType;
				editorNightShadowType = EditorGUILayout.EnumPopup("Shadow Type", editorNightShadowType);
	    		target.nightShadowType = editorNightShadowType;
	    		
	    		EditorGUILayout.Space();
				
				target.nightShadowIntensity = EditorGUILayout.Slider ("Shadow Intensity", target.nightShadowIntensity, 0, 1.0);
			}
			
			EditorGUILayout.Space();
			
			target.customMoonSize = EditorGUILayout.Toggle ("Customize Moon Size?",target.customMoonSize);
			
			EditorGUILayout.Space();
			
			if (target.customMoonSize)
			{
				target.moonSize = EditorGUILayout.IntSlider ("Moon Size", target.moonSize, 1, 15);
				
				EditorGUILayout.Space();
				
				EditorGUILayout.HelpBox("The Moon's size can be adjust on a scale of 1 to 15. This will change the default setting size of 3.5 to whatever value you use on with slider. ", MessageType.Info, true);
				
				EditorGUILayout.Space();
				EditorGUILayout.Space();
			}
			
			target.customMoonRotation = EditorGUILayout.Toggle ("Customize Moon Rotation?",target.customMoonRotation);
			
			if (target.customMoonRotation)
			{
				target.moonRotationY = EditorGUILayout.Slider ("Moon Rotation", target.moonRotationY, 0, 360);
				
				EditorGUILayout.Space();
				
				EditorGUILayout.HelpBox("The Moon's rotation, on the Z Axis, can be adjust on a scale of 0 to 360. This will change the default setting rotation of 0 to whatever value you use on with slider. The Z Axis adjusts which direction the bright side of the moon faces. ", MessageType.Info, true);
				
				EditorGUILayout.Space();
			}
			
			EditorGUILayout.Space();
			
			editorMoonPhase = target.moonPhaseCalculator;
			editorMoonPhase = EditorGUILayout.EnumPopup("Moon Phase", editorMoonPhase);
	    	target.moonPhaseCalculator = editorMoonPhase;
	    	
	    	EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
    	}
    	
    	
    	
			
		var showOrHide_precipitationOptions : String = "Show";
		if(target.precipitationOptions)
			showOrHide_precipitationOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_precipitationOptions + " Precipitation Options"))
		{
			target.precipitationOptions = !target.precipitationOptions;
		}
        
        if (target.precipitationOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 10)
		{
	    	//Weather Particle Slider Adjustments Rain
			EditorGUILayout.LabelField("Precipitation Options", EditorStyles.boldLabel);
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("The Precipitation Options allow you to set a max number for weather that uses particles. This is useful for keeping draw calls low and keeping the frame rate high. Each game is different so these options are completely customizable.", MessageType.None, true);
	    	}
	    	
	    	EditorGUILayout.Space();
	    	
	    	target.randomizedPrecipitation = EditorGUILayout.Toggle ("Randomize Precipitation?",target.randomizedPrecipitation);
	    	
	    	EditorGUILayout.Space();
	    	
	    	if (target.randomizedPrecipitation)
	    	{
	    		EditorGUILayout.HelpBox("Selecting randomized weather generates new precipitation maxes for every storm. While Randomize Precipitation is selected the maxes below are the caps of the max possible precipitation generation for that weather type.", MessageType.Info, true);
	    	}
	    	
	    	EditorGUILayout.Space();
	    	
	    	target.useRainStreaks = EditorGUILayout.Toggle ("Use Rain Streaks?",target.useRainStreaks);
	    	
	    	if (target.useRainStreaks)
	    	{
	    		EditorGUILayout.HelpBox("While Use Rain Streaks is enabled UniStorm will use the rain streaks particle effect to simulate rain streaks during the heavy rain precipitation weather types.", MessageType.Info, true);
	    	}
	    	
	    	EditorGUILayout.Space();
			
			target.UseRainMist = EditorGUILayout.Toggle ("Use Rain Mist?",target.UseRainMist);
			
			if (target.UseRainMist)
			{
				EditorGUILayout.HelpBox("While Use Rain Mist is enabled UniStorm will use the rain mist particle effect to simulate windy rain during the heavy rain precipitation weather types.", MessageType.Info, true);
			}
			
			EditorGUILayout.Space();
			
			target.UseRainSplashes = EditorGUILayout.Toggle ("Use Rain Splashes?",target.UseRainSplashes);
			
			if (target.UseRainSplashes)
			{
				EditorGUILayout.HelpBox("When using Rain Splashes UniStorm will have splashes spawn where the rain collisions hit. This allows rain splashes to collide with objects and create splash effects.", MessageType.Info, true);
			}
			
			EditorGUILayout.Space();
			
			target.stormControl = EditorGUILayout.Toggle ("Use Precipitation Control?",target.stormControl);
			
			EditorGUILayout.Space();
			
			if (target.stormControl)
			{
				target.forceWeatherChange = EditorGUILayout.IntSlider ("Change Weather Days", target.forceWeatherChange, 1, 7);
				
				EditorGUILayout.HelpBox("When using Precipitation Control UniStorm will change the weather after the set amount of consecutive stormy days has been reached. This is helpful to help control (in rare cases) it raining or snowing for too long.", MessageType.Info, true);
			}
			
			EditorGUILayout.Space();
	    	
	    	//target.currentGeneratedIntensity = EditorGUILayout.IntField ("currentGeneratedIntensity", target.currentGeneratedIntensity);
	    	
	    	//EditorGUILayout.Space();
	    	
	    	target.maxLightRainIntensity = EditorGUILayout.IntSlider ("Light Rain Intensity", target.maxLightRainIntensity, 1, 500);
	    	target.maxLightRainMistCloudsIntensity = EditorGUILayout.IntSlider ("Light Rain Mist Intensity", target.maxLightRainMistCloudsIntensity, 0, 6);
	    	target.maxStormRainIntensity = EditorGUILayout.IntSlider ("Heavy Rain Intensity", target.maxStormRainIntensity, 1, 5000);
	    	target.maxStormMistCloudsIntensity = EditorGUILayout.IntSlider ("Heavy Rain Streaks Intensity", target.maxStormMistCloudsIntensity, 0, 50);
	    	target.maxHeavyRainMistIntensity = EditorGUILayout.IntSlider ("Heavy Rain Mist Intensity", target.maxHeavyRainMistIntensity, 0, 50);
	    	
	    	EditorGUILayout.Space();
	    	
	    	//Weather Particle Slider Adjustments Snow
	    	target.maxLightSnowIntensity = EditorGUILayout.IntSlider ("Light Snow Intensity", target.maxLightSnowIntensity, 1, 500);
	    	target.maxLightSnowDustIntensity = EditorGUILayout.IntSlider ("Light Snow Dust Intensity", target.maxLightSnowDustIntensity, 0, 20);
	    	target.maxSnowStormIntensity = EditorGUILayout.IntSlider ("Heavy Snow Intensity", target.maxSnowStormIntensity, 1, 3000);
	    	target.maxHeavySnowDustIntensity = EditorGUILayout.IntSlider ("Heavy Snow Dust Intensity", target.maxHeavySnowDustIntensity, 0, 50);
	    	
	    	EditorGUILayout.Space();
	    	
	    	target.useCustomPrecipitationSounds = EditorGUILayout.Toggle ("Use Custom Sounds?",target.useCustomPrecipitationSounds);
	    	
	    	if (target.useCustomPrecipitationSounds)
	    	{
	    		EditorGUILayout.Space();
	    		
	    		EditorGUILayout.HelpBox("While Use Custom Sounds is enabled UniStorm will use these sounds for the precipitation noises instead of UniStorm's default sounds. If the audio slots below are empty no sounds will play during precipiation weather types.", MessageType.Info, true);
	    		
	    		var customRainSound : boolean = !EditorUtility.IsPersistent (target);
	    		target.customRainSound = EditorGUILayout.ObjectField ("Rain Sound", target.customRainSound, AudioClip, customRainSound);
	    		
	    		var customRainWindSound : boolean = !EditorUtility.IsPersistent (target);
	    		target.customRainWindSound = EditorGUILayout.ObjectField ("Rain Wind Sound", target.customRainWindSound, AudioClip, customRainWindSound);
	    		
	    		var customSnowWindSound : boolean = !EditorUtility.IsPersistent (target);
	    		target.customSnowWindSound = EditorGUILayout.ObjectField ("Snow Wind Sound", target.customSnowWindSound, AudioClip, customSnowWindSound);
	    	}
	    	
	    	EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
    	}

    	
    	
			
		var showOrHide_GUIOptions : String = "Show";
		if(target.GUIOptions)
			showOrHide_GUIOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_GUIOptions + " GUI Options"))
		{
			target.GUIOptions = !target.GUIOptions;
		}
        
        if (target.GUIOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 11)
		{
			EditorGUILayout.LabelField("GUI Options", EditorStyles.boldLabel);
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("GUI Options are useful for development and can be enabled and disabled in-game by pressing F12, or for mobile devices pressing 2 fingers on the screen and 3 for disabling it. The checkboxes below control what is turned on when the GUI Options are enabled. If you don't want either on unckeck both checkboxes.", MessageType.None, true);
	    	}
	    	
	    	target.timeScrollBarUseable = EditorGUILayout.Toggle ("Time Scroll Bar",target.timeScrollBarUseable);
	    	target.weatherCommandPromptUseable = EditorGUILayout.Toggle ("WCPS Enabled",target.weatherCommandPromptUseable);
	    	
	    	EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
    	}
    	
    	
		
		
		var showOrHide_soundManagerOptions : String = "Show";
		if(target.soundManagerOptions)
			showOrHide_soundManagerOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_soundManagerOptions + " Sound Manager Options"))
		{
			target.soundManagerOptions = !target.soundManagerOptions;
		}
        
        if (target.soundManagerOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 12)
		{
	    	//Sound Manager Options
			EditorGUILayout.LabelField("Sound Manager Options", EditorStyles.boldLabel);
			
	    	if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("The Sound Manager allows you to set an array of sounds that will play dynamically for each time of each day according to the min and max seconds set within the editor (One for morning, day, evening, and night) An example for this could be birds in the morning and evening, wind during the day, and crickets at night. UniStorm will pick from a selection of up to 20 sounds (for each time of day) that will play throughout the day and night. You can choose to enable or disable sounds for each time of day using the checkboxes below.", MessageType.None, true);
	    	}
	    	
	    	target.timeToWaitMin = EditorGUILayout.IntField ("Min Wait Time", target.timeToWaitMin);
	    	target.timeToWaitMax = EditorGUILayout.IntField ("Max Wait Time", target.timeToWaitMax);
	    	
	    	EditorGUILayout.Space();
	    	
	    	target.useMorningSounds = EditorGUILayout.Toggle ("Use Morning Sounds?",target.useMorningSounds);
	    	target.useDaySounds = EditorGUILayout.Toggle ("Use Day Sounds?",target.useDaySounds);
	    	target.useEveningSounds = EditorGUILayout.Toggle ("Use Evening Sounds?",target.useEveningSounds);
	    	target.useNightSounds = EditorGUILayout.Toggle ("Use Night Sounds?",target.useNightSounds);
	    	
	    	EditorGUILayout.Space();
			
			//Sound Manager Lists
			//Morning
			var sk : UniStormWeatherSystem_JS = target as UniStormWeatherSystem_JS;
			
			if (target.useMorningSounds)
			{
			
			EditorGUILayout.BeginVertical ();
	        sk.morningSize = EditorGUILayout.IntSlider("Morning Sound Size", sk.morningSize, 1, 20);
	        
	        EditorGUILayout.Space();
	 
	        if(sk.morningSize > sk.foldOutList.Count)              //If the counter is greater then foldout count
	        {
	            var temp = (sk.morningSize - sk.foldOutList.Count);
	            for(jmorning = 0; jmorning < temp ; jmorning++)
	                    sk.foldOutList.Add(true);                      
	        }
	 
	        if(sk.morningSize > sk.ambientSoundsMorning.Count)               //If the Slider is higher add more elements.   
	        {
	            var temp1 = sk.morningSize - sk.ambientSoundsMorning.Count;
	            for(jmorning = 0; jmorning < temp1 ; jmorning++)
	            {
	                sk.ambientSoundsMorning.Add(new AudioClip() );    //Add a new Audio Clip
	            }
	        }
	 
	        if(sk.ambientSoundsMorning.Count > sk.morningSize)
	        {
	            sk.ambientSoundsMorning.RemoveRange( (sk.morningSize), sk.ambientSoundsMorning.Count - (sk.morningSize)); // If the list is longer then the set morningSize         
	            sk.foldOutList.RemoveRange( (sk.morningSize), sk.foldOutList.Count-(sk.morningSize));
	        }
	 
	        for( var imorning : int = 0; imorning < sk.ambientSoundsMorning.Count; imorning++){                   
	            sk.ambientSoundsMorning[imorning] = EditorGUILayout.ObjectField("Morning Sound " + imorning + ":" , sk.ambientSoundsMorning[imorning], AudioClip, true) as AudioClip;
	            GUILayout.Space(10);
	        }
	        EditorGUILayout.EndVertical ();
	        }
			
			if (target.useDaySounds)
			{
	    	//Day
			EditorGUILayout.BeginVertical ();
	        sk.daySize = EditorGUILayout.IntSlider("Day Sound Size", sk.daySize, 1, 20);
	        
	        EditorGUILayout.Space();
	 
	        if(sk.daySize > sk.foldOutList.Count)              //If the counter is greater then foldout count
	        {
	            var temp2 = (sk.daySize - sk.foldOutList.Count);
	            for(jday = 0; jday < temp2 ; jday++)
	                    sk.foldOutList.Add(true);                      
	        }
	 
	        if(sk.daySize > sk.ambientSoundsDay.Count)               //If the Slider is higher add more elements.   
	        {
	            var temp3 = sk.daySize - sk.ambientSoundsDay.Count;
	            for(jday = 0; jday < temp3 ; jday++)
	            {
	                sk.ambientSoundsDay.Add(new AudioClip() );    //Add a new Audio Clip
	            }
	        }
	 
	        if(sk.ambientSoundsDay.Count > sk.daySize)
	        {
	            sk.ambientSoundsDay.RemoveRange( (sk.daySize), sk.ambientSoundsDay.Count - (sk.daySize)); // If the list is longer then the set daySize         
	            sk.foldOutList.RemoveRange( (sk.daySize), sk.foldOutList.Count-(sk.daySize));
	        }
	 
	        for( var iday : int = 0; iday < sk.ambientSoundsDay.Count; iday++){                   
	            sk.ambientSoundsDay[iday] = EditorGUILayout.ObjectField("Day Sound " + iday + ":" , sk.ambientSoundsDay[iday], AudioClip, true) as AudioClip;
	            GUILayout.Space(10);
	        }
	        EditorGUILayout.EndVertical ();		
	        }
			
			if (target.useEveningSounds)
			{
			//Evening
			EditorGUILayout.BeginVertical ();
	        sk.eveningSize = EditorGUILayout.IntSlider("Evening Sound Size", sk.eveningSize, 1, 20);
	        
	        EditorGUILayout.Space();
	 
	        if(sk.eveningSize > sk.foldOutList.Count)              //If the counter is greater then foldout count
	        {
	            var temp4 = (sk.eveningSize - sk.foldOutList.Count);
	            for(jevening = 0; jevening < temp4 ; jevening++)
	                    sk.foldOutList.Add(true);                      
	        }
	 
	        if(sk.eveningSize > sk.ambientSoundsEvening.Count)               //If the Slider is higher add more elements.   
	        {
	            var temp5 = sk.eveningSize - sk.ambientSoundsEvening.Count;
	            for(jevening = 0; jevening < temp5 ; jevening++)
	            {
	                sk.ambientSoundsEvening.Add(new AudioClip() );    //Add a new Audio Clip
	            }
	        }
	 
	        if(sk.ambientSoundsEvening.Count > sk.eveningSize)
	        {
	            sk.ambientSoundsEvening.RemoveRange( (sk.eveningSize), sk.ambientSoundsEvening.Count - (sk.eveningSize)); // If the list is longer then the set eveningSize         
	            sk.foldOutList.RemoveRange( (sk.eveningSize), sk.foldOutList.Count-(sk.eveningSize));
	        }
	 
	        for( var ievening : int = 0; ievening < sk.ambientSoundsEvening.Count; ievening++){                   
	            sk.ambientSoundsEvening[ievening] = EditorGUILayout.ObjectField("Evening Sound " + ievening + ":" , sk.ambientSoundsEvening[ievening], AudioClip, true) as AudioClip;
	            GUILayout.Space(10);
	        }
	        EditorGUILayout.EndVertical ();
	        }
	        
	        if (target.useNightSounds)
			{
	    	//Night
			EditorGUILayout.BeginVertical ();
	        sk.nightSize = EditorGUILayout.IntSlider("Night Sound Size", sk.nightSize, 1, 20);
	        
	        EditorGUILayout.Space();
	 
	        if(sk.nightSize > sk.foldOutList.Count)              //If the counter is greater then foldout count
	        {
	            var temp6 = (sk.nightSize - sk.foldOutList.Count);
	            for(jnight = 0; jnight < temp6 ; jnight++)
	                    sk.foldOutList.Add(true);                      
	        }
	 
	        if(sk.nightSize > sk.ambientSoundsNight.Count)               //If the Slider is higher add more elements.   
	        {
	            var temp7 = sk.nightSize - sk.ambientSoundsNight.Count;
	            for(jnight = 0; jnight < temp7 ; jnight++)
	            {
	                sk.ambientSoundsNight.Add(new AudioClip() );    //Add a new Audio Clip
	            }
	        }
	 
	        if(sk.ambientSoundsNight.Count > sk.nightSize)
	        {
	            sk.ambientSoundsNight.RemoveRange( (sk.nightSize), sk.ambientSoundsNight.Count - (sk.nightSize)); // If the list is longer then the set nightSize         
	            sk.foldOutList.RemoveRange( (sk.nightSize), sk.foldOutList.Count-(sk.nightSize));
	        }
	 
	        for( var inight : int = 0; inight < sk.ambientSoundsNight.Count; inight++){                   
	            sk.ambientSoundsNight[inight] = EditorGUILayout.ObjectField("Night Sound " + inight + ":" , sk.ambientSoundsNight[inight], AudioClip, true) as AudioClip;
	            GUILayout.Space(10);
	        }
	        EditorGUILayout.EndVertical ();		
	        }
	        
	        EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
        }
        
        
        
		
		
		var showOrHide_colorOptions : String = "Show";
		if(target.colorOptions)
			showOrHide_colorOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_colorOptions + " Color Options"))
		{
			target.colorOptions = !target.colorOptions;
		}
        
        if (target.colorOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 13)
		{
    	
	    	//Ambient Light Colors
			EditorGUILayout.LabelField("Color Options", EditorStyles.boldLabel);
			
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Here you control every color component UniStorm uses. There is one for Morning, Day, Evening, and Night. UniStorm will seamlessly transition to each time of day using the colors you have set for the time of day.", MessageType.None, true);
	    	}
	    	
	    	target.cloudColorMorning = EditorGUILayout.ColorField("Clouds Morning", target.cloudColorMorning);
			target.cloudColorDay = EditorGUILayout.ColorField("Clouds Day", target.cloudColorDay);
			target.cloudColorEvening = EditorGUILayout.ColorField("Clouds Evening", target.cloudColorEvening);
			target.cloudColorNight = EditorGUILayout.ColorField("Clouds Night", target.cloudColorNight);
			
			EditorGUILayout.Space();
			EditorGUILayout.Space();
	    	
	    	target.TwilightAmbientLight = EditorGUILayout.ColorField("Ambient Twilight", target.TwilightAmbientLight);
	    	target.MorningAmbientLight = EditorGUILayout.ColorField("Ambient Morning", target.MorningAmbientLight);
	    	target.MiddayAmbientLight = EditorGUILayout.ColorField("Ambient Day", target.MiddayAmbientLight);
	    	target.DuskAmbientLight = EditorGUILayout.ColorField("Ambient Evening", target.DuskAmbientLight);
	    	target.NightAmbientLight = EditorGUILayout.ColorField("Ambient Night", target.NightAmbientLight);
	    	
	    	//Sun Colors
	    	EditorGUILayout.Space();
	    	EditorGUILayout.Space();
	    	target.SunMorning = EditorGUILayout.ColorField("Sun Morning", target.SunMorning);
	    	target.SunDay = EditorGUILayout.ColorField("Sun Day", target.SunDay);
	    	target.SunDusk = EditorGUILayout.ColorField("Sun Evening", target.SunDusk);
	    	target.SunNight = EditorGUILayout.ColorField("Sun Night", target.SunNight);
		
	    	//Normal Fog Color
	    	EditorGUILayout.Space();
	    	EditorGUILayout.Space();
	    	target.fogMorningColor = EditorGUILayout.ColorField("Fog Morning", target.fogMorningColor);
	    	target.fogDayColor = EditorGUILayout.ColorField("Fog Day", target.fogDayColor);
	    	target.fogDuskColor = EditorGUILayout.ColorField("Fog Evening", target.fogDuskColor);
	    	target.fogNightColor = EditorGUILayout.ColorField("Fog Night", target.fogNightColor);
	    	
			//Storm Fog Color
			EditorGUILayout.Space();
			EditorGUILayout.Space();
			target.stormyFogColorMorning = EditorGUILayout.ColorField("Stormy Fog Morning", target.stormyFogColorMorning);
			target.stormyFogColorDay = EditorGUILayout.ColorField("Stormy Fog Day", target.stormyFogColorDay);
			target.stormyFogColorEvening = EditorGUILayout.ColorField("Stormy Fog Evening", target.stormyFogColorEvening);
			target.stormyFogColorNight = EditorGUILayout.ColorField("Stormy Fog Night", target.stormyFogColorNight);
	    	
	    	//Atmospheric Light Color
	    	EditorGUILayout.Space();
	    	EditorGUILayout.Space();
	    	target.MorningAtmosphericLight = EditorGUILayout.ColorField("Atmospheric Morning", target.MorningAtmosphericLight);
	    	target.MiddayAtmosphericLight = EditorGUILayout.ColorField("Atmospheric Day", target.MiddayAtmosphericLight);
	    	target.DuskAtmosphericLight = EditorGUILayout.ColorField("Atmospheric Evening", target.DuskAtmosphericLight);
	    	
	    	//Global Fog Colors
			EditorGUILayout.Space();
			EditorGUILayout.Space();
			target.stormyFogColorDay_GF = EditorGUILayout.ColorField("Stormy Global Fog Day", target.stormyFogColorDay_GF);
			target.stormyFogColorDuskDawn_GF = EditorGUILayout.ColorField("Stormy Global Fog Morning/Evening", target.stormyFogColorDuskDawn_GF);
			target.stormyFogColorNight_GF = EditorGUILayout.ColorField("Stormy Global Fog Night", target.stormyFogColorNight_GF);
	    	
	    	//Star Brightness
	    	//EditorGUILayout.Space();
	    	//EditorGUILayout.Space();
	    	//EditorGUILayout.LabelField("Fade Colors", EditorStyles.boldLabel);
	    	//target.starBrightness = EditorGUILayout.ColorField("Star Brightness", target.starBrightness);
	    	//target.moonFadeColor = EditorGUILayout.ColorField("Moon Fade", target.moonFadeColor);
	    	//target.moonColorFade = EditorGUILayout.ColorField("Dark Side Moon", target.moonColorFade);
	    	
	    	EditorGUILayout.Space();
    		EditorGUILayout.Space();
    		EditorGUILayout.Space();
    	}
    	
    	
        
        var showOrHide_objectOptions : String = "Show";
		if(target.objectOptions)
			showOrHide_objectOptions = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide_objectOptions + " Object Options"))
		{
			target.objectOptions = !target.objectOptions;
		}
        
        if (target.objectOptions && TabNumberProp.intValue == 15 || TabNumberProp.intValue == 14)
		{
			EditorGUILayout.LabelField("Object Fields", EditorStyles.boldLabel);
		
			if (target.helpOptions == true)
			{
				EditorGUILayout.HelpBox("Here is where all object related UniStorm objects are kept. All components are already applied. If you are missing a component you will be notified with Error Log that will tell you how to fix it. If you are using custom objects refer to UniStorm's Documentation.", MessageType.None, true);
			}

		//Sun Objects
		EditorGUILayout.Space();
		EditorGUILayout.LabelField("Light Components", EditorStyles.boldLabel);
		
    	var sunObject : boolean = !EditorUtility.IsPersistent (target);
        target.sun = EditorGUILayout.ObjectField ("Sun Light", target.sun, Light, sunObject);
        
        var moonLight : boolean = !EditorUtility.IsPersistent (target);
        target.moon = EditorGUILayout.ObjectField ("Moon Light", target.moon, Light, moonLight);
        
        var lightningLightObject : boolean = !EditorUtility.IsPersistent (target);
        target.lightSource = EditorGUILayout.ObjectField ("Lightning Light", target.lightSource, Light, lightningLightObject);
        
        EditorGUILayout.Space();
		EditorGUILayout.LabelField("Particle Systems", EditorStyles.boldLabel);
        
        //Weather Particle Effects
        var rainObject : boolean = !EditorUtility.IsPersistent (target);
        target.rain = EditorGUILayout.ObjectField ("Rain Particle System", target.rain, ParticleSystem, rainObject);
        
        var splashObject : boolean = !EditorUtility.IsPersistent (target);
        target.rainSplashes = EditorGUILayout.ObjectField ("Rain Splash System", target.rainSplashes, ParticleSystem, splashObject);
        
        var mistFogObject : boolean = !EditorUtility.IsPersistent (target);
        target.mistFog = EditorGUILayout.ObjectField ("Rain Streaks Particle System", target.mistFog, GameObject, mistFogObject);
        
        var windyRainObject : boolean = !EditorUtility.IsPersistent (target);
        target.rainMist = EditorGUILayout.ObjectField ("Rain Mist Particle System", target.rainMist, ParticleSystem, windyRainObject);
        
        var snowObject : boolean = !EditorUtility.IsPersistent (target);
        target.snow = EditorGUILayout.ObjectField ("Snow Particle System", target.snow, ParticleSystem, snowObject);
        
        var snowMistFogObject : boolean = !EditorUtility.IsPersistent (target);
        target.snowMistFog = EditorGUILayout.ObjectField ("Snow Dust Particle System", target.snowMistFog, ParticleSystem, snowMistFogObject);
        
        var butterflieObject : boolean = !EditorUtility.IsPersistent (target);
        target.butterflies = EditorGUILayout.ObjectField ("Lightning Bugs Particle System", target.butterflies, ParticleSystem, butterflieObject);  
        
        var windyLeavesObject : boolean = !EditorUtility.IsPersistent (target);
        target.windyLeaves = EditorGUILayout.ObjectField ("Windy Leaves Particle System", target.windyLeaves, ParticleSystem, windyLeavesObject);
        
        //Sound Objects
        EditorGUILayout.Space();
		EditorGUILayout.LabelField("Sound Components", EditorStyles.boldLabel);
		
        var rainSoundObject : boolean = !EditorUtility.IsPersistent (target);
        target.rainSound = EditorGUILayout.ObjectField ("Rain Sound Object", target.rainSound, GameObject, rainSoundObject);
        
        var windSoundObject : boolean = !EditorUtility.IsPersistent (target);
        target.windSound = EditorGUILayout.ObjectField ("Wind Rain Sound Object", target.windSound, GameObject, windSoundObject);
        
        var windSnowSoundObject : boolean = !EditorUtility.IsPersistent (target);
        target.windSnowSound = EditorGUILayout.ObjectField ("Wind Snow Sound Object", target.windSnowSound, GameObject, windSnowSoundObject);
        
        EditorGUILayout.Space();
		EditorGUILayout.LabelField("Sky Components", EditorStyles.boldLabel);
    	
    	//Sky Objects
    	var starObject : boolean = !EditorUtility.IsPersistent (target);
        target.starSphere = EditorGUILayout.ObjectField ("Star Sphere", target.starSphere, GameObject, starObject);
        
        var moon : boolean = !EditorUtility.IsPersistent (target);
        target.moonObject = EditorGUILayout.ObjectField ("Moon Object", target.moonObject, GameObject, moon);

        //Cloud Objects
        EditorGUILayout.Space();
		EditorGUILayout.LabelField("Cloud Objects", EditorStyles.boldLabel);
		
        var cloud1 : boolean = !EditorUtility.IsPersistent (target);
        target.lightClouds1 = EditorGUILayout.ObjectField ("Dynamic Light Clouds 1", target.lightClouds1, GameObject, cloud1);
        
        var cloud1a : boolean = !EditorUtility.IsPersistent (target);
        target.lightClouds1a = EditorGUILayout.ObjectField ("Dynamic Light Clouds 2", target.lightClouds1a, GameObject, cloud1a);
        
        var partlyCloudy1 : boolean = !EditorUtility.IsPersistent (target);
        target.partlyCloudyClouds1 = EditorGUILayout.ObjectField ("Dynamic Partly Cloudy Clouds 1", target.partlyCloudyClouds1, GameObject, partlyCloudy1);
        
        var partlyCloudy2 : boolean = !EditorUtility.IsPersistent (target);
        target.partlyCloudyClouds2 = EditorGUILayout.ObjectField ("Dynamic Partly Cloudy Clouds 2", target.partlyCloudyClouds2, GameObject, partlyCloudy2);
        
        var cloud2 : boolean = !EditorUtility.IsPersistent (target);
        target.lightClouds2 = EditorGUILayout.ObjectField ("Non-Dynamic Light Clouds", target.lightClouds2, GameObject, cloud2);
        
        var cloud3 : boolean = !EditorUtility.IsPersistent (target);
        target.lightClouds3 = EditorGUILayout.ObjectField ("Light Clouds 3", target.lightClouds3, GameObject, cloud3);
        
        var cloud4 : boolean = !EditorUtility.IsPersistent (target);
        target.lightClouds4 = EditorGUILayout.ObjectField ("Light Clouds 4", target.lightClouds4, GameObject, cloud4);
        
        var cloud5 : boolean = !EditorUtility.IsPersistent (target);
        target.lightClouds5 = EditorGUILayout.ObjectField ("Light Clouds 5", target.lightClouds5, GameObject, cloud5);
        
        var highcloud1 : boolean = !EditorUtility.IsPersistent (target);
        target.highClouds1 = EditorGUILayout.ObjectField ("High Clouds 1", target.highClouds1, GameObject, highcloud1);
        
        var highcloud2 : boolean = !EditorUtility.IsPersistent (target);
        target.highClouds2 = EditorGUILayout.ObjectField ("High Clouds 2", target.highClouds2, GameObject, highcloud2);
        
        var mostlyCloudy : boolean = !EditorUtility.IsPersistent (target);
        target.mostlyCloudyClouds = EditorGUILayout.ObjectField ("Mostly Cloudy Clouds", target.mostlyCloudyClouds, GameObject, mostlyCloudy);
        
        //1.7.5
        //Heavy Cloud Objects
        var storm1 : boolean = !EditorUtility.IsPersistent (target);
        target.heavyClouds = EditorGUILayout.ObjectField ("Base Storm Clouds", target.heavyClouds, GameObject, storm1);
        
        var storm2 : boolean = !EditorUtility.IsPersistent (target);
        target.heavyCloudsLayer1 = EditorGUILayout.ObjectField ("Non-Dynamic Storm Clouds", target.heavyCloudsLayer1, GameObject, storm2);
       
        var storm3 : boolean = !EditorUtility.IsPersistent (target);
        target.heavyCloudsLayerLight = EditorGUILayout.ObjectField ("Dynamic Storm Clouds", target.heavyCloudsLayerLight, GameObject, storm3);
        
        EditorGUILayout.Space();
		EditorGUILayout.LabelField("Unity Components", EditorStyles.boldLabel);
        //Camera Object
        var cameraObject : boolean = !EditorUtility.IsPersistent (target);
        target.cameraObject = EditorGUILayout.ObjectField ("Camera Object", target.cameraObject, GameObject, cameraObject);
    	
    	var windZoneObject : boolean = !EditorUtility.IsPersistent (target);
        target.windZone = EditorGUILayout.ObjectField ("Wind Zone", target.windZone, GameObject, windZoneObject);
    	
    	//Skybox Materials
    	EditorGUILayout.Space();
		EditorGUILayout.LabelField("Skybox Material", EditorStyles.boldLabel);
		
    	var SkyBoxMaterial : boolean = !EditorUtility.IsPersistent (target);
    	target.SkyBoxMaterial = EditorGUILayout.ObjectField ("Skybox Material", target.SkyBoxMaterial, Material, SkyBoxMaterial);
    	
    	
    	//Moon Phase Materials
    	EditorGUILayout.Space();
		EditorGUILayout.LabelField("Moon Phase Materials", EditorStyles.boldLabel);
		
    	var moonPhaseMat1 : boolean = !EditorUtility.IsPersistent (target);
    	target.moonPhase1 = EditorGUILayout.ObjectField ("Moon Phase 1", target.moonPhase1, Material, moonPhaseMat1);
    	
    	var moonPhaseMat2 : boolean = !EditorUtility.IsPersistent (target);
    	target.moonPhase2 = EditorGUILayout.ObjectField ("Moon Phase 2", target.moonPhase2, Material, moonPhaseMat2);
    	
    	var moonPhaseMat3 : boolean = !EditorUtility.IsPersistent (target);
    	target.moonPhase3 = EditorGUILayout.ObjectField ("Moon Phase 3", target.moonPhase3, Material, moonPhaseMat3);
    	
    	var moonPhaseMat4 : boolean = !EditorUtility.IsPersistent (target);
    	target.moonPhase4 = EditorGUILayout.ObjectField ("Moon Phase 4", target.moonPhase4, Material, moonPhaseMat4);
    	
    	var moonPhaseMat5 : boolean = !EditorUtility.IsPersistent (target);
    	target.moonPhase5 = EditorGUILayout.ObjectField ("Moon Phase 5", target.moonPhase5, Material, moonPhaseMat5);
    	
    	var moonPhaseMat6 : boolean = !EditorUtility.IsPersistent (target);
    	target.moonPhase6 = EditorGUILayout.ObjectField ("Moon Phase 6", target.moonPhase6, Material, moonPhaseMat6);
    	
    	var moonPhaseMat7 : boolean = !EditorUtility.IsPersistent (target);
    	target.moonPhase7 = EditorGUILayout.ObjectField ("Moon Phase 7", target.moonPhase7, Material, moonPhaseMat7);
    	
    	var moonPhaseMat8 : boolean = !EditorUtility.IsPersistent (target);
    	target.moonPhase8 = EditorGUILayout.ObjectField ("Moon Phase 8", target.moonPhase8, Material, moonPhaseMat8);
    	
    	
    	//var lightningSounds : boolean = !EditorUtility.IsPersistent (target);
    	//target.lightningSound = EditorGUILayout.ObjectField ("Lightning Sounds", target.lightningSound, AudioClip, lightningSounds);
    	
    	EditorGUILayout.Space();
        EditorGUILayout.Space();
        EditorGUILayout.Space();
        
        }
        
        
        
        var showOrHide2 : String = "Show";
		if(target.helpOptions)
			showOrHide2 = "Hide";
    	if(TabNumberProp.intValue == 15 && GUILayout.Button(showOrHide2 + " Help Options"))
		{
			target.helpOptions = !target.helpOptions;
		}
        
       
        
        GUILayout.BeginHorizontal();
        

        GUILayout.EndHorizontal();
        
        //Added 1.8.2
        //UniStorm will no longer revert to prefab settings
        if (GUI.changed && !EditorApplication.isPlaying) 
		{ 
			EditorApplication.MarkSceneDirty(); 
		}
        
        serializedObject.ApplyModifiedProperties ();
    }

}