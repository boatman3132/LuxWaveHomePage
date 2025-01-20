/* 多語言切換 (簡單示範) */
function initLanguageSelect() {
  const languageSelect = document.getElementById("languageSelect");
  if (languageSelect) {
    languageSelect.addEventListener("change", (e) => {
      const lang = e.target.value;
      applyTranslations(lang);
      localStorage.setItem("selectedLanguage", lang); // 保存用戶語言偏好
    });
    
    // 初始化語言（從 localStorage 讀取）
    const savedLang = localStorage.getItem("selectedLanguage") || "us-en";
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
    el.textContent = translations[lang][key] || key;
  });
}

// 更新 DOMContentLoaded 事件
window.addEventListener("DOMContentLoaded", () => {
  initLanguageSelect();
  initProductFilter();
  renderProductList();
  renderProductDetail();
  initCompareTable();
  updateCompareSidebar();
  initMobileMenu(); // 新增
});