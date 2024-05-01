import { useState } from "react";
import axios from "axios";
import { useTranslation } from "../contexts/TranslationContext";

const useFetchAnimals = (apiUrl, apiKey) => {
  const [animals, setAnimals] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const { translate } = useTranslation();

  const fetchAnimals = async () => {
    setIsFetching(true);
    try {
      // 使用 axios 時，回應的資料在 data 屬性中，不用再自己解析
      const response = await axios({
        method: "get",
        url: apiUrl,
        headers: {
          "x-api-key": apiKey,
        },
      });
      // 初始化每個貓咪、狗狗物件的額外屬性
      const fetchedAnimals = response.data.map((animal) => ({
        ...animal,
        isTranslated: false, // 初始設為未翻譯
        originalBreeds: [...animal.breeds], // 儲存原始資料
      }));
      setAnimals(fetchedAnimals);
    } catch (error) {
      console.error("Fetching animals failed: ", error);
    } finally {
      setIsFetching(false);
    }
  };

  const translateAnimal = async (animalIndex) => {
    const animal = animals[animalIndex];

    // 如果已經翻譯，則恢復到原始語言
    if (animal.isTranslated) {
      const originalBreeds = animal.originalBreeds;
      const updatedAnimals = [...animals];
      updatedAnimals[animalIndex] = {
        ...animal,
        breeds: originalBreeds,
        isTranslated: false,
      };
      setAnimals(updatedAnimals);
    } else {
      // 儲存原始資訊並進行翻譯
      const originalBreeds = animal.breeds;
      const translatedBreeds = await Promise.all(
        animal.breeds.map(async (breed) => ({
          ...breed,
          name: await translate(breed.name),
          temperament: await translate(breed.temperament),
          description: breed.description
            ? await translate(breed.description)
            : "沒有描述",
        }))
      );

      // 更新動物資訊，包括翻譯後的資訊和原始資訊
      const updatedAnimals = [...animals];
      updatedAnimals[animalIndex] = {
        ...animal,
        breeds: translatedBreeds,
        originalBreeds: originalBreeds,
        isTranslated: true,
      };
      setAnimals(updatedAnimals);
    }
  };

  return {
    animals,
    isFetching,
    fetchAnimals,
    translateAnimal,
  };
};

export default useFetchAnimals;
