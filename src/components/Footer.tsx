import { Link } from "react-router-dom";
import { BookOpen, BarChart3, Users, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "hsl(var(--navy-deep))" }} className="text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-amber)" }}>
                <span className="text-primary-foreground font-bold text-sm">G</span>
              </div>
              <span className="font-bold text-xl">GrowConLab</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              외식업 창업부터 운영까지,<br />
              데이터 기반의 전문 컨설팅으로<br />
              성공적인 외식업 경영을 지원합니다.
            </p>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-accent" />
                <span>010-0000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-accent" />
                <span>contact@growconlab.kr</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-primary-foreground/90">서비스</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/education" className="hover:text-accent transition-colors flex items-center gap-2"><BookOpen size={12} />창업교육</Link></li>
              <li><Link to="/consulting" className="hover:text-accent transition-colors flex items-center gap-2"><Users size={12} />외식업체 컨설팅</Link></li>
              <li><Link to="/data" className="hover:text-accent transition-colors flex items-center gap-2"><BarChart3 size={12} />데이터분석</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm text-primary-foreground/90">바로가기</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/faq" className="hover:text-accent transition-colors">자주 묻는 질문</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">무료 상담 신청</Link></li>
              <li><Link to="/education" className="hover:text-accent transition-colors">커리큘럼 보기</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs">
            © 2024 GrowConLab. All rights reserved.
          </p>
          <p className="text-primary-foreground/40 text-xs">
            사업자등록번호: 000-00-00000
          </p>
        </div>
      </div>
    </footer>
  );
}
