import { Image, ScrollView, StyleSheet, View } from "react-native";

const GITHUB_PROFILE_AVATARS = [
  "shair17",
  "sammwyy",
  "JulianSchmid",
  "apple",
  "Klerith",
  "coolaj86",
  "wKovacs64",
  "rustls",
  "hickory-dns",
];

export const ImageExample = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.images_container}>
        {GITHUB_PROFILE_AVATARS.map((avatar) => (
          <View style={styles.image_container} key={avatar}>
            <Image
              source={{ uri: `https://github.com/${avatar}.png` }}
              style={styles.image}
            />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 24,
  },
  images_container: {
    gap: 24,
    paddingBottom: 62,
  },
  image_container: {
    alignSelf: "center",
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
