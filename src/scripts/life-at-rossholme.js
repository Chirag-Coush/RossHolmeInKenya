import { initPage } from "../shared/page-init.js";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

initPage();

document.querySelectorAll('[data-gallery="faces"] a').forEach((link) => {
  const image = link.querySelector("img");
  if (image?.currentSrc || image?.src) {
    link.href = image.currentSrc || image.src;
  }
});

const facesGallery = new PhotoSwipeLightbox({
  gallery: '[data-gallery="faces"]',
  children: "a",
  pswpModule: () => import("photoswipe"),
});

facesGallery.init();
