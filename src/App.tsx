import { useEffect, useRef, useState } from 'react'
import { Check, Minus, Plus, X } from 'lucide-react'
import { pageContent, type MediaItem } from './config/content'
import { links } from './config/links'
import { seo } from './config/seo'
import { theme } from './config/theme'
import { withAttributionParams } from './utils/attribution'

const placeholder = (item: MediaItem, priority = false) => item.src ? (
  <img src={item.src} alt={item.alt} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} />
) : <div className="placeholder" role="img" aria-label={item.alt}><span>{item.label}</span><small>{item.ratio === '3:2' ? '1200 × 800' : item.ratio === '3:4' ? '1200 × 1600' : item.ratio === '2:3' ? '1200 × 1800' : '1200 × 1200'} • {item.ratio}</small></div>

function Button({ children, onClick, href, kind = 'primary' }: { children: React.ReactNode; onClick?: () => void; href?: string; kind?: 'primary' | 'secondary' }) {
  const className = `button button-${kind}`
  return href ? <a className={className} href={href}>{children}</a> : <button className={className} type="button" onClick={onClick}>{children}</button>
}

function UrgencyBar() {
  const formatDate = () => new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric', month: 'long', year: 'numeric',
  }).format(new Date())
  const [localDate, setLocalDate] = useState(formatDate)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    const scheduleNextDay = () => {
      const now = new Date()
      const nextDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
      timer = setTimeout(() => {
        setLocalDate(formatDate())
        scheduleNextDay()
      }, nextDay.getTime() - now.getTime() + 100)
    }
    scheduleNextDay()
    return () => clearTimeout(timer)
  }, [])

  if (!pageContent.urgencyBar.enabled) return null
  return <div className="urgency">{pageContent.urgencyBar.text}, {localDate}</div>
}

function Price({ data }: { data: { previousPrice: string; installmentCount: number; installmentValue: string; cashValue: string } }) {
  const ready = data.previousPrice || data.installmentValue || data.cashValue
  return <div className="price" aria-label={ready ? 'Preço da oferta' : 'Preço a definir'}>
    <span className="price-before"><s>{data.previousPrice ? `De ${data.previousPrice}` : 'Preço anterior a definir'}</s> por apenas</span>
    <strong>{data.installmentCount && data.installmentValue ? `${data.installmentCount}x de ${data.installmentValue}` : 'Preço a definir'}</strong>
    <span>ou <b>{data.cashValue || 'valor a definir'}</b> à vista no PIX</span>
  </div>
}

function Carousel() {
  const ref = useRef<HTMLDivElement>(null)
  const items = [...pageContent.results.items, ...pageContent.results.items, ...pageContent.results.items]
  const segmentWidth = () => (ref.current?.scrollWidth ?? 0) / 3

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const initialize = () => element.scrollTo({ left: segmentWidth() })
    initialize()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let previousTime = performance.now()
    const animate = (time: number) => {
      const segment = segmentWidth()
      if (segment) {
        element.scrollLeft += ((time - previousTime) / 1000) * 75
        if (element.scrollLeft >= segment * 2) element.scrollLeft -= segment
      }
      previousTime = time
      frame = window.requestAnimationFrame(animate)
    }
    const observer = new ResizeObserver(initialize)
    observer.observe(element)
    if (!reduceMotion) frame = window.requestAnimationFrame(animate)
    window.addEventListener('resize', initialize)
    return () => {
      if (frame) window.cancelAnimationFrame(frame)
      observer.disconnect()
      window.removeEventListener('resize', initialize)
    }
  }, [])

  return <div className="carousel-wrap">
    <div className="carousel" ref={ref} aria-label="Galeria de resultados">
      {items.map((item, index) => <article className="result-card" aria-hidden={index < pageContent.results.items.length || index >= pageContent.results.items.length * 2} key={index}>{placeholder(item)}</article>)}
    </div>
  </div>
}

function Modules() {
  const [open, setOpen] = useState<number[]>([])
  const toggle = (index: number) => setOpen(old => old.includes(index) ? old.filter(item => item !== index) : [...old, index])
  return <div className="card-grid">{pageContent.modules.map((item, index) => {
    const expanded = open.includes(index)
    return <article className="content-card" key={item.eyebrow}>
      <div className="square-media">{placeholder(item)}</div><span className="eyebrow">{item.eyebrow}</span><h3>{item.title}</h3>
      <button className="accordion-trigger" onClick={() => toggle(index)} aria-expanded={expanded} aria-controls={`module-${index}`}><span>Clique aqui</span>{expanded ? <Minus /> : <Plus />}</button>
      <div className="accordion-panel" id={`module-${index}`} hidden={!expanded}><p>{item.description}</p></div>
    </article>
  })}</div>
}

function UpgradeModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDivElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement
    document.body.style.overflow = 'hidden'; closeButton.current?.focus()
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab' && dialog.current) {
        const focusable = [...dialog.current.querySelectorAll<HTMLElement>('button,a[href]')]
        const first = focusable[0], last = focusable.at(-1)
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
      }
    }
    document.addEventListener('keydown', keydown)
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', keydown); previous?.focus() }
  }, [open, onClose])
  if (!open) return null
  return <div className="modal-backdrop" onMouseDown={event => event.target === event.currentTarget && onClose()}>
    <div className="modal" ref={dialog} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button ref={closeButton} className="close" onClick={onClose} aria-label="Fechar"><X /></button>
      <span className="eyebrow">{pageContent.offers.popup.eyebrow}</span><p>{pageContent.offers.popup.message}</p><h2 id="modal-title">{pageContent.offers.popup.title}</h2>
      <FeatureList items={pageContent.offers.complete.items} /><Price data={pageContent.offers.popup} />
      <Button href={links.checkoutUpgrade ? withAttributionParams(links.checkoutUpgrade) : undefined}>{pageContent.offers.popup.ctaLabel}</Button>
      <Button kind="secondary" onClick={() => { onClose(); if (links.checkoutSimple) window.location.href = withAttributionParams(links.checkoutSimple) }}>{pageContent.offers.popup.secondaryLabel}</Button>
    </div>
  </div>
}

