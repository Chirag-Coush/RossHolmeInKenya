import { initPage } from "../shared/page-init.js";
import iss01Pdf from "../assets/newsletters/Issue-1.pdf";
import iss02Pdf from "../assets/newsletters/Issue-2.pdf";
import iss04Pdf from "../assets/newsletters/Issue-4.pdf";
import iss05Pdf from "../assets/newsletters/Issue-5.pdf";
import iss06Pdf from "../assets/newsletters/Issue-6.pdf";
import iss07Pdf from "../assets/newsletters/Issue-7.pdf";
import iss08Pdf from "../assets/newsletters/Issue-8.pdf";
import iss09Pdf from "../assets/newsletters/Issue-9.pdf";
import iss10Pdf from "../assets/newsletters/Issue-10.pdf";
import iss11Pdf from "../assets/newsletters/Issue-11.pdf";
import iss12Pdf from "../assets/newsletters/Issue-12.pdf";
import iss13Pdf from "../assets/newsletters/Issue-13.pdf";
import iss14Pdf from "../assets/newsletters/Issue-14.pdf";

initPage();

const pdfs = {
  "01": iss01Pdf,
  "02": iss02Pdf,
  "04": iss04Pdf,
  "05": iss05Pdf,
  "06": iss06Pdf,
  "07": iss07Pdf,
  "08": iss08Pdf,
  "09": iss09Pdf,
  10: iss10Pdf,
  11: iss11Pdf,
  12: iss12Pdf,
  13: iss13Pdf,
  14: iss14Pdf,
};

document.querySelectorAll("[data-newsletter-pdf]").forEach((link) => {
  const issue = link.getAttribute("data-newsletter-pdf");
  if (issue && pdfs[issue]) link.setAttribute("href", pdfs[issue]);
});

const form = document.querySelector("[data-newsletter-form]");
const success = document.querySelector("[data-newsletter-success]");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("name")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";
  const message = formData.get("message")?.toString() ?? "";
  const subject = encodeURIComponent("Newsletter sign-up - Rossholme in Kenya");
  const body = encodeURIComponent(
    `Hello Judy,\n\nPlease add me to the Rossholme in Kenya newsletter.\n\nName: ${name}\nEmail: ${email}\n\n${message ? `A note from me:\n${message}\n\n` : ""}Many thanks.`,
  );

  window.location.href = `mailto:judy@rossholmeinkenya.org?subject=${subject}&body=${body}`;
  form.setAttribute("hidden", "");
  success?.removeAttribute("hidden");
});
