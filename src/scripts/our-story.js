import { initPage } from "../shared/page-init.js";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

initPage();

const historyGallery = new PhotoSwipeLightbox({
  gallery: '[data-gallery="history"]',
  children: "a",
  pswpModule: () => import("photoswipe"),
});

historyGallery.init();
