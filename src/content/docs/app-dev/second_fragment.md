---
title: Implementing second fragment
description: This course made by students, for students
---

# Refining the User Interface for the Second Fragment

In this section, we'll dive deeper into refining the user interface for the second fragment of your Android app. The goal is to update the Random button, enabling it to showcase a random number between 0 and the current count on a designated screen.

## What You'll Learn

✅ How to transfer information to a second fragment. (Second Screen)

## Step 1: Add a TextView for the Random Number

-   **File Location**: Open `fragment_second.xml` located at `app > res > layout > fragment_second.xml`.
-   **Adjust Layout**: Remove chain constraints between the existing TextView and Button. Introduce a new TextView to display the random number. This enhancement will give your app a dynamic and interactive feel.

### Configure the new TextView

-   **ID**: `@+id/textview_random` (textview_random in the Attributes panel)
-   **Constraints**:
    -   Top edge below the first TextView
    -   Left edge to the left of the screen
    -   Right edge to the right of the screen
    -   Bottom to the top of the Previous button
-   **Dimensions**: Width and height set to `wrap_content`.
-   **Appearance**:
    -   Text color set to `@android:color/white`
    -   Text size to `72sp`
    -   Text style to `bold`
-   **Text**: Initially set to "R" (a placeholder until the random number is generated).
-   **Layout**: `layout_constraintVertical_bias` set to `0.45`.

#### XML Code for the new TextView

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

## Step 2: Update the TextView to Display the Header

Enhance the visual appeal of the TextView that displays the header by making the following updates in `fragment_second.xml`.

### Modify TextView Attributes

-   **File to Open**: `fragment_second.xml`
-   **TextView Selection**: `textview_second`
-   **Attribute Changes**:
    -   Update the ID to `textview_header`.
    -   Set the text to the string resource `@string/hello_second_fragment`.
    -   Adjust the layout width to `0dp` to match the parent's width.
    -   Set the layout height to `wrap_content` to adjust to the text size.
    -   Apply margins for uniform spacing: `24dp` on all sides.
    -   Change the text color to `@color/colorPrimaryDark` for better visibility.
    -   Increase the text size to `24sp` for readability.

#### XML Configuration

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

This configuration not only enhances the aesthetics but also ensures a harmonious visual integration with your app's overall design. Experimenting with additional visual elements, such as transparency and custom fonts, can further tailor the appearance to your app's unique style.

### Example with Additional Visual Elements

Consider adding an alpha attribute for slight transparency and specifying a custom font to enrich the user interface:

```xml
<TextView
    ... prior configuration ...
    android:alpha="0.8"
    android:fontFamily="@font/your_custom_font" <!-- Replace with the actual font file reference --> />
```

## Step 3: Change the Background Color of the Layout

Enhancing the visual appeal of your app involves not just functionality but also aesthetic modifications. Introducing a new background color for the second fragment's layout adds a layer of sophistication and provides a clear visual distinction between different sections of your application.

### Define a New Color Resource

-   **File Location**: Open `colors.xml` located at `res/values/colors.xml`.
-   **Add Color Resource**: Define a new color resource named `screenBackground2` with a hexadecimal color code.

    ```xml
    <color name="screenBackground2">#26C6DA</color>
    ```

    The color code `#26C6DA` is provided as an example. Feel free to select a color that best matches your app's design theme.

### Apply the New Color to the Layout

To apply the new background color, navigate to `fragment_second.xml` and locate the `ConstraintLayout` element. You have two methods to set the background color:

#### Option 1: Using the Attributes Panel

-   In the Attributes panel of Android Studio, locate the `background` property.
-   Set its value to `@color/screenBackground2`.

#### Option 2: Editing the XML Directly

-   Alternatively, you can directly modify the XML code of the `ConstraintLayout` element to include the background attribute:

    ```xml
    android:background="@color/screenBackground2"
    ```

Incorporating a new background color not only enhances the visual aesthetic of your app but also serves as a visual cue to users, indicating a transition between different sections of your application.

## Step 4: Examine the Navigation Graph

As you initially set up your project using the Basic Activity template, Android Studio established a foundation by creating two fragments and a navigation graph to seamlessly connect them. Additionally, a button was configured to transmit a string argument from the first fragment to the second, which you later transformed into the Random button. Now, the goal is to enhance this configuration to pass a numerical argument instead of a string.

### 4.1 Open and Navigate to `nav_graph.xml`

