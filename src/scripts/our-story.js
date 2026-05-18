import { initPage } from "../shared/page-init.js";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

initPage();

document.querySelectorAll('[data-gallery="history"] a').forEach((link) => {
  const image = link.querySelector("img");
  if (image?.currentSrc || image?.src) {
    link.href = image.currentSrc || image.src;
  }
});

const historyGallery = new PhotoSwipeLightbox({
  gallery: '[data-gallery="history"]',
  children: "a",
  pswpModule: () => import("photoswipe"),
});

historyGallery.init();
