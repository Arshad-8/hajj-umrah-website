import { Link } from 'react-router-dom';
import {
  GraduationCap, ArrowLeft,
  Shield, Users, Clock, Award, BookOpen,
  Monitor, Video, FileCheck
} from 'lucide-react';

export default function Training() {
  const courses = [
    {
      id: 1,
      title: 'السلامة المهنية',
      desc: 'دورة شاملة في السلامة والصحة المهنية في بيئة العمل',
      duration: '40 ساعة',
      level: 'مبتدئ',
      category: 'أمان',
      icon: '🛡️',
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      workers: '+12,000',
    },
    {
      id: 2,
      title: 'الضيافة والخدمة',
      desc: 'مهارات تقديم الضيافة وخدمة العملاء بشكل احترافي',
      duration: '32 ساعة',
      level: 'مبتدئ',
      category: 'ضيافة',
      icon: '🍽️',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-600',
      workers: '+8,500',
    },
    {
      id: 3,
      title: 'التوجيه والإرشاد',
      desc: 'مهارات توجيه الحجاج والمعتمرين والمرور بشكل فعال',
      duration: '24 ساعة',
      level: 'متوسط',
      category: 'إرشاد',
      icon: '🧭',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      workers: '+5,000',
    },
    {
      id: 4,
      title: 'الأمن والحراسة',
      desc: 'تدريبات متخصصة في الأمن وحماية المنشآت والأفراد',
      duration: '48 ساعة',
      level: 'متقدم',
      category: 'أمن',
      icon: '🛡️',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      workers: '+7,000',
    },
    {
      id: 5,
      title: 'تشغيل المطابخ',
      desc: 'تدريب على معايير السلامة الغذائية وتشغيل المطابخ',
      duration: '36 ساعة',
      level: 'مبتدئ',
      category: 'مطبخ',
      icon: '👨‍🍳',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      workers: '+6,000',
    },
    {
      id: 6,
      title: 'تشغيل المجازر الحديثة',
      desc: 'دورة متخصصة في تشغيل وإدارة المجازر الحديثة المعتمدة',
      duration: '40 ساعة',
      level: 'متقدم',
      category: 'مجازر',
      icon: '🥩',
      color: 'from-cyan-500 to-teal-600',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600',
      workers: '+3,000',
    },
  ];

  const certificates = [
    { title: 'شهادة السلامة المهنية', icon: Shield, issued: '+12,000' },
    { title: 'شهادة الضيافة المعتمدة', icon: Award, issued: '+8,500' },
    { title: 'شهادة التوجيه والإرشاد', icon: FileCheck, issued: '+5,000' },
    { title: 'شهادة الأمن والحراسة', icon: Users, issued: '+7,000' },
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
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-sm font-semibold mb-6 border border-white/20">
                <GraduationCap className="w-4 h-4" />
                التدريب والتأهيل
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                نظام التدريب والتأهيل
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                دورات تدريبية متخصصة معتمدة تمنح شهادات رقمية معترف بها لجميع الفئات المهنية
              </p>
              <div className="flex items-center gap-4 mt-6">
                <Link to="/register" className="btn-accent px-6 py-3 text-sm">
                  <GraduationCap className="w-4 h-4" />
                  سجل في دورة
                </Link>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {certificates.map((cert, i) => (
                <div key={i} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center mb-3">
                    <cert.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm mb-1">{cert.title}</h3>
                  <p className="text-xs text-white/60">{cert.issued} شهادة صادرة</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">الدورات التدريبية المتاحة</h2>
            <p className="section-subtitle mx-auto">
              دورات معتمدة مصممة خصيصاً لكل فئة مهنية
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="card group cursor-pointer overflow-hidden">
                <div className={`h-2 w-full bg-gradient-to-l ${course.color}`} />
                <div className="mt-4 flex items-start justify-between">
                  <div className="text-4xl">{course.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${course.bgColor} ${course.textColor}`}>
                    {course.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mt-4 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.desc}</p>

                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {course.level}
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-sm text-[var(--color-primary)] font-semibold">
                    <Users className="w-4 h-4" />
                    {course.workers} متدرب
                  </span>
                  <button className="px-4 py-2 rounded-lg bg-emerald-50 text-[var(--color-primary)] text-sm font-semibold hover:bg-emerald-100 transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                    سجل الآن
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">أساليب التدريب</h2>
            <p className="section-subtitle mx-auto">
              نوفر أساليب متنوعة للتدريب لضمان أفضل النتائج
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { icon: Monitor, title: 'تدريب عن بعد', desc: 'دورات إلكترونية تفاعلية يمكنك إكمالها من أي مكان', emoji: '💻' },
              { icon: Users, title: 'تدريب عملي', desc: 'جلسات تدريبية عملية في مواقع العمل الفعلية', emoji: '🏢' },
              { icon: Video, title: 'ورش عمل', desc: 'ورش عمل متخصصة يقدمها خبراء المجال', emoji: '🎯' },
            ].map((method, i) => (
              <div key={i} className="card text-center">
                <div className="text-5xl mb-4">{method.emoji}</div>
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                  <method.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600">{method.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">الشهادات الرقمية المعتمدة</h2>
            <p className="section-subtitle mx-auto">
              شهادات رقمية معتمدة تُستخدم كمرجع رسمي لدى الشركات
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certificates.map((cert, i) => (
              <div key={i} className="card text-center">
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                  <cert.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-500">{cert.issued} شهادة صادرة</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">ابدأ تدريبك الآن</h2>
          <p className="text-gray-600 mb-8">سجل في الدورات واحصل على شهادات معتمدة</p>
          <Link to="/register" className="btn-primary px-8 py-3 inline-flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            سجل في دورة تدريبية
          </Link>
        </div>
      </section>
    </div>
  );
}
