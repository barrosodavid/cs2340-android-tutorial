---
title: Implementing second fragment
description: This course made by students, for students
---

In this section, we'll dive deeper into refining the user interface for the second fragment of your Android app. The goal is to update the Random button, enabling it to showcase a random number between 0 and the current count on a designated screen.

# What You'll Learn

1. How to transfer information to a second fragment.

# Step 1: Add a TextView for the Random Number

Open fragment_second.xml (located at app > res > layout > fragment_second.xml). Remove chain constraints between the existing TextView and Button, and let's introduce a new TextView to display the random number. This enhancement will give your app a dynamic and interactive feel.

Configure the new TextView as follows:

-   ID: @+id/textview_random (textview_random in the Attributes panel)
-   Constraints: Top edge below the first TextView, left edge to the left of the screen, right edge to the right of the screen, and bottom to the top of the Previous button.
-   Dimensions: Width and height set to wrap_content.
-   Appearance: Text color set to @android:color/white, text size to 72sp, and text style to bold.
-   Text: Initially set to "R" (a placeholder until the random number is generated).
-   Layout: layout_constraintVertical_bias set to 0.45.

Here is the XML code for the new TextView:

```xml
<TextView
   android:id="@+id/textview_random"
   android:layout_width="wrap_content"
   android:layout_height="wrap_content"
   android:text="R"
   android:textColor="@android:color/white"
   android:textSize="72sp"
   android:textStyle="bold"
   app:layout_constraintBottom_toTopOf="@+id/button_second"
   app:layout_constraintEnd_toEndOf="parent"
   app:layout_constraintStart_toStartOf="parent"
   app:layout_constraintTop_toBottomOf="@+id/textview_second"
   app:layout_constraintVertical_bias="0.45" />
```

# Step 2: Update the TextView to Display the Header

Now, let's enhance the visual appeal of the TextView responsible for displaying the header. Open fragment_second.xml, select textview_second, and set the text to the string resource @string/hello_second_fragment. Change the ID to textview_header and adjust the width, height, margins, text color, and text size as follows:

```xml
<TextView
   android:id="@+id/textview_header"
   android:layout_width="0dp"
   android:layout_height="wrap_content"
   android:layout_marginStart="24dp"
   android:layout_marginLeft="24dp"
   android:layout_marginTop="24dp"
   android:layout_marginEnd="24dp"
   android:layout_marginRight="24dp"
   android:text="@string/random_heading"
   android:textColor="@color/colorPrimaryDark"
   android:textSize="24sp"
   app:layout_constraintEnd_toEndOf="parent"
   app:layout_constraintStart_toStartOf="parent"
   app:layout_constraintTop_toTopOf="parent" />
```

# Step 3: Change the Background Color of the Layout

To enhance the visual distinction between your app's screens, add a new color resource named screenBackground2 in colors.xml:

```xml
<color name="screenBackground2">#26C6DA</color>
```

Apply this color to the background of the ConstraintLayout in fragment_second.xml either in the Attributes panel or in XML:

```xml
android:background="@color/screenBackground2"
```

By incorporating a new background color, you're providing a visual cue to users that they've transitioned to a different section of your app.

# Step 4: Examine the Navigation Graph

Gain a deeper understanding of your app's navigation flow by examining the navigation graph. Open nav_graph.xml and explore the connections and transitions between fragments. Ensure that the fragments are logically arranged for an intuitive user experience.

# Step 5: Enable SafeArgs

To enhance the safety and clarity of argument passing between fragments, enable SafeArgs in Android Studio. Modify the build.gradle files as instructed in the tutorial. SafeArgs will streamline the process of passing data between fragments, making your code more robust.

# Step 6: Create the Argument for the Navigation Action

Navigate to nav_graph.xml and create an argument named myArg of type Integer for the navigation action from FirstFragment to SecondFragment. This ensures a structured and type-safe approach to passing data.

# Step 7: Send the Count to the Second Fragment

In FirstFragment.java, update the click listener code for the Random button to send the current count to the second fragment. This step reinforces the interactive nature of your app, allowing users to see dynamic content based on their interactions.

```java
int currentCount = Integer.parseInt(showCountTextView.getText().toString());
FirstFragmentDirections.ActionFirstFragmentToSecondFragment action = FirstFragmentDirections.actionFirstFragmentToSecondFragment(currentCount);
NavHostFragment.findNavController(FirstFragment.this).navigate(action);
```

# Step 8: Update SecondFragment to Display a Random Number

Refine the logic in SecondFragment.java to not only retrieve the current count but also generate a random number within the specified range. By displaying both the count and the randomly generated number, you're adding a layer of unpredictability to your app.

```java
Integer count = SecondFragmentArgs.fromBundle(getArguments()).getMyArg();
String countText = getString(R.string.random_heading, count);

TextView headerView = view.getRootView().findViewById(R.id.textview_header);
headerView.setText(countText);

Random random = new java.util.Random();
Integer randomNumber = 0;

if (count > 0) {
   randomNumber = random.nextInt(count + 1);
}

TextView randomView = view.getRootView().findViewById(R.id.textview_random);
randomView.setText(randomNumber.toString());
```
By following these additional steps, you've not only refined the user interface of your app but also added a layer of dynamism and interactivity. Run your app and witness the seamless transition between fragments, showcasing a random number on the second screen after pressing the Count button. Congratulations on building a visually appealing and engaging Android app!.