import { StatusBar } from "expo-status-bar";
import axios from "axios";
import API from "./API";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  Button,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";

export default function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [isPosting, setIsPosting] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [error, setError] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  // console.log("error:", error);

  const fetchData = async (limit = 10) => {
    try {
      const response = await API.get(`/posts?_limit=${limit}`);
      // axios automatically parses JSON, use response.data
      setPostList(response.data);
      setIsLoading(false);
      setError("");
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data");
      setIsModalVisible(true);
      // Alert.alert("Error", "Failed to fetch data");
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData(20); // Fetch 20 items on refresh for checking
    setRefreshing(false);
  };

  const addPost = async () => {
    setIsPosting(true);
    try {
      const response = await API.post(`/posts`, {
        title: postTitle,
        body: postBody,
      });

      const newPost = response.data;
      setPostList([newPost, ...postList]);
      setPostTitle("");
      setPostBody("");
      setIsPosting(false);
      setError("");
    } catch (error) {
      console.error("Error posting data:", error);
      console.log("Error");
      // Alert.alert("Error", "Failed to post data");
      setError("Failed to post data");
      setIsModalVisible(true);
      setIsPosting(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading...</Text>
          <Text>Ruko jara, Sabar karo, data fetch hoite dao!</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {error !== "" ? (
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => {
            setIsModalVisible(false);
            setError("");
          }}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Error</Text>
              <Text style={styles.modalMessage}>{error}</Text>
              <Pressable
                style={styles.modalButton}
                onPress={() => {
                  setIsModalVisible(false);
                  setError("");
                }}
              >
                <Text style={styles.modalButtonText}>OK</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      ) : (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="post title"
              value={postTitle}
              onChangeText={setPostTitle}
            />
            <TextInput
              style={styles.textInput}
              placeholder="post body"
              value={postBody}
              onChangeText={setPostBody}
            />
            <Button
              title={isPosting ? "Posting..." : "Add Post"}
              onPress={addPost}
              disabled={isPosting}
            />
          </View>
          <View style={styles.listContainer}>
            <FlatList
              data={postList}
              renderItem={({ item }) => {
                return (
                  <View style={styles.card}>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <Text style={styles.bodyText}>{item.body}</Text>
                  </View>
                );
              }}
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  titleText: {
    fontSize: 18,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 14,
    color: "#000000",
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    padding: 16,
    backgroundColor: "#ffffff",
  },
  textInput: {
    height: 40,
    color: "#000000",
    borderRadius: 4,
    marginBottom: 12,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  errorContainer: {
    alignItems: "center",
    backgroundColor: "#ffe6e6",
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    margin: 16,
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 300,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff0000",
    marginBottom: 15,
  },
  modalMessage: {
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 10,
    minWidth: 100,
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
