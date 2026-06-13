import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, User, Eye, EyeOff, ShieldCheck } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
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
          <h1 className="text-4xl md:text-5xl font-black mb-4">تسجيل الدخول</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            ادخل إلى حسابك في المنصة الوطنية للكوادر العاملة لإدارة بياناتك وخدماتك
          </p>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-12 bg-[var(--color-bg)]">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="card">
            <div className="flex flex-col items-center mb-8">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                <Lock className="w-7 h-7 text-[var(--color-primary)]" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">مرحباً بعودتك</h2>
              <p className="text-sm text-gray-500 mt-1">أدخل بياناتك للوصول إلى حسابك</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">رقم الإقامة / البريد الإلكتروني</label>
                <div className="relative">
                  <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleChange}
                    placeholder="أدخل رقم الإقامة أو البريد"
                    className="input-field pr-11"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">كلمة المرور</label>
                <div className="relative">
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="أدخل كلمة المرور"
                    className="input-field pr-11 pl-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label={showPassword ? 'إخفاء كلمة المرور' : 'إظهار كلمة المرور'}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input
                    name="remember"
                    type="checkbox"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="w-4 h-4 rounded border-gray-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
                  />
                  تذكرني
                </label>
                <Link to="/contact" className="text-sm font-medium text-[var(--color-primary)] hover:underline">
                  نسيت كلمة المرور؟
                </Link>
              </div>

              <button type="submit" className="btn-primary w-full justify-center py-3 text-sm">
                تسجيل الدخول
              </button>
            </form>

            <div className="flex items-start gap-3 p-4 mt-6 bg-amber-50 rounded-xl border border-amber-200">
              <ShieldCheck className="w-5 h-5 text-[var(--color-accent-dark)] shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800">
                دخولك آمن ومشفّر. لا تشارك بيانات حسابك مع أي جهة، وتأكد من تسجيل الدخول عبر المنصة الرسمية فقط.
              </p>
            </div>

            <p className="text-center text-sm text-gray-500 mt-6">
              ليس لديك حساب؟{' '}
              <Link to="/register" className="font-semibold text-[var(--color-primary)] hover:underline">
                سجّل كعامل جديد
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
