import React from "react"

interface FooterProps {
  logo: React.ReactNode
  brandName: string
  socialLinks: Array<{
    icon: React.ReactNode
    href: string
    label: string
  }>
  mainLinks: Array<{
    href: string
    label: string
  }>
  legalLinks: Array<{
    href: string
    label: string
  }>
  copyright: {
    text: string
    license?: string
  }
}

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}: FooterProps) {
  return (
    <footer className="pb-6 pt-16 lg:pb-8 lg:pt-24" style={{ fontFamily: "var(--font-montserrat)" }}>
      <div className="mx-auto px-4 lg:px-8" style={{ maxWidth: "1216px" }}>
        <div className="md:flex md:items-start md:justify-between">
          <a href="/" className="flex items-center gap-x-2" aria-label={brandName}>
            {logo}
            <span className="font-bold text-xl text-[#1a1a1a]">{brandName}</span>
          </a>
          <ul className="flex list-none mt-6 md:mt-0 space-x-3">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="h-10 w-10 rounded-full bg-gray-100 hover:bg-[#cc9a6e] hover:text-white text-[#1a1a1a] flex items-center justify-center transition-colors duration-300"
                >
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-gray-200 mt-6 pt-6 md:mt-4 md:pt-8 lg:grid lg:grid-cols-10">
          <nav className="lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-2 lg:justify-end">
              {mainLinks.map((link, i) => (
                <li key={i} className="my-1 mx-2 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-[#1a1a1a] underline-offset-4 hover:underline hover:text-[#cc9a6e] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-6 lg:mt-0 lg:col-[4/11]">
            <ul className="list-none flex flex-wrap -my-1 -mx-3 lg:justify-end">
              {legalLinks.map((link, i) => (
                <li key={i} className="my-1 mx-3 shrink-0">
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 underline-offset-4 hover:underline hover:text-[#cc9a6e] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 text-sm leading-6 text-[#6b6b6b] whitespace-nowrap lg:mt-0 lg:row-[1/3] lg:col-[1/4]">
            <div>{copyright.text}{copyright.license ? ` — ${copyright.license}` : ""}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
