// Dữ liệu ban đầu (chưa có startDate và copiedUser), sẽ được cập nhật khi tải hoặc thiết lập
let credentialSets = [
  { username: "huiinguyen", password: "H11223344y@" },
  { username: "huiikk", password: "H112233y@" },
  { username: "huiikkk", password: "H112233y@" },
  { username: "huiitran", password: "H112233y@" },
  { username: "huiivan", password: "H112233y@" },
  { username: "huiiha", password: "H112233y@" },
  { username: "huiiheo", password: "H112233y@" },
  { username: "huiimeo", password: "H112233y@" },
  { username: "hdddd", password: "H112233y@" },
  { username: "huiik3", password: "H112233y@" },
  { username: "huiik4", password: "H112233y@" },
  { username: "huiik5", password: "H112233y@" },
  { username: "huiik6", password: "H112233y@" },
  { username: "huiik7", password: "H112233y@" },
  { username: "huiik8", password: "H112233y@" },
  { username: "huiik9", password: "H112233y@" },
  { username: "huiik10", password: "H112233y@" },
  { username: "huiik11", password: "H112233y@" },
  { username: "huiik12", password: "H112233y@" },
  { username: "huiik13", password: "H112233y@" },
  { username: "huiik14", password: "H112233y@" },
  { username: "huiik15", password: "H112233y@" },
  { username: "huiik16", password: "H112233y@" },
  { username: "huiik17", password: "H112233y@" },
  { username: "huiik18", password: "H112233y@" },
  { username: "huiik19", password: "H112233y@" },
  { username: "huiik20", password: "H112233y@" },
  { username: "huiik21", password: "H112233y@" },
  { username: "huiik22", password: "H112233y@" },
  { username: "huiik23", password: "H112233y@" },
   { username: "huiik24", password: "H112233y@" },
];

// Hàm tải dữ liệu từ localStorage hoặc dùng dữ liệu mặc định
function loadCredentialSets() {
  const storedData = localStorage.getItem("credentialSetsData");
  if (storedData) {
    // Nếu có dữ liệu đã lưu, phân tích cú pháp JSON
    credentialSets = JSON.parse(storedData);
    // Đảm bảo mỗi cặp có thuộc tính copiedUser nếu chưa có (cho các dữ liệu cũ)
    credentialSets = credentialSets.map(cred => ({ ...cred, copiedUser: cred.hasOwnProperty('copiedUser') ? cred.copiedUser : false }));
  } else {
    // Nếu chưa có, đảm bảo mỗi cặp có startDate ban đầu là null và copiedUser là false
    credentialSets = credentialSets.map(cred => ({ ...cred, startDate: null, copiedUser: false }));
    saveCredentialSets(); // Lưu lại lần đầu
  }
}

// Hàm lưu dữ liệu vào localStorage
function saveCredentialSets() {
  localStorage.setItem("credentialSetsData", JSON.stringify(credentialSets));
}

// Gọi hàm tải dữ liệu khi khởi động script
loadCredentialSets();

// Hàm kiểm tra trạng thái đăng nhập
function isLoggedIn() {
  return localStorage.getItem("isLoggedIn") === "true";
}

// Hàm xử lý đăng nhập
function handleLogin(event) {
  event.preventDefault();
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (password === "1212@") {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("sessionTimeout", Date.now() + 18 * 60 * 1000); // 18 phút

    // Khi đăng nhập thành công, reset trạng thái copiedUser cho tất cả các cặp
    credentialSets.forEach(cred => {
        cred.copiedUser = false;
    });
    saveCredentialSets(); // Lưu lại trạng thái đã reset
    
    window.location.href = "index.html";
  } else {
    errorMessage.textContent = "Mật khẩu không đúng!";
  }
}

// Hàm đăng xuất
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("sessionTimeout");
  
  // Khi đăng xuất, reset trạng thái copiedUser cho tất cả các cặp
  credentialSets.forEach(cred => {
      cred.copiedUser = false;
  });
  saveCredentialSets(); // Lưu lại trạng thái đã reset

  window.location.href = "login.html";
}

