import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  Home,
  Instagram,
  KeyRound,
  LineChart,
  MapPin,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from 'lucide-react';

type EventName =
  | 'cta_principal'
  | 'whatsapp'
  | 'primeiro_imovel'
  | 'familia'
  | 'investimento'
  | 'lancamentos'
  | 'vender_imovel';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const whatsappNumber = '5521985313802';
const elzaPhoto = '/images/WhatsApp_Image_2026-07-24_at_12.22.18_(1).jpeg';
const instagramUrl = 'https://www.instagram.com/elza_imoveis?stkn=emdjdzVvZmVnbGRw';

function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function trackEvent(eventName: EventName) {
  window.dataLayer?.push({ event: eventName });
  window.gtag?.('event', eventName);
}

function WhatsAppButton({
  children,
  message,
  eventName = 'whatsapp',
  className = '',
  inverted = false,
}: {
  children: ReactNode;
  message: string;
  eventName?: EventName;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noreferrer"
      data-analytics-event={eventName}
      onClick={() => trackEvent(eventName)}
      className={`inline-flex items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-moss focus:ring-offset-2 ${inverted ? 'bg-offwhite text-ink hover:bg-white' : 'bg-moss text-white hover:bg-moss-light'} ${className}`}
    >
      <MessageCircle size={18} fill="currentColor" strokeWidth={1.5} />
      {children}
    </a>
  );
}

function ArrowLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 text-sm font-semibold text-moss transition-colors hover:text-ink">
      {children}
      <ArrowRight size={17} />
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-offwhite pb-20 text-ink md:pb-0">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-ink/10 bg-offwhite/95 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="mx-auto flex h-[82px] max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#inicio" onClick={closeMenu} className="group leading-none">
            <span className="block text-[15px] font-bold tracking-[0.12em]">ELZA ASSUMPÇÃO</span>
            <span className="mt-2 block text-[9px] font-semibold uppercase tracking-[0.18em] text-moss">Correta Elza Imóveis · CRECI-RJ 49273</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#como-posso-ajudar" className="header-link">Como posso ajudar</a>
            <a href="#diferenciais" className="header-link">Meu atendimento</a>
            <a href="#sobre" className="header-link">Sobre a Elza</a>
            <WhatsAppButton message="Olá, Elza. Gostaria de conversar sobre as oportunidades imobiliárias." eventName="cta_principal" className="px-5 py-3">
              Falar com a Elza
            </WhatsAppButton>
          </nav>
          <button type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuOpen(!menuOpen)} className="rounded-full border border-ink/20 p-3 md:hidden">
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-ink/10 bg-offwhite px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5 text-sm font-semibold">
              <a href="#como-posso-ajudar" onClick={closeMenu}>Como posso ajudar</a>
              <a href="#diferenciais" onClick={closeMenu}>Meu atendimento</a>
              <a href="#sobre" onClick={closeMenu}>Sobre a Elza</a>
              <WhatsAppButton message="Olá, Elza. Gostaria de conversar sobre as oportunidades imobiliárias." eventName="cta_principal" className="w-full">Falar com a Elza</WhatsAppButton>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-warm pt-28 lg:pt-32">
          <div className="mx-auto grid min-h-[690px] max-w-7xl items-center gap-12 px-6 pb-16 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:pb-20">
            <div className="relative z-10 animate-rise">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-moss/25 bg-offwhite/60 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-moss">
                <Sparkles size={13} /> Especialista em imóveis & oportunidades · 15 anos
              </div>
              <h1 className="max-w-2xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">O imóvel certo começa entendendo o que você procura.</h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/65">Mais do que mostrar opções, faço a curadoria exata para o seu momento de vida — seja o seu primeiro imóvel, um lançamento estratégico ou um investimento seguro na Baixada Fluminense e Rio de Janeiro.</p>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton message="Olá, Elza. Gostaria de conversar sobre as oportunidades imobiliárias." eventName="cta_principal" className="min-w-[226px]">Quero conversar com a Elza</WhatsAppButton>
                <span className="text-xs text-ink/50">Atendimento direto com a Elza.<br className="hidden sm:block" /> Sem intermediários ou robôs.</span>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-ink/15 pt-5 text-[11px] font-semibold uppercase tracking-[0.12em] text-ink/50">
                <span className="flex items-center gap-2"><BadgeCheck size={15} className="text-moss" /> CRECI-RJ 49273</span>
                <span className="flex items-center gap-2"><BadgeCheck size={15} className="text-moss" /> CNAI 53244</span>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
              <div className="absolute -right-5 -top-5 h-40 w-40 rounded-full border border-moss/20 sm:-right-10 sm:-top-10" />
              <div className="absolute -bottom-6 -left-6 h-32 w-32 bg-mustard/15 sm:-bottom-8 sm:-left-8" />
              <div className="relative aspect-[0.78] overflow-hidden rounded-t-[180px] rounded-b-[10px] bg-moss">
                <img src={elzaPhoto} alt="Elza Assumpção, corretora de imóveis" className="h-full w-full object-cover object-center" />
              </div>
              <div className="absolute bottom-7 -left-5 max-w-[205px] rounded-sm bg-offwhite p-4 shadow-[0_12px_35px_rgba(26,26,26,0.12)] sm:-left-10">
                <p className="text-3xl font-bold tracking-tight text-moss">15<span className="text-mustard">+</span></p>
                <p className="mt-1 text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em] text-ink/50">anos de experiência transformando escolhas em negócios seguros</p>
              </div>
            </div>
          </div>
        </section>

        <section id="como-posso-ajudar" className="bg-offwhite px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-2xl">
              <p className="eyebrow">Vamos começar pelo seu momento</p>
              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">O que você está procurando no momento?</h2>
              <p className="mt-5 text-base leading-relaxed text-ink/60">Escolha uma das opções abaixo para iniciar uma conversa direta no WhatsApp com a mensagem já pronta.</p>
            </div>
            <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              <IntentCard icon={<KeyRound />} title="Meu primeiro imóvel" message="Olá, Elza. Estou procurando meu primeiro imóvel e gostaria de conversar." eventName="primeiro_imovel" />
              <IntentCard icon={<Users />} title="Um imóvel para minha família" message="Olá, Elza. Estou buscando um imóvel para a minha família." eventName="familia" />
              <IntentCard icon={<LineChart />} title="Oportunidade de investimento" message="Olá, Elza. Tenho interesse em uma oportunidade de investimento em imóveis." eventName="investimento" />
              <IntentCard icon={<Building2 />} title="Lançamentos imobiliários" message="Olá, Elza. Tenho interesse em conhecer os lançamentos disponíveis." eventName="lancamentos" />
              <IntentCard icon={<Home />} title="Quero vender meu imóvel" message="Olá, Elza. Tenho um imóvel que gostaria de vender e quero conversar." eventName="vender_imovel" />
            </div>
          </div>
        </section>

        <section id="diferenciais" className="border-y border-ink/10 bg-warm px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
              <div>
                <p className="eyebrow">Por que falar com a Elza?</p>
                <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Você não precisa conhecer o mercado imobiliário.</h2>
                <p className="mt-6 text-xl leading-relaxed text-moss">Precisa de alguém que conheça o mercado e entenda o que você procura.</p>
              </div>
              <div className="grid gap-8 md:grid-cols-3">
                <Pillar icon={<Sparkles />} number="01" title="Curadoria sob medida">Não empurramos imóveis. Entendemos sua necessidade real de espaço, localização e orçamento antes de apresentar qualquer opção.</Pillar>
                <Pillar icon={<ShieldCheck />} number="02" title="Segurança documental e financeira">Análise completa de crédito, FGTS, financiamento e suporte jurídico de ponta a ponta.</Pillar>
                <Pillar icon={<MapPin />} number="03" title="Visão de mercado">Conhecimento profundo da região, acesso a oportunidades exclusivas e lançamentos antes de irem para o grande mercado.</Pillar>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-offwhite px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div><p className="eyebrow">Atuação com propósito</p><h2 className="mt-5 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">Oportunidades alinhadas ao seu momento</h2></div>
              <p className="max-w-sm text-sm leading-relaxed text-ink/55">Uma visão consultiva para encontrar o imóvel, a região e o caminho financeiro que fazem sentido para você.</p>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-3">
              <OpportunityCard icon={<Home />} title="Prontos para morar" text="Imóveis prontos para morar e condomínios modernos para quem quer começar uma nova fase com mais tranquilidade." />
              <OpportunityCard icon={<Building2 />} title="Lançamentos exclusivos" text="Baixada Fluminense, Nova Iguaçu, Barra, Recreio e conexões estratégicas para cada perfil." accent />
              <OpportunityCard icon={<LineChart />} title="Investimento com visão" text="Oportunidades com potencial, liquidez e leitura de mercado para decisões mais seguras." />
            </div>
          </div>
        </section>

        <section className="bg-moss px-6 py-20 text-white lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
            <div><p className="eyebrow text-mustard-light">Experiência que gera confiança</p><h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Negócios seguros começam com clareza.</h2></div>
            <div className="grid gap-8 border-t border-white/20 pt-8 sm:grid-cols-3 sm:border-t-0 sm:pt-0">
              <Stat value="15 anos" label="de atuação no mercado imobiliário" />
              <Stat value="CRECI-RJ 49273" label="corretora de imóveis" />
              <Stat value="CNAI 53244" label="avaliadora de imóveis" />
            </div>
          </div>
        </section>

        <section id="sobre" className="bg-offwhite px-6 py-24 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-24">
            <div className="relative mx-auto w-full max-w-[430px]">
              <div className="absolute -bottom-5 -right-5 h-full w-full border border-moss/25" />
              <img src={elzaPhoto} alt="Elza Assumpção em seu escritório" className="relative aspect-[0.82] w-full object-cover object-center" />
            </div>
            <div>
              <p className="eyebrow">Quem é a Elza Assumpção</p>
              <h2 className="mt-5 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">Por trás de cada imóvel, existe uma decisão de vida.</h2>
              <p className="mt-7 text-lg leading-relaxed text-ink/65">Sou Elza Assumpção, corretora e avaliadora de imóveis. Minha missão é simplificar o processo de compra e venda para que você faça um negócio seguro, transparente e vantajoso.</p>
              <p className="mt-5 text-lg leading-relaxed text-ink/65">Acredito que o atendimento imobiliário deve ser pautado na escuta ativa, na ética e no compromisso real com o cliente.</p>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-moss"><span className="flex items-center gap-2"><Check size={16} /> Atendimento humanizado</span><span className="flex items-center gap-2"><Check size={16} /> Presença do início ao fim</span></div>
              <ArrowLink href={instagramUrl}>Acompanhe meu trabalho no Instagram</ArrowLink>
            </div>
          </div>
        </section>

        <section className="border-t border-ink/10 bg-warm px-6 py-20 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-24">
            <div><p className="eyebrow">Área de atuação</p><h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Perto de você, conectada ao que vem pela frente.</h2></div>
            <div><p className="text-xl leading-relaxed text-ink/70">Forte atuação em <strong className="font-semibold text-ink">Nova Iguaçu</strong> e em toda a <strong className="font-semibold text-ink">Baixada Fluminense</strong>, além de conexões estratégicas com oportunidades selecionadas no <strong className="font-semibold text-ink">Rio de Janeiro</strong> — Barra, Recreio e outras regiões — conforme o perfil e o objetivo de cada cliente.</p><div className="mt-8 flex flex-wrap gap-3"><span className="area-pill">Nova Iguaçu</span><span className="area-pill">Baixada Fluminense</span><span className="area-pill">Barra</span><span className="area-pill">Recreio</span><span className="area-pill">Rio de Janeiro</span></div></div>
          </div>
        </section>

        <section className="bg-ink px-6 py-24 text-white lg:px-10 lg:py-32">
          <div className="mx-auto max-w-4xl text-center"><p className="eyebrow justify-center text-mustard-light">Uma boa conversa muda o caminho</p><h2 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">Talvez o imóvel que você procura ainda não esteja anunciado.</h2><p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65">As melhores oportunidades muitas vezes circulam de forma direta. Vamos conversar sobre o que você precisa?</p><WhatsAppButton message="Olá, Elza. Conheci seu trabalho e gostaria de conversar sobre uma oportunidade imobiliária." eventName="whatsapp" inverted className="mt-10">Falar diretamente com a Elza</WhatsAppButton></div>
        </section>
      </main>

      <footer className="bg-offwhite px-6 py-10 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-ink/15 pt-8 text-sm md:flex-row md:justify-between">
          <div><p className="font-bold tracking-[0.12em]">ELZA ASSUMPÇÃO</p><p className="mt-2 text-ink/60">Correta Elza Imóveis</p><p className="mt-5 text-xs leading-relaxed text-ink/50">CRECI-RJ 49273 | CNAI 53244 | Avaliadora de Imóveis<br />Elza Assumpção · Atendimento imobiliário consultivo</p></div>
          <div className="flex flex-col gap-3 text-ink/60"><a href="mailto:Elza12imoveis@gmail.com" className="transition-colors hover:text-moss">Elza12imoveis@gmail.com</a><span>Rua Doutor Athaide Pimenta de Moraes, 363<br />Nova Iguaçu - RJ</span><a href={instagramUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 font-semibold text-moss"><Instagram size={17} /> @elza_imoveis</a></div>
        </div>
      </footer>

      <a href={whatsappLink('Olá, Elza. Conheci seu trabalho e gostaria de conversar sobre uma oportunidade imobiliária.')} target="_blank" rel="noreferrer" data-analytics-event="whatsapp" onClick={() => trackEvent('whatsapp')} aria-label="Falar com a Elza pelo WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-moss px-5 py-4 text-sm font-semibold text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-moss-light"><MessageCircle size={20} fill="currentColor" /> <span className="hidden sm:inline">Falar com a Elza</span></a>
    </div>
  );
}

