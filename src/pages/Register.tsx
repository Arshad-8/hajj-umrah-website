import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  User, FileText, GraduationCap, Shield, HeartPulse,
  CheckCircle, Upload, ArrowLeft, Building2
} from 'lucide-react';

export default function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    iqamaNumber: '',
    nationality: '',
    profession: '',
    experience: '',
    phone: '',
    email: '',
    city: '',
    documents: '',
    training: '',
    healthStatus: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const professions = [
    'عامل نظافة', 'عامل تحميل وتنزيل', 'عامل ضيافة', 'مرشد',
    'حراسة أمنية', 'عامل مطبخ', 'عامل مذبحة حديثة', 'أخرى'
  ];

  const cities = [
    'مكة المكرمة', 'المدينة المنورة', 'جدة', 'الرياض', 'الدمام', 'أخرى'
  ];

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div>
      {/* Header */}
      <section className="pt-8 pb-12 md:pt-16 md:pb-20 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            العودة للرئيسية
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4">تسجيل عامل جديد</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            املأ البيانات التالية لتسجيل حسابك في المنصة الوطنية والحصول على هوية مهنية معتمدة
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex items-center justify-center gap-0">
            {['البيانات الشخصية', 'المهنة والخبرة', 'المستندات', 'المراجعة'].map((label, i) => (
              <div key={i} className="flex items-center">
                <div className="flex items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                    step > i + 1 ? 'bg-[var(--color-primary)] text-white' :
                    step === i + 1 ? 'bg-[var(--color-primary)] text-white shadow-lg' :
                    'bg-gray-100 text-gray-400'
                  }`}>
                    {step > i + 1 ? <CheckCircle className="w-5 h-5" /> : i + 1}
                  </div>
                  <span className={`text-sm font-medium hidden sm:block ${
                    step >= i + 1 ? 'text-gray-900' : 'text-gray-400'
                  }`}>{label}</span>
                </div>
                {i < 3 && <div className={`w-8 md:w-16 h-0.5 mx-2 ${step > i + 1 ? 'bg-[var(--color-primary)]' : 'bg-gray-200'}`} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 bg-[var(--color-bg)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="card">
            {/* Step 1: Personal Info */}
            {step === 1 && (
              <div className="space-y-5 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <User className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  البيانات الشخصية
                </h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">الاسم الكامل</label>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} placeholder="أدخل اسمك الكامل كما في الإقامة" className="input-field" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">رقم الإقامة / الهوية</label>
                    <input name="iqamaNumber" value={formData.iqamaNumber} onChange={handleChange} placeholder="أدخل رقم الإقامة" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">الجنسية</label>
                    <input name="nationality" value={formData.nationality} onChange={handleChange} placeholder="أدخل جنسيتك" className="input-field" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">رقم الجوال</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder="05XXXXXXXX" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">البريد الإلكتروني</label>
                    <input name="email" value={formData.email} onChange={handleChange} placeholder="example@email.com" className="input-field" dir="ltr" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">المدينة</label>
                  <select name="city" value={formData.city} onChange={handleChange} className="input-field">
                    <option value="">اختر المدينة</option>
                    {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Profession */}
            {step === 2 && (
              <div className="space-y-5 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-[var(--color-accent-dark)]" />
                  </div>
                  المهنة والخبرة
                </h2>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">المهنة</label>
                  <select name="profession" value={formData.profession} onChange={handleChange} className="input-field">
                    <option value="">اختر المهنة</option>
                    {professions.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">سنوات الخبرة</label>
                  <select name="experience" value={formData.experience} onChange={handleChange} className="input-field">
                    <option value="">اختر عدد سنوات الخبرة</option>
                    {['أقل من سنة', '1-2 سنة', '3-5 سنوات', '5-10 سنوات', 'أكثر من 10 سنوات'].map((e) => <option key={e} value={e}>{e}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">الدورات التدريبية</label>
                  <textarea name="training" value={formData.training} onChange={handleChange} placeholder="اذكر الدورات التدريبية التي أكملتها..." rows={3} className="input-field resize-none" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">الحالة الصحية</label>
                  <select name="healthStatus" value={formData.healthStatus} onChange={handleChange} className="input-field">
                    <option value="">اختر الحالة الصحية</option>
                    <option value="fit">لياقة كاملة للعمل</option>
                    <option value="fit-with-conditions">لياقة بشروط محددة</option>
                    <option value="under-review">قيد الفحص</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Documents */}
            {step === 3 && (
              <div className="space-y-5 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Upload className="w-5 h-5 text-blue-600" />
                  </div>
                  المستندات
                </h2>

                {[
                  { icon: FileText, title: 'صورة الإقامة / الهوية', desc: 'صورة واضحة من正面 و خلف الإقامة' },
                  { icon: GraduationCap, title: 'الشهادات المهنية', desc: 'أي شهادات أو دورات تدريبية' },
                  { icon: HeartPulse, title: 'الشهادة الصحية', desc: 'شهادة طبية تثبت اللياقة للعمل' },
                  { icon: Shield, title: 'السجل الأمني', desc: 'إفادة عدم وجود مخالفات أمنية' },
                ].map((doc, i) => (
                  <div key={i} className="border-2 border-dashed border-gray-200 rounded-xl p-5 text-center hover:border-[var(--color-primary)] hover:bg-emerald-50/30 transition-all cursor-pointer group">
                    <div className="w-12 h-12 mx-auto rounded-xl bg-gray-100 flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition-colors">
                      <doc.icon className="w-6 h-6 text-gray-400 group-hover:text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{doc.title}</h3>
                    <p className="text-sm text-gray-500">{doc.desc}</p>
                    <button className="mt-3 px-4 py-2 rounded-lg bg-emerald-50 text-[var(--color-primary)] text-sm font-semibold hover:bg-emerald-100 transition-colors">
                      رفع الملف
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="space-y-6 animate-fade-in">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  مراجعة البيانات
                </h2>

                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">الاسم الكامل</span>
                    <span className="font-semibold text-gray-900">{formData.fullName || '—'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">رقم الإقامة</span>
                    <span className="font-semibold text-gray-900">{formData.iqamaNumber || '—'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">الجنسية</span>
                    <span className="font-semibold text-gray-900">{formData.nationality || '—'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">المهنة</span>
                    <span className="font-semibold text-gray-900">{formData.profession || '—'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">الخبرة</span>
                    <span className="font-semibold text-gray-900">{formData.experience || '—'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">المدينة</span>
                    <span className="font-semibold text-gray-900">{formData.city || '—'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-sm text-gray-500">رقم الجوال</span>
                    <span className="font-semibold text-gray-900">{formData.phone || '—'}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-gray-500">البريد الإلكتروني</span>
                    <span className="font-semibold text-gray-900">{formData.email || '—'}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-200">
                  <Shield className="w-5 h-5 text-[var(--color-accent-dark)] shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800">
                    سيتم التحقق من بياناتك مع الجهات الحكومية المختصة (قوى، أجير، وزارة الداخلية) قبل منحك الهوية المهنية. قد تستغرق العملية من 2-5 أيام عمل.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              {step > 1 ? (
                <button onClick={handlePrev} className="btn-outline px-6 py-2.5 text-sm">
                  السابق
                </button>
              ) : (
                <div />
              )}
              {step < 4 ? (
                <button onClick={handleNext} className="btn-primary px-8 py-2.5 text-sm">
                  التالي
                  <ArrowLeft className="w-4 h-4" />
                </button>
              ) : (
                <button className="btn-primary px-8 py-3 text-sm">
                  <CheckCircle className="w-5 h-5" />
                  تأكيد التسجيل
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
