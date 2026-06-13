import { Link } from 'react-router-dom';
import {
  Building2, Users, Shield, GraduationCap, FileText,
  MapPin, Phone, Mail, Clock, Globe, ArrowLeft
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white relative overflow-hidden">
      {/* Decorative top */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #C8A84E, #1A6B5A, #C8A84E)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
                <span className="text-white font-black text-xl">ك</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">كوادر</h3>
                <p className="text-xs text-white/60">المنصة الوطنية للكوادر العاملة</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              المنصة الوطنية الموحدة لتسجيل واعتماد الكوادر العاملة في القطاعات التشغيلية داخل المملكة العربية السعودية.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-[var(--color-accent)]">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'الرئيسية', path: '/' },
                { label: 'عن المنصة', path: '/about' },
                { label: 'الفئات المهنية', path: '/categories' },
                { label: 'سوق العمل', path: '/marketplace' },
                { label: 'تسجيل العمال', path: '/register' },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors group">
                    <ArrowLeft className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-[var(--color-accent)]">الخدمات</h4>
            <div className="space-y-3">
              {[
                { icon: FileText, label: 'العقود الإلكترونية', path: '/contracts' },
                { icon: Shield, label: 'تصاريح المشاعر', path: '/permits' },
                { icon: GraduationCap, label: 'التدريب والتأهيل', path: '/training' },
                { icon: Building2, label: 'بوابة الشركات', path: '/companies' },
                { icon: Users, label: 'خارطة الطريق', path: '/roadmap' },
              ].map((item) => (
                <Link key={item.label} to={item.path} className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors group">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <item.icon className="w-4 h-4" />
                  </div>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold mb-4 text-[var(--color-accent)]">تواصل معنا</h4>
            <div className="space-y-3">
              <a href="/contact" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                info@kawader.sa
              </a>
              <a href="/contact" className="flex items-center gap-3 text-sm text-white/70 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span dir="ltr">+966 11 XXX XXXX</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                مكة المكرمة، المملكة العربية السعودية
              </div>
              <div className="flex items-center gap-3 text-sm text-white/70">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                24/7 - متاح على مدار الساعة
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/50">
            © 2025 منصة كوادر. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white transition-colors">الشروط والأحكام</a>
            <a href="#" className="hover:text-white transition-colors">دعم فني</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
