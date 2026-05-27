import { initPage } from "../shared/page-init.js";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

initPage();

const rambleHistoryGallery = new PhotoSwipeLightbox({
  gallery: '[data-gallery="ramble-history"]',
  children: "a",
  pswpModule: () => import("photoswipe"),
});

rambleHistoryGallery.init();
