import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield, ArrowLeft, MapPin, CheckCircle, Clock,
  Users, Building2, AlertCircle, FileText, QrCode,
  Navigation
} from 'lucide-react';

const locations = [
  { id: 'mina', name: 'منى', icon: '🕌', capacity: '+30,000 عامل', description: 'إدارة تصاريح دخول العمال لمنطقة منى المقدسة' },
  { id: 'arafat', name: 'عرفات', icon: '⛰️', capacity: '+20,000 عامل', description: 'إدارة تصاريح دخول العمال لمنطقة عرفات المقدسة' },
  { id: 'muzdalifa', name: 'مزدلفة', icon: '🌙', capacity: '+15,000 عامل', description: 'إدارة تصاريح دخول العمال لمنطقة مزدلفة المقدسة' },
  { id: 'makkah', name: 'مكة المكرمة', icon: '🕋', capacity: '+50,000 عامل', description: 'تصاريح العمل في مدينة مكة المكرمة' },
];

const mockPermits = [
  { id: 'PMT-2025-001', name: 'أحمد محمد', location: 'منى', company: 'شركة النور', type: 'نظافة', startDate: '2025-06-01', endDate: '2025-09-30', status: 'نشط' },
  { id: 'PMT-2025-002', name: 'عبدالله علي', location: 'عرفات', company: 'شركة الفجر', type: 'حراسة', startDate: '2025-06-15', endDate: '2025-09-30', status: 'نشط' },
  { id: 'PMT-2025-003', name: 'يوسف حسن', location: 'مزدلفة', company: 'شركة الهدى', type: 'إرشاد', startDate: '2025-07-01', endDate: '2025-09-30', status: 'قيد المراجعة' },
  { id: 'PMT-2025-004', name: 'خالد إبراهيم', location: 'منى', company: 'شركة الإيمان', type: 'تحميل', startDate: '2025-06-10', endDate: '2025-09-30', status: 'منتهي' },
];

export default function Permits() {
  const [selectedLocation, setSelectedLocation] = useState('mina');

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
                <Shield className="w-4 h-4" />
                تصاريح المشاعر المقدسة
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                نظام تصاريح المشاعر المقدسة
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                نظام متكامل لإدارة تصاريح دخول العمال إلى المشاعر المقدسة (منى، عرفات، مزدلفة) مع ربط بالبوابات الذكية
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl">🕌</div>
                  <div>
                    <h3 className="font-bold">تصريح دخول منى</h3>
                    <p className="text-sm text-white/60">رقم: PMT-2025-001</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between"><span>العمل:</span><span>أحمد محمد</span></div>
                  <div className="flex justify-between"><span>الشركة:</span><span>شركة النور</span></div>
                  <div className="flex justify-between"><span>المدة:</span><span>1 يونيو - 30 سبتمبر</span></div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-4 h-4" />
                    <span className="text-sm">مرتبط بالبوابات الذكية</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">المواقع المقدسة</h2>
            <p className="section-subtitle mx-auto">
              اختر الموقع لإدارة تصاريح العمال
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {locations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(loc.id)}
                className={`card text-center cursor-pointer transition-all ${
                  selectedLocation === loc.id ? 'ring-2 ring-[var(--color-primary)] shadow-lg' : ''
                }`}
              >
                <div className="text-5xl mb-3">{loc.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{loc.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{loc.description}</p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[var(--color-primary)] text-sm font-semibold">
                  <Users className="w-3.5 h-3.5" />
                  {loc.capacity}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Create Permit Form */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <Shield className="w-5 h-5 text-[var(--color-accent-dark)]" />
              </div>
              إصدار تصريح دخول جديد
            </h2>

            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">الموقع</label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="input-field"
                  >
                    {locations.map((loc) => (
                      <option key={loc.id} value={loc.id}>{loc.icon} {loc.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">الشركة المشغّلة</label>
                  <select className="input-field">
                    <option value="">اختر الشركة</option>
                    <option>شركة النور للخدمات</option>
                    <option>شركة الفجر</option>
                    <option>شركة الهدى</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">اسم العامل</label>
                <select className="input-field">
                  <option value="">اختر العامل</option>
                  <option>أحمد محمد العلي - عامل نظافة</option>
                  <option>عبدالله حسن - مرشد</option>
                  <option>يوسف إبراهيم - عامل ضيافة</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ البدء</label>
                  <input type="date" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">تاريخ الانتهاء</label>
                  <input type="date" className="input-field" />
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <Navigation className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  سيتم ربط هذا التصريح بالبوابات الذكية في الموقع المحدد. العامل لن يستطيع الدخول بدون التصريح الإلكتروني.
                </p>
              </div>
            </div>

            <button className="btn-primary w-full mt-8 py-4 text-lg flex items-center justify-center gap-2">
              <Shield className="w-5 h-5" />
              إصدار التصريح
            </button>
          </div>
        </div>
      </section>

      {/* Permits Table */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">التصاريح النشطة</h2>

          <div className="card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">رقم التصريح</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">اسم العامل</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">الموقع</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">المهنة</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">الفترة</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">الحالة</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {mockPermits.map((permit) => (
                  <tr key={permit.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-sm font-semibold text-[var(--color-primary)]">{permit.id}</td>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">{permit.name}</td>
                    <td className="py-4 px-4 text-sm text-gray-600 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {permit.location}
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-600">{permit.type}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{permit.startDate} → {permit.endDate}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        permit.status === 'نشط' ? 'bg-emerald-100 text-emerald-700' :
                        permit.status === 'منتهي' ? 'bg-gray-100 text-gray-600' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {permit.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors">
                          <QrCode className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-gray-100 hover:bg-emerald-50 text-gray-600 hover:text-emerald-600 transition-colors">
                          <FileText className="w-4 h-4" />
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

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">مميزات نظام التصاريح</h2>
            <p className="section-subtitle mx-auto">
              نظام ذكي لإدارة تصاريح العمال في المشاعر المقدسة
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: MapPin, title: 'ربط بالموقع', desc: 'كل تصريح مرتبط بموقع محدد (منى، عرفات، مزدلفة)' },
              { icon: Clock, title: 'تحديد المدة', desc: 'تصاريح مؤقتة مرتبطة بتاريخ دخول وخروج محدد' },
              { icon: QrCode, title: 'بوابات ذكية', desc: 'ربط التصاريح بالبوابات الذكية للتحكم في الدخول' },
              { icon: Building2, title: 'الشركة المشغّلة', desc: 'كل تصريح مرتبط بالشركة المشغّلة المسؤولة عن العامل' },
            ].map((feature, i) => (
              <div key={i} className="card text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-12 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4 p-6 bg-red-50 rounded-2xl border border-red-200">
            <AlertCircle className="w-6 h-6 text-red-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-red-800 mb-2">تنبيه هام</h3>
              <p className="text-sm text-red-700 leading-relaxed">
                الدخول إلى المشاعر المقدسة بدون تصريح ساري المفعول يعتبر مخالفة. جميع التصاريح تصدر من خلال منصة كوادر بشكل رسمي مرتبطة بوزارة الحج والعمرة.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
