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
    window.location.href = "index.html";
  } else {
    errorMessage.textContent = "Mật khẩu không đúng!";
  }
}

// Hàm đăng xuất
function logout() {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "login.html";
}

// Hàm hiển thị danh sách thông tin đăng nhập
function renderCredentialSets() {
  if (!isLoggedIn()) {
    window.location.href = "login.html";
    return;
  }

  const credentialList = document.getElementById("credential-list");
  credentialList.innerHTML = "";

  credentialList.innerHTML += `
    <button onclick="logout()" style="margin-bottom: 1rem;">Đăng xuất</button>
  `;

  credentialSets.forEach((cred, index) => {
    const setDiv = document.createElement("div");
    setDiv.className = "credential-set";

    setDiv.innerHTML = `
      <div class="info-section">
        <span>user: ${cred.username}</span>
        <button onclick="copyUsername(${index})">copy user</button>
        <button onclick="copyPassword(${index})">copy pass</button>
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
  }

  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  }
}

// Hàm sao chép tên người dùng
function copyUsername(index) {
  navigator.clipboard.writeText(credentialSets[index].username);
}

// Hàm sao chép mật khẩu
function copyPassword(index) {
  navigator.clipboard.writeText(credentialSets[index].password);
}

// Thêm sự kiện cho form đăng nhập
if (document.getElementById("login-form")) {
  document.getElementById("login-form").addEventListener("submit", handleLogin);
}

// Gọi hàm render nếu đang ở index.html
if (document.getElementById("credential-list")) {
  renderCredentialSets();
}
