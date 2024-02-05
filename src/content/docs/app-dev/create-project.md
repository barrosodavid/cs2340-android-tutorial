---
title: Get familiarized with Android Studio
description: A reference page in my new Starlight docs site.
---

Whether you ended up using an emulator or connected to a physical device, you should now see the default app screen of a Basic Views Activity.

# Changing layout

In order to change the default app screen, you can go to the `res` folder and then to the `layout` folder. There you will find the `activity_main.xml` file. This file contains the layout of the app's main screen. You can change the layout by dragging and dropping elements from the Palette to the Component Tree or the Design view.

![activity_main.xml file](/cs2340-android-tutorial/activity-main-xml.png)

:::caution[Android project hierarchy view]
If you don't see the same folders in the file hierarchy, make sure to select Android just below the name of the application
:::

![Android project hierarchy view](/cs2340-android-tutorial/android-view.png)

Then, there is also `fragment_first.xml` and `fragment_second.xml` files. These files contain the layout of the fragments that are used in the app, when you navigate from one screen to another. You can also change the layout of these fragments by dragging and dropping elements from the Palette to the Component Tree or the Design view.

When opening a .xml file in design view, you will see an attributes panel to the right. This panel allows you to change the properties of the selected element.

![Panels in design view](/cs2340-android-tutorial/layout-panels.png)

Feel free to explore the interface and get familiarized with the different panels and options, adjusting them to your liking. You can also check the [official documentation](https://developer.android.com/studio/intro) for more information.

## Restore default layout 

If you ever minimized any of the panels, and you don't know how to open it back, you can always go to Options > Window > Layouts > Restore Default Layout.

![Restore default layout](/cs2340-android-tutorial/restore-default-layout.png)

## Root layout

In the Component Tree of `fragment_first.xml` and `fragment_second.xml` files, you will see a `ConstraintLayout` as the root layout. This is the default layout for new projects. You could change it to another layout by right-clicking on the root layout and selecting `Convert view` > `...` and then selecting the layout you want to change to. Throughout this tutorial we will use ConstraintLayout as the root layout.

Notice that we can also look at the code of the layout by clicking on the `Code` tab at the top right of the attributes panel.

![Code view button](/cs2340-android-tutorial/code-view-button.png)

## Change property values

When you're building your app's layout, it's essential to tweak various properties to get things looking just right. Let's dive into changing some values!

```xml
<TextView
   android:layout_width="wrap_content"
   android:layout_height="wrap_content"
   android:text="@string/lorem_ipsum"
   ... />
```

See that android:text property? It's currently set to "@string/lorem_ipsum" But what if you want to change it? You can do so by changing the value of the string resource in the `strings.xml` file.

```xml
<string name="lorem_ipsum">Lorem ipsum...</string>
```

For instance, let's change it to say "Hello first fragment!".

```xml
<string name="lorem_ipsum">Hello first fragment!</string>
```

