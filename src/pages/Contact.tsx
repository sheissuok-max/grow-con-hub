import { useState } from "react";
import { ArrowRight, Phone, Mail, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  { value: "education", label: "창업교육 문의" },
  { value: "consulting", label: "외식업체 컨설팅 문의" },
  { value: "data", label: "데이터 분석 문의" },
  { value: "other", label: "기타 문의" },
];

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", business: "", inquiry: "", service: "education" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const table = form.service === "consulting" ? "consulting_leads" : form.service === "data" ? "data_analysis_leads" : "consulting_leads";
    const { error } = await supabase.from(table).insert({
      name: form.name,
      phone: form.phone,
      business: form.business || null,
      inquiry: `[${serviceOptions.find(s => s.value === form.service)?.label}] ${form.inquiry}`,
    });

    setLoading(false);
    if (error) {
      toast({ title: "오류가 발생했습니다.", description: "잠시 후 다시 시도해주세요.", variant: "destructive" });
    } else {
      toast({ title: "문의가 접수되었습니다! 🎉", description: "1~2 영업일 내로 연락드리겠습니다." });
      setForm({ name: "", phone: "", business: "", inquiry: "", service: "education" });
    }
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-20 px-4" style={{ backgroundColor: "hsl(var(--navy-deep))" }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-accent mb-4" style={{ background: "hsl(30 90% 52% / 0.15)", border: "1px solid hsl(30 90% 52% / 0.3)" }}>
            문의
          </span>
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">무료 상담 신청</h1>
          <p className="text-primary-foreground/60">궁금하신 사항을 남겨주시면 전문가가 직접 연락드립니다.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground">연락처 정보</h2>
            <div className="space-y-4">
              {[
                { icon: <Phone size={18} />, title: "전화 상담", value: "010-3014-4119", sub: "평일 09:00 - 18:00" },
                { icon: <Mail size={18} />, title: "이메일 문의", value: "sheissuok@gmail.com", sub: "24시간 접수 가능" },
              ].map((c) => (
                <div key={c.title} className="flex items-start gap-4 p-4 rounded-2xl border border-border bg-card">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-accent-foreground" style={{ background: "var(--gradient-amber)" }}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.title}</div>
                    <div className="font-semibold text-foreground text-sm">{c.value}</div>
                    <div className="text-xs text-muted-foreground">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2">
            <h2 className="text-xl font-bold text-foreground mb-6">문의 양식</h2>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-8 space-y-5 shadow-card-custom">
              {/* Service Select */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">문의 서비스 *</label>
                <div className="grid grid-cols-2 gap-2">
                  {serviceOptions.map((s) => (
                    <button
                      type="button"
                      key={s.value}
                      onClick={() => setForm({ ...form, service: s.value })}
                      className={`py-2.5 px-4 rounded-xl text-sm font-medium border transition-all ${
                        form.service === s.value
                          ? "text-accent-foreground border-transparent"
                          : "border-border text-muted-foreground hover:border-accent/50"
                      }`}
                      style={form.service === s.value ? { background: "var(--gradient-amber)" } : {}}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
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
                <label className="block text-sm font-semibold text-foreground mb-2">기관명 또는 업체명 (선택)</label>
                <input
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30"
                  placeholder="매장명 또는 업체명"
                  value={form.business}
                  onChange={(e) => setForm({ ...form, business: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">문의 내용 *</label>
                <textarea
                  required
                  rows={5}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 resize-none"
                  placeholder="문의하실 내용을 자유롭게 작성해 주세요."
                  value={form.inquiry}
                  onChange={(e) => setForm({ ...form, inquiry: e.target.value })}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl font-bold text-accent-foreground transition-all hover:opacity-90 active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
                style={{ background: "var(--gradient-amber)" }}
              >
                {loading ? "전송 중..." : <><span>문의 보내기</span> <ArrowRight size={18} /></>}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