-   **Location**: Find and open `nav_graph.xml` located within `app > res > navigation`.
-   **Visual Representation**: Upon opening, you'll see your app's navigation structure presented similarly to the Layout Editor in Design view. This offers a graphical view of the two fragments connected by directional arrows.

### 4.2 Understand the Navigation Graph Layout

-   **Graphical Organization**: The navigation graph provides a visual organization of the flow between fragments, illustrating how users move through your app.
-   **Zoom Functionality**: Use the `+` and `-` buttons in the lower right corner to zoom in and out, ensuring you fully understand the layout and structure of the graph.

### 4.3 Arrange Fragments for Logical Flow

-   **Rearrangement Flexibility**: Within the Navigation Editor, you can rearrange fragments to create an organized and logical flow. For instance, if `SecondFragment` is positioned to the left, you might want to drag `FirstFragment` to its left. This adjustment aids in visually aligning the fragments according to the sequence they are intended to be accessed during development.

Exploring and understanding the Navigation Graph's configuration offers valuable insights into your app's navigational flow. This foundational knowledge is crucial as we proceed to refine the navigation pattern, aiming to facilitate the transmission of numerical arguments and enhance the overall user experience.

## Step 5: Enable SafeArgs

To enhance the safety and clarity of argument passing between fragments, enable SafeArgs in Android Studio. Modify the build.gradle files as instructed in the tutorial. SafeArgs will streamline the process of passing data between fragments, making your code more robust.

### 5.1 Modify `build.gradle` (Project)

-   **File Location**: Open `Gradle Scripts` > `build.gradle (Project: My First App)`.
-   **Update Dependencies**: In the `buildscript` section's `dependencies` area, add the SafeArgs classpath after the existing classpath entries:

    ```groovy
    def nav_version = "2.3.0-alpha04"
    classpath "androidx.navigation:navigation-safe-args-gradle-plugin:$nav_version"
    ```

    This step ensures your project uses the latest version of SafeArgs, improving safety and efficiency in fragment navigation.

### 5.2 Sync and Confirm Gradle Changes

-   **Gradle Sync**: After adding the SafeArgs dependencies, Android Studio will prompt you to sync your Gradle files.
-   **Sync Confirmation**: Click on "Sync Now" in the notification on the right-hand side. A successful sync will be confirmed in the Sync tab of Android Studio.

### 5.3 Make Project

-   **Rebuild Project**: Select `Build` > `Make Project` from the menu to trigger a rebuild. This ensures Android Studio recognizes and applies the SafeArgs plugin changes to your project.

### 5.4 Troubleshooting

-   **Sync Issues**: If you encounter any issues during the sync, verify that you've added the dependencies to the correct Gradle file.
-   **Consult Documentation**: For the latest updates or changes, refer to the developer's guide on SafeArgs.

Enabling SafeArgs significantly increases the reliability of fragment navigation, minimizing runtime errors related to argument passing. This enhancement is a key step in maintaining a robust and error-resistant codebase.

## Step 6: Create the Argument for the Navigation Action

In this step, we'll establish precise and type-safe arguments within the Navigation Graph, ensuring a robust communication channel between fragments. Follow these instructions to create a new argument for the navigation action.

### Navigate to the Navigation Graph

-   **Open `nav_graph.xml`** located within the `app > res > navigation` directory of your project. You'll see a visual representation of your app's navigation flow.

### Inspect FirstFragment Attributes

-   Within the Navigation Editor, **click on `FirstFragment`**. If the Attributes panel is hidden, click on the vertical "Attributes" label to reveal it. This panel provides details about the selected fragment.

### Explore Navigation Actions

-   Look for the **"Actions" section** within the Attributes panel. Notice the defined navigation actions, especially the transition from `FirstFragment` to `SecondFragment`. We'll add an argument to this specific action.

### Examine SecondFragment Attributes

-   **Click on `SecondFragment`** within the Navigation Editor. The Attributes panel will show an "Arguments" section that likely says "Nothing to show."

### Add a New Argument

-   In the "Arguments" section, **click the "+" icon**. This will open the "Add Argument" dialog, where you can define the new argument.

### Configure Argument Details

-   In the "Add Argument" dialog:
    -   **Name**: Enter `myArg` as the argument name.
    -   **Type**: Set to `Integer` for a clear representation of the data being passed.
    -   **Finalize**: Click the "Add" button to confirm the creation of the new argument.

By completing these steps, you establish a well-defined and type-safe argument named `myArg` for the navigation action from `FirstFragment` to `SecondFragment`. This approach enhances the reliability and readability of your codebase, contributing to a more maintainable app architecture.

