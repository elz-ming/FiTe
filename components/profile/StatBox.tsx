import { View, Text, StyleSheet } from "react-native";

export default function StatBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <View style={styles.box}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: { alignItems: "center" },
  value: { fontSize: 18, fontWeight: "bold" },
  label: { fontSize: 14, color: "gray" },
});
