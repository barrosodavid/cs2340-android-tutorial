---
title: Troubleshooting
description: Here are some of the most common issues we have found that may affect you in the completion of this tutorial
---

Here are some of the most common issues we have found that may affect you in the completion of this tutorial

## Common Android Studio installation issues

---

### Can't execute Android emulator with AMD processor
If you are using an AMD processor, you may encounter issues when trying to run the Android emulator. This is because the emulator requires hardware acceleration to work properly. To solve this issue, you can use the following alternatives:

- Check [this](https://developer.android.com/studio/run/emulator-troubleshooting) official documentation for a possible solution.
- Use a physical Android device to run your app connecting it with USB.
- Use a third-party emulator like BlueStacks, Genymotion, Nexus...

## Common development issues

---

### The Android Gradle plugin supports only Kotlin Gradle plugin version 1.3.40 and higher
Check [this](https://stackoverflow.com/questions/54858510/kotlin-compile-error-the-android-gradle-plugin-supports-only-kotlin-gradle-plu) StackOverflow thread for a possible solution.

### Duplicate class found error
Check [this](https://stackoverflow.com/questions/75263047/duplicate-class-in-kotlin-android) StackOverflow thread for a possible solution.

### Execution failed for task `':app:processDebugLocalResources'`

- Check if you are using iCloud to store your projects. If you are, this might be the cause of the issue.

Because iCloud is constantly trying to sync up changes you have made, it creates duplicates. Anyone working with Android Studio may want to save projects locally or using Git instead.