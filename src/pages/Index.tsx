import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, BarChart3, CheckCircle2, Star, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

// ── Hero Section ──────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 w-full">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 text-accent-foreground" style={{ background: "hsl(30 90% 52% / 0.2)", border: "1px solid hsl(30 90% 52% / 0.4)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-accent">외식업 전문 성장 파트너</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            외식업 창업과 성장,<br />
            <span className="text-gradient-amber">데이터로 증명합니다</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 leading-relaxed">
            GrowConLab은 외식업 창업교육, 운영 컨설팅,<br className="hidden md:block" />
            데이터 분석으로 식당 오너의 성공을 함께 만들어갑니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/education"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-accent-foreground transition-all hover:opacity-90 active:scale-95"
              style={{ background: "var(--gradient-amber)" }}
            >
              창업교육 알아보기 <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-primary-foreground border border-primary-foreground/30 hover:border-primary-foreground/60 transition-all"
            >
              무료 상담 신청
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg">
          {[
            { value: "500+", label: "수강생" },
            { value: "92%", label: "창업 성공률" },
            { value: "5년+", label: "컨설팅 경력" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
              <div className="text-xs text-primary-foreground/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Values Section ─────────────────────────────────────────────────────────
function ValuesSection() {
  const values = [
    {
      icon: <BookOpen size={28} />,
      title: "체계적인 창업교육",
      desc: "아이디어 발굴부터 메뉴 개발, 마케팅까지 단계별 커리큘럼으로 실전 창업 역량을 키웁니다.",
    },
    {
      icon: <Users size={28} />,
      title: "현장 맞춤 컨설팅",
      desc: "현직 외식업 전문가가 매장 현황을 직접 분석하여 실질적인 개선 방향을 제시합니다.",
    },
    {
      icon: <BarChart3 size={28} />,
      title: "데이터 기반 분석",
      desc: "매출, 고객, 메뉴 데이터를 분석해 객관적인 성과 개선 전략을 수립합니다.",
    },
  ];

  return (
    <section className="section-padding" style={{ background: "var(--gradient-section)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm mb-2">왜 GrowConLab인가?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">핵심 서비스 3가지</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 shadow-card-custom border border-border hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 text-accent-foreground" style={{ background: "var(--gradient-amber)" }}>
                {v.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Services Section ───────────────────────────────────────────────────────
function ServicesSection() {
  const services = [
    {
      tag: "창업교육",
      title: "GrowConLab 창업 아카데미",
      desc: "외식업 창업을 준비하는 분들을 위한 체계적인 과정. 메뉴개발부터 마케팅, 재무관리까지 실전 중심으로 배웁니다.",
      features: ["단계별 커리큘럼", "현장 실습 포함", "멘토링 지원", "창업 네트워크"],
      cta: "커리큘럼 보기",
      href: "/education",
      accent: true,
    },
    {
      tag: "컨설팅",
      title: "외식업체 운영 컨설팅",
      desc: "기존 매장 운영에 어려움을 겪고 계신가요? 전문 컨설턴트가 직접 방문 분석하여 개선 방안을 제시합니다.",
      features: ["매장 현장 진단", "메뉴 구성 최적화", "원가 분석", "고객 만족 개선"],
      cta: "서비스 보기",
      href: "/consulting",
      accent: false,
    },
    {
      tag: "데이터분석",
      title: "외식업 데이터 분석 서비스",
      desc: "감이 아닌 데이터로 경영하세요. 매출 트렌드, 고객 패턴, 메뉴 성과를 분석해 전략적 의사결정을 돕습니다.",
      features: ["매출 데이터 분석", "고객 행동 분석", "메뉴 성과 리포트", "경쟁사 벤치마킹"],
      cta: "서비스 보기",
      href: "/data",
      accent: false,
    },
  ];

  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm mb-2">서비스 소개</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">GrowConLab의 솔루션</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                s.accent
                  ? "text-primary-foreground border-transparent"
                  : "bg-secondary border-border"
              }`}
              style={s.accent ? { backgroundColor: "hsl(var(--navy-deep))" } : {}}
            >
              <span
                className="inline-block text-xs font-bold px-3 py-1 rounded-full mb-4"
                style={s.accent
                  ? { background: "hsl(30 90% 52% / 0.2)", color: "hsl(var(--amber-light))" }
                  : { background: "hsl(var(--accent) / 0.1)", color: "hsl(var(--accent))" }
                }
              >
                {s.tag}
              </span>
              <h3 className={`text-xl font-bold mb-3 ${s.accent ? "text-primary-foreground" : "text-foreground"}`}>
                {s.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-5 ${s.accent ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {s.desc}
              </p>
              <ul className="space-y-2 mb-6">
                {s.features.map((f) => (
                  <li key={f} className={`flex items-center gap-2 text-sm ${s.accent ? "text-primary-foreground/80" : "text-foreground/80"}`}>
                    <CheckCircle2 size={14} className="text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={s.href}
                className={`inline-flex items-center gap-2 text-sm font-semibold transition-all ${
                  s.accent ? "text-accent hover:gap-3" : "text-primary hover:gap-3"
                }`}
              >
                {s.cta} <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Curriculum Preview ─────────────────────────────────────────────────────
function CurriculumPreview() {
  const steps = [
    { step: "01", title: "외식업 시장 분석", desc: "트렌드 파악, 상권 분석, 경쟁 환경 이해" },
    { step: "02", title: "메뉴 개발 & 원가 계산", desc: "시그니처 메뉴 개발, 식재료 원가율 관리" },
    { step: "03", title: "매장 운영 시스템", desc: "홀·주방 운영, 인력 관리, CS 전략" },
    { step: "04", title: "브랜딩 & 마케팅", desc: "온·오프라인 마케팅, SNS 활용, 리뷰 관리" },
    { step: "05", title: "재무 & 세무 기초", desc: "손익분기점 계산, 세금 신고, 자금 계획" },
    { step: "06", title: "창업 실전 프로젝트", desc: "모의 창업 발표, 멘토 피드백, 네트워킹" },
  ];

  return (
    <section id="curriculum" className="section-padding" style={{ background: "var(--gradient-section)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm mb-2">커리큘럼</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">6단계 실전 과정</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            창업을 결심한 순간부터 오픈 이후까지, GrowConLab이 함께합니다.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="bg-card rounded-2xl p-6 border border-border shadow-card-custom">
              <div className="text-3xl font-black text-accent/20 mb-2">{s.step}</div>
              <h3 className="font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/education"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-accent-foreground transition-all hover:opacity-90"
            style={{ background: "var(--gradient-amber)" }}
          >
            전체 커리큘럼 보기 <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ───────────────────────────────────────────────────────────
function TestimonialsSection() {
  const reviews = [
    {
      name: "김지영",
      role: "카페 창업 2년차",
      rating: 5,
      text: "GrowConLab 교육 덕분에 창업 6개월 만에 흑자 전환했습니다. 특히 원가 계산 강의가 정말 실용적이었어요.",
    },
    {
      name: "박현수",
      role: "한식 레스토랑 오너",
      rating: 5,
      text: "컨설팅을 받고 나서 매출이 30% 올랐어요. 데이터로 문제를 짚어주셔서 명확하게 개선할 수 있었습니다.",
    },
    {
      name: "이민정",
      role: "배달 전문점 운영",
      rating: 5,
      text: "배달 플랫폼 데이터 분석 서비스로 피크타임과 비인기 메뉴를 파악해 운영 효율이 크게 좋아졌습니다.",
    },
  ];

  return (
    <section id="reviews" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm mb-2">고객 후기</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">함께한 분들의 이야기</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl p-8 border border-border shadow-card-custom bg-secondary">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-6">"{r.text}"</p>
              <div>
                <div className="font-semibold text-foreground text-sm">{r.name}</div>
                <div className="text-muted-foreground text-xs">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── FAQ Section ────────────────────────────────────────────────────────────
function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "창업 경험이 없어도 수강 가능한가요?", a: "네, 물론입니다! GrowConLab 창업 아카데미는 창업을 처음 고려하는 분들부터 재창업을 준비하는 분들까지 모두 환영합니다. 기초부터 체계적으로 가르쳐 드립니다." },
    { q: "컨설팅은 어떻게 진행되나요?", a: "초기 무료 상담 후 매장 방문 현황 진단 → 분석 리포트 작성 → 개선 전략 수립 → 이행 지원 순으로 진행됩니다. 각 단계는 담당 컨설턴트가 함께합니다." },
    { q: "데이터 분석 서비스는 어떤 데이터가 필요한가요?", a: "POS 데이터, 배달 플랫폼 데이터, SNS 리뷰 등을 활용합니다. 데이터 추출 방법부터 안내해 드리므로 걱정하지 않으셔도 됩니다." },
    { q: "수업은 온라인/오프라인 중 무엇인가요?", a: "온라인과 오프라인 클래스를 모두 운영합니다. 현장 실습이 포함된 일부 모듈은 오프라인으로 진행되며, 나머지는 편리하게 온라인으로 수강 가능합니다." },
    { q: "수강료 환불 정책이 어떻게 되나요?", a: "수강 시작 후 7일 이내에는 전액 환불이 가능합니다. 이후에는 소비자보호법 기준에 따른 환불 정책이 적용됩니다. 자세한 사항은 문의해 주세요." },
  ];

  return (
    <section id="faq" className="section-padding" style={{ background: "var(--gradient-section)" }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent font-semibold text-sm mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">자주 묻는 질문</h2>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-2xl border border-border overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-foreground hover:text-accent transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-sm md:text-base">{faq.q}</span>
                {open === i ? <ChevronUp size={18} className="text-accent flex-shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground flex-shrink-0" />}
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/faq" className="text-sm text-accent font-semibold hover:underline">
            더 많은 질문 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ── CTA Section ────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="section-padding" style={{ backgroundColor: "hsl(var(--navy-deep))" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          지금 바로 시작하세요
        </h2>
        <p className="text-primary-foreground/60 mb-8">
          무료 상담을 통해 나에게 맞는 서비스를 찾아보세요.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-accent-foreground text-lg transition-all hover:opacity-90 active:scale-95"
          style={{ background: "var(--gradient-amber)" }}
        >
          무료 상담 신청하기 <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}

// ── Main Index ─────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <>
      <HeroSection />
      <ValuesSection />
      <ServicesSection />
      <CurriculumPreview />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