## Step 7: Send the Count to the Second Fragment

This step focuses on enhancing the functionality of the **Next/Random** button created by Android Studio. Initially, this button simply transitions from the first fragment to the second without transmitting any data. You will modify its behavior to send a numerical value representing the current count to the second fragment, creating a dynamic user experience where the second fragment reacts to user interactions.

### Instructions

### 1. Modify the OnClickListener

Begin by opening `FirstFragment.java`, located at `app > java > com.example.myfirstapp > FirstFragment`. Locate the `onViewCreated()` method and observe the existing code that establishes the click listener for the Random button.

Replace the current click listener code with the following:

```java
public void onViewCreated(@NonNull View view, Bundle savedInstanceState) {
    super.onViewCreated(view, savedInstanceState);

    view.findViewById(R.id.random_button).setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            // Extract the current count from the TextView displaying it
            int currentCount = Integer.parseInt(showCountTextView.getText().toString());

            // Create a navigation action with the current count as an argument
            FirstFragmentDirections.ActionFirstFragmentToSecondFragment action =
                FirstFragmentDirections.actionFirstFragmentToSecondFragment(currentCount);

            // Find the NavController associated with the current fragment and navigate to the second fragment
            NavHostFragment.findNavController(FirstFragment.this).navigate(action);
        }
    });

    // Existing click listeners for other buttons
    view.findViewById(R.id.toast_button).setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            Toast myToast = Toast.makeText(getActivity(), "Hello toast!", Toast.LENGTH_SHORT);
            myToast.show();
        }
    });

    view.findViewById(R.id.count_button).setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view) {
            countMe(view);
        }
    });
}
```

### 2. Understanding the Code

The added code performs the following actions:

-   **Extracts the current count**:

    ```java
    int currentCount = Integer.parseInt(showCountTextView.getText().toString());
    ```

    This line retrieves the current count from the `showCountTextView` TextView.

-   **Creates a navigation action**:

    ```java
    FirstFragmentDirections.ActionFirstFragmentToSecondFragment action =
        FirstFragmentDirections.actionFirstFragmentToSecondFragment(currentCount);
    ```

    This line creates a navigation action with the extracted `currentCount` as an argument.

-   **Navigates to the second fragment**:
    ```java
    NavHostFragment.findNavController(FirstFragment.this).navigate(action);
    ```
    This initiates navigation to the second fragment with the defined action, ensuring the transmission of the current count.

### 3. Test Your App

Run your app, click the **Count** button a few times, and then press the **Random** button. You should now see the correct count displayed in the second fragment's header. However, further code adjustments are needed to showcase both the count and a randomly generated number on the second screen.

## Step 8: Generate and Display a Random Number in SecondFragment

With the successful transmission of the current count from the first fragment to the second, the next step is to dynamically extract, format, and display the count in `SecondFragment.java`.

In `SecondFragment.java`, apply the following modifications:

```java
// Import navArgs to handle navigation arguments
import androidx.navigation.fragment.navArgs;

public class SecondFragment extends Fragment {

    // Existing code...

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        // Import navigation arguments
        SecondFragmentArgs args = SecondFragmentArgs.fromBundle(getArguments());

        // Retrieve the current count from the arguments
        Integer count = args.getMyArg();

        // Format the count with a string resource and set it for textview_header
        String countText = getString(R.string.random_heading, count);
        TextView headerView = view.getRootView().findViewById(R.id.textview_header);
        headerView.setText(countText);

        // Generate a random number between 0 and the count
        Random random = new java.util.Random();
        Integer randomNumber = (count > 0) ? random.nextInt(count + 1) : 0;

        // Convert the random number into a string and set it as the text for textview_random
        TextView randomView = view.getRootView().findViewById(R.id.textview_random);
        randomView.setText(randomNumber.toString());
    }

    // Existing code...
}

```

Here's a detailed explanation of the changes made:

1. **Import `navArgs`:**  
   Import the `navArgs` class to efficiently handle navigation arguments.

2. **Retrieve and Format Count:**  
   Extract the current count from the navigation arguments and format it using a string resource. This formatted count is then set for `textview_header`.

3. **Generate a Random Number:**  
   Utilize a `Random` object to generate a random number between 0 and the retrieved count. This number is then used to populate `textview_random`.

By implementing these extensive modifications, your app will dynamically display both the count and a randomly generated number on the second screen, providing users with an engaging and interactive experience.

So, Congratulations, you built your first app :)
