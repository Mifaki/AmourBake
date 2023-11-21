document.addEventListener("DOMContentLoaded", function () {
    const imageGridSection = document.getElementById("imageGridSection");
    const imageBtn = document.querySelector(".image-btn");
  
    const imageFilenames = Array.from({ length: 21 }, (_, index) => `./assets/galery-${index + 1}.jpg`);
    const imagesToShow = imageFilenames.slice(0, 9);
  
    function generateImages(images) {
      imageGridSection.innerHTML = "";
      images.forEach((image) => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = "Gallery Image";
        imageGridSection.appendChild(imgElement);
      });
    }
  
    imageBtn.addEventListener("click", function () {
      generateImages(imageFilenames);
      imageBtn.style.display = "none";
    });

    console.log(imagesToShow);
    generateImages(imagesToShow);
  });
  