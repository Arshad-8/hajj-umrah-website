import { Link } from 'react-router-dom';
import {
  Building2, Search, Users, Clock, Star, FileText,
  MapPin, ArrowLeft,
  Briefcase, DollarSign, Shield, Award
} from 'lucide-react';

export default function Companies() {
  const stats = [
    { label: 'العمال المنسحبون', value: '142', icon: Users, change: '+12%', color: 'text-emerald-600', bgColor: 'bg-emerald-50' },
    { label: 'العقود النشطة', value: '89', icon: FileText, change: '+5%', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { label: 'التصاريح الصادرة', value: '56', icon: Shield, change: '+8%', color: 'text-amber-600', bgColor: 'bg-amber-50' },
    { label: 'التقييم العام', value: '4.7', icon: Star, change: 'ممتاز', color: 'text-purple-600', bgColor: 'bg-purple-50' },
  ];

  const workers = [
    { name: 'أحمد محمد', profession: 'عامل نظافة', location: 'منى', status: 'نشط', rating: 4.8, contract: 'موسمي' },
    { name: 'عبدالله علي', profession: 'مرشد', location: 'عرفات', status: 'نشط', rating: 4.9, contract: 'يومي' },
    { name: 'يوسف حسن', profession: 'عامل ضيافة', location: 'مكة', status: 'موقوف', rating: 4.5, contract: 'سنوي' },
    { name: 'خالد إبراهيم', profession: 'حراسة أمنية', location: 'مزدلفة', status: 'نشط', rating: 4.7, contract: 'موسمي' },
    { name: 'سعيد أحمد', profession: 'عامل تحميل', location: 'جدة', status: 'نشط', rating: 4.6, contract: 'شاهري' },
  ];

// Tabs available: dashboard, workers, contracts, permits, settings

  return (
    <div>
      {/* Header */}
      <section className="pt-8 pb-16 md:pt-16 md:pb-20 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            العودة للرئيسية
          </Link>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-semibold mb-6 border border-white/20">
                <Building2 className="w-4 h-4" />
                بوابة الشركات
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                لوحة إدارة الشركات
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                منصة متكاملة لإدارة كوادر عملك، البحث عن عمال مؤهلين، إصدار العقود والتصاريح، ومتابعة الأداء
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">شركةexample للخدمات</h3>
                    <p className="text-sm text-white/60">مكـة المكرمة</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">142</div>
                    <div className="text-xs text-white/60">عامل منسحب</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold">89</div>
                    <div className="text-xs text-white/60">عقد نشط</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-[var(--color-bg)] -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((stat, i) => (
              <div key={i} className="card">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">{stat.change}</span>
                </div>
                <div className="text-2xl font-black text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-12 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">الإجراءات السريعة</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Search, label: 'بحث عن عمال', desc: 'ابحث عن عمال مؤهلين', link: '/marketplace', color: 'from-blue-500 to-blue-600' },
              { icon: FileText, label: 'إصدار عقد', desc: 'إنشاء عقد تشغيل جديد', link: '/contracts', color: 'from-emerald-500 to-emerald-600' },
              { icon: Shield, label: 'طلب تصاريح', desc: 'تصاريح المشاعر المقدسة', link: '/permits', color: 'from-amber-500 to-amber-600' },
              { icon: Award, label: 'طلب تدريب', desc: 'تدريب وتأهيل العمال', link: '/training', color: 'from-purple-500 to-purple-600' },
            ].map((action, i) => (
              <Link key={i} to={action.link} className="card group cursor-pointer">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-gray-900">{action.label}</h3>
                <p className="text-sm text-gray-500">{action.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Workers Table */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">العمال المنسحبون</h2>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input placeholder="بحث عن عامل..." className="input-field pr-10 pl-4 py-2 text-sm w-64" />
              </div>
              <Link to="/register" className="btn-primary px-4 py-2 text-sm">
                + إضافة عامل
              </Link>
            </div>
          </div>

          <div className="card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">الاسم</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">المهنة</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">الموقع</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">الحالة</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">التقييم</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">العقد</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {workers.map((worker, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[var(--color-primary)] font-bold text-sm">
                          {worker.name.charAt(0)}
                        </div>
                        <span className="font-semibold text-gray-900">{worker.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{worker.profession}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {worker.location}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        worker.status === 'نشط' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {worker.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className="flex items-center gap-1 text-sm font-semibold text-amber-600">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        {worker.rating}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{worker.contract}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors">
                          <FileText className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors">
                          <Clock className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Company Services */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">خدمات إدارة الموارد البشرية</h2>
            <p className="section-subtitle mx-auto">
              أدوات متكاملة لإدارة كوادر عملك بشكل فعال
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: 'طلب العمال', desc: 'البحث والتعاقد مع عمال مؤهلين بسهولة وسرعة' },
              { icon: Clock, title: 'إدارة الجداول', desc: 'تنظيم مواعيد العمل والوردية لكل عامل' },
              { icon: DollarSign, title: 'إدارة الرواتب', desc: 'حساب وصرف الرواتب بشكل تلقائي ودقيق' },
              { icon: MapPin, title: 'إدارة السكن', desc: 'تنظيم ومتابعة أماكن إقامة العمال' },
              { icon: Briefcase, title: 'إدارة النقل', desc: 'تنظيم وسائل نقل العمال من وإلى مواقع العمل' },
              { icon: Award, title: 'التقييم والأداء', desc: 'متابعة وتقييم أداء العمال بشكل مستمر' },
            ].map((service, i) => (
              <div key={i} className="card text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
