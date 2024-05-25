import { StyleSheet, View, Text, FlatList } from "react-native";
import { POSTS_DUMMY_DATA } from "../../mock/data";

export const FlatListExample = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={POSTS_DUMMY_DATA}
        keyExtractor={({ id }) => id.toString()}
        contentContainerStyle={{ gap: 16, padding: 24 }}
        renderItem={({ item: post }) => {
          return (
            <View style={styles.card}>
              <Text style={styles.card_title_text}>{post.title}</Text>
              <Text style={styles.card_body_text}>{post.body}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 12,
  },
  card_title_text: {
    fontSize: 24,
    fontWeight: "700",
  },
  card_body_text: {
    marginTop: 4,
  },
});
