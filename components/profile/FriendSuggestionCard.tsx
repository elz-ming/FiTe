import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function FriendSuggestionCard({ name }: { name: string }) {
  return (
    <View style={styles.card}>
      <Image source={require("@/assets/images/Me.jpg")} style={styles.avatar} />
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.subtitle}>Follows you</Text>
      <TouchableOpacity style={styles.followButton}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    backgroundColor: "#f9f9f9",
    padding: 12,
    borderRadius: 12,
    alignItems: "center",
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginBottom: 8,
  },
  name: { fontWeight: "bold", fontSize: 14 },
  subtitle: { color: "gray", fontSize: 12 },
  followButton: {
    backgroundColor: "dodgerblue",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginTop: 6,
  },
});
