import { Link } from 'react-router-dom';
import {
  Users, Shield, FileText, GraduationCap, Building2,
  MapPin, CheckCircle, Star, ArrowLeft,
  Clock, Award, Briefcase, Globe
} from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-8 pb-20 md:pt-16 md:pb-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230C4A3E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-right animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-[var(--color-primary)] text-sm font-semibold mb-6 border border-emerald-100">
                <CheckCircle className="w-4 h-4" />
                المنصة الوطنية الموحدة
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                منصة
                <span className="relative inline-block">
                  <span style={{ color: 'var(--color-primary)' }}> كوادر</span>
                </span>
                <br />
                للكوادر العاملة
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
                المنصة الوطنية الموحدة لتسجيل واعتماد الكوادر العاملة في القطاعات التشغيلية داخل المملكة العربية السعودية، مع التركيز على مكة المكرمة والمشاعر المقدسة.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register" className="btn-primary text-lg px-8 py-4">
                  <Users className="w-5 h-5" />
                  تسجيل عامل جديد
                </Link>
                <Link to="/companies" className="btn-outline text-lg px-8 py-4">
                  <Building2 className="w-5 h-5" />
                  بوابة الشركات
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                {[
                  { num: '+50,000', label: 'عامل مسجل' },
                  { num: '+500', label: 'شركة معتمدة' },
                  { num: '7', label: 'فئة مهنية' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-[var(--color-primary)]">{stat.num}</div>
                    <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Main circle */}
                <div className="absolute inset-8 rounded-full" style={{ background: 'linear-gradient(135deg, rgba(12,74,62,0.1) 0%, rgba(200,168,78,0.1) 100%)' }} />
                <div className="absolute inset-16 rounded-full bg-white opacity-95 flex items-center justify-center shadow-2xl p-10">
                  <img src="/logo.png" alt="شعار منصة سما" className="w-full h-full object-contain" />
                </div>

                {/* Floating icons */}
                <div className="absolute top-4 right-16 card shadow-xl animate-float" style={{ animationDelay: '0s' }}>
                  <div className="flex items-center gap-3 p-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Users className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">تسجيل العمال</div>
                      <div className="font-bold text-sm text-gray-800">قاعدة بيانات موحدة</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-20 left-0 card shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3 p-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-[var(--color-accent-dark)]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">التصاريح</div>
                      <div className="font-bold text-sm text-gray-800">مشاعر مقدسة</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-20 right-16 card shadow-xl animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-3 p-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">العقود</div>
                      <div className="font-bold text-sm text-gray-800">إلكترونية موثقة</div>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-12 card shadow-xl animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-3 p-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">التدريب</div>
                      <div className="font-bold text-sm text-gray-800">شهادات رقمية</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">الخدمات الرئ��سية للمنصة</h2>
            <p className="section-subtitle mx-auto">
              منصة متكاملة توفر جميع الخدمات اللازمة لإدارة الكوادر العاملة بشكل نظامي وفعال
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'تسجيل واعتماد العمال',
                desc: 'نظام متكامل لتسجيل العمال مع بيانات الهوية والإقامة والمهنة والخبرات والدورات',
                link: '/register',
                color: 'from-emerald-500 to-emerald-600',
                bgColor: 'bg-emerald-50',
              },
              {
                icon: Shield,
                title: 'تصاريح المشاعر المقدسة',
                desc: 'إدارة تصاريح دخول العمال لمنى وعرفات ومزدلفة مع ربط بالبوابات الذكية',
                link: '/permits',
                color: 'from-amber-500 to-amber-600',
                bgColor: 'bg-amber-50',
              },
              {
                icon: FileText,
                title: 'العقود الإلكترونية',
                desc: 'إصدار عقود تشغيل موسمية ويومية وساعات عمل مرنة مع توثيق رسمي عبر قوى',
                link: '/contracts',
                color: 'from-blue-500 to-blue-600',
                bgColor: 'bg-blue-50',
              },
              {
                icon: GraduationCap,
                title: 'التدريب والتأهيل',
                desc: 'دورات متخصصة في السلامة والضيافة والتوجيه والإرشاد مع شهادات رقمية معتمدة',
                link: '/training',
                color: 'from-purple-500 to-purple-600',
                bgColor: 'bg-purple-50',
              },
              {
                icon: Building2,
                title: 'سوق العمل المباشر',
                desc: 'منصة توظيف مباشر تربط الشركات بالعمال مع نظام تقييم ومتابعة شامل',
                link: '/marketplace',
                color: 'from-rose-500 to-rose-600',
                bgColor: 'bg-rose-50',
              },
              {
                icon: MapPin,
                title: 'التتبع والمواقع',
                desc: 'نظام تتبع GPS و NFC و QR Code لمتابعة حركة العمال ومواقعهم في الوقت الفعلي',
                link: '/categories',
                color: 'from-cyan-500 to-cyan-600',
                bgColor: 'bg-cyan-50',
              },
            ].map((feature, i) => (
              <Link key={i} to={feature.link} className="card group cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{feature.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] group-hover:gap-3 transition-all">
                  اكتشف المزيد
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">الفئات المهنية</h2>
            <p className="section-subtitle mx-auto">
              تغطي المنصة جميع الفئات المهنية في القطاعات التشغيلية
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: '🧹', title: 'عمال النظافة', desc: 'المشاعر - الفنادق - المجمعات', count: '+15,000' },
              { icon: '📦', title: 'التحميل والتنزيل', desc: 'المطارات - الموانئ - الأسواق', count: '+8,000' },
              { icon: '🍽️', title: 'عمال الضيافة', desc: 'تقديم الضيافة - خدمة الغرف', count: '+12,000' },
              { icon: '🧭', title: 'المرشدون', desc: 'توجيه الحافلات - التائهين', count: '+5,000' },
              { icon: '🛡️', title: 'الحراسات الأمنية', desc: 'الفنادق - المشاعر المقدسة', count: '+7,000' },
              { icon: '👨‍🍳', title: 'عمال المطابخ', desc: 'المطاعم - الفنادق - القاعات', count: '+6,000' },
              { icon: '🥩', title: 'عمال المجازر', desc: 'المجازر الحديثة المعتمدة', count: '+3,000' },
              { icon: '⚡', title: 'فئات أخرى', desc: 'جميع الفئات التشغيلية', count: '+4,000' },
            ].map((cat, i) => (
              <div key={i} className="card text-center group cursor-pointer">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</div>
                <h3 className="font-bold text-gray-900 mb-1">{cat.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{cat.desc}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[var(--color-primary)] text-xs font-semibold">
                  <Users className="w-3 h-3" />
                  {cat.count} عامل
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">كيف تعمل المنصة؟</h2>
            <p className="section-subtitle mx-auto">
              خطوات بسيطة للتسجيل والبدء في استخدام خدمات المنصة
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'التسجيل', desc: 'قم بإنشاء حساب وتقديم بياناتك الشخصية والمهنية', icon: Users },
              { step: '02', title: 'الاعتماد', desc: 'يتم التحقق من بياناتك مع الجهات الحكومية المختصة', icon: Shield },
              { step: '03', title: 'الهوية المهنية', desc: 'تحصل على هوية مهنية رقمية معتمدة رسمياً', icon: Award },
              { step: '04', title: 'التعاقد', desc: 'تستقبل عروض عمل من الشركات المعتمدة عبر المنصة', icon: Briefcase },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-l from-emerald-200 to-transparent" style={{ right: '50%', left: '-50%' }} />
                )}
                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center mb-5 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-xs font-bold text-[var(--color-accent)] mb-1">الخطوة {item.step}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Integration */}
      <section className="py-20 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">الربط الحكومي</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              منصة كوادر مرتبطة مباشرة بالجهات الحكومية لضمان المصداقية والدقة
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'منصة قوى', desc: 'التحقق من المهنة والعقود', icon: Briefcase },
              { name: 'منصة أجير', desc: 'التحقق من التصاريح الموسمية', icon: Clock },
              { name: 'وزارة الداخلية', desc: 'التحقق من الهوية والإقامة', icon: Shield },
              { name: 'وزارة الحج والعمرة', desc: 'تصاريح المشاعر المقدسة', icon: Globe },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-white/20 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">نموذج العمل</h2>
            <p className="section-subtitle mx-auto">
              نموذج أعمال مستدام يخدم جميع الأطراف
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'للعامل',
                items: ['رسوم تسجيل: 50 ريال/سنوياً', 'هوية مهنية مجانية بعد التسجيل', 'عروض عمل مباشرة بدون عمولة'],
                color: 'from-emerald-500 to-emerald-600',
              },
              {
                title: 'للعقود',
                items: ['توثيق العقد: 10-20 ريال', 'عقود يومية وموسمية', 'عقود بالساعة (عمل مرن)'],
                color: 'from-amber-500 to-amber-600',
              },
              {
                title: 'للشركات',
                items: ['اشتراك شهري أو سنوي', 'رسوم توظيف معقولة', 'إدارة شاملة للعمال'],
                color: 'from-blue-500 to-blue-600',
              },
            ].map((plan, i) => (
              <div key={i} className="card relative overflow-hidden">
                <div className={`h-1.5 w-full bg-gradient-to-l ${plan.color}`} />
                <h3 className="text-xl font-bold text-gray-900 mt-4 mb-6">{plan.title}</h3>
                <ul className="space-y-4">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-[var(--color-primary)] shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="card border-2" style={{ borderColor: 'var(--color-primary)', background: 'linear-gradient(135deg, rgba(12,74,62,0.03) 0%, rgba(200,168,78,0.03) 100%)' }}>
            <Star className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-accent)' }} />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ابدأ الآن مع منصة كوادر
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              سواء كنت عاملاً تبحث عن فرص عمل أو شركة تبحث عن كوادر مؤهلة، منصة كوادر هي وجهتك المثالية
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register" className="btn-primary text-lg px-8 py-4">
                <Users className="w-5 h-5" />
                تسجيل عامل جديد
              </Link>
              <Link to="/companies" className="btn-accent text-lg px-8 py-4">
                <Building2 className="w-5 h-5" />
                تسجيل شركة
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
