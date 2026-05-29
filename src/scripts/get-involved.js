import { initPage } from "../shared/page-init.js";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

initPage();

document.querySelectorAll('[data-gallery="ramble-history"] a').forEach((link) => {
  const image = link.querySelector("img");
  if (image?.currentSrc || image?.src) {
    link.href = image.currentSrc || image.src;
  }
});

const rambleHistoryGallery = new PhotoSwipeLightbox({
  gallery: '[data-gallery="ramble-history"]',
  children: "a",
  pswpModule: () => import("photoswipe"),
});

rambleHistoryGallery.init();
