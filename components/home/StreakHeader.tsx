// components/StreakHeader.tsx
import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useRouter } from "expo-router";

export default function StreakHeader() {
  const router = useRouter();

  return (
    <TouchableOpacity onPress={() => router.push("/streak")}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <IconSymbol name="fire.fill" size={24} color="orange" />
        <Text
          style={{
            marginLeft: 4,
            color: "orange",
            fontSize: 18,
            fontWeight: "600",
          }}
        >
          1
        </Text>
      </View>
    </TouchableOpacity>
  );
}
