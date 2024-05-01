import React from "react";
import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import styles from "../styles/styles";
import useFetchAnimals from "../hooks/useFetchAnimals";

const Dogs = () => {
  const KEY = "";

  // 調用自定義的 Hook，並傳入 API 網址和 API Key
  const {
    animals: dogs,
    isFetching,
    fetchAnimals,
    translateAnimal,
  } = useFetchAnimals(
    "https://api.thedogapi.com/v1/images/search?limit=30&has_breeds=1&size=small",
    KEY
  );

  const handleFetchCats = () => {
    if (!isFetching) {
      // 避免已經在加載時使用者重複點擊按鈕
      fetchAnimals();
    }
  };

  const renderItem = ({ item, index }) => {
    const hasUrl = item.breeds[0].vetstreet_url; // 檢查是否有提供連結，沒有則無法點擊

    return (
      <TouchableOpacity
        style={styles.infoContainer}
        onPress={() => translateAnimal(index)}
      >
        <View style={styles.animalImageContainer}>
          <Image source={{ uri: item.url }} style={styles.animalImage} />
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL(item.breeds[0].vetstreet_url)}
          disabled={!hasUrl} // 如果沒有 URL，則禁用連結按鈕
        >
          <Text style={styles.animalName}>{item.breeds[0].name}</Text>
        </TouchableOpacity>
        <Text style={styles.animalTemperament}>
          {item.breeds[0].temperament}
        </Text>
        <Text style={styles.animalDescription}>
          {item.breeds[0].description || "No description"}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.animalsContainer}>
      <TouchableOpacity
        style={styles.getAnimalsButton}
        onPress={handleFetchCats}
      >
        <Text>取得狗勾</Text>
      </TouchableOpacity>
      {isFetching ? (
        <Text style={styles.loadingText}>載入中...</Text>
      ) : (
        dogs.length > 0 && (
          <FlatList
            data={dogs}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()} // 預設 key extractor
            // 針對 renderItem 的 style
            contentContainerStyle={styles.listContainer}
          />
        )
      )}
    </View>
  );
};

export default Dogs;
