




// 紀錄比較的產品ID陣列
let compareList = [];

// 產品資料庫（來自你提供的詳細規格，每個以 pid 當 key）
const productDatabase = {
  "U20": {
    name: "U20",
    dimensions: "35*35mm",
    weight: "≤30g",
    measurementRange: "1~20m",
    applications: "無人機避障與防地飛行",
    voltage: "DC5V（500mA）",
    communicationInterface: "TTL/RS485/RS422",
    frequencyRange: "79~81GHz/60~64GHz",
    distanceAccuracy: "0.02m",
    fovRange: "方位向±60°，俯仰向±18°",
    maxTargets: "24",
    outputData: "目標跟蹤軌跡（目標散射點雲）",
    waterproof: "",
    usageTags: ["無人機"], // 給篩選功能用
    img: "images/product-u20.png" // 自行配置圖片路徑
  },
  "U80": {
    name: "U80",
    dimensions: "50*50mm",
    weight: "≤70g",
    measurementRange: "1~100m",
    applications: "無人機避障與防地飛行",
    voltage: "DC12V（300mA）/DC5V（500mA）",
    communicationInterface: "CAN/TTL/RS485/RS422",
    frequencyRange: "79~81GHz/60~64GHz",
    distanceAccuracy: "0.02m",
    fovRange: "方位向±60°，俯仰向±15°",
    maxTargets: "24",
    outputData: "目標跟蹤軌跡（目標散射點雲）",
    waterproof: "",
    usageTags: ["無人機"],
    img: "images/product-u80.png"
  },
  "U100": {
    name: "U100",
    dimensions: "50*50mm",
    weight: "≤50g",
    measurementRange: "1~100m",
    applications: "無人機避障與防地飛行",
    voltage: "DC12V（300mA）/DC5V（500mA）",
    communicationInterface: "CAN/TTL/RS485/RS422",
    frequencyRange: "79~81GHz/60~64GHz",
    distanceAccuracy: "0.02m",
    fovRange: "方位向±60°，俯仰向±10°",
    maxTargets: "24",
    outputData: "目標跟蹤軌跡（目標散射點雲）",
    waterproof: "",
    usageTags: ["無人機"],
    img: "images/product-u100.png"
  },
  "U200": {
    name: "U200",
    dimensions: "70*50mm", 
    weight: "≤100g", 
    measurementRange: "1~200m", 
    applications: "無人機避障與防地飛行", 
    voltage: "DC12V（300mA）/DC5V（500mA）", 
    communicationInterface: "CAN/TTL/RS485/RS422", 
    frequencyRange: "79~81GHz/60~64GHz", 
    distanceAccuracy: "0.02m", 
    fovRange: "方位向±60°，俯仰向±12°", 
    maxTargets: "24", 
    outputData: "目標跟蹤軌跡（目標散射點雲）", 
    waterproof: "",
    usageTags: ["無人機"], 
    img: "images/product-u200.png" 
  },  
  "VF160": {
    name: "VF160",
    dimensions: "95.6*77.2*21.6mm",
    weight: "≤200g",
    measurementRange: "1~160m",
    applications: "汽車前向避障雷達",
    voltage: "DC12V（400mA）",
    communicationInterface: "CAN/CAN-FD/TTL",
    frequencyRange: "76~81GHz",
    distanceAccuracy: "0.02m",
    fovRange: "方位向±60°，俯仰向±10°",
    maxTargets: "24",
    outputData: "目標跟蹤軌跡(目標散射點雲，40m內可輸出目標高度數據）",
    waterproof: "IP67",
    usageTags: ["汽車"],
    img: "images/product-vf160.png"
  },
  "VF200": {
    name: "VF200",
    dimensions: "95.6*77.2*21.6mm",
    weight: "≤200g",
    measurementRange: "1~200m",
    applications: "汽車前向避障雷達",
    voltage: "DC12V（500mA）",
    communicationInterface: "CAN/RS485/RS422/TTL",
    frequencyRange: "76~81GHz",
    distanceAccuracy: "0.02m",
    fovRange: "方位向±60°，俯仰向±10°",
    maxTargets: "24",
    outputData: "目標跟蹤軌跡(目標散射點雲，40m內可輸出目標高度數據）",
    waterproof: "",
    usageTags: ["汽車"],
    img: "images/product-vf200.png"
  },
  "VJ40": {
    name: "VJ40",
    dimensions: "91*66*15mm",
    weight: "≤200g",
    measurementRange: "1~40m",
    applications: "汽車角雷達",
    voltage: "DC12V（300mA）",
    communicationInterface: "CAN/CAN-FD/TTL",
    frequencyRange: "76~81GHz",
    distanceAccuracy: "0.02m",
    fovRange: "方位向±60°，俯仰向±10°",
    maxTargets: "24",
    outputData: "目標跟蹤軌跡（目標散射點雲）",
    waterproof: "IP67",
    usageTags: ["汽車"],
    img: "images/product-vj40.png"
  },
  "VJ80": {
    name: "VJ80",
    dimensions: "91*66*15mm",
    weight: "≤120g",
    measurementRange: "1~80m",
    applications: "汽車角雷達",
    voltage: "DC12V（350mA）",
    communicationInterface: "CAN/CAN-FD/TTL",
    frequencyRange: "76~81GHz",
    distanceAccuracy: "0.02m",
    fovRange: "方位向±60°，俯仰向±10°",
    maxTargets: "24",
    outputData: "目標跟蹤軌跡(目標散射點雲，40m內可輸出目標高度數據）",
    waterproof: "IP67",
    usageTags: ["汽車"],
    img: "images/product-vj80.png"
  },
  "R20": {
    name: "R20",
    dimensions: "40*40mm",
    weight: "≤30g",
    measurementRange: "1~20m",
    applications: "機器人避障雷達",
    voltage: "DC5V（400mA）",
    communicationInterface: "TTL/RS485/RS422",
    frequencyRange: "60~64GHz",
    distanceAccuracy: "0.02m",
    fovRange: "方位向±60°，俯仰向±26°",
    maxTargets: "24",
    outputData: "目標跟蹤軌跡（目標散射點雲）",
    waterproof: "",
    usageTags: ["機器人"],
    img: "images/product-r20.png"
  },
  "I260": {
    name: "I260",
    dimensions: "204*187*49mm",
    weight: "≤1000g",
    measurementRange: "0.5~260m",
    applications: "智慧交通雷達",
    voltage: "DC12V（1000mA）",
    communicationInterface: "RJ45/RS485/RS422/TTL",
    frequencyRange: "76~81GHz/60~64GHz",
    distanceAccuracy: "0.03m",
    fovRange: "方位向±60°，俯仰向±5°",
    maxTargets: "256",
    outputData: "目標跟蹤軌跡（目標散射點雲）",
    waterproof: "IP67",
    usageTags: ["智慧交通"],
    img: "images/product-i260.png"
  },
  "I500": {
    name: "I500",
    dimensions: "204*187*49mm",
    weight: "≤1000g",
    measurementRange: "0.5~500m",
    applications: "智慧交通雷達",
    voltage: "DC12V（1000mA）",
    communicationInterface: "RJ45/RS485/RS422/TTL",
    frequencyRange: "79~81GHz/60~64GHz",
    distanceAccuracy: "0.05m",
    fovRange: "方位向±60°，俯仰向±5°",
    maxTargets: "256",
    outputData: "目標跟蹤軌跡（目標散射點雲）",
    waterproof: "IP67",
    usageTags: ["智慧交通"],
    img: "images/product-i500.png"
  },
  "H10": {
    name: "H10",
    dimensions: "50*50mm",
    weight: "≤50g",
    measurementRange: "0.3~10m",
    applications: "室內人員檢測雷達",
    voltage: "DC5V（500mA）",
    communicationInterface: "TTL/RS485/RS422/RS232",
    frequencyRange: "79~81GHz/60~64GHz",
    distanceAccuracy: "0.02m",
    fovRange: "方位向±60°，俯仰向±30°",
    maxTargets: "10",
    outputData: "目標跟蹤軌跡（目標散射點雲）",
    waterproof: "",
    usageTags: ["室內人員"],
    img: "images/product-h10.png"
  },
};





