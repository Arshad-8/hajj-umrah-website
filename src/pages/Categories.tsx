import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Search, Star } from 'lucide-react';

const categories = [
  {
    id: 1,
    icon: '🧹',
    title: 'عمال النظافة',
    description: 'العمال المسؤولون عن تنظيف وصيانة المواقع المختلفة',
    workers: '+15,000',
    locations: ['المشاعر المقدسة', 'الفنادق', 'المكاتب والمجمعات التجارية'],
    skills: ['تنظيف الأرضيات', 'إزالة النفايات', 'تعقيم الأسطح', 'صيانة المرافق'],
    color: 'from-green-500 to-emerald-600',
  },
  {
    id: 2,
    icon: '📦',
    title: 'عمال التحميل والتنزيل',
    description: 'العمال المسؤولون عن نقل وتحميل البضائع والأمتعة',
    workers: '+8,000',
    locations: ['المطارات', 'محطات الحافلات', 'الأسواق', 'الموانئ'],
    skills: ['التحميل الآمن', 'ترتيب الشحنات', 'استخدام المعدات', 'التعامل مع الأمتعة'],
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 3,
    icon: '🍽️',
    title: 'عمال الضيافة',
    description: 'العمال المسؤولون عن تقديم خدمات الضيافة والضيوف',
    workers: '+12,000',
    locations: ['الفنادق', 'قاعات الاستقبال', 'المطاعم', 'مراكز الضيافة'],
    skills: ['تقديم الضيافة', 'خدمة الغرف', 'خدمة النزلاء', 'الترحيب بالضيوف'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 4,
    icon: '🧭',
    title: 'المرشدون',
    description: 'مرشدو التوجيه والإرشاد في المواقع المختلفة',
    workers: '+5,000',
    locations: ['المطارات', 'مشاعر المكرمة', 'المشاعر المقدسة', 'الstreets'],
    skills: ['توجيه الحافلات', 'توجيه التائهين', 'الإرشاد السياحي', 'اللغات'],
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 5,
    icon: '🛡️',
    title: 'الحراسات الأمنية',
    description: 'حراس الأمان المسؤولون عن تأمين المواقع والمرافق',
    workers: '+7,000',
    locations: ['الفنادق', 'المشاعر المقدسة', 'المنشآت الحكومية', 'المجمعات التجارية'],
    skills: ['المراقبة الأمنية', 'التحقق من الهوية', 'إدارة الحشود', 'الاستجابة للطوارئ'],
    color: 'from-red-500 to-rose-600',
  },
  {
    id: 6,
    icon: '👨‍🍳',
    title: 'عمال المطابخ',
    description: 'العمال المسؤولون عن إعداد وتجهيز الطعام',
    workers: '+6,000',
    locations: ['المطاعم', 'الفنادق', 'قاعات الأفراح', 'المقاصف'],
    skills: ['إعداد الطعام', 'النظافة الغذائية', 'التعامل مع المعدات', 'تنظيم المطبخ'],
    color: 'from-orange-500 to-red-600',
  },
  {
    id: 7,
    icon: '🥩',
    title: 'عمال المجازر الحديثة',
    description: 'العمال المسؤولون عن عمليات الذبح والتقطيع في المجازر المعتمدة',
    workers: '+3,000',
    locations: ['المجازر الحديثة', 'المراكز الصناعية', 'منطقة مكة', 'منطقة المدينة'],
    skills: ['الذبح المعتمد', 'التقطيع', 'النظافة الصحية', 'تغليف اللحوم'],
    color: 'from-cyan-500 to-teal-600',
  },
];

export default function Categories() {
  return (
    <div>
      {/* Header */}
      <section className="pt-8 pb-16 md:pt-16 md:pb-24 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            العودة للرئيسية
          </Link>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                الفئات المهنية
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                تغطي المنصة جميع الفئات المهنية في القطاعات التشغيلية داخل المملكة العربية السعودية، مع التركيز على مكة المكرمة والمشاعر المقدسة
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm">
                  <Users className="w-4 h-4" />
                  أكثر من 56,000 عامل
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm">
                  <Star className="w-4 h-4" />
                  7 فئات مهنية
                </div>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="grid grid-cols-3 gap-3">
                {categories.slice(0, 6).map((cat) => (
                  <div key={cat.id} className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center text-3xl hover:bg-white/20 transition-colors">
                    {cat.icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">جميع الفئات المهنية</h2>
            <p className="section-subtitle mx-auto">
              اضغط على أي فئة لمعرفة التفاصيل الكاملة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <div key={cat.id} className="card group cursor-pointer overflow-hidden">
                <div className={`h-2 w-full bg-gradient-to-l ${cat.color}`} />
                <div className="mt-4 flex items-start gap-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">{cat.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{cat.title}</h3>
                    <p className="text-sm text-gray-500">{cat.description}</p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-primary)] font-semibold">
                  <Users className="w-4 h-4" />
                  {cat.workers} عامل مسجل
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-bold text-gray-700 mb-2">أماكن العمل:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.locations.map((loc, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-600">{loc}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <h4 className="text-sm font-bold text-gray-700 mb-2">المهارات المطلوبة:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-emerald-50 text-xs text-[var(--color-primary)] font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'إجمالي العمال', value: '+56,000', icon: '👥' },
              { label: 'فئة النظافة', value: '+15,000', icon: '🧹' },
              { label: 'فئة الضيافة', value: '+12,000', icon: '🍽️' },
              { label: 'فئة الحراسة', value: '+7,000', icon: '🛡️' },
            ].map((stat, i) => (
              <div key={i} className="card text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-black text-[var(--color-primary)]">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">هل تبحث عن عمل في إحدى هذه الفئات؟</h2>
          <p className="text-gray-600 mb-8">سجل الآن واحصل على هوية مهنية معتمدة</p>
          <Link to="/register" className="btn-primary px-8 py-3 inline-flex items-center gap-2">
            <Search className="w-5 h-5" />
            سجل الآن
          </Link>
        </div>
      </section>
    </div>
  );
}
