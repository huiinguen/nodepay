const credentialSets = [
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
    localStorage.setItem("sessionTimeout", Date.now() + 18 * 60 * 1000); // 9 phút
    window.location.href = "index.html";
  } else {
    errorMessage.textContent = "Mật khẩu không đúng!";
  }
}

// Hàm đăng xuất
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("sessionTimeout");
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

// Hàm hiển thị danh sách thông tin đăng nhập
function renderCredentialSets() {
  if (!isLoggedIn()) {
    window.location.href = "login.html";
    return;
  }

  const credentialList = document.getElementById("credential-list");
  credentialList.innerHTML = "";

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

  // Hiển thị 2 cặp user/pass trên mỗi hàng, bỏ hàng cuối nếu chỉ có 1 cặp
  for (let i = 0; i < credentialSets.length - 1; i += 2) {
    const setDiv = document.createElement("div");
    setDiv.className = "credential-set";

    const leftCred = credentialSets[i];
    const rightCred = credentialSets[i + 1];

    setDiv.innerHTML = `
      <div class="info-section">
        <div class="cred-pair">
          <button onclick="copyUsername(${i})">${leftCred.username}</button>
          <button onclick="copyPassword(${i})">Copy pass</button>
        </div>
        <span class="separator"> | </span>
        <div class="cred-pair">
          <button onclick="copyUsername(${i + 1})">${rightCred.username}</button>
          <button onclick="copyPassword(${i + 1})">Copy pass</button>
        </div>
      </div>
      ${i < credentialSets.length - 3 ? '<div class="divider"></div>' : ""}
    `;

    credentialList.appendChild(setDiv);
  }

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
}

// Thêm sự kiện cho form đăng nhập
if (document.getElementById("login-form")) {
  document.getElementById("login-form").addEventListener("submit", handleLogin);
}

// Gọi hàm render nếu đang ở index.html
if (document.getElementById("credential-list")) {
  renderCredentialSets();
}