// 頁面載入後執行
window.addEventListener("DOMContentLoaded", () => {
  initLanguageSelect();
  initProductFilter();
  renderProductList();     // 在 products.html 時生效
  renderProductDetail();   // 在 product-detail.html 時生效
  initCompareTable();      // 在 compare.html 時生效
  updateCompareSidebar();  // 檢查比較清單狀態，顯示或隱藏比較清單

});







//漸入特效
function initFadeInEffect() {
  const productCards = document.querySelectorAll(".product-card"); // 獲取所有產品卡片

  // 監控滾動事件
  window.addEventListener("scroll", () => {
    productCards.forEach((card) => {
      const rect = card.getBoundingClientRect(); // 獲取卡片位置
      // const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0; // 判斷是否在視窗內

      if (isVisible) {
        card.classList.add("visible"); // 添加類名觸發動畫
      }
    });
  });

  // 初始化時檢查是否可見（處理初始頁面就顯示的情況）
  productCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      card.classList.add("visible");
    }
  });
}

/* 頁面載入完成後執行 */
window.addEventListener("DOMContentLoaded", () => {
  initFadeInEffect();
});











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
    const savedLang = localStorage.getItem("selectedLanguage") || "zh-TW";
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


/* 在 products.html: 渲染 11 款產品列表 */
function renderProductList() {
  const productListEl = document.getElementById("productList");
  if (!productListEl) return; // 不在 products.html 就離開

  // 依 productDatabase 動態產生卡片
  Object.keys(productDatabase).forEach((pid) => {
    const p = productDatabase[pid];
    const card = document.createElement("div");
    card.className = "product-card hover-scale";
    card.setAttribute("data-usage", p.usageTags.join(","));
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" class="clickable" onclick="goProductDetail('${pid}')" />
      <h3 class="product-title clickable" onclick="goProductDetail('${pid}')">${p.name}</h3>
      <p>${p.applications}</p>
      <button class="compare-btn" onclick="addToCompare('${pid}')">新增比較</button>
    `;
    productListEl.appendChild(card);
  });
}


/* 前往產品詳細頁 */
function goProductDetail(pid) {
  window.location.href = `product-detail.html?pid=${pid}`;
}

/* 解析 URL 參數 pid，渲染對應產品詳細資訊 */
function renderProductDetail() {
  const productDetailEl = document.getElementById("productDetail");
  const productSpecsEl = document.getElementById("productSpecs");
  if (!productDetailEl || !productSpecsEl) return; // 不在 product-detail.html 就離開

  // 取得 pid
  const urlParams = new URLSearchParams(window.location.search);
  const pid = urlParams.get("pid");
  if (!pid || !productDatabase[pid]) {
    productDetailEl.innerHTML = "<p>找不到對應產品</p>";
    return;
  }

  const p = productDatabase[pid];
  // 主要資訊
  productDetailEl.innerHTML = `
    <img src="${p.img}" alt="${p.name}" />
    <div class="product-info">
      <h2>${p.name}</h2>
      <p>應用場景：${p.applications}</p>
      <p>頻率範圍：${p.frequencyRange}</p>
      <p>測量範圍：${p.measurementRange}</p>
    </div>
  `;

  // 詳細規格表
  let specsHtml = `<table>
    <tr><th>產品尺寸</th><td>${p.dimensions}</td></tr>
    <tr><th>產品質量</th><td>${p.weight}</td></tr>
    <tr><th>輸入電壓</th><td>${p.voltage}</td></tr>
    <tr><th>通信接口</th><td>${p.communicationInterface}</td></tr>
    <tr><th>頻率範圍</th><td>${p.frequencyRange}</td></tr>
    <tr><th>測量範圍</th><td>${p.measurementRange}</td></tr>
    <tr><th>距離精度</th><td>${p.distanceAccuracy}</td></tr>
    <tr><th>FOV範圍</th><td>${p.fovRange}</td></tr>
    <tr><th>最大可探測目標數</th><td>${p.maxTargets}</td></tr>
    <tr><th>輸出數據</th><td>${p.outputData}</td></tr>
    <tr><th>防水等級</th><td>${p.waterproof || "-"}</td></tr>
  </table>`;
  productSpecsEl.innerHTML += specsHtml;
}

/* 新增比較 */
function addToCompare(pid) {
  if (!compareList.includes(pid)) {
    compareList.push(pid);
  }
  updateCompareSidebar();
}

/* 更新比較清單 */
function updateCompareSidebar() {
  const compareSidebarBubble = document.getElementById("compareSidebarBubble");
  const compareListEl = document.getElementById("compareList");
  const goCompareBtn = document.getElementById("goCompareBtn");

  if (!compareSidebarBubble || !compareListEl || !goCompareBtn) return;

  if (compareList.length === 0) {
    // 比較清單為空時隱藏氣泡
    compareSidebarBubble.style.display = "none";
    return;
  } else {
    // 比較清單有內容時顯示氣泡
    compareSidebarBubble.style.display = "block";
  }

  // 更新清單內容
  compareListEl.innerHTML = "";
  compareList.forEach((pid) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${pid}
      <button class="remove-btn" onclick="removeFromCompare('${pid}')">移除</button>
    `;
    compareListEl.appendChild(li);
  });

  // 顯示或隱藏 "前往比較" 按鈕
  if (compareList.length >= 2) {
    goCompareBtn.classList.remove("hidden");
  } else {
    goCompareBtn.classList.add("hidden");
  }
}





