package com.baretest;


import android.util.Log;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.roam.sdk.callback.RoamLogoutCallback;
import com.roam.sdk.models.RoamError;
import com.roam.sdk.Roam;

public class RoamModule extends ReactContextBaseJavaModule{

    ReactContext reactContext;

    public RoamModule(@Nullable ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @NonNull
    @Override
    public String getName() {
        return "RoamModule";
    }

    @ReactMethod
    public void initializeRoam(String publishableKey){
        Log.e("ROAM", "ROAM SDK initializing...");
        Roam.initialize(this.reactContext, publishableKey);
    }



}

