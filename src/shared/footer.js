export const initSiteFooter = () => {
  const mount = document.querySelector("[data-site-footer]");
  if (!mount) return;

  mount.innerHTML = `
    <footer class="bg-black py-12 text-orange-50/60 md:py-16">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid gap-6 lg:gap-15 md:grid-cols-12">
          <div class="space-y-4 md:col-span-4 ">
            <h3 class="font-semibold">Rossholme in Kenya</h3>
            <p class="leading-relaxed ">
              A UK-registered charity (CIO No. 1178553) funding and running a free primary school in the Kiambiu slum, Nairobi. Providing education, breakfast, and lunch to over 525 children who could otherwise never afford to <br class="block xl:hidden"/> attend school.
            </p>
          </div>
          <div class="space-y-4 md:col-span-2">
            <h4 class="text-sm uppercase tracking-wider text-orange-50/60">Quick Links</h4>
            <nav class="flex flex-col space-y-3">
              <a href="/our-story" class="text-orange-50/80 transition-colors hover:text-white">Our Story</a>
              <a href="/life-at-rossholme" class="text-orange-50/80 transition-colors hover:text-white">The School</a>
              <a href="/get-involved" class="text-orange-50/80 transition-colors hover:text-white">Get Involved</a>
              <a href="/newsletter" class="text-orange-50/80 transition-colors hover:text-white">Newsletter</a>
            </nav>
          </div>
          <div class="space-y-4 md:col-span-2">
            <h4 class="text-sm uppercase tracking-wider text-orange-50/60">Support Us</h4>
            <nav class="flex flex-col space-y-3">
              <a href="https://www.justgiving.com/charity/rossholmeinkenya" target="_blank" rel="noopener noreferrer" class="text-orange-50/80 transition-colors hover:text-white">Donate via JustGiving</a>
              <a href="https://cafdonate.cafonline.org/11695#!/DonationDetails" target="_blank" rel="noopener noreferrer" class="text-orange-50/80 transition-colors hover:text-white">Donate via CAF</a>
            </nav>
          </div>
          <div class="space-y-4 md:col-span-4">
            <h4 class="text-sm uppercase tracking-wider text-orange-50/60">Get in Touch</h4>
            <p class="leading-relaxed text-orange-50/60">Reach out to Judith Webb, the founder of the UK charity, directly via email.</p>
            <a href="mailto:judy@rossholmeinkenya.org" class="inline-block break-all font-medium text-rose-200 transition-colors hover:text-rose-100">judy@rossholmeinkenya.org</a>
          </div>
        </div>
        <div class="mt-12 border-t border-orange-50/20 pt-8 text-center text-sm text-orange-50/60">
          <p>
            Website designed, developed and maintained by
            <a href="https://chiragcoush.com" target="_blank" rel="noopener noreferrer" class="font-semibold text-rose-200 transition-colors hover:text-rose-100">Chirag Coush</a>,
            proudly supporting Rossholme in Kenya.
          </p>
        </div>
      </div>
    </footer>
  `;
};