type FeatureItem = string | { label: string; value?: string }

const FeatureList = ({ items }: { items: readonly FeatureItem[] }) => <ul className="feature-list">{items.map(item => {
  const label = typeof item === 'string' ? item : item.label
  const value = typeof item === 'string' ? '' : item.value
  return <li key={label}><Check aria-hidden="true" /><span>{label}{value && <> <s className="bonus-value">{value}</s></>}</span></li>
})}</ul>

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  useEffect(() => {
    document.title = seo.title
    const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
      if (!content) return
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
      if (!tag) { tag = document.createElement('meta'); tag.setAttribute(attribute, key); document.head.append(tag) }
      tag.content = content
    }
    setMeta('name', 'description', seo.description)
    setMeta('name', 'robots', seo.robots)
    setMeta('property', 'og:title', seo.ogTitle)
    setMeta('property', 'og:description', seo.ogDescription)
    setMeta('property', 'og:image', seo.ogImage)
    if (seo.canonical) {
      let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical) }
      canonical.href = seo.canonical
    }
    Object.entries({ '--brand-primary': theme.brand.primary, '--brand-primary-dark': theme.brand.primaryDark, '--brand-primary-light': theme.brand.primaryLight, '--cta-color': theme.cta.color, '--cta-dark': theme.cta.dark, '--cta-light': theme.cta.light }).forEach(([key, value]) => document.documentElement.style.setProperty(key, value))
  }, [])
  return <>
    <UrgencyBar />
    <main>
      <section className="hero"><div className="container hero-inner"><div className="hero-media">{placeholder({ src: pageContent.hero.image, alt: pageContent.hero.imageAlt, label: 'Imagem da Hero', ratio: '3:2' }, true)}</div><h1>{pageContent.hero.headline}</h1><p className="lead">{pageContent.hero.body}</p><div className="hero-action"><Button onClick={() => document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' })}>{pageContent.hero.ctaLabel}</Button><img src={pageContent.hero.securityImage} alt={pageContent.hero.securityImageAlt} /></div></div></section>
      <section className="section section-muted"><div className="container"><h2>{pageContent.results.title}</h2><Carousel /></div></section>
      <section className="section"><div className="container"><h2>{pageContent.modulesSection.title}</h2><Modules /></div></section>
      <section className="section section-muted"><div className="container"><h2>{pageContent.bonusesSection.title}</h2><div className="card-grid">{pageContent.bonuses.map(item => <article className="content-card bonus" key={item.eyebrow}><div className="square-media">{placeholder(item)}</div><span className="eyebrow">🎁 {item.eyebrow}: incluso na oferta completa</span><h3>{item.title}</h3><p>{item.description}</p>{item.value && <s>{item.value}</s>}</article>)}</div></div></section>
      <section className="section" id="ofertas"><div className="container"><h2>{pageContent.offersSection.title}</h2><div className="offers">
        <article className="offer-card"><h3>{pageContent.offers.simple.title}</h3><FeatureList items={pageContent.offers.simple.items} /><Price data={pageContent.offers.simple} /><div className="offer-action"><Button kind="secondary" onClick={() => setModalOpen(true)}>{pageContent.offers.simple.ctaLabel}</Button><img src={pageContent.offersSection.paymentSecurityImage} alt={pageContent.offersSection.paymentSecurityAlt} loading="lazy" /></div></article>
        <article className="offer-card featured"><span className="offer-badge">{pageContent.offers.complete.badge}</span><h3>{pageContent.offers.complete.title}</h3><FeatureList items={pageContent.offers.complete.items} /><Price data={pageContent.offers.complete} /><div className="offer-action"><Button href={links.checkoutComplete ? withAttributionParams(links.checkoutComplete) : undefined}>{pageContent.offers.complete.ctaLabel}</Button><img src={pageContent.offersSection.paymentSecurityImage} alt={pageContent.offersSection.paymentSecurityAlt} loading="lazy" /></div></article>
      </div></div></section>
      <section className="section section-muted"><div className="container guarantee"><img className="guarantee-seal" src={pageContent.guarantee.image} alt={pageContent.guarantee.imageAlt} loading="lazy" /><div><h2>{pageContent.guarantee.title}</h2><p>{pageContent.guarantee.body}</p></div></div></section>
      <section className="section"><div className="container narrow"><h2>{pageContent.faqSection.title}</h2><div className="faq">{pageContent.faq.map((item, index) => { const expanded = faqOpen === index; return <div className="faq-item" key={item.question}><button onClick={() => setFaqOpen(expanded ? null : index)} aria-expanded={expanded} aria-controls={`faq-${index}`}><span>{item.question}</span>{expanded ? <Minus /> : <Plus />}</button><div id={`faq-${index}`} hidden={!expanded}><p>{item.answer}</p></div></div> })}</div></div></section>
    </main>
    <footer><div className="container"><strong>{pageContent.footer.brand}</strong><p>{pageContent.footer.copyright}</p><nav aria-label="Links legais">{links.privacy && <a href={links.privacy}>Privacidade</a>}{links.terms && <a href={links.terms}>Termos</a>}{links.support && <a href={links.support}>Suporte</a>}</nav></div></footer>
    <UpgradeModal open={modalOpen} onClose={() => setModalOpen(false)} />
  </>
}

export default App
