const credentialSets = [
    { username: "huiinguyen", password: "H11223344y@" },
    { username: "huiikk", password: "H112233y@" },
    { username: "huiikkk", password: "H112233y@" },
    { username: "huiitran", password: "H112233y@" },
    { username: "huiivan", password: "H112233y@" },
    { username: "huiiha", password: "H112233y@" },
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

function renderCredentialSets() {
  const credentialList = document.getElementById("credential-list");
  credentialList.innerHTML = "";

  credentialSets.forEach((cred, index) => {
    const setDiv = document.createElement("div");
    setDiv.className = "credential-set";

    setDiv.innerHTML = `
      <div class="info-section">
        <span>user: ${cred.username}</span>
        <button onclick="copyUsername(${index})">copy user</button>
        <button onclick="copyPassword(${index})">copy pass</button>
      </div>
      ${index < credentialSets.length - 1 ? '<div class="divider"></div>' : ''}
    `;

    credentialList.appendChild(setDiv);
  });
}

function copyUsername(index) {
  navigator.clipboard.writeText(credentialSets[index].username);
}

function copyPassword(index) {
  navigator.clipboard.writeText(credentialSets[index].password);
}

renderCredentialSets();
