import { Link } from "react-router-dom";
import { Clock, Users } from "lucide-react";

export default function Consulting() {
  return (
    <div className="pt-16">
      <section className="min-h-screen flex items-center justify-center py-24 px-4" style={{ background: "var(--gradient-section)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8" style={{ backgroundColor: "hsl(var(--navy-deep))" }}>
            <Users size={36} className="text-accent" />
          </div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4" style={{ background: "hsl(var(--accent) / 0.1)", color: "hsl(var(--accent))" }}>
            외식업체 컨설팅
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
            서비스 준비 중입니다
          </h1>
          <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
            더 나은 서비스를 제공하기 위해 준비하고 있습니다.<br />
            곧 전문 외식업체 컨설팅 서비스를 만나보실 수 있습니다.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-10">
            <Clock size={14} />
            <span>서비스 오픈 예정</span>
          </div>
          <div className="bg-card rounded-2xl border border-border p-8 text-left shadow-card-custom mb-8">
            <h3 className="font-bold text-foreground mb-4">준비 중인 서비스</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {["매장 현황 진단 및 분석", "메뉴 구성 최적화 컨설팅", "운영 효율화 전략 수립", "마케팅 및 브랜딩 개선", "수익성 개선 플랜"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-muted-foreground mb-6">
            서비스 오픈 알림을 받고 싶으시다면 문의해 주세요.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-accent-foreground transition-all hover:opacity-90"
            style={{ background: "var(--gradient-amber)" }}
          >
            사전 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
