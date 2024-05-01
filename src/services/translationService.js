import axios from "axios";

const translateText = async (text) => {
  try {
    const endpoint = "https://api.cognitive.microsofttranslator.com/";
    const subscriptionKey = "";
    const location = "global";

    const response = await axios({
      baseURL: endpoint,
      url: "/translate",
      method: "post",
      headers: {
        "Ocp-Apim-Subscription-Key": subscriptionKey,
        "Ocp-Apim-Subscription-Region": location,
        "Content-Type": "application/json",
      },
      params: {
        "api-version": "3.0",
        from: "en",
        to: "zh-Hant", // 繁體中文
      },
      data: [
        {
          text: text,
        },
      ],
    });

    // 取得翻譯後的文字
    return response.data[0].translations[0].text;
  } catch (error) {
    console.error("翻譯失敗", error);
    return text; // 若翻譯失敗，返回原本文字
  }
};

export default translateText;
