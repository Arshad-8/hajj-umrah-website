import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Mail, Phone, MapPin, Clock,
  Send, MessageCircle, Globe, AlertCircle,
  CheckCircle, Building2, Users
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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
            <h1 className="text-4xl md:text-5xl font-black mb-4">تواصل معنا</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              نحب أن نسمع منك! تواصل معنا لأي استفسار أو اقتراح أو طلب دعم
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-[var(--color-bg)] -mt-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Mail, label: 'البريد الإلكتروني', value: 'info@kawader.sa', desc: 'راسلنا عبر البريد' },
              { icon: Phone, label: 'الهاتف', value: '+966 11 XXX XXXX', desc: 'متاح على مدار الساعة' },
              { icon: MapPin, label: 'العنوان', value: 'مكة المكرمة', desc: 'المملكة العربية السعودية' },
              { icon: Clock, label: 'ساعات العمل', value: '24/7', desc: 'متاحون دائماً' },
            ].map((info, i) => (
              <div key={i} className="card text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-emerald-100 flex items-center justify-center mb-3">
                  <info.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{info.label}</h3>
                <p className="text-sm text-[var(--color-primary)] font-semibold mb-1" dir="ltr">{info.value}</p>
                <p className="text-xs text-gray-500">{info.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Quick Actions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">أرسل رسالة</h2>

                {submitted && (
                  <div className="mb-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <p className="text-sm text-emerald-700 font-medium">تم إرسال رسالتك بنجاح! سنرد عليك في أقرب وقت.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">الاسم الكامل</label>
                      <input name="name" value={formData.name} onChange={handleChange} className="input-field" required placeholder="أدخل اسمك" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">البريد الإلكتروني</label>
                      <input name="email" type="email" value={formData.email} onChange={handleChange} className="input-field" required placeholder="example@email.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">رقم الجوال</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} className="input-field" placeholder="05XXXXXXXX" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">الشركة (اختياري)</label>
                      <input name="company" value={formData.company} onChange={handleChange} className="input-field" placeholder="اسم الشركة" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">الموضوع</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} className="input-field" required>
                      <option value="">اختر الموضوع</option>
                      <option value="registration">استفسار عن التسجيل</option>
                      <option value="contracts">استفسار عن العقود</option>
                      <option value="permits">استفسار عن التصاريح</option>
                      <option value="training">استفسار عن التدريب</option>
                      <option value="technical">دعم فني</option>
                      <option value="partnership">شراكات</option>
                      <option value="other">أخرى</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">الرسالة</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="input-field resize-none" required placeholder="اكتب رسالتك هنا..." />
                  </div>

                  <button type="submit" className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    إرسال الرسالة
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-5">
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-[var(--color-primary)]" />
                  طرق التواصل الأخرى
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Phone, label: 'اتصل بنا', value: '+966 11 XXX XXXX' },
                    { icon: Mail, label: 'راسلنا', value: 'info@kawader.sa' },
                    { icon: Globe, label: 'الموقع', value: 'www.kawader.sa' },
                  ].map((method, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                        <method.icon className="w-5 h-5 text-[var(--color-primary)]" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{method.label}</div>
                        <div className="text-xs text-gray-500" dir="ltr">{method.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card">
                <h3 className="font-bold text-gray-900 mb-4">روابط مفيدة</h3>
                <div className="space-y-2.5">
                  {[
                    { label: 'تسجيل عامل جديد', path: '/register', icon: Users },
                    { label: 'بوابة الشركات', path: '/companies', icon: Building2 },
                    { label: 'العقود الإلكترونية', path: '/contracts', icon: '📄' },
                    { label: 'تصاريح المشاعر', path: '/permits', icon: '🕌' },
                  ].map((link, i) => (
                    <Link key={i} to={link.path} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-emerald-50 transition-colors">
                      <span className="text-lg">{typeof link.icon === 'string' ? link.icon : <link.icon className="w-4 h-4 text-[var(--color-primary)]" />}</span>
                      <span className="text-sm font-semibold text-gray-900 hover:text-[var(--color-primary)]">{link.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="card bg-amber-50 border-amber-200">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-amber-800 text-sm mb-1">للطوارئ فقط</h3>
                    <p className="text-xs text-amber-700">
                      في حالات الطوارئ المتعلقة بالمشاعر المقدسة، تواصل مع وزارة الحج والعمرة مباشرة عبر 920007777
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="card text-center py-16">
            <MapPin className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">موقعنا</h3>
            <p className="text-gray-500 mb-4">مكة المكرمة، المملكة العربية السعودية</p>
            <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto text-gray-300 mb-2" />
                <p className="text-gray-400 text-sm">خريطة تفاعلية ستُضاف هنا</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