function removeFromCompare(pid) {
  // 從比較清單中移除產品 ID
  const index = compareList.indexOf(pid);
  if (index !== -1) {
    compareList.splice(index, 1); // 刪除該項
  }
  updateCompareSidebar(); // 更新比較清單 UI
}


/* 前往比較頁 */
function goComparePage() {
  // 暫存到 localStorage
  localStorage.setItem("compareList", JSON.stringify(compareList));
  window.location.href = "compare.html";
}

/* 比較頁: 初始化表格 */
function initCompareTable() {
  const compareTableContainer = document.getElementById("compareTableContainer");
  if (!compareTableContainer) return; // 不在 compare.html 就離開

  // 取出
  const stored = localStorage.getItem("compareList");
  if (stored) {
    compareList = JSON.parse(stored);
  }

  if (compareList.length < 2) {
    compareTableContainer.innerHTML = "<p>尚未選擇足夠產品進行比較。</p>";
    return;
  }

  // 定義要比較的欄位
  const compareFields = [
    { key: "img", label: "圖片" }, // 加入圖片欄位
    { key: "name", label: "名稱" },
    { key: "dimensions", label: "尺寸" },
    { key: "weight", label: "質量" },
    { key: "measurementRange", label: "測量範圍" },
    { key: "applications", label: "應用" },
    { key: "voltage", label: "輸入電壓" },
    { key: "communicationInterface", label: "通信接口" },
    { key: "frequencyRange", label: "頻率範圍" },
    { key: "distanceAccuracy", label: "距離精度" },
    { key: "fovRange", label: "FOV 範圍" },
    { key: "maxTargets", label: "最大可探測目標數" },
    { key: "outputData", label: "輸出數據" },
    { key: "waterproof", label: "防水等級" },
  ];

  let tableHtml = '<table class="compare-table">';
  // 表頭
  tableHtml += "<tr><th>型號</th>";
  compareList.forEach((pid) => {
    tableHtml += `<th>${productDatabase[pid]?.name || "未知"}</th>`;
  });
  tableHtml += "</tr>";

  // 每個欄位一列
  compareFields.forEach((field) => {
    tableHtml += `<tr><td>${field.label}</td>`;
    compareList.forEach((pid) => {
      const product = productDatabase[pid];
      if (field.key === "img") {
        // 如果是圖片欄位
        tableHtml += `<td><img src="${product?.img}" alt="${product?.name}" style="max-width: 100px; max-height: 100px;"></td>`;
      } else {
        tableHtml += `<td>${product ? product[field.key] || "-" : "-"}</td>`;
      }
    });
    tableHtml += "</tr>";
  });

  tableHtml += "</table>";
  compareTableContainer.innerHTML = tableHtml;
}


