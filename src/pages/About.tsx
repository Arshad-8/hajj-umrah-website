import { Link } from 'react-router-dom';
import {
  Target, Shield, Database, FileText, Globe,
  Building2, Award,
  MapPin, GraduationCap, Layers
} from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-semibold mb-6 border border-white/20">
              <Target className="w-4 h-4" />
              الرؤية والرسالة
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
              عن منصة كوادر
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              منصة وطنية موحدة لتسجيل واعتماد الكوادر العاملة في القطاعات التشغيلية داخل المملكة، مظلة رسمية ومرجع موحد للشركات
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card border-r-4" style={{ borderRightColor: 'var(--color-primary)' }}>
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">الرؤية</h2>
              <p className="text-gray-600 leading-relaxed">
                أن نكون المنصة الوطنية الرائدة في إدارة وتطوير الكوادر العاملة في القطاعات التشغيلية بالمملكة، والمساهمة في تحقيق أهداف رؤية السعودية 2030 من خلال توفير كوادر مؤهلة ومعتمدة.
              </p>
            </div>
            <div className="card border-r-4" style={{ borderRightColor: 'var(--color-accent)' }}>
              <div className="w-14 h-14 rounded-2xl bg-amber-100 flex items-center justify-center mb-5">
                <Layers className="w-7 h-7 text-[var(--color-accent-dark)]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">الرسالة</h2>
              <p className="text-gray-600 leading-relaxed">
                توفير منصة رقمية موحدة وشاملة تجمع بين تسجيل العمال واعتمادهم وتدريبهم وتوظيفهم، مع الربط المباشر بالجهات الحكومية لضمان الجودة والمصداقية.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What is the Platform */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">ماذا تقدم المنصة؟</h2>
            <p className="section-subtitle mx-auto">
              المنصة الوطنية الموحدة التي تجمع بين عدة أنظمة في مكان واحد
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Database, title: 'قاعدة بيانات رسمية', desc: 'قاعدة بيانات وطنية موحدة تضم جميع العمال المسجلين في القطاعات التشغيلية مع سجلات كاملة.' },
              { icon: Shield, title: 'منصة اعتماد وترخيص', desc: 'تمنح العامل "هوية مهنية" رقمية معتمدة يمكن استخدامها كمرجع رسمي لدى الشركات.' },
              { icon: Globe, title: 'سوق عمل مباشر', desc: 'تستطيع الشركات من خلاله التعاقد مع العمال بشكل نظامي وشفاف.' },
              { icon: FileText, title: 'عقود إلكترونية', desc: 'نظام عقود مرتبط بأنظمة وزارة الموارد البشرية مثل قوى وأجير.' },
              { icon: MapPin, title: 'تصاريح المشاعر', desc: 'إدارة دخول العمال إلى منى وعرفات ومزدلفة مع تحديد المواقع والمدة.' },
              { icon: GraduationCap, title: 'التدريب والتأهيل', desc: 'دورات تدريبية متخصصة مع شهادات رقمية معتمدة لجميع الفئات المهنية.' },
            ].map((item, i) => (
              <div key={i} className="card">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to become official */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">كيف تصبح المنصة "مظلة رسمية"؟</h2>
            <p className="section-subtitle mx-auto">
              خطوات واضحة لتحويل المنصة إلى جهة رسمية معتمدة
            </p>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                num: '01',
                title: 'تسجيل المنصة لدى وزارة الموارد البشرية',
                desc: 'وفق نموذج المنصات الرسمية مثل: قوى، أجير، مساند',
              },
              {
                num: '02',
                title: 'اعتماد من وزارة الحج والعمرة',
                desc: 'لتكون منصة رسمية للعمال الموسميين في المشاعر المقدسة',
              },
              {
                num: '03',
                title: 'الربط مع وزارة الداخلية',
                desc: 'للتحقق من الهويات والإقامات بشكل فوري وآمن',
              },
              {
                num: '04',
                title: 'الربط مع وزارة السياحة',
                desc: 'للمهن الفندقية والضيافة واعتماد الكوادر العاملة في القطاع السياحي',
              },
              {
                num: '05',
                title: 'إصدار "هوية مهنية" رقمية',
                desc: 'تُستخدم كمرجع رسمي للشركات في جميع القطاعات التشغيلية',
              },
            ].map((item, i) => (
              <div key={i} className="card flex items-start gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center text-white font-bold text-sm">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">المميزات الفريدة</h2>
            <p className="section-subtitle mx-auto">
              ما يميز منصة كوادر عن غيرها
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Database, title: 'قاعدة بيانات وطنية', desc: 'قاعدة بيانات موحدة تضم كل العمال المسجلين في القطاعات التشغيلية.' },
              { icon: Shield, title: 'تصاريح رسمية', desc: 'نظام تصاريح رسمي للمشاعر المقدسة مرتبط بالجهات الحكومية.' },
              { icon: FileText, title: 'عقود موثقة', desc: 'نظام عقود إلكترونية موثق عبر قوى وأجير.' },
              { icon: Award, title: 'نظام تقييم', desc: 'نظام تقييم يعتمد على الانضباط والحضور وجودة العمل.' },
              { icon: MapPin, title: 'تتبع متقدم', desc: 'نظام تتبع GPS – NFC – QR Code للعمال.' },
              { icon: Building2, title: 'إدارة شاملة', desc: 'إدارة الموارد البشرية للشركات: طلب العمال والجداول والرواتب.' },
            ].map((item, i) => (
              <div key={i} className="card text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">جاهز للانضمام؟</h2>
          <p className="text-gray-600 mb-8">ابدأ الآن بتسجيل بياناتك والاندماج في المنصة الوطنية</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-primary px-8 py-3">تسجيل عامل جديد</Link>
            <Link to="/companies" className="btn-outline px-8 py-3">بوابة الشركات</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
