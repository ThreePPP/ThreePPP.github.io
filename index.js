// Smooth scrolling for navigation links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute("href"));
            target.scrollIntoView({ behavior: "smooth" });
        });
    });
});

// Form submission logic (if applicable)
const form = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

if (form && thankYouMessage) {
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form refresh
        form.style.display = 'none'; // Hide form
        thankYouMessage.style.display = 'block'; // Show thank you message
    });
}

// Calculator
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// To-Do List 
document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    // ฟังก์ชั่นเพื่อเพิ่มงาน
    const addTask = () => {
        const taskText = taskInput.value.trim(); // Get input text and trim spaces
        if (taskText === "") {
            alert("Please enter a task."); // Alert if input is empty
            return;
        }

        // สร้างรายการงาน(item)ใหม่
        const taskItem = document.createElement("li");
        taskItem.className = "flex justify-between items-center p-2 bg-gray-100 rounded-lg shadow";

        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // สร้างปุ่มลบงาน
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600";
        deleteButton.addEventListener("click", () => {
            taskItem.remove(); // Remove task when button is clicked
        });

        // เพิ่มข้อความงานและปุ่มลบในรายการงาน
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(deleteButton);

        // เพิ่มรายการงานลงในรายการงาน
        taskList.appendChild(taskItem);

        // ล้างข้อมูลในช่อง input
        taskInput.value = "";
    };

    // เพิ่มงานด้วยการคลิกปุ่ม
    addTaskButton.addEventListener("click", addTask);

    // เพิ่มงานด้วยการกดปุ่ม Enter
    taskInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") addTask();
    });
});


//countdown timer
const startButton = document.getElementById("startButton");
const resetButton = document.getElementById("resetButton");
const hoursInput = document.getElementById("hoursInput");
const minutesInput = document.getElementById("minutesInput");
const secondsInput = document.getElementById("secondsInput");
const countdownDisplay = document.getElementById("countdownDisplay");
const alertBox = document.getElementById("alertBox");
const alertSound = document.getElementById("alertSound"); // โหลดไฟล์เสียง

let countdownInterval;

// ฟังก์ชันเริ่มนับถอยหลัง
startButton.addEventListener("click", () => {
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

    let totalTime = hours * 3600 + minutes * 60 + seconds;

    if (totalTime <= 0) {
        alert("Please enter a valid time!");
        return;
    }

    alertBox.classList.add("hidden");
    updateDisplay(totalTime);

    clearInterval(countdownInterval); // รีเซ็ตตัวจับเวลาก่อนหน้า
    countdownInterval = setInterval(() => {
        totalTime--;
        updateDisplay(totalTime);

        if (totalTime <= 0) {
            clearInterval(countdownInterval);
            alertBox.classList.remove("hidden");
            alertSound.play(); // เล่นเสียงแจ้งเตือน
        }
    }, 1000);
});

// ฟังก์ชันรีเซ็ต
resetButton.addEventListener("click", () => {
    clearInterval(countdownInterval); // หยุดการนับถอยหลัง
    alertBox.classList.add("hidden"); // ซ่อนการแจ้งเตือน
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
    countdownDisplay.textContent = "00:00:00"; // รีเซ็ตการแสดงผล
});

// ฟังก์ชันแปลงเวลาและอัปเดตการแสดงผล
function updateDisplay(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    countdownDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

