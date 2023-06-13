import { StyleSheet } from "react-native";
export default StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: 8,
      marginBottom: 16,
      elevation: 4,
    },
    image: {
      width: "100%",
      height: undefined, // Remove the height style
      aspectRatio: 1, // Preserve the aspect ratio of the image
      borderRadius: 8,
    },
    deleteButton: {
        backgroundColor: "red",
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginTop: 8,
      },
      deleteButtonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
  });