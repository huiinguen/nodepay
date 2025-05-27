function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

function checkMilestone(days) {
  const milestones = [7, 14, 21, 28];
  if (days > 28) {
    return { reset: true, message: `Đã đạt mốc 28 ngày, reset về 1!` };
  }
  if (milestones.includes(days)) {
    return { reset: false, message: `Chúc mừng! Đã đạt mốc ${days} ngày!` };
  }
  return { reset: false, message: "" };
}