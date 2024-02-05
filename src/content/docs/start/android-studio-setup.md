---
title: Android Studio Set Up
description: This course made by students, for students 
---

Once you have installed Android Studio, it is time to open it for the first time.

* When asked for 'Import configuration settings', select 'Do not import settings'.
* Choose 'Standard' when asked for the installation type.
* Accept all agreements so that all packages are downloaded.

* The installation may take a while to finish.

* Once installed, select 'Create New Project' and select the 'Basic Views Activity'.
    * You can put any name you want or leave it as it is.
    * Make sure to select Java as the project's Language.
    * Do not change anything else.

![Basic views activity selected](/src/assets/basic-views-activity-selected.png)

![Project name input and java selected](/src/assets/java-selected.png)

It will take a couple minutes to import all neccesary code.

## Create a virtual device
* Look at the topside of the toolbar and look for this icon. [Insertar icono]
* Alternatively, you can go to Tools > AVD Manager and select the option.
* Choose a device definition, such as Pixel 2, and click Next. (We recommend to choose older, less resource intensive models depending on the specifications of your computer).
* In the System Image dialog, from the Recommended tab, choose the latest release.
* If a Download link is visible next to a latest release, it is not installed yet, and you need to download it first. If necessary, click the link to start the download, and click Next when it's done. This may take a while depending on your connection speed.
* In the next dialog box, accept the defaults, and click Finish.


## Connect your own Android Device (optional)
We recommend to use your own physical Android device if your system's performance is severely affected by the virtual machine.
You will need:
* An Android device.
* An USB connection cable.
* Having USB debugging enabled on your Android device.

On Android 4.2 and higher, the Developer options screen is hidden by default. To show Developer options and enable USB Debugging:

* On your device, open Settings > About phone and tap Build number seven times.
* Return to the previous screen (Settings). Developer options appears at the bottom of the list. Tap Developer options.
* Enable USB Debugging.

Now you can connect your device and run the app from Android Studio.

* Connect your device to your development machine with a USB cable. On the device, you might need to agree to allow USB debugging from your development device.
* Your device's screen will start to be mirrored in your computer.

## Run your new application
* In Android Studio, select Run > Run ‘app' or click the Run icon in the toolbar. The icon will change when your app is already running.

* If you get a dialog box stating "Instant Run requires that the platform corresponding to your target device (Android N...) is installed" go ahead and click Install and continue.

* In Run > Select Device, under Available devices, select the virtual device that you just configured. This menu also appears in the toolbar. You can also select your physical device if it's currently connected by USB.

The emulator starts and boots just like a physical device. Depending on the speed of your computer, this may take a while. Physical devices tend to be faster in this regard.



