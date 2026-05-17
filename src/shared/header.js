const links = [
  { href: "/our-story", label: "Our Story" },
  { href: "/life-at-rossholme", label: "Life at Rossholme" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/newsletter", label: "Newsletters" },
];

const linkClass = (href) => {
  const currentPath = window.location.pathname.replace(/\.html$/, "");
  const isActive = currentPath === href;
  return `text-sm font-medium transition-colors hover:text-black ${isActive ? "underline underline-offset-8" : ""}`;
};

const mobileLinkClass = (href) => {
  const currentPath = window.location.pathname.replace(/\.html$/, "");
  const isActive = currentPath === href;
  return `text-lg font-medium transition-colors hover:text-black ${isActive ? "underline underline-offset-4" : ""}`;
};

export const initSiteHeader = () => {
  const mount = document.querySelector("[data-site-header]");
  if (!mount) return;

  mount.innerHTML = `
    <header data-site-nav class="site-header">
      <div class="container mx-auto px-6">
        <div class="flex h-20 items-center justify-between lg:h-16">
          <a href="/" class="flex items-center transition-opacity hover:opacity-80">
            <img src="./src/assets/logo/Kenya-Logo-with-wordmark.svg" alt="Rossholme in Kenya" class="h-12 w-auto object-contain sm:h-14 lg:h-10" />
          </a>

          <nav class="hidden items-center gap-7 lg:flex">
            ${links.map((link) => `<a href="${link.href}" class="${linkClass(link.href)}">${link.label}</a>`).join("")}
            <a href="/get-involved" class="btn btn-primary min-h-10 px-6 text-sm">Join our mission</a>
          </nav>

          <button data-menu-button class="p-2 lg:hidden" type="button" aria-label="Toggle menu" aria-expanded="false">
            <svg class="h-8 w-8" aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 6h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      <div data-mobile-menu hidden class="border-t lg:hidden">
        <nav class="container mx-auto flex flex-col items-center space-y-4 px-6 py-8 text-center">
          ${links.map((link) => `<a href="${link.href}" class="${mobileLinkClass(link.href)}">${link.label}</a>`).join("")}
          <div class="flex w-full max-w-md flex-col items-center gap-3 border-t border-stone-300/40 pt-4">
            <a href="/get-involved" class="btn btn-primary w-full">Join our mission</a>
          </div>
        </nav>
      </div>
    </header>
  `;
};