// Hàm hiển thị đồng hồ đếm ngược
function startCountdown() {
  const timerDisplay = document.getElementById("countdown-timer");
  if (!timerDisplay) return;

  const updateTimer = () => {
    const now = Date.now();
    const timeout = parseInt(localStorage.getItem("sessionTimeout")) || 0;
    const timeLeft = timeout - now;

    if (timeLeft <= 0) {
      logout(); // Sẽ reset copiedUser khi gọi logout
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

// Biến lưu trữ trạng thái nhấp user và pass
let clickTracker = { userClicked: false, passClicked: false };

// Hàm tự động cuộn xuống khi đã nhấp cả user và pass
function autoScrollDown() {
  const currentPosition = window.scrollY;
  const viewportHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;

  // Chỉ cuộn nếu chưa ở gần cuối trang
  if (currentPosition + viewportHeight < documentHeight - 50) {
    window.scrollBy({ top: 100, behavior: "smooth" }); // Cuộn xuống 100px
  }
}

// Hàm sao chép tên người dùng
function copyUsername(index) {
  navigator.clipboard.writeText(credentialSets[index].username);
  credentialSets[index].copiedUser = true; // Đánh dấu đã sao chép user
  saveCredentialSets(); // Lưu trạng thái
  renderCredentialSets(); // Render lại để cập nhật màu sắc
  clickTracker.userClicked = true;
  if (clickTracker.userClicked && clickTracker.passClicked) {
    autoScrollDown();
    clickTracker.userClicked = false; // Reset sau khi cuộn
    clickTracker.passClicked = false; // Reset sau khi cuộn
  }
}

// Hàm sao chép mật khẩu
function copyPassword(index) {
  navigator.clipboard.writeText(credentialSets[index].password);
  clickTracker.passClicked = true;
  if (clickTracker.userClicked && clickTracker.passClicked) {
    autoScrollDown();
    clickTracker.userClicked = false; // Reset sau khi cuộn
    clickTracker.passClicked = false; // Reset sau khi cuộn
  }
}

// Hàm thiết lập ngày khởi đầu cho từng cặp (chỉ nhập ngày trong chu kỳ)
function setIndividualStartDate(index) {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth(); // 0-11
  const currentDay = now.getDate();

  let desiredCycleDayInput = prompt("Nhập ngày bạn muốn hiển thị trong chu kỳ 28 ngày (1-28):");

  if (desiredCycleDayInput === null || desiredCycleDayInput.trim() === "") {
    return; // Người dùng hủy hoặc nhập rỗng
  }

  let desiredCycleDay = parseInt(desiredCycleDayInput);

  if (isNaN(desiredCycleDay) || desiredCycleDay < 1 || desiredCycleDay > 28) {
    alert("Ngày không hợp lệ. Vui lòng nhập số từ 1 đến 28.");
    return;
  }

  // Tính toán effectiveToday (ngày hiện tại điều chỉnh theo mốc 7 AM)
  let effectiveToday = new Date(currentYear, currentMonth, currentDay, 7, 0, 0);
  if (now.getHours() < 7) {
    effectiveToday.setDate(effectiveToday.getDate() - 1); // Nếu trước 7h sáng, tính từ ngày hôm qua
  }

  // Tính số ngày cần trừ đi từ effectiveToday để đạt được desiredCycleDay
  // Ví dụ: desiredCycleDay = 1 (ngày đầu tiên của chu kỳ) -> trừ 0 ngày
  // desiredCycleDay = 7 (ngày thứ 7 của chu kỳ) -> trừ 6 ngày
  const daysToSubtract = desiredCycleDay - 1;

  // Tính toán startDate thực tế của cặp user/pass này
  let calculatedStartDate = new Date(effectiveToday);
  calculatedStartDate.setDate(effectiveToday.getDate() - daysToSubtract);
  calculatedStartDate.setHours(7, 0, 0, 0); // Đảm bảo mốc thời gian là 7 AM

  // Lưu startDate đã tính toán
  credentialSets[index].startDate = calculatedStartDate.toISOString();
  saveCredentialSets(); // Lưu lại dữ liệu sau khi cập nhật
  updateIndividualDayCounters(); // Cập nhật hiển thị ngay lập tức
  alert(`Đã thiết lập cặp này sẽ bắt đầu từ Ngày ${desiredCycleDay} của chu kỳ.`);
}


// Hàm cập nhật bộ đếm ngày cho TỪNG CẶP
function updateIndividualDayCounters() {
  const now = new Date(); // Thời điểm hiện tại

  credentialSets.forEach((cred, index) => {
    const dayCounterElement = document.getElementById(`day-counter-${index}`);
    if (!dayCounterElement) return; // Đảm bảo phần tử tồn tại

    if (!cred.startDate) {
      dayCounterElement.textContent = "Chưa thiết lập ngày";
      dayCounterElement.className = 'day-counter-individual'; // Reset class
      return;
    }

    const startDate = new Date(cred.startDate);

    let daysPassed;

    // Tạo một đối tượng Date đại diện cho 7 AM của ngày hiện tại
    const now7AM = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 7, 0, 0);

    // Logic để tính số ngày đã trôi qua kể từ startDate đến thời điểm hiện tại,
    // với mốc reset ngày mới là 7 AM.
    // Nếu bây giờ là trước 7 AM, chúng ta tính ngày dựa trên ngày hôm qua.
    if (now.getHours() < 7) {
      // Nếu bây giờ là trước 7 AM, lấy ngày của hôm qua (lúc 7 AM) để tính toán
      const yesterday7AM = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 7, 0, 0);
      daysPassed = Math.floor((yesterday7AM.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    } else {
      // Nếu bây giờ là sau hoặc bằng 7 AM, lấy ngày hiện tại (lúc 7 AM) để tính toán
      daysPassed = Math.floor((now7AM.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
    }

    // Đảm bảo số ngày không âm (nếu startDate là trong tương lai so với mốc tính)
    daysPassed = Math.max(0, daysPassed);

    // Áp dụng chu kỳ 28 ngày, đảm bảo chạy từ 1 đến 28
    const currentCycleDay = (daysPassed % 28) + 1;

    dayCounterElement.textContent = `Ngày: ${currentCycleDay}`;

    // Xóa các class cũ và thêm class mới
    dayCounterElement.className = 'day-counter-individual'; // Reset về class cơ bản
    if (currentCycleDay === 7 || currentCycleDay === 14 || currentCycleDay === 21 || currentCycleDay === 28) {
      dayCounterElement.classList.add('important-day');
    }
  });
}


// Hàm hiển thị danh sách thông tin đăng nhập
function renderCredentialSets() {
  if (!isLoggedIn()) {
    window.location.href = "login.html";
    return;
  }

  const credentialList = document.getElementById("credential-list");
  credentialList.innerHTML = ""; // Xóa nội dung cũ

  // Thêm nút đăng xuất
  const logoutButton = document.createElement("button");
  logoutButton.id = "logout-button";
  logoutButton.textContent = "Đăng xuất";
  logoutButton.onclick = logout;
  credentialList.appendChild(logoutButton);

  // Thêm đồng hồ đếm ngược
  const timerDisplay = document.createElement("div");
  timerDisplay.id = "countdown-timer";
  timerDisplay.textContent = "Thời gian còn lại: 09:00";
  credentialList.appendChild(timerDisplay);

  // Hiển thị MỖI cặp user/pass trên một hàng
  credentialSets.forEach((cred, index) => {
    const setDiv = document.createElement("div");
    setDiv.className = "credential-set-single"; // Class cho từng cặp
    if (cred.copiedUser) {
      setDiv.classList.add('copied-user'); // Thêm class nếu user đã được copy
    }

    setDiv.innerHTML = `
      <div class="info-section-single">
        <div class="cred-pair-single">
          <span class="index-number">${index + 1}.</span> <button onclick="copyUsername(${index})">${cred.username}</button>
          <button onclick="copyPassword(${index})">Copy pass</button>
        </div>
        <div class="day-controls">
            <div id="day-counter-${index}" class="day-counter-individual"></div> <button class="set-date-button" onclick="setIndividualStartDate(${index})">Thiết lập ngày</button>
        </div>
      </div>
      ${index < credentialSets.length - 1 ? '<div class="divider"></div>' : ""}
    `;

    credentialList.appendChild(setDiv);
  });

  // Thêm sự kiện cho nút cuộn
  const scrollUpBtn = document.getElementById("scroll-up");
  const scrollDownBtn = document.getElementById("scroll-down");

  if (scrollUpBtn) {
    scrollUpBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    scrollUpBtn.addEventListener("touchstart", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
    scrollDownBtn.addEventListener("touchstart", (e) => {
      e.preventDefault();
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  }

  // Khởi động đồng hồ đếm ngược
  startCountdown();
  // Khởi động bộ đếm ngày cho TỪNG CẶP
  updateIndividualDayCounters(); // Gọi lần đầu để hiển thị ngay
  // Kiểm tra mỗi phút để cập nhật ngày (đảm bảo cập nhật khi chuyển sang ngày mới lúc 7h sáng)
  setInterval(updateIndividualDayCounters, 60 * 1000);
}

// Thêm sự kiện cho form đăng nhập
if (document.getElementById("login-form")) {
  document.getElementById("login-form").addEventListener("submit", handleLogin);
}

// Gọi hàm render nếu đang ở index.html
if (document.getElementById("credential-list")) {
  renderCredentialSets();
}