/* 篩選功能 (products.html) */
function initProductFilter() {
  if (!document.querySelector(".product-page")) return; // 不在 products.html

  const checkboxes = document.querySelectorAll('input[name="usage"]');
  checkboxes.forEach((cb) => {
    cb.addEventListener("change", filterProducts);
  });
}

/* 依照用途篩選 (products.html) */
/* 依照用途篩選 (products.html) */
function filterProducts() {
  const productCards = document.querySelectorAll(".product-card");
  const selectedUsages = [];
  document.querySelectorAll('input[name="usage"]:checked').forEach((cb) => {
    selectedUsages.push(cb.value);
  });

  // 如果沒有任何篩選條件選中，清空比較清單但顯示所有產品
  if (selectedUsages.length === 0) {
    compareList = [];
    updateCompareSidebar(); // 更新比較清單 UI
    productCards.forEach((card) => {
      card.style.display = "block"; // 確保所有產品保持可見
    });
    return;
  }

  // 清空比較清單
  compareList = [];

  productCards.forEach((card) => {
    const usageAttr = card.getAttribute("data-usage"); // e.g. "無人機,汽車"
    if (!usageAttr) {
      card.style.display = "none";
      return;
    }
    const usageArr = usageAttr.split(",");
    const hasMatch =
      selectedUsages.length === 0 ||
      selectedUsages.some((usage) => usageArr.includes(usage));

    card.style.display = hasMatch ? "block" : "none";

    // 如果符合篩選條件，加入比較清單
    if (hasMatch) {
      const pid = card.querySelector(".compare-btn").getAttribute("onclick").match(/'([^']+)'/)[1];
      if (!compareList.includes(pid)) {
        compareList.push(pid);
      }
    }
  });

  // 更新比較清單 UI
  updateCompareSidebar();
}
function renderAllDetailsPage() {
  const detailsTable = document.getElementById("detailsTable");
  const actionButtons = document.getElementById("actionButtons");
  if (!detailsTable) return; // 不在 all-details.html 時跳過

  const tableHeader = `
    <tr>
      <th><input type="checkbox" id="selectAll" onclick="toggleAllSelection()"/></th>
      <th>型號</th>
      <th>圖片</th>
      <th>尺寸</th>
      <th>質量</th>
      <th>測量範圍</th>
      <th>應用</th>
      <th>輸入電壓</th>
    </tr>`;
  let tableRows = "";

  Object.keys(productDatabase).forEach(pid => {
    const product = productDatabase[pid];
    tableRows += `
      <tr>
        <td><input type="checkbox" class="selectCheckbox" value="${pid}" onclick="updateSelection('${pid}')"/></td>
        <td>${product.name}</td>
        <td><img src="${product.img}" alt="${product.name}" style="width:50px;"></td>
        <td>${product.dimensions}</td>
        <td>${product.weight}</td>
        <td>${product.measurementRange}</td>
        <td>${product.applications}</td>
        <td>${product.voltage}</td>
      </tr>`;
  });

  detailsTable.innerHTML = tableHeader + tableRows;

  // 添加按鈕事件
  document.getElementById("compareButton").onclick = goComparePage;
  document.getElementById("clearAllButton").onclick = clearSelection;

  // 顯示按鈕
  actionButtons.classList.remove("hidden");
}

function toggleAllSelection() {
  const checkboxes = document.querySelectorAll(".selectCheckbox");
  const selectAll = document.getElementById("selectAll");
  checkboxes.forEach(cb => cb.checked = selectAll.checked);
  updateSelection();
}

function updateSelection(pid) {
  const checkboxes = document.querySelectorAll(".selectCheckbox:checked");
  compareList = Array.from(checkboxes).map(cb => cb.value);
}

function clearSelection() {
  const checkboxes = document.querySelectorAll(".selectCheckbox");
  checkboxes.forEach(cb => cb.checked = false);
  compareList = [];
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