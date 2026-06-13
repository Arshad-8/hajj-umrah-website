import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User, CheckCircle, Clock, FileText, GraduationCap, Shield,
  HeartPulse, Briefcase, Bell, Download, QrCode, MapPin,
  Phone, Mail, Award, TrendingUp, AlertCircle, ChevronLeft
} from 'lucide-react';

export default function Dashboard() {
  const [worker] = useState({
    fullName: 'محمد عبدالله الأحمدي',
    profession: 'عامل ضيافة',
    iqamaNumber: '2XXXXXXXXX',
    nationality: 'مصري',
    city: 'مكة المكرمة',
    phone: '05XXXXXXXX',
    email: 'mohammed@email.com',
    idNumber: 'SAMA-2026-08471',
    status: 'approved', // approved | pending | review
    joinDate: '12 يونيو 2026',
    rating: 4.8,
  });

  const stats = [
    { icon: Briefcase, label: 'الفرص المتاحة', value: '12', color: 'emerald' },
    { icon: Award, label: 'الشهادات', value: '3', color: 'amber' },
    { icon: TrendingUp, label: 'نسبة اكتمال الملف', value: '85%', color: 'blue' },
    { icon: Clock, label: 'أيام العضوية', value: '1', color: 'purple' },
  ];

  const documents = [
    { icon: FileText, title: 'صورة الإقامة', status: 'verified' },
    { icon: GraduationCap, title: 'الشهادات المهنية', status: 'verified' },
    { icon: HeartPulse, title: 'الشهادة الصحية', status: 'pending' },
    { icon: Shield, title: 'السجل الأمني', status: 'verified' },
  ];

  const trainings = [
    { title: 'أساسيات خدمة ضيوف الرحمن', progress: 100, status: 'مكتمل' },
    { title: 'السلامة والأمن في المواقع', progress: 60, status: 'قيد التقدم' },
    { title: 'مهارات التواصل والإرشاد', progress: 0, status: 'لم يبدأ' },
  ];

  const opportunities = [
    { title: 'عامل ضيافة - فندق بمكة المكرمة', company: 'شركة الضيافة الكبرى', location: 'مكة المكرمة', type: 'موسمي' },
    { title: 'مشرف خدمات - حملة حج', company: 'حملة النور', location: 'منى', type: 'موسم الحج' },
    { title: 'عامل ضيافة - مجمع سكني', company: 'دار الإقامة', location: 'المدينة المنورة', type: 'دوام كامل' },
  ];

  const statusConfig = {
    approved: { label: 'معتمد', color: 'text-green-700', bg: 'bg-green-100', icon: CheckCircle },
    pending: { label: 'قيد المراجعة', color: 'text-amber-700', bg: 'bg-amber-100', icon: Clock },
    review: { label: 'يحتاج مراجعة', color: 'text-red-700', bg: 'bg-red-100', icon: AlertCircle },
  };
  const currentStatus = statusConfig[worker.status as keyof typeof statusConfig];

  return (
    <div>
      {/* Header */}
      <section className="pt-8 pb-24 md:pt-12 md:pb-32 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/15 flex items-center justify-center shrink-0">
                <User className="w-8 h-8" />
              </div>
              <div>
                <p className="text-white/70 text-sm mb-1">مرحباً بك،</p>
                <h1 className="text-2xl md:text-3xl font-black">{worker.fullName}</h1>
                <p className="text-white/80 text-sm mt-1">{worker.profession}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center hover:bg-white/25 transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[var(--color-accent)]" />
              </button>
              <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl ${currentStatus.bg} ${currentStatus.color}`}>
                <currentStatus.icon className="w-4 h-4" />
                <span className="text-sm font-bold">{currentStatus.label}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="-mt-16 md:-mt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, i) => {
              const colors: Record<string, string> = {
                emerald: 'bg-emerald-100 text-[var(--color-primary)]',
                amber: 'bg-amber-100 text-[var(--color-accent-dark)]',
                blue: 'bg-blue-100 text-blue-600',
                purple: 'bg-purple-100 text-purple-600',
              };
              return (
                <div key={i} className="card">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${colors[stat.color]}`}>
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <p className="text-2xl font-black text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Left column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Documents */}
              <div className="card">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[var(--color-primary)]" />
                    حالة المستندات
                  </h2>
                  <span className="text-sm text-gray-400">3 من 4 موثقة</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {documents.map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50">
                      <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                        <doc.icon className="w-5 h-5 text-gray-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">{doc.title}</p>
                        {doc.status === 'verified' ? (
                          <span className="text-xs text-green-600 flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> موثّق
                          </span>
                        ) : (
                          <span className="text-xs text-amber-600 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> قيد المراجعة
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Training */}
              <div className="card">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-[var(--color-primary)]" />
                    الدورات التدريبية
                  </h2>
                  <Link to="/training" className="text-sm text-[var(--color-primary)] font-semibold hover:underline">
                    عرض الكل
                  </Link>
                </div>
                <div className="space-y-4">
                  {trainings.map((t, i) => (
                    <div key={i}>
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-semibold text-gray-900">{t.title}</p>
                        <span className="text-xs text-gray-500">{t.status}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-l from-[var(--color-primary)] to-[var(--color-primary-light)] transition-all"
                          style={{ width: `${t.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opportunities */}
              <div className="card">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-[var(--color-primary)]" />
                    فرص عمل مقترحة
                  </h2>
                  <Link to="/marketplace" className="text-sm text-[var(--color-primary)] font-semibold hover:underline">
                    عرض الكل
                  </Link>
                </div>
                <div className="space-y-3">
                  {opportunities.map((op, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-[var(--color-primary)] hover:bg-emerald-50/30 transition-all">
                      <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-gray-900 truncate">{op.title}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-500 mt-1">
                          <span>{op.company}</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {op.location}
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-50 text-[var(--color-accent-dark)] shrink-0 hidden sm:block">
                        {op.type}
                      </span>
                      <ChevronLeft className="w-5 h-5 text-gray-300 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column - ID Card */}
            <div className="space-y-6">
              {/* Professional ID */}
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <img src="/logo.png" alt="شعار منصة سما" className="w-10 h-10 object-contain bg-white rounded-lg p-1" />
                      <div>
                        <p className="text-xs text-white/70">الهوية المهنية</p>
                        <p className="text-sm font-bold">منصة سما</p>
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center">
                      <QrCode className="w-8 h-8 text-[var(--color-primary)]" />
                    </div>
                  </div>

                  <div className="w-20 h-20 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                    <User className="w-10 h-10" />
                  </div>

                  <h3 className="text-xl font-black mb-1">{worker.fullName}</h3>
                  <p className="text-white/80 text-sm mb-4">{worker.profession}</p>

                  <div className="space-y-2 text-sm border-t border-white/15 pt-4">
                    <div className="flex justify-between">
                      <span className="text-white/60">رقم الهوية</span>
                      <span className="font-mono font-semibold" dir="ltr">{worker.idNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">الجنسية</span>
                      <span className="font-semibold">{worker.nationality}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">تاريخ التسجيل</span>
                      <span className="font-semibold">{worker.joinDate}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--color-accent)] px-6 py-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-[var(--color-primary-dark)]">هوية معتمدة وموثّقة</span>
                  <CheckCircle className="w-5 h-5 text-[var(--color-primary-dark)]" />
                </div>
              </div>

              <button className="btn-primary w-full">
                <Download className="w-5 h-5" />
                تحميل الهوية المهنية
              </button>

              {/* Contact info */}
              <div className="card">
                <h2 className="text-lg font-bold text-gray-900 mb-4">معلومات التواصل</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center">
                      <Phone className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-gray-700" dir="ltr">{worker.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-gray-700" dir="ltr">{worker.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-gray-700">{worker.city}</span>
                  </div>
                </div>
                <Link to="/register" className="btn-outline w-full mt-4 text-sm">
                  تعديل البيانات
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
