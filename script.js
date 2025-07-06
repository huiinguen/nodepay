// Dữ liệu ban đầu (thêm thuộc tính 'category' dưới dạng MẢNG)
let credentialSets = [
  { username: "huiinguyen", password: "H11223344y@", category: ["hoan_thanh_ca"] },
  { username: "huiikk", password: "H112233y@", category: ["hoan_thanh_ca"] }, // Ví dụ nhiều đặc tính
  { username: "huiikkk", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiitran", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiivan", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiiha", password: "H112233y@", category: ["signal"] },
  { username: "huiiheo", password: "H112233y@", category: ["hoan_thanh_ca"] }, // Ví dụ nhiều đặc tính
  { username: "huiimeo", password: "H112233y@", category:["hoan_thanh_ca"]},
  { username: "hdddd", password: "H112233y@", category: ["signal"] },
  { username: "huiik3", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik4", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik5", password: "H112233y@", category: ["hoan_thanh_ca","signal" ] },
  { username: "huiik6", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik7", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik8", password: "H112233y@", category: ["hoan_thanh_ca","signal"] },
  { username: "huiik9", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik10", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik11", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik12", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik13", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik14", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik15", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik16", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik17", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik18", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik19", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik20", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik21", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik22", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik23", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik24", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik25", password: "H112233y@", category: ["chua_ket_noi_vi"] },
  { username: "huiik26", password: "H112233y@", category: ["chua_ket_noi_vi"] },
  { username: "huiik27", password: "H112233y@", category: ["chua_ket_noi_vi"] },
  { username: "huiik28", password: "H112233y@", category: ["chua_ket_noi_vi"] },
  { username: "huiik29", password: "H112233y@", category: ["chua_ket_noi_vi"] },
  { username: "huiik30", password: "H112233y@", category: ["chua_ket_noi_vi"] },
];

// Hàm tải dữ liệu từ localStorage hoặc dùng dữ liệu mặc định
function loadCredentialSets() {
  const defaultCredentialSets = [
  { username: "huiinguyen", password: "H11223344y@", category: ["hoan_thanh_ca"] },
  { username: "huiikk", password: "H112233y@", category: ["hoan_thanh_ca"] }, // Ví dụ nhiều đặc tính
  { username: "huiikkk", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiitran", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiivan", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiiha", password: "H112233y@", category: ["signal"] },
  { username: "huiiheo", password: "H112233y@", category: ["hoan_thanh_ca"] }, // Ví dụ nhiều đặc tính
  { username: "huiimeo", password: "H112233y@", category:["hoan_thanh_ca"]},
  { username: "hdddd", password: "H112233y@", category: ["signal"] },
  { username: "huiik3", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik4", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik5", password: "H112233y@", category: ["hoan_thanh_ca","signal" ] },
  { username: "huiik6", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik7", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik8", password: "H112233y@", category: ["hoan_thanh_ca","signal"] },
  { username: "huiik9", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik10", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik11", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik12", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik13", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik14", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik15", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik16", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik17", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik18", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik19", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik20", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik21", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik22", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik23", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik24", password: "H112233y@", category: ["hoan_thanh_ca"] },
  { username: "huiik25", password: "H112233y@", category: ["chua_ket_noi_vi"] },
  { username: "huiik26", password: "H112233y@", category: ["chua_ket_noi_vi"] },
  { username: "huiik27", password: "H112233y@", category: ["chua_ket_noi_vi"] },
  { username: "huiik28", password: "H112233y@", category: ["chua_ket_noi_vi"] },
  { username: "huiik29", password: "H112233y@", category: ["chua_ket_noi_vi"] },
  { username: "huiik30", password: "H112233y@", category: ["chua_ket_noi_vi"] },
  ];

  const storedData = localStorage.getItem("credentialSetsData");
  let loadedCredentialSets = [];

  if (storedData) {
    loadedCredentialSets = JSON.parse(storedData);
  }

  let mergedCredentialSets = [...defaultCredentialSets];

  mergedCredentialSets = mergedCredentialSets.map(defaultCred => {
    const foundInLoaded = loadedCredentialSets.find(loadedCred => loadedCred.username === defaultCred.username);
    if (foundInLoaded) {
      // Ensure category is always an array
      let categoryArray = Array.isArray(foundInLoaded.category) ? foundInLoaded.category : [foundInLoaded.category].filter(Boolean);
      
      // Merge categories: take default if loaded category is empty, otherwise use loaded
      if (categoryArray.length === 0 && Array.isArray(defaultCred.category)) {
          categoryArray = defaultCred.category;
      } else if (!Array.isArray(categoryArray) && typeof categoryArray === 'string') {
          // If for some reason it's a string, convert it
          categoryArray = [categoryArray];
      }

      return {
        ...defaultCred,
        startDate: foundInLoaded.startDate || null,
        copiedUser: foundInLoaded.hasOwnProperty('copiedUser') ? foundInLoaded.copiedUser : false,
        category: categoryArray, 
      };
    } else {
      return {
        ...defaultCred,
        startDate: null,
        copiedUser: false,
        // Ensure default category is an array
        category: Array.isArray(defaultCred.category) ? defaultCred.category : [defaultCred.category].filter(Boolean),
      };
    }
  });

  credentialSets = mergedCredentialSets;
  saveCredentialSets();
}

function saveCredentialSets() {
  localStorage.setItem("credentialSetsData", JSON.stringify(credentialSets));
}

loadCredentialSets();

function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

function handleLogin(event) {
  event.preventDefault();
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (password === "112233") {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("sessionTimeout", Date.now() + 20 * 60 * 1000);

    credentialSets.forEach(cred => {
      cred.copiedUser = false;
    });
    saveCredentialSets();

    window.location.href = "index.html";
  } else {
    errorMessage.textContent = "Mật khẩu không đúng!";
  }
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("sessionTimeout");

  credentialSets.forEach(cred => {
    cred.copiedUser = false;
  });
  saveCredentialSets();

  window.location.href = "login.html";
}

function startCountdown() {
  const timerDisplay = document.getElementById("countdown-timer");
  if (!timerDisplay) return;

  const updateTimer = () => {
    const now = Date.now();
    const timeout = parseInt(localStorage.getItem("sessionTimeout")) || 0;
    const timeLeft = timeout - now;

    if (timeLeft <= 0) {
      logout();
      return;
    }

    const minutes = Math.floor(timeLeft / 1000 / 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);
    timerDisplay.textContent = `Thời gian còn lại: ${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  updateTimer();
  setInterval(updateTimer, 1000);
}

let clickTracker = { userClicked: false, passClicked: false };

function autoScrollDown() {
  const currentPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;

  if (currentPosition + viewportHeight < documentHeight - 50) {
    window.scrollBy({ top: 100, behavior: "smooth" });
  }
}

function copyUsername(index) {
  navigator.clipboard.writeText(credentialSets[index].username);
  credentialSets[index].copiedUser = true;
  saveCredentialSets();
  renderPointView(); // Re-render the current view
  clickTracker.userClicked = true;
  if (clickTracker.userClicked && clickTracker.passClicked) {
    autoScrollDown();
    clickTracker.userClicked = false;
    clickTracker.passClicked = false;
  }
}

function copyPassword(index) {
  navigator.clipboard.writeText(credentialSets[index].password);
  clickTracker.passClicked = true;
  if (clickTracker.userClicked && clickTracker.passClicked) {
    autoScrollDown();
    clickTracker.userClicked = false;
    clickTracker.passClicked = false;
  }
}

function setIndividualStartDate(index) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();

  let desiredCycleDayInput = prompt("Nhập ngày bạn muốn hiển thị trong chu kỳ 28 ngày (1-28):");

  if (desiredCycleDayInput === null || desiredCycleDayInput.trim() === "") {
    return;
  }

  let desiredCycleDay = parseInt(desiredCycleDayInput);

  if (isNaN(desiredCycleDay) || desiredCycleDay < 1 || desiredCycleDay > 28) {
    alert("Ngày không hợp lệ. Vui lòng nhập số từ 1 đến 28.");
    return;
  }

  let effectiveToday = new Date(currentYear, currentMonth, currentDay, 7, 0, 0);
  if (now.getHours() < 7) {
    effectiveToday.setDate(effectiveToday.getDate() - 1);
  }

  const daysToSubtract = desiredCycleDay - 1;

  let calculatedStartDate = new Date(effectiveToday);
  calculatedStartDate.setDate(effectiveToday.getDate() - daysToSubtract);
  calculatedStartDate.setHours(7, 0, 0, 0);

  credentialSets[index].startDate = calculatedStartDate.toISOString();
  saveCredentialSets();
  updateIndividualDayCounters();
}

function updateIndividualDayCounters() {
  const now = new Date();

  credentialSets.forEach((cred, index) => {
    const dayDisplayElement = document.getElementById(`day-display-${index}`);
    if (!dayDisplayElement) return;

    if (!cred.startDate) {
      dayDisplayElement.textContent = "Thiết lập ngày";
      dayDisplayElement.className = 'day-display-button';
      dayDisplayElement.onclick = () => setIndividualStartDate(index);
      return;
    }

    const startDate = new Date(cred.startDate);

    let daysPassed;

    const now7AM = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 0, 0);

    if (now.getHours() < 7) {
      const yesterday7AM = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 7, 0, 0);
      daysPassed = Math.floor((yesterday7AM.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    } else {
      daysPassed = Math.floor((now7AM.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    }

    daysPassed = Math.max(0, daysPassed);

    const currentCycleDay = (daysPassed % 28) + 1;

    dayDisplayElement.textContent = `Ngày: ${currentCycleDay}`;

    dayDisplayElement.className = 'day-display-button';
    if (currentCycleDay === 7 || currentCycleDay === 14 || currentCycleDay === 21 || currentCycleDay === 28) {
      dayDisplayElement.classList.add('important-day');
    }
    dayDisplayElement.onclick = () => setIndividualStartDate(index);
  });
}

// Hàm hiển thị danh sách thông tin đăng nhập (View "Point")
function renderPointView() {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) return;

  mainContent.innerHTML = ""; // Xóa nội dung cũ

  // Thêm đồng hồ đếm ngược
  const timerDisplay = document.createElement("div");
  timerDisplay.id = "countdown-timer";
  timerDisplay.textContent = "Thời gian còn lại: 09:00";
  mainContent.appendChild(timerDisplay);

  credentialSets.forEach((cred, index) => {
    const setDiv = document.createElement("div");
    setDiv.className = "credential-set-single";
    if (cred.copiedUser) {
      setDiv.classList.add('copied-user');
    }

    setDiv.innerHTML = `
      <div class="info-section-single">
        <div class="cred-pair-single">
          <button onclick="copyUsername(${index})">${cred.username}</button>
          <button onclick="copyPassword(${index})">Copy pass</button>
        </div>
        <div class="day-controls">
            <button id="day-display-${index}" class="day-display-button"></button>
        </div>
      </div>
      ${index < credentialSets.length - 1 ? '<div class="divider"></div>' : ""}
    `;
    mainContent.appendChild(setDiv);
  });

  updateIndividualDayCounters(); // Cập nhật bộ đếm ngày cho các mục mới được render
  startCountdown(); // Khởi động lại đồng hồ đếm ngược cho view này
}

// Hàm hiển thị danh sách thông tin đăng nhập theo loại (View "Note")
function renderNoteView() {
  const mainContent = document.getElementById("main-content");
  if (!mainContent) return;

  mainContent.innerHTML = ""; // Xóa nội dung cũ

  const categories = {
    "signal": "Signal",
    "chua_ket_noi_vi": "Chưa kết nối ví",
    "hoan_thanh_ca": "Hoàn thành cả",
  };

  // Group credentials by category
  const categorizedCredentials = {};
  for (const key in categories) {
    categorizedCredentials[key] = [];
  }

  credentialSets.forEach(cred => {
    // Ensure cred.category is an array before iterating
    const credCategories = Array.isArray(cred.category) ? cred.category : [cred.category].filter(Boolean);
    
    credCategories.forEach(cat => {
        if (categorizedCredentials[cat]) {
            categorizedCredentials[cat].push(cred);
        }
    });
  });


  for (const categoryKey in categories) {
    const categoryTitle = categories[categoryKey];
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "category-section";

    const titleElement = document.createElement("h2");
    titleElement.innerHTML = `${categoryTitle} <i class="fas fa-chevron-down toggle-icon"></i>`;
    titleElement.onclick = function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        // Set max-height to scrollHeight to allow smooth transition
        content.style.maxHeight = content.scrollHeight + "px";
      }
    };
    categoryDiv.appendChild(titleElement);

    const ul = document.createElement("ul");
    ul.className = "category-list collapsible-content";

    const filteredCredentials = categorizedCredentials[categoryKey];

    if (filteredCredentials.length === 0) {
      const li = document.createElement("li");
      li.textContent = "Không có dữ liệu trong mục này.";
      ul.appendChild(li);
    } else {
      filteredCredentials.forEach((cred) => { // No need for index here as it's not used
        const li = document.createElement("li");
        li.innerHTML = `
          <span>${cred.username}</span>
          <button onclick="copyUsernameForNote('${cred.username}')">Copy User</button>
          <button onclick="copyPasswordForNote('${cred.password}')">Copy Pass</button>
        `;
        ul.appendChild(li);
      });
    }
    categoryDiv.appendChild(ul);
    mainContent.appendChild(categoryDiv);
  }
}

// Hàm sao chép username cho view Note (để không ảnh hưởng đến trạng thái copiedUser của view Point)
function copyUsernameForNote(username) {
  navigator.clipboard.writeText(username);
  // alert("Đã sao chép Username: " + username); // Bỏ thông báo alert
}

// Hàm sao chép password cho view Note
function copyPasswordForNote(password) {
  navigator.clipboard.writeText(password);
  // alert("Đã sao chép Password."); // Bỏ thông báo alert
}


// Hàm chuyển đổi giữa các view
function showView(viewName) {
  const navButtons = document.querySelectorAll(".nav-button");
  navButtons.forEach(button => button.classList.remove("active"));
  document.getElementById(`${viewName}-button`).classList.add("active");

  // Đóng menu hamburger sau khi chọn view
  const navBar = document.getElementById("nav-bar");
  navBar.classList.add("hidden");

  if (viewName === "point") {
    renderPointView();
    const scrollButtons = document.querySelector('.scroll-buttons');
    if (scrollButtons) scrollButtons.style.display = 'flex'; // Hiện nút cuộn
  } else if (viewName === "note") {
    renderNoteView();
    const scrollButtons = document.querySelector('.scroll-buttons');
    if (scrollButtons) scrollButtons.style.display = 'none'; // Ẩn nút cuộn cho view Note
  }
}

// Toggle Hamburger Menu
function toggleHamburgerMenu() {
  const navBar = document.getElementById("nav-bar");
  navBar.classList.toggle("hidden");
}

// Thêm sự kiện cho form đăng nhập (chỉ khi ở login.html)
if (document.getElementById("login-form")) {
  document.getElementById("login-form").addEventListener("submit", handleLogin);
}

// Chạy khi DOM đã tải xong
document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById("nav-bar")) { // Kiểm tra xem đây có phải index.html không
        if (isLoggedIn()) {
            // Gắn sự kiện cho nút hamburger
            document.getElementById("hamburger-menu").onclick = toggleHamburgerMenu;

            // Gắn sự kiện cho nút logout
            const logoutButton = document.getElementById("logout-button");
            if (logoutButton) {
                logoutButton.addEventListener("click", logout);
            }

            showView("point"); // Mặc định hiển thị Point view sau khi đăng nhập
            // Thiết lập sự kiện cho các nút điều hướng
            document.getElementById("point-button").onclick = () => showView("point");
            document.getElementById("note-button").onclick = () => showView("note");

            // Bắt đầu cập nhật bộ đếm ngày và đồng hồ đếm ngược tự động
            setInterval(updateIndividualDayCounters, 60 * 1000); // Cập nhật mỗi phút
            // startCountdown() được gọi trong renderPointView, đảm bảo nó chạy khi view được render
            // Tuy nhiên, ta cần đảm bảo scroll buttons được gán sự kiện sau khi DOM được tạo
            setupScrollButtons();

        } else {
            window.location.href = "login.html"; // Chuyển hướng về trang đăng nhập nếu chưa đăng nhập
        }
    }
});

// Hàm thiết lập lại sự kiện cho các nút cuộn
function setupScrollButtons() {
    const scrollUpBtn = document.getElementById("scroll-up");
    const scrollDownBtn = document.getElementById("scroll-down");

    if (scrollUpBtn) {
        // Xóa các sự kiện cũ trước khi thêm mới để tránh lặp
        scrollUpBtn.removeEventListener("click", scrollToTop);
        scrollUpBtn.removeEventListener("touchstart", scrollToTop);
        scrollUpBtn.addEventListener("click", scrollToTop);
        scrollUpBtn.addEventListener("touchstart", scrollToTop);
    }

    if (scrollDownBtn) {
        // Xóa các sự kiện cũ trước khi thêm mới để tránh lặp
        scrollDownBtn.removeEventListener("click", scrollToBottom);
        scrollDownBtn.removeEventListener("touchstart", scrollToBottom);
        scrollDownBtn.addEventListener("click", scrollToBottom);
        scrollDownBtn.addEventListener("touchstart", scrollToBottom);
    }
}

function scrollToTop(e) {
    if (e) e.preventDefault(); // Ngăn chặn hành vi mặc định của touchstart
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToBottom(e) {
    if (e) e.preventDefault(); // Ngăn chặn hành vi mặc định của touchstart
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}
