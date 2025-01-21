/* 多語言切換 (簡單示範) */
function initLanguageSelect() {
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.addEventListener("change", (e) => {
      const lang = e.target.value;
      applyTranslations(lang);
      localStorage.setItem("selectedLanguage", lang); // 保存用戶語言偏好
    });

    // 初始化語言（從 localStorage 讀取，如果沒有則使用 "en-US"）
    const savedLang = localStorage.getItem("selectedLanguage") || "en-US"; // 預設為英文
    languageSelect.value = savedLang;
    applyTranslations(savedLang);

    // 翻譯完成後移除隱藏
    document.body.classList.remove("invisible");
  }
}

function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key]; // 更新文本內容
    }
  });
}

// 更新 DOMContentLoaded 事件
window.addEventListener("DOMContentLoaded", () => {
  initLanguageSelect(); // 初始化語言選擇功能
  // 其他初始化函數（根據需要添加）
  initProductFilter();
  renderProductList();
  renderProductDetail();
  initCompareTable();
  updateCompareSidebar();
  initMobileMenu();
});