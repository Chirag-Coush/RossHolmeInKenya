# URL Migration Notes

Planned production domain:

- `https://www.rossholmeinkenya.org`

Recommended Google Search Console setup:

- Prefer a Domain property for `rossholmeinkenya.org` if DNS access is available.
- Use a URL-prefix property for `https://www.rossholmeinkenya.org/` if only site-level verification is available.

Legacy URL mapping:

| Existing URL                                        | New URL                                              |
| --------------------------------------------------- | ---------------------------------------------------- |
| `https://www.rossholme.co.uk/`                      | `https://www.rossholmeinkenya.org`                   |
| `https://www.rossholme.co.uk/rossholme-kenya`       | `https://www.rossholmeinkenya.org/our-story`         |
| `https://www.rossholme.co.uk/how-rossholme-started` | `https://www.rossholmeinkenya.org/our-story`         |
| `https://www.rossholme.co.uk/rossholme-history`     | `https://www.rossholmeinkenya.org/our-story`         |
| `https://www.rossholme.co.uk/gallery`               | `https://www.rossholmeinkenya.org/life-at-rossholme` |
| `https://www.rossholme.co.uk/our-charity`           | `https://www.rossholmeinkenya.org/life-at-rossholme` |
| `https://www.rossholme.co.uk/newsletter-ref-page`   | `https://www.rossholmeinkenya.org/newsletter`        |
| `https://www.rossholme.co.uk/25k-fund-raising`      | `https://www.rossholmeinkenya.org/get-involved`      |
| `https://www.rossholme.co.uk/project-page`          | `https://www.rossholmeinkenya.org/get-involved`      |
| `https://www.rossholme.co.uk/sponsored-walk`        | `https://www.rossholmeinkenya.org/get-involved`      |
| `https://www.rossholme.co.uk/contact`               | `https://www.rossholmeinkenya.org`                   |

Redirect note:

The Netlify redirects cover these legacy slugs if the old domain is pointed at the Netlify site. If the old `rossholme.co.uk` domain stays on IONOS or another host, the same 301 rules need to be configured there instead.
