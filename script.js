// Global variables
let currentUserType = "student"
let isLoggedIn = false

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeApp()
})

function initializeApp() {
  // Set up user type selector
  const userTypeBtns = document.querySelectorAll(".user-type-btn")
  userTypeBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const type = this.getAttribute("data-type")
      selectUserType(type)
    })
  })

  // Set up form inputs
  const studentIdInput = document.getElementById("studentId")
  const passwordInput = document.getElementById("password")

  if (studentIdInput && passwordInput) {
    // Allow Enter key to submit
    ;[studentIdInput, passwordInput].forEach((input) => {
      input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          handleLogin()
        }
      })
    })
  }

  // Update login button text based on user type
  updateLoginButtonText()

  // Update current time
  updateCurrentTime()
  setInterval(updateCurrentTime, 1000)
}

function selectUserType(type) {
  currentUserType = type

  // Update button states
  const userTypeBtns = document.querySelectorAll(".user-type-btn")
  userTypeBtns.forEach((btn) => {
    btn.classList.remove("active")
    if (btn.getAttribute("data-type") === type) {
      btn.classList.add("active")
    }
  })

  updateLoginButtonText()
}

function updateLoginButtonText() {
  const loginBtn = document.querySelector(".login-btn")
  if (loginBtn) {
    const userTypeText = currentUserType === "student" ? "Student" : "Teacher"
    loginBtn.textContent = `Login as ${userTypeText}`
  }
}

function handleLogin() {
  const studentId = document.getElementById("studentId").value.trim()
  const password = document.getElementById("password").value.trim()

  // Basic validation
  if (!studentId || !password) {
    alert("Please enter both Student ID and Password")
    return
  }

  // Simple authentication (in real app, this would be server-side)
  if (password.length >= 6) {
    // Set user info
    const userName = getUserName(studentId)

    // Update welcome message
    const welcomeUser = document.getElementById("welcomeUser")
    if (welcomeUser) {
      welcomeUser.textContent = `Welcome, ${userName}`
    }

    // Show dashboard, hide login
    showDashboard()
    isLoggedIn = true

    // Show success message
    showNotification("Login successful!", "success")
  } else {
    alert("Password must be at least 6 characters long")
  }
}

function getUserName(studentId) {
  // Simple mapping for demo purposes
  const userNames = {
    S001: "Rohit Sharma",
    S002: "Shreya Ranjan",
    S003: "Sakshi Srivastwa",
    T001: "prof.Koushik Bhattacharya",
    T002: "Prof. Sunita Verma",
  }

  return userNames[studentId] || `${currentUserType === "student" ? "Student" : "Teacher"} ${studentId}`
}

function handleLogout() {
  // Clear form
  document.getElementById("studentId").value = ""
  document.getElementById("password").value = ""

  // Reset user type to student
  selectUserType("student")

  // Show login page, hide dashboard
  showLogin()
  isLoggedIn = false

  // Show logout message
  showNotification("Logged out successfully!", "info")
}

function showDashboard() {
  document.getElementById("loginPage").style.display = "none"
  document.getElementById("dashboardPage").style.display = "block"
}

function showLogin() {
  document.getElementById("loginPage").style.display = "flex"
  document.getElementById("dashboardPage").style.display = "none"
}

function updateCurrentTime() {
  const now = new Date()
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }

  const dateStr = now.toLocaleDateString("en-US", options)
  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })

  const currentDateEl = document.querySelector(".current-date")
  const currentTimeEl = document.querySelector(".current-time")

  if (currentDateEl) currentDateEl.textContent = dateStr
  if (currentTimeEl) currentTimeEl.textContent = timeStr
}

function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  // Style the notification
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "12px 24px",
    borderRadius: "8px",
    color: "white",
    fontWeight: "500",
    zIndex: "9999",
    transform: "translateX(100%)",
    transition: "transform 0.3s ease",
  })

  // Set background color based on type
  const colors = {
    success: "#10b981",
    error: "#ef4444",
    info: "#3b82f6",
    warning: "#f59e0b",
  }
  notification.style.backgroundColor = colors[type] || colors.info

  // Add to page
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }, 3000)
}

// Dashboard card interactions
function addCardClickHandlers() {
  const dashboardCards = document.querySelectorAll(".dashboard-card")
  dashboardCards.forEach((card) => {
    card.addEventListener("click", function () {
      const cardTitle = this.querySelector("h3").textContent
      showNotification(`Opening ${cardTitle}...`, "info")
    })
  })
}

// Event item interactions
function addEventClickHandlers() {
  const eventItems = document.querySelectorAll(".event-item")
  eventItems.forEach((item) => {
    item.addEventListener("click", function () {
      const eventTitle = this.querySelector("h4").textContent
      showNotification(`Event details: ${eventTitle}`, "info")
    })
  })
}

// Initialize card and event handlers when dashboard is shown
function initializeDashboardHandlers() {
  addCardClickHandlers()
  addEventClickHandlers()
}

// Call this when dashboard is first shown
document.addEventListener("DOMContentLoaded", () => {
  // Add a small delay to ensure DOM is fully loaded
  setTimeout(initializeDashboardHandlers, 100)
})

// Utility function to simulate loading states
function simulateLoading(element, duration = 1000) {
  const originalText = element.textContent
  element.textContent = "Loading..."
  element.style.opacity = "0.6"

  setTimeout(() => {
    element.textContent = originalText
    element.style.opacity = "1"
  }, duration)
}

// Add some interactive features for demo purposes
function addInteractiveFeatures() {
  // Make hero buttons functional
  const heroButtons = document.querySelectorAll(".hero-btn")
  heroButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
      simulateLoading(this)
      showNotification(`Loading ${this.textContent}...`, "info")
    })
  })

  // Make view schedule button functional
  const viewScheduleBtn = document.querySelector(".view-schedule-btn")
  if (viewScheduleBtn) {
    viewScheduleBtn.addEventListener("click", () => {
      showNotification("Opening class schedule...", "info")
    })
  }

  // Make view full schedule button functional
  const viewFullScheduleBtn = document.querySelector(".view-full-schedule")
  if (viewFullScheduleBtn) {
    viewFullScheduleBtn.addEventListener("click", () => {
      showNotification("Opening full schedule view...", "info")
    })
  }
}

// Initialize interactive features
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(addInteractiveFeatures, 200)
})

