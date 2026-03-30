import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { TASKS } from "@/constants/tasks";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const STATUS_COLOR = {
  Done: Colors.statusDone,
  "In Progress": Colors.statusInProgress,
  "To-do": Colors.statusTodo,
};

const TaskDetail = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const task = TASKS.find((t) => t.id === id);

  if (!task) {
    return (
      <View style={[styles.container, { paddingTop: insets.top }]}>
        <Text style={styles.errorText}>Task not found</Text>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.iconButton}>
          <Ionicons name="arrow-back" size={24} color={Colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Task Details</Text>
        <View style={{ width: 40 }} /> {/* Spacer */}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Icon Badge */}
        <View style={[styles.iconContainer, { backgroundColor: task.icon.backgroundColor }]}>
          <Ionicons name={task.icon.name as any} size={40} color="#FFFFFF" />
        </View>

        {/* Category */}
        <Text style={styles.category}>{task.category}</Text>

        {/* Title */}
        <Text style={styles.title}>{task.title}</Text>

        {/* Info Cards */}
        <View style={styles.infoRow}>
          <View style={styles.infoCard}>
            <Ionicons name="time-outline" size={20} color={Colors.primary} />
            <Text style={styles.infoLabel}>Time</Text>
            <Text style={styles.infoValue}>{task.time}</Text>
          </View>

          <View style={styles.infoCard}>
            <Ionicons 
              name="ellipse" 
              size={12} 
              color={STATUS_COLOR[task.status]} 
              style={{ marginBottom: 4 }}
            />
            <Text style={styles.infoLabel}>Status</Text>
            <Text style={[styles.infoValue, { color: STATUS_COLOR[task.status] }]}>
              {task.status}
            </Text>
          </View>
        </View>

        {/* Description Placeholder */}
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            This is a detailed view for the "{task.title}" task. You can add more 
            information here such as subtasks, notes, or attachments related to 
            {task.category}.
          </Text>
        </View>

        {/* Placeholder for more task details */}
        <View style={styles.footer}>
           <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Mark as Done</Text>
           </TouchableOpacity>
        </View>

      </ScrollView>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    height: 60,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
    alignItems: 'center',
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  category: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 8,
    textAlign: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: Colors.textPrimary,
    textAlign: "center",
    marginBottom: 30,
  },
  infoRow: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 30,
  },
  infoCard: {
    flex: 1,
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 18,
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  infoLabel: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 6,
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
  },
  descriptionSection: {
    width: '100%',
    backgroundColor: Colors.surface,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.textSecondary,
    lineHeight: 22,
  },
  footer: {
    width: '100%',
  },
  actionButton: {
    backgroundColor: Colors.primary,
    height: 56,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  actionButtonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000000",
  },
  errorText: {
    color: "#FF4444",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
  backButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    margin: 20,
    borderRadius: 5,
    alignSelf: "center",
  },
  backButtonText: {
    color: "#000",
    fontWeight: "bold",
  },
});
