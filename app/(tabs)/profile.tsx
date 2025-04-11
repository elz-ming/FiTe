import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import StatBox from "@/components/profile/StatBox";
import FriendSuggestionCard from "@/components/profile/FriendSuggestionCard";
import SectionTitle from "@/components/profile/SectionTitle";

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 1. Avatar & Username */}
      <View style={styles.avatarSection}>
        <Image
          source={require("@/assets/images/Me.jpg")} // Replace with your avatar
          style={styles.avatar}
        />
        <TouchableOpacity style={styles.settingsIcon}>
          <IconSymbol name="gear" size={24} color="gray" />
        </TouchableOpacity>
        <Text style={styles.name}>Lin Zhenming</Text>
        <Text style={styles.username}>@LinZhenmin2 · Joined February 2022</Text>
      </View>

      {/* 2. Stats */}
      <View style={styles.statsRow}>
        <StatBox label="Courses" value="+6" />
        <StatBox label="Following" value="17" />
        <StatBox label="Followers" value="22" />
      </View>

      {/* 3. Add Friends */}
      <TouchableOpacity style={styles.addButton}>
        <IconSymbol
          name="person.crop.circle.badge.plus"
          size={20}
          color="dodgerblue"
        />
        <Text style={styles.addText}>Add Friends</Text>
      </TouchableOpacity>

      {/* 4. Friend Suggestions */}
      <SectionTitle title="Friend suggestions" action="View All" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FriendSuggestionCard name="Aaron Kwok" />
        <FriendSuggestionCard name="Saimon Bilí" />
        <FriendSuggestionCard name="Koay Khoo" />
      </ScrollView>

      {/* 5. Overview */}
      <SectionTitle title="Overview" />
      {/* You can add more here later like Achievements, XP progress, etc. */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  settingsIcon: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 8,
  },
  username: {
    fontSize: 14,
    color: "gray",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  addButton: {
    flexDirection: "row",
    alignSelf: "center",
    backgroundColor: "#e6f0ff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  addText: {
    color: "dodgerblue",
    marginLeft: 8,
    fontWeight: "bold",
  },
});
