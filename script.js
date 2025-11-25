/* Editor AI Pro – Functional JS */

// Handle file upload buttons
document.getElementById("uploadImage")?.addEventListener("click", () => {
  alert("Upload Image clicked — Feature coming soon!");
});

document.getElementById("uploadVideo")?.addEventListener("click", () => {
  alert("Upload Video clicked — Feature coming soon!");
});

// Download result button
document.getElementById("downloadResult")?.addEventListener("click", () => {
  alert("Download feature coming soon!");
});

// Social Share Buttons
document.getElementById("shareWA")?.addEventListener("click", () => {
  window.open("https://wa.me/?text=Check+out+Editor+AI+Pro!", "_blank");
});

document.getElementById("shareFB")?.addEventListener("click", () => {
  window.open("https://facebook.com/sharer/sharer.php?u=https://rabiujtn.github.io/Editor-ai-pro/", "_blank");
});

document.getElementById("shareX")?.addEventListener("click", () => {
  window.open("https://twitter.com/intent/tweet?text=Try+Editor+AI+Pro!", "_blank");
});

document.getElementById("copyLink")?.addEventListener("click", () => {
  navigator.clipboard.writeText("https://rabiujtn.github.io/Editor-ai-pro/");
  alert("Link copied to clipboard!");
});
