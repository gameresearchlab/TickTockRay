
How to compile unity watchcasting VR project:

Complete things in unity

Export project as google project.

Notice that it creates two files:
        The app name (watchcasting)
        and a default module for the app (ovrplugin)

Open Android Studio

Click "Import project"

Go to directory with both files.

Import the oculus module (ovrplugin) into another folder, make sure it is different
or Android Studio might give you hell

You can close this window and do another import for the main app file (watchcasting).

When it opens, you will notice the module (ovrplugin) as a tab as well as the main app name (watchcasting-watchcasting)

Go to the module -> manifests -> AndroidManifest.xml

COPY/PASTE THIS:

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.oculus.Integration" android:versionName="1.0.0" android:versionCode="1">
  <application>
    <meta-data android:name="com.samsung.android.vr.application.mode" android:value="vr_only"/>
  </application>
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.WAKE_LOCK" />
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
</manifest>

Go to the Gradle Scripts tag -> build.gradle(Module: name-name)

PLACE INTO DEPENDENCIES AS THE FIRST LISTING:

    compile 'com.google.android.gms:play-services:9.0.2'

Click on name-name (watchcasting-watchcasting) -> Manifests -> AndroidManifest.xml


COPY/PASTE

<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android" android:versionCode="1" android:versionName="1.0" package="com.kpicture.watchcasting" android:installLocation="preferExternal">
  <supports-screens android:smallScreens="true" android:normalScreens="true" android:largeScreens="true" android:xlargeScreens="true" android:anyDensity="true" />
  <uses-sdk android:minSdkVersion="19" android:targetSdkVersion="23" />
  <application android:theme="@style/UnityThemeSelector" android:icon="@drawable/app_icon" android:label="@string/app_name" android:debuggable="true" android:isGame="true" android:banner="@drawable/app_banner">
    <activity android:label="@string/app_name" android:screenOrientation="fullSensor" android:launchMode="singleTask" android:configChanges="mcc|mnc|locale|touchscreen|keyboard|keyboardHidden|navigation|orientation|screenLayout|uiMode|screenSize|smallestScreenSize|fontScale" android:name="com.kpicture.watchcasting.UnityPlayerActivity">
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <category android:name="android.intent.category.LAUNCHER" />
        <category android:name="android.intent.category.LEANBACK_LAUNCHER" />
      </intent-filter>
      <meta-data android:name="unityplayer.UnityActivity" android:value="true" />
    </activity>
    <service android:name=".ListenToWearableService" android:enabled="true" android:exported="true"></service>
  </application>

  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.WAKE_LOCK" />
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.BLUETOOTH" />
  <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-feature android:glEsVersion="0x00020000" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" android:maxSdkVersion="18" />
  <uses-feature android:name="android.hardware.touchscreen" android:required="false" />
  <uses-feature android:name="android.hardware.touchscreen.multitouch" android:required="false" />
  <uses-feature android:name="android.hardware.touchscreen.multitouch.distinct" android:required="false" />

  <uses-feature android:glEsVersion="0x00030000" android:required="true" />
  <meta-data android:name="com.samsung.android.vr.application.mode"
      android:value="vr_only"/>


</manifest>


Go to main package and create ListenToWearableService.java

COPY/PASTE

package com.kpicture.watchcasting;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;

import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.api.GoogleApiClient;
import com.google.android.gms.wearable.MessageApi;
import com.google.android.gms.wearable.MessageEvent;
import com.google.android.gms.wearable.Wearable;
import com.google.android.gms.wearable.WearableListenerService;


public class ListenToWearableService extends WearableListenerService {
    public static String message = "nothing";
    public Context con;
    public void onCreate() {
        con = this;
        new Thread(new Runnable()
        {
            @Override
            public void run() {

                GoogleApiClient mGoogleApiClient = new GoogleApiClient.Builder(con)
                        .addConnectionCallbacks(new GoogleApiClient.ConnectionCallbacks() {
                            @Override
                            public void onConnected(Bundle connectionHint) {
                                Log.e("WATCHCASTING:", "onConnected: " + connectionHint);
                                // Now you can use the Data Layer API
                            }

                            @Override
                            public void onConnectionSuspended(int cause) {
                                Log.e("WATCHCASTING:", "onConnectionSuspended: " + cause);
                            }
                        })
                        .addOnConnectionFailedListener(new GoogleApiClient.OnConnectionFailedListener() {
                            @Override
                            public void onConnectionFailed(ConnectionResult result) {
                                Log.e("WATCHCASTING:", "onConnectionFailed: " + result);
                            }
                        })
                        // Request access only to the Wearable API
                        .addApi(Wearable.API)
                        .build();

                mGoogleApiClient.connect();


                Log.e("WATCHCASTING", "Watch connected? :" + mGoogleApiClient.isConnected());

                Wearable.MessageApi.addListener(mGoogleApiClient, new MessageApi.MessageListener() {
                    @Override
                    public void onMessageReceived(MessageEvent messageEvent) {
                        try {
                            message = (new String(messageEvent.getData()));

                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                });
            }
        }).start();
    }

    public static String getCurrentData(){
        return message;
    }
}


Go to UnityPlayerActivity

PLACE AFTER getWindow()

Intent intent = new Intent(this, ListenToWearableService.class);
		startService(intent);

REBUILD

Don't forget to put the oculusSigs
