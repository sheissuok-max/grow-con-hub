import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqCategories = [
  {
    category: "창업교육",
    items: [
      { q: "창업 경험이 없어도 수강 가능한가요?", a: "네, 물론입니다. 기초부터 체계적으로 안내해 드리며, 다양한 배경의 수강생들이 함께 배우고 있습니다." },
      { q: "수업은 온라인/오프라인 중 어떤 방식인가요?", a: "온라인과 오프라인을 병행합니다. 현장 실습이 포함된 모듈은 오프라인, 강의 중심은 온라인으로 진행됩니다." },
      { q: "수강 기간은 얼마나 되나요?", a: "기본 과정은 10주, 심화 과정은 12주입니다. 온라인 자기주도 과정은 90일 내 자유롭게 수강 가능합니다." },
      { q: "수료증이 발급되나요?", a: "네, 전 과정 수료 시 GrowConLab 공식 수료증이 발급됩니다." },
      { q: "환불 정책이 어떻게 되나요?", a: "수강 시작 후 7일 이내 전액 환불, 이후에는 소비자보호법 기준으로 환불이 진행됩니다." },
    ],
  },
  {
    category: "컨설팅",
    items: [
      { q: "컨설팅은 어떻게 진행되나요?", a: "초기 무료 상담 → 매장 방문 진단 → 분석 리포트 → 전략 수립 → 이행 지원 순으로 진행됩니다." },
      { q: "어떤 업종에 컨설팅이 가능한가요?", a: "한식, 중식, 일식, 양식, 카페, 배달 전문점 등 외식업 전반에 걸쳐 컨설팅이 가능합니다." },
      { q: "컨설팅 비용은 얼마인가요?", a: "초기 상담은 무료이며, 이후 서비스 범위에 따라 맞춤 견적을 제공해 드립니다." },
    ],
  },
  {
    category: "데이터 분석",
    items: [
      { q: "어떤 데이터가 필요한가요?", a: "POS 데이터, 배달 플랫폼 데이터, SNS 리뷰 데이터 등을 활용합니다. 데이터 추출 방법부터 안내드립니다." },
      { q: "데이터 분석 결과는 어떤 형태로 받나요?", a: "PDF 리포트 및 대시보드 형태로 제공됩니다. 결과 해설 미팅도 포함됩니다." },
    ],
  },
  {
    category: "일반",
    items: [
      { q: "지방에 거주해도 서비스 이용이 가능한가요?", a: "창업교육은 온라인으로, 컨설팅 및 데이터 분석은 전국 방문이 가능합니다. 원격 서비스도 제공합니다." },
      { q: "법인/단체 문의는 어떻게 하나요?", a: "문의 페이지를 통해 법인/단체 교육 및 컨설팅 문의를 남겨주시면 담당자가 연락드립니다." },
    ],
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="pt-16">
      <section className="py-20 px-4" style={{ backgroundColor: "hsl(var(--navy-deep))" }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-accent mb-4" style={{ background: "hsl(30 90% 52% / 0.15)", border: "1px solid hsl(30 90% 52% / 0.3)" }}>
            FAQ
          </span>
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">자주 묻는 질문</h1>
          <p className="text-primary-foreground/60">궁금한 점을 빠르게 찾아보세요.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto space-y-10">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                {cat.category}
              </h2>
              <div className="space-y-2">
                {cat.items.map((faq, i) => {
                  const key = `${cat.category}-${i}`;
                  return (
                    <div key={key} className="bg-card rounded-2xl border border-border overflow-hidden">
                      <button
                        className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-foreground hover:text-accent transition-colors text-sm"
                        onClick={() => setOpen(open === key ? null : key)}
                      >
                        <span>{faq.q}</span>
                        {open === key
                          ? <ChevronUp size={16} className="text-accent flex-shrink-0" />
                          : <ChevronDown size={16} className="text-muted-foreground flex-shrink-0" />
                        }
                      </button>
                      {open === key && (
                        <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
