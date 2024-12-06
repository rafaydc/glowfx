// JavaScript to change navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {  // You can adjust this value as per your needs
    navbar.classList.add('bg-black');
  } else {
    navbar.classList.remove('bg-black');
  }
});
document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();  // Get raw text to inspect the response
    })
    .then((text) => {
      console.log('Raw response:', text);  // Log the raw response to see if it's valid JSON
      return JSON.parse(text);  // Parse it manually after checking
    })
    .then((data) => {
      const cardContainer = document.getElementById('card-container');
      cardContainer.innerHTML = '';  // Clear existing content

      data.forEach((item) => {
        const card = `
          <div class="card-wrapper mx-12">
            <div class="relative block rounded-lg border border-gray-200 bg-black shadow-md">
              <img src="${item.image}" alt="${item.name}" class="h-60 w-full rounded-t-lg object-cover" />
              <div class="p-4 text-center text-white">
                <strong class="text-xl font-medium">${item.name}</strong>
                <p class="mt-2">${item.description}</p>
                <a href="${item.download}" target="_blank" class="mt-4 inline-block rounded-md border border-purple-900 bg-purple-900 px-5 py-3 text-sm font-medium uppercase tracking-widest text-white transition-colors hover:bg-purple-400 hover:text-purple-900">
                  Download
                </a>
              </div>
            </div>
          </div>
        `;
        cardContainer.insertAdjacentHTML('beforeend', card);
      });
    })
    .catch((error) => console.error('Error loading JSON data:', error));
});
  const sliders = document.querySelectorAll(".slider");

sliders.forEach((slider) => {
  slider.addEventListener("input", function () {
    const parent = this.closest(".before-after");
    const frontImage = parent.querySelector(".front-img");
    frontImage.style.clipPath = `polygon(0 0, ${this.value}% 0, ${this.value}% 100%, 0% 100%)`;
  });
});


// Wait 20 seconds and show the floating alert
window.setTimeout(function () {
  document.getElementById('floating-alert').style.display = 'flex';
}, 10000); // 20 seconds

// Close the alert when the button is clicked
document.getElementById('close-btn').addEventListener('click', function () {
  document.getElementById('floating-alert').style.display = 'none';
});


const apiKey = 'AIzaSyBugN7mI5wdvKP5jvaqMOaBbPmp9Lishy0'; // Your API key as a string
const channelId = 'UCsCpfLQ2bRFsyIeuJkpY40w'; // Replace with your YouTube channel ID

fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&order=date&part=snippet&type=video`)
  .then(response => response.json())
  .then(data => {
    const latestVideo = data.items[0]; // Get the first video from the response
    const videoId = latestVideo.id.videoId; // Extract the video ID
    const videoIframe = `<iframe class="mx-auto my-12" width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    
    document.getElementById('latest-video').innerHTML = videoIframe; // Insert iframe into the div
  })
  .catch(error => console.error('Error fetching video data:', error)); // Error handling
