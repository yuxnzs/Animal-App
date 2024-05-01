import React, { createContext, useContext } from "react";
import translateText from "../services/translationService";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const translate = async (text, toLanguage = "zh-Hans") => {
    return await translateText(text, toLanguage);
  };

  return (
    // TranslationContext.Provider 的 value 是一個物件，裡面有一個 key 是 translate，值是 translate 函式
    // 這樣所有 TranslationProvider 的子元件都可以透過 useTranslation Hook 取得 translate 函式
    // 這樣就不用一層一層傳遞函式
    <TranslationContext.Provider value={{ translate }}>
      {/* children 指的是 TranslationProvider 的子元件 */}
      {children}
    </TranslationContext.Provider>
  );
};

// 自定義 Hook
export const useTranslation = () => useContext(TranslationContext);
