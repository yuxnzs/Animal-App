import { StyleSheet } from "react-native";

export default StyleSheet.create({
  animalsContainer: {
    flex: 1,
    marginHorizontal: 20,
    // backgroundColor: "lightblue",
    // width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  listContainer: {
    // backgroundColor: "lightblue",
    borderRadius: 10,
  },
  infoContainer: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 20,
    marginBottom: 30,
    minWidth: "100%",
    alignItems: "center",
  },
  animalImageContainer: {
    marginBottom: 10,
    width: "100%",
    height: 200,
    backgroundColor: "lightgrey",
    borderRadius: 10,
  },
  animalImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  animalName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  animalTemperament: {
    fontSize: 18,
    color: "#666",
    marginBottom: 10,
    textAlign: "center",
    lineHeight: 24,
  },
  animalDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 24,
    textAlign: "justify",
  },
  getAnimalsButton: {
    backgroundColor: "lightgrey",
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  loadingText: {
    fontSize: 20,
    color: "#666",
    textAlign: "center",
    marginVertical: 10,
  },
});
