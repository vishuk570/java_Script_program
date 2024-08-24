// 1. FlatList: 
// FlatList is a powerful component used to render large lists of data efficiently. 
// It provides a performant way to display a scrolling list of items, with support for features
// like lazy loading, item separators, pull-to-refresh, and more.


// FlatList is designed for rendering large lists of data that might not all fit on the screen at once.
// It only renders the items that are visible on the screen, plus a few more for buffering, 
// which helps in maintaining performance, especially with large datasets



// 2. Important Props of FlatList.
<FlatList
  data={myDataArray}
  renderItem={({ item }) => <Text>{item.name}</Text>}
  keyExtractor={(item) => item.id.toString()}
  numColumns={2}
  horizontal
  ListHeaderComponent={<Text>Header</Text>}
  ListFooterComponent={<Text>Footer</Text>}
  ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: 'gray' }} />}
  refreshing={isRefreshing}
  onRefresh={handleRefresh}
  initialNumToRender={10}
  getItemLayout={(data, index) => (
    { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
  )}
  extraData={this.state.selectedId}
/>

// 1. data : 
// An array of data that will be rendered in the list.


// 2. renderItem : 
// A function that renders each item in the list. It receives an object with an item property and an index property.

// 3. keyExtractor :
// A function that returns a unique key for each item in the list. 
// This is crucial for optimizing the list’s performance and avoiding rendering issues.

// 4. numColumns :
// Specifies the number of columns in the grid view. Useful for creating multi-column lists.

// 5. horizontal : 
// If set to true, the list scrolls horizontally instead of vertically.

// 6. ListHeaderComponent:
// A component or element that is rendered at the top of the list.

// 7. ListFooterComponent :
// A component or element that is rendered at the bottom of the list.

// 8. ItemSeparatorComponent :
// A component or element that is rendered between each item in the list, often used to add dividers between items.

// 9. refreshing and onRefresh
// These props are used to implement pull-to-refresh functionality

// 10. initialNumToRender :
// Specifies how many items should be rendered initially. Useful for controlling the initial rendering performance.

// 11. getItemLayout :
// Used to optimize performance by calculating the height or width of the items in the list. 
// This prop is particularly useful when the item size is fixed.

// 12. extraData :
// A prop used to re-render the list when the data outside of the data array changes. 
// It forces the list to refresh when its value changes.



// ==================================================================================

// SectionList: 
// Use SectionList when you have a list of items that are grouped into sections. 
// Each section can have a header, and then a list of items under that header.

// Example Use Case: Displaying a list of grocery items categorized by type, 
// like "Fruits," "Vegetables," etc.

import SectionList from 'react-native';
<SectionList
  sections={[
    {title: 'Fruits', data: ['Apple', 'Banana', 'Cherry']},
    {title: 'Vegetables', data: ['Carrot', 'Lettuce', 'Peas']}
  ]}
  renderItem={({item}) => <Text>{item}</Text>}
  renderSectionHeader={({section}) => <Text style={{fontWeight: 'bold'}}>{section.title}</Text>}
/>

// =========================================================================================

// Summary of Differences:

// FlatList: Best for rendering a simple, flat list of items. 
// There are no sections or groupings; just a single list.

// SectionList: Best for rendering lists where items are grouped into sections, 
// each with a header. Ideal for categorized data.