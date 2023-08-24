const carousel = document.querySelector(".slider");
const images = document.querySelectorAll(".slider img");
const buttons = document.querySelectorAll(".button");
let imageIndex = 0;
let intervalId;

const autoSlide = () => {
  clearInterval(intervalId); // Clear any existing interval
  intervalId = setInterval(() => slideImage(1), 2000); // Auto slide forward
};

autoSlide();

const slideImage = (increment) => {
  clearInterval(intervalId); // Clear interval on manual slide
  const newIndex = (imageIndex + increment + images.length) % images.length;
  
  // Check if newIndex is within bounds
  if (newIndex >= 0 && newIndex < images.length) {
    imageIndex = newIndex;
    carousel.style.transform = `translateX(-${imageIndex * 100}%)`;
  }
  
  autoSlide(); // Restart auto slide after manual slide
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const increment = e.target.id === "next" ? 1 : -1;
    console.log(imageIndex);
    slideImage(increment);
    console.log(imageIndex);
  });
});

// Pause auto sliding on mouse hover
carousel.addEventListener("mouseover", () => {
  clearInterval(intervalId);
});

// Resume auto sliding when mouse leaves
carousel.addEventListener("mouseleave", () => {
  autoSlide();
});

const startingMinutes=2;
let time = startingMinutes *60;

const countDownEl=document.getElementById('countdown');
setInterval(updateCountdown, 1000);

function updateCountdown()
{
    const minutes=Math.floor(time/60);
    let seconds = time %60;

    seconds= seconds <10 ? '0' +seconds :seconds;
    countDownEl.innerHTML =`${minutes}:${seconds}`;
    time--;
}

const notificationsContainer = document.querySelector(".notifications-container");
const notificationPopup = document.querySelector(".notification-popup");
const notificationText = document.querySelector(".notification-text");

const notifications = [
  "Grab this offer!",
  "Check out our latest deals!",
  "Limited time discount available!",
  "Don't miss out on savings!"
];

let notificationIndex = 0;

function showNextNotification() {
  notificationText.textContent = notifications[notificationIndex];
  notificationPopup.style.opacity = "1";

  setTimeout(() => {
    notificationPopup.style.opacity = "0";
    notificationIndex = (notificationIndex + 1) % notifications.length;
    showNextNotification(); // Recursive call to show the next notification
  }, 2000);
}

showNextNotification(); 