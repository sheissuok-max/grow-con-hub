import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, BookOpen, Clock, Users, Award } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const curriculum = [
  {
    step: "STEP 01",
    title: "외식업 시장 분석",
    duration: "2주",
    topics: ["외식업 트렌드 파악", "상권 및 입지 분석", "타겟 고객 정의", "경쟁사 분석"],
  },
  {
    step: "STEP 02",
    title: "메뉴 개발 & 원가 계산",
    duration: "2주",
    topics: ["시그니처 메뉴 기획", "레시피 표준화", "식재료 원가율 관리", "메뉴 가격 전략"],
  },
  {
    step: "STEP 03",
    title: "매장 운영 시스템",
    duration: "2주",
    topics: ["홀·주방 운영 프로세스", "인력 채용 및 관리", "재고 관리 시스템", "고객 서비스 전략"],
  },
  {
    step: "STEP 04",
    title: "브랜딩 & 마케팅",
    duration: "2주",
    topics: ["브랜드 아이덴티티 구축", "SNS 마케팅 전략", "리뷰 관리", "배달 플랫폼 최적화"],
  },
  {
    step: "STEP 05",
    title: "재무 & 세무 기초",
    duration: "1주",
    topics: ["손익분기점 계산", "현금흐름 관리", "세금 신고 기초", "창업 자금 계획"],
  },
  {
    step: "STEP 06",
    title: "창업 실전 프로젝트",
    duration: "1주",
    topics: ["모의 창업 발표", "전문가 피드백", "창업 로드맵 완성", "동기 네트워킹"],
  },
];

const courses = [
  { value: "basic", label: "창업 기초 과정 (6주)" },
  { value: "advanced", label: "창업 심화 과정 (12주)" },
  { value: "online", label: "온라인 자기주도 과정" },
  { value: "mentoring", label: "1:1 멘토링 과정" },
];

export default function Education() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", email: "", course: "", agreed: false });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreed) {
      toast({ title: "개인정보 동의가 필요합니다.", variant: "destructive" });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("education_waitlist").insert({
      name: form.name,
      phone: form.phone,
      email: form.email,
      course: form.course,
      agreed_to_privacy: form.agreed,
    });
    setLoading(false);
    if (error) {
      toast({ title: "오류가 발생했습니다.", description: "잠시 후 다시 시도해주세요.", variant: "destructive" });
    } else {
      toast({ title: "신청이 완료되었습니다! 🎉", description: "빠른 시일 내에 연락드리겠습니다." });
      setForm({ name: "", phone: "", email: "", course: "", agreed: false });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 px-4" style={{ backgroundColor: "hsl(var(--navy-deep))" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-accent mb-4" style={{ background: "hsl(30 90% 52% / 0.15)", border: "1px solid hsl(30 90% 52% / 0.3)" }}>
            GrowConLab 창업 아카데미
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-5">
            외식업 창업의 모든 것,<br />
            <span className="text-gradient-amber">체계적으로 배웁니다</span>
          </h1>
          <p className="text-primary-foreground/65 text-lg max-w-2xl mx-auto">
            이론이 아닌 실전, 강의가 아닌 경험. 현직 외식업 전문가들이 직접 알려주는 살아있는 창업 교육입니다.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: <Clock size={16} />, label: "총 10주 과정" },
              { icon: <Users size={16} />, label: "소수 정예 15명" },
              { icon: <Award size={16} />, label: "수료증 발급" },
              { icon: <BookOpen size={16} />, label: "온/오프라인 병행" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                <span className="text-accent">{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent font-semibold text-sm mb-2">커리큘럼</p>
            <h2 className="text-3xl font-bold text-foreground">6단계 실전 과정</h2>
          </div>
          <div className="space-y-4">
            {curriculum.map((c, i) => (
              <div key={i} className="bg-card rounded-2xl border border-border p-6 flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="text-xs font-black text-accent">{c.step}</span>
                  <h3 className="text-lg font-bold text-foreground mt-1">{c.title}</h3>
                  <span className="text-xs text-muted-foreground">{c.duration}</span>
                </div>
                <div className="md:ml-auto flex flex-wrap gap-2">
                  {c.topics.map((t) => (
                    <span key={t} className="flex items-center gap-1.5 text-xs bg-secondary text-foreground/80 px-3 py-1.5 rounded-full">
                      <CheckCircle2 size={11} className="text-accent" /> {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="section-padding" style={{ background: "var(--gradient-section)" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm mb-2">수강 신청</p>
            <h2 className="text-3xl font-bold text-foreground">지금 바로 신청하세요</h2>
            <p className="text-muted-foreground text-sm mt-2">신청 후 담당자가 1~2 영업일 내로 연락드립니다.</p>
          </div>
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-5 shadow-card-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">이름 *</label>
                <input
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="홍길동"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">연락처 *</label>
                <input
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="010-0000-0000"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">이메일 *</label>
              <input
                type="email"
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                placeholder="hello@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">관심 과정 *</label>
              <select
                required
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                value={form.course}
                onChange={(e) => setForm({ ...form, course: e.target.value })}
              >
                <option value="">과정을 선택해주세요</option>
                {courses.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="agreed"
                checked={form.agreed}
                onChange={(e) => setForm({ ...form, agreed: e.target.checked })}
                className="mt-1 accent-amber-500"
              />
              <label htmlFor="agreed" className="text-sm text-muted-foreground">
                개인정보 수집 및 이용에 동의합니다. (이름, 연락처, 이메일은 상담 목적으로만 사용됩니다)
              </label>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl font-bold text-accent-foreground transition-all hover:opacity-90 active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
              style={{ background: "var(--gradient-amber)" }}
            >
              {loading ? "신청 중..." : <><span>수강 신청하기</span> <ArrowRight size={18} /></>}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
