// 1. ScrollView :

// ScrollView is a versatile component in React Native used to create scrollable views. 
// It's perfect for scenarios where you need to display a small amount of content that won't exceed
// the device's memory limitations, as it renders all its child components at once.

// 2. Important Props of ScrollView
<ScrollView 
    horizontal                                   // Horizontal scrollable content 
    showsVerticalScrollIndicator={false}         // Content without a scroll indicator
    contentContainerStyle={{ padding: 20 }}      // Styled content
    refreshControl={                             // Used to add pull-to-refresh functionality
        <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
    }
    pagingEnabled                                // Paged content
    onScroll={                                   // A function that is called when the scroll position changes.
        (event) => console.log(event.nativeEvent.contentOffset.y)
    }
    scrollEnabled={false}                       // When set to false, disables scrolling of the view.
    contentOffset={{ x: 0, y: 100 }}            // Controls the initial scroll position,
    bounces={false}                             // Scrollable content without bouncing
    scrollEventThrottle={16}                    // Determines how often the onScroll callback is fired(in milliseconds).
>
</ScrollView>



// 3. difference between FlatList and ScrollView.

// ScrollView:
// Renders All at Once: Displays everything in the list at once, 
// which is easy but can be slow if there are too many items.

// Use For: Small lists or when you need to scroll through a small amount of content.


// FlatList:
// Renders as You Scroll: Only loads items that are visible on the screen, which keeps it fast even with large lists.
// Use For: Large lists or when you want better performance and features like infinite scrolling.


// Summary:
// Use ScrollView for small, simple lists.
// Use FlatList for big lists or when performance matters.
