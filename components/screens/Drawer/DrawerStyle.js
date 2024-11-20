import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  drawerHeader: {
    height: 122,
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#BABABA",
    backgroundColor: "#20242D",
    flexDirection: "row",
    gap: 10,
    paddingLeft: 20,
  },
  userImage: {
    height: 47,
    width: 47,
    borderRadius: 23.5,
  },
  userName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
  },
  scrollView: {
    height: "74%",
    width: "100%",
    backgroundColor: "#20242D",
  },
  recentTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "700",
  },
  recentItem: {
    width: "100%",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginTop: 20,
  },
  folderIcon: {
    width: 16,
    height: 16,
    marginLeft: 20,
  },
  recentText: {
    fontSize: 16,
    lineHeight:20,
    fontWeight: "400",
    color: "#fff",
    height: 24,
  },
  drawerStyle: {
    backgroundColor: "#20242D",
    width: 250,
  },
  headerStyle: {
    backgroundColor: "#f4511e",
  },
  headerTintColor: {
    color: "#fff",
  },
  headerTitleStyle: {
    fontWeight: "bold",
  },
  drawerActiveTintColor: {
    color: "blue",
  },
  drawerLabelStyle: {
    color: "#fff",
  },
});

export default styles;