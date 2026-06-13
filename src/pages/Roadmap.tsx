import { Link } from 'react-router-dom';
import {
  ArrowLeft, Rocket, Code, Link2, Users, Flag,
  CheckCircle, Calendar, Building2,
  Globe, Shield, GraduationCap, Award, FileText
} from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      num: '01',
      title: 'التأسيس',
      duration: 'الشهر 1-2',
      status: 'completed',
      icon: Flag,
      tasks: [
        'تحديد الكيان القانوني للمنصة',
        'تسجيل المنصة رسمياً لدى الجهات المختصة',
        'بناء الهوية المؤسسية والشعار',
        'تأسيس الفريق الإداري والتقني',
        'إعداد خطة العمل التفصيلية',
      ],
    },
    {
      num: '02',
      title: 'التطوير التقني',
      duration: 'الشهر 3-5',
      status: 'in-progress',
      icon: Code,
      tasks: [
        'بناء قاعدة البيانات الرئيسية',
        'بناء نظام تسجيل العمال',
        'بناء نظام العقود الإلكترونية',
        'بناء نظام تصاريح المشاعر',
        'بناء واجهة الشركات',
        'بناء نظام التدريب',
        'بناء نظام التقييم',
      ],
    },
    {
      num: '03',
      title: 'الربط الحكومي',
      duration: 'الشهر 5-7',
      status: 'pending',
      icon: Link2,
      tasks: [
        'الربط مع منصة قوى (المهن والعقود)',
        'الربط مع منصة أجير (التصاريح الموسمية)',
        'الربط مع وزارة الحج والعمرة',
        'الربط مع وزارة الداخلية (الهويات)',
        'الربط مع وزارة السياحة (المهن الفندقية)',
      ],
    },
    {
      num: '04',
      title: 'التشغيل التجريبي',
      duration: 'الشهر 7-8',
      status: 'pending',
      icon: Users,
      tasks: [
        'تسجيل 1,000 عامل تجريبي',
        'تسجيل 20 شركة تجريبية',
        'اختبار نظام العقود',
        'اختبار نظام التصاريح',
        'اختبار نظام التدريب',
        'تقييم أداء النظام',
        'معالجة الأخطاء والتحسينات',
      ],
    },
    {
      num: '05',
      title: 'الإطلاق الرسمي',
      duration: 'الشهر 9',
      status: 'pending',
      icon: Rocket,
      tasks: [
        'مؤتمر صحفي للإعلان الرسمي',
        'توقيع شراكات حكومية',
        'شراكات مع شركات الحج والعمرة',
        'حملة توعوية شاملة',
        'إطلاق المنصة للجميع',
      ],
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="pt-8 pb-16 md:pt-16 md:pb-20 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            العودة للرئيسية
          </Link>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-semibold mb-6 border border-white/20">
              <Rocket className="w-4 h-4" />
              خارطة الطريق
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              خارطة الطريق لبناء المنصة
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              خطة تنفيذية واضحة من التأسيس إلى الإطلاق الرسمي عبر 5 مراحل رئيسية
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute top-0 bottom-0 right-8 md:right-1/2 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-gray-200" />

            {phases.map((phase, i) => (
              <div key={i} className="relative flex items-start gap-8 mb-12 last:mb-0 md:flex-row" style={{ flexDirection: i % 2 === 0 ? 'row' : 'row' }}>
                {/* Timeline Dot */}
                <div className="absolute right-5 md:right-1/2 md:translate-x-1/2 top-0 z-10">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 ${
                    phase.status === 'completed' ? 'bg-[var(--color-primary)] border-emerald-200' :
                    phase.status === 'in-progress' ? 'bg-[var(--color-accent)] border-amber-200' :
                    'bg-gray-200 border-gray-100'
                  }`}>
                    {phase.status === 'completed' ? (
                      <CheckCircle className="w-4 h-4 text-white" />
                    ) : phase.status === 'in-progress' ? (
                      <div className="w-2.5 h-2.5 rounded-full bg-white animate-pulse" />
                    ) : (
                      <div className="w-2.5 h-2.5 rounded-full bg-gray-400" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="mr-20 md:mr-0 md:w-1/2 md:pr-12" style={{ marginRight: '5rem' }}>
                  <div className="card">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        phase.status === 'completed' ? 'bg-emerald-100' :
                        phase.status === 'in-progress' ? 'bg-amber-100' :
                        'bg-gray-100'
                      }`}>
                        <phase.icon className={`w-6 h-6 ${
                          phase.status === 'completed' ? 'text-[var(--color-primary)]' :
                          phase.status === 'in-progress' ? 'text-[var(--color-accent-dark)]' :
                          'text-gray-400'
                        }`} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[var(--color-accent)]">المرحلة {phase.num}</div>
                        <h3 className="text-lg font-bold text-gray-900">{phase.title}</h3>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4" />
                      {phase.duration}
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        phase.status === 'completed' ? 'bg-emerald-100 text-emerald-700' :
                        phase.status === 'in-progress' ? 'bg-amber-100 text-amber-700' :
                        'bg-gray-100 text-gray-600'
                      }`}>
                        {phase.status === 'completed' ? 'مكتمل' :
                         phase.status === 'in-progress' ? 'قيد التنفيذ' :
                         'قادم'}
                      </span>
                    </div>

                    <ul className="space-y-2.5">
                      {phase.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                          {phase.status === 'completed' ? (
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300 shrink-0 mt-0.5" />
                          )}
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for the other side in RTL */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Milestones */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">محطات رئيسية</h2>
            <p className="section-subtitle mx-auto">
              الأهداف الرئيسية التي تسعى المنصة لتحقيقها
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: '+100,000', label: 'عامل مسجل في السنة الأولى', desc: 'الهدف من حجم قاعدة البيانات' },
              { icon: Building2, title: '+1,000', label: 'شركة معتمدة', desc: 'الهدف من الشركات المنضمة' },
              { icon: FileText, title: '+50,000', label: 'عقد صادر', desc: 'الهدف من العقود الموثقة' },
              { icon: GraduationCap, title: '+30,000', label: 'شهادة صادرة', desc: 'الهدف من الشهادات التدريبية' },
            ].map((milestone, i) => (
              <div key={i} className="card text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                  <milestone.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <div className="text-3xl font-black text-[var(--color-primary)] mb-1">{milestone.title}</div>
                <div className="font-bold text-gray-900 mb-1">{milestone.label}</div>
                <p className="text-sm text-gray-500">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">الشركاء الاستراتيجيون المستهدفون</h2>
            <p className="section-subtitle mx-auto">
              الجهات الحكومية والشركات التي سيتم التعاون معها
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { name: 'وزارة الموارد البشرية', icon: Building2, desc: 'الربط مع منصة قوى وأجير' },
              { name: 'وزارة الحج والعمرة', icon: Globe, desc: 'تصاريح المشاعر المقدسة' },
              { name: 'وزارة الداخلية', icon: Shield, desc: 'التحقق من الهويات والإقامات' },
              { name: 'شركات الحج والعمرة', icon: Award, desc: 'شراكات تشغيلية في موسم الحج' },
            ].map((partner, i) => (
              <div key={i} className="card text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                  <partner.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{partner.name}</h3>
                <p className="text-sm text-gray-500">{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Rocket className="w-16 h-16 mx-auto mb-6 text-[var(--color-primary)]" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">كن جزءاً من هذه الرحلة</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            سواء كنت عاملاً أو شركة، انضم إلينا الآن وساهم في بناء المنصة الوطنية
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="btn-primary px-8 py-3">تسجيل عامل جديد</Link>
            <Link to="/companies" className="btn-outline px-8 py-3">تسجيل شركة</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
