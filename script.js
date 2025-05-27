// Danh sách cặp thông tin (user, pass, checkInCount, lastCheckInDate)
const credentialSets = [
    { username: "huiinguyen", password: "H11223344y@", checkInCount: 1, lastCheckInDate: null },
    { username: "huiikk", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiikkk", password: "H112233y@", checkInCount: 2, lastCheckInDate: null },
    { username: "huiik3", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiik4", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiik5", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiik6", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiik7", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiik8", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiik9", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiik10", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiik11", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiik12", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiitran", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiivan", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiiha", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiiha", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiiheo", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "huiimeo", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
    { username: "hdddd", password: "H112233y@", checkInCount: 0, lastCheckInDate: null },
];

// Tính số ngày điểm danh tự động cho mỗi cặp, tăng từ 7h sáng
function updateCheckInCounts() {
    const today = new Date();
    const today7AM = new Date(today);
    today7AM.setHours(7, 0, 0, 0);

    let credentials = getFromLocalStorage("credentialSets") || credentialSets;

    // Đồng bộ với credentialSets mới
    credentials = credentialSets.map((newCred, index) => {
        const storedCred = credentials.find(c => c.username === newCred.username) || {};

        // Nếu cặp mới hoặc không tồn tại trong localStorage, khởi tạo
        if (!storedCred.username || !storedCred.lastCheckInDate) {
            return {
                ...newCred,
                lastCheckInDate: today.toISOString(),
                checkInCount: 1
            };
        }

        return storedCred;
    });

    credentials = credentials.map((cred, index) => {
        const lastCheckIn = new Date(cred.lastCheckInDate);
        const lastCheckIn7AM = new Date(lastCheckIn);
        lastCheckIn7AM.setHours(7, 0, 0, 0);

        // Tính số ngày từ lastCheckInDate
        const timeDiff = today7AM - lastCheckIn7AM;
        let checkInCount = cred.checkInCount + Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        // Cập nhật nếu đã qua 7h sáng ngày mới
        if (today >= today7AM && (lastCheckIn < lastCheckIn7AM || today.toDateString() !== lastCheckIn.toDateString())) {
            const milestone = checkMilestone(checkInCount);
            if (milestone.reset) {
                checkInCount = 1;
            }
            cred.checkInCount = checkInCount;
            cred.lastCheckInDate = today.toISOString();

            // Hiển thị thông báo mốc cho cặp này
            if (milestone.message) {
                document.getElementById("milestone-message").textContent = `Cặp ${cred.username}: ${milestone.message}`;
            }
        }

        return cred;
    });

    // Lưu lại danh sách đã cập nhật
    saveToLocalStorage("credentialSets", credentials);

    // Cập nhật giao diện
    renderCredentialSets();
}

// Render danh sách cặp thông tin
function renderCredentialSets() {
    const credentialList = document.getElementById("credential-list");
    credentialList.innerHTML = "";

    const credentials = getFromLocalStorage("credentialSets") || credentialSets;

    credentials.forEach((cred, index) => {
        const setDiv = document.createElement("div");
        setDiv.className = "credential-set";

        setDiv.innerHTML = `
      <div class="info-section">
        <span>user: ${cred.username}</span>
        <button onclick="copyUsername(${index})">copy user</button>
        <button onclick="copyPassword(${index})">copy pass</button>
        <span>${cred.checkInCount}</span>
      </div>
      ${index < credentials.length - 1 ? '<div class="divider"></div>' : ''}
    `;

        credentialList.appendChild(setDiv);
    });
}

// Copy username
function copyUsername(index) {
    const credentials = getFromLocalStorage("credentialSets") || credentialSets;
    navigator.clipboard.writeText(credentials[index].username);
}

// Copy password
function copyPassword(index) {
    const credentials = getFromLocalStorage("credentialSets") || credentialSets;
    navigator.clipboard.writeText(credentials[index].password);
}

// Khởi tạo khi tải trang
updateCheckInCounts();