function IntentCard({ icon, title, message, eventName }: { icon: ReactNode; title: string; message: string; eventName: EventName }) {
  return <a href={whatsappLink(message)} target="_blank" rel="noreferrer" data-analytics-event={eventName} onClick={() => trackEvent(eventName)} className="group flex min-h-[210px] flex-col justify-between border border-ink/12 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-moss hover:bg-moss hover:text-white"><span className="flex h-11 w-11 items-center justify-center rounded-full border border-moss/25 text-moss transition-colors group-hover:border-white/35 group-hover:text-mustard-light">{icon}</span><span><strong className="block max-w-[170px] text-lg leading-tight">{title}</strong><span className="mt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-moss group-hover:text-mustard-light">Conversar <ArrowRight size={14} /></span></span></a>;
}

function Pillar({ icon, number, title, children }: { icon: ReactNode; number: string; title: string; children: ReactNode }) {
  return <article className="border-t border-ink/20 pt-5"><div className="flex items-center justify-between text-moss"><span>{icon}</span><span className="text-xs font-bold tracking-[0.2em] text-ink/40">{number}</span></div><h3 className="mt-6 text-xl font-bold leading-tight">{title}</h3><p className="mt-4 text-sm leading-relaxed text-ink/60">{children}</p></article>;
}

function OpportunityCard({ icon, title, text, accent = false }: { icon: ReactNode; title: string; text: string; accent?: boolean }) {
  return <article className={`min-h-[270px] p-7 ${accent ? 'bg-moss text-white' : 'border border-ink/12 bg-warm'}`}><div className={`flex h-12 w-12 items-center justify-center rounded-full border ${accent ? 'border-mustard-light text-mustard-light' : 'border-moss/30 text-moss'}`}>{icon}</div><h3 className="mt-16 text-2xl font-bold tracking-tight">{title}</h3><p className={`mt-3 text-sm leading-relaxed ${accent ? 'text-white/70' : 'text-ink/60'}`}>{text}</p></article>;
}

function Stat({ value, label }: { value: string; label: string }) {
  return <div><p className="text-2xl font-bold tracking-tight text-white">{value}</p><p className="mt-2 max-w-[150px] text-xs leading-relaxed text-white/60">{label}</p></div>;
