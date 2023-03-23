import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
class App extends Component {
state = {
products: [
{ product: "Dog", id: 1 },
{ product: "Cat", id: 2 },
{ product: "Duck", id: 3 },
{ product: "Bear", id: 4 },
{ product: "Horse", id: 5 },
{ product: "Spider", id: 6 },
{ product: "Lion", id: 7 },
{ product: "Giraffe", id: 8 },
{ product: "Monkey", id: 9 },
{ product: "Man", id: 10 },
{ product: "Fish", id: 11 },
{ product: "Dolphin", id: 12 }
]
};
render() {
return (
<View>
<ScrollView>
{this.state.products.map((item) => (
<View key={item.id} style={styles.item}>
<Text>{item.product}</Text>
</View>
))}
</ScrollView>
</View>
);
}
}
const styles = StyleSheet.create({
item: {
flexDirection: "row",
justifyContent: "space-between",
alignItems: "left",
padding: 20,
margin: 2,
borderColor: "pink",
borderWidth: 3,
backgroundColor: "white"
}
});
export default App;
