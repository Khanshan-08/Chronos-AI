import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f5",
  },
  text: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 10,
    color: "#03375C",
  },
  infoText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  logout_button: {
    height: 50,
    width: 200,
    backgroundColor: "#03375C",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
  },
  logout_text: {
    color: "#fff",
    fontSize: 20,
  },
  disabled_button: {
    backgroundColor: "#cccccc",
  },
  // Center the loader in the middle of the screen
  loaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Add a semi-transparent background
    zIndex: 999, // Ensure it's above other content
  },
  loadingText: {
    fontSize: 16,
    color: "#fff",
    marginTop: 10,
  },
});

export default styles;