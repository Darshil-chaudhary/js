let slides = [
  {
    title: "Nature",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTewMO3FHQchv_ZwzENz41o9OkV9KxmDWtOee33IKRl0Q&s"
  },
  {
    title: "City",
    image: "https://burst.shopifycdn.com/photos/chicago-city-lights-at-night.jpg?width=1000&format=pjpg&exif=0&iptc=0"
  },
  {
    title: "Mountain",
    image: "https://static.vecteezy.com/system/resources/thumbnails/019/961/772/small/panoramic-view-of-passo-giau-in-the-dolomite-mountains-of-italy-photo.jpg"
  }
];

let index = 0;

function showSlide() {
  let img = document.getElementById("slide-img");
  let title = document.getElementById("slide-title");

  // update content
  img.src = slides[index].image;
  title.innerText = slides[index].title;

  // 👇 animation reset (important for prev also)
  img.classList.remove("fade");
  void img.offsetWidth;
  img.classList.add("fade");
}

// 👉 NEXT (works fine)
document.getElementById("next").addEventListener("click", () => {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  showSlide();
});

// 👉 PREV (proper fix)
document.getElementById("prev").addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  showSlide();
});


// first load
showSlide();