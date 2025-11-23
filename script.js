// โหลดธีมเมื่อเปิดเว็บ
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const btn = document.getElementById("theme-toggle-btn");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        btn.innerHTML = "🖊️"; // Dark Mode
    } else {
        btn.innerHTML = "🖋️"; // Light Mode
    }
});

// ฟังก์ชันสลับธีม
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("theme-toggle-btn");
    
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        btn.innerHTML = "🖊️";
    } else {
        localStorage.setItem("theme", "light");
        btn.innerHTML = "🖋️";
    }
}
