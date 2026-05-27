import { initSiteFooter } from "./footer.js";
import { initSiteHeader } from "./header.js";

export const initPage = () => {
  initSiteHeader();
  initSiteFooter();

  const header = document.querySelector("[data-site-nav]");
  const menuButton = document.querySelector("[data-menu-button]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  let mobileMenuCloseTimer;
  const headerBlurScrollOffset = 100;
  const updateHeaderState = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > headerBlurScrollOffset);
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    const nextOpen = !isOpen;

    window.clearTimeout(mobileMenuCloseTimer);
    menuButton.setAttribute("aria-expanded", String(nextOpen));
    menuButton.setAttribute("aria-label", nextOpen ? "Close navigation menu" : "Open navigation menu");
    header?.classList.toggle("is-open", nextOpen);

    if (!mobileMenu) return;

    if (nextOpen) {
      mobileMenu.hidden = false;
      requestAnimationFrame(() => {
        mobileMenu.classList.add("is-open");
        mobileMenu.classList.remove("is-closing");
      });
      return;
    }

    mobileMenu.classList.remove("is-open");
    mobileMenu.classList.add("is-closing");
    mobileMenuCloseTimer = window.setTimeout(() => {
      mobileMenu.hidden = true;
      mobileMenu.classList.remove("is-closing");
    }, 420);
  });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animatedCounters = new WeakSet();
  const animateCounters = (container) => {
    const counters = container.matches?.("[data-count], [data-count-range]")
      ? [container]
      : [...container.querySelectorAll("[data-count], [data-count-range]")];

    counters.forEach((counter) => {
      if (animatedCounters.has(counter)) return;
      animatedCounters.add(counter);

      const suffix = counter.getAttribute("data-count-suffix") ?? "";
      const range = counter.getAttribute("data-count-range");
      const duration = 1400;
      const startedAt = performance.now();

      if (prefersReducedMotion) {
        counter.textContent = range ?? `${counter.getAttribute("data-count") ?? ""}${suffix}`;
        return;
      }

      const update = (timestamp) => {
        const progress = Math.min((timestamp - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        if (range) {
          const [start, end] = range.split("-").map(Number);
          counter.textContent = `${Math.round(start * eased)}-${Math.round(end * eased)}`;
        } else {
          const target = Number(counter.getAttribute("data-count") ?? 0);
          counter.textContent = `${Math.round(target * eased).toLocaleString("en-GB")}${suffix}`;
        }

        if (progress < 1) requestAnimationFrame(update);
      };

      requestAnimationFrame(update);
    });
  };

  const animatedElements = document.querySelectorAll("main > section:not(:first-child), [data-animate]");

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          animateCounters(entry.target);
          revealObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0 },
    );

    animatedElements.forEach((element) => {
      element.setAttribute("data-animate", "");
      revealObserver.observe(element);
    });
  } else {
    animatedElements.forEach((element) => {
      element.setAttribute("data-animate", "");
      element.classList.add("is-visible");
      animateCounters(element);
    });
  }

  window.addEventListener(
    "load",
    () => {
      document.documentElement.classList.add("is-loaded");
    },
    { once: true },
  );
};
