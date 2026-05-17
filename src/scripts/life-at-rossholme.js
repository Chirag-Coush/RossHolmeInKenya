import { initPage } from "../shared/page-init.js";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

initPage();

const facesGallery = new PhotoSwipeLightbox({
  gallery: '[data-gallery="faces"]',
  children: "a",
  pswpModule: () => import("photoswipe"),
});

facesGallery.init();
