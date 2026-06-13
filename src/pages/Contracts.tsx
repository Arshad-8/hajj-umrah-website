import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText, ArrowLeft, CheckCircle, Clock, Calendar,
  User, Building2, DollarSign, Printer, Download,
  Shield, AlertCircle
} from 'lucide-react';

export default function Contracts() {
  const [contractType, setContractType] = useState('seasonal');

  const contractTypes = [
    { id: 'seasonal', label: 'عقد موسمي', desc: 'عقد لفترة الموسم الحج أو العمرة', icon: Calendar, price: '20 ريال' },
    { id: 'daily', label: 'عقد يومي', desc: 'عقد لمدة يوم واحد', icon: Clock, price: '10 ريال' },
    { id: 'hourly', label: 'عقد بالساعة', desc: 'نظام العمل المرن بالساعة', icon: Clock, price: '5 ريال' },
    { id: 'monthly', label: 'عقد شهري', desc: 'عقد لثلاث أو ستة أشهر', icon: Calendar, price: '15 ريال' },
  ];

  const recentContracts = [
    { id: 'KWD-2025-001', worker: 'أحمد محمد', type: 'موسمي', company: 'شركة النور', status: 'نشط', date: '2025-06-01', end: '2025-09-30', amount: '3,500 ريال' },
    { id: 'KWD-2025-002', worker: 'عبدالله علي', type: 'يومي', company: 'شركة الفجر', status: 'مكتمل', date: '2025-06-15', end: '2025-06-15', amount: '350 ريال' },
    { id: 'KWD-2025-003', worker: 'يوسف حسن', type: 'شهري', company: 'شركة الهدى', status: 'نشط', date: '2025-06-01', end: '2025-08-31', amount: '4,000 ريال' },
    { id: 'KWD-2025-004', worker: 'خالد إبراهيم', type: 'موسمي', company: 'شركة الإيمان', status: 'قيد المراجعة', date: '2025-06-20', end: '2025-09-30', amount: '4,500 ريال' },
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
                <FileText className="w-4 h-4" />
                العقود الإلكترونية
              </div>
              <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                نظام العقود الإلكترونية
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                إصدار عقود تشغيل موثقة إلكترونياً عبر المنصة، مرتبطة بأنظمة وزارة الموارد البشرية (قوى وأجير)
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold">عقد تشغيل رقم KWD-2025-001</h3>
                    <p className="text-sm text-white/60">عقد موسمي • نشط</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex justify-between"><span>العمل:</span><span>أحمد محمد</span></div>
                  <div className="flex justify-between"><span>الشركة:</span><span>شركة النور</span></div>
                  <div className="flex justify-between"><span>الراتب:</span><span>3,500 ريال</span></div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm text-emerald-400">مُوثّق عبر قوى</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">أنواع العقود</h2>
            <p className="section-subtitle mx-auto">
              اختر نوع العقد المناسب لاحتياجاتك
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contractTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setContractType(type.id)}
                className={`card text-center cursor-pointer transition-all ${
                  contractType === type.id ? 'ring-2 ring-[var(--color-primary)] shadow-lg' : ''
                }`}
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                  <type.icon className="w-7 h-7 text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{type.label}</h3>
                <p className="text-sm text-gray-500 mb-3">{type.desc}</p>
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-[var(--color-accent-dark)] text-sm font-semibold">
                  <DollarSign className="w-3.5 h-3.5" />
                  {type.price}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Create Contract Form */}
      <section className="py-16 bg-[var(--color-bg)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              إنشاء عقد جديد
            </h2>

            <div className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 inline ml-1" />
                    بيانات العامل
                  </label>
                  <select className="input-field">
                    <option value="">اختر العامل</option>
                    <option>أحمد محمد العلي</option>
                    <option>عبدالله حسن</option>
                    <option>يوسف إبراهيم</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <Building2 className="w-4 h-4 inline ml-1" />
                    بيانات الشركة
                  </label>
                  <select className="input-field">
                    <option value="">اختر الشركة</option>
                    <option>شركة النور للخدمات</option>
                    <option>شركة الفجر</option>
                    <option>شركة الهدى</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">نوع العقد</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {contractTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setContractType(type.id)}
                      className={`p-3 rounded-xl text-center text-sm font-medium border-2 transition-all ${
                        contractType === type.id
                          ? 'border-[var(--color-primary)] bg-emerald-50 text-[var(--color-primary)]'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {type.label}
                    </button>
                  ))}
                </div>
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

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">الراتب (ريال)</label>
                <input type="number" placeholder="أدخل مبلغ الراتب" className="input-field" />
              </div>

              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-sm text-blue-800">
                  سيتم توثيق هذا العقد تلقائياً عبر منصة قوى (وزارة الموارد البشرية) بعد الموافقة.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-100">
              <button className="btn-primary px-8 py-3 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                إنشاء وتوثيق العقد
              </button>
              <button className="btn-outline px-6 py-3 flex items-center gap-2">
                <Printer className="w-4 h-4" />
                معاينة العقد
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Contracts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">أحدث العقود</h2>

          <div className="card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">رقم العقد</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">العمل</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">النوع</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">الشركة</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">الفترة</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">الراتب</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">الحالة</th>
                  <th className="text-right py-4 px-4 text-sm font-semibold text-gray-500">إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {recentContracts.map((contract) => (
                  <tr key={contract.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-4 font-mono text-sm font-semibold text-[var(--color-primary)]">{contract.id}</td>
                    <td className="py-4 px-4 text-sm text-gray-700 font-medium">{contract.worker}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{contract.type}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{contract.company}</td>
                    <td className="py-4 px-4 text-sm text-gray-600">{contract.date}</td>
                    <td className="py-4 px-4 text-sm font-semibold text-gray-900">{contract.amount}</td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        contract.status === 'نشط' ? 'bg-emerald-100 text-emerald-700' :
                        contract.status === 'مكتمل' ? 'bg-blue-100 text-blue-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>
                        {contract.status}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-lg bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 rounded-lg bg-gray-100 hover:bg-emerald-50 text-gray-600 hover:text-emerald-600 transition-colors">
                          <Printer className="w-4 h-4" />
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

      {/* Info */}
      <section className="py-12 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex items-start gap-4 p-6 bg-amber-50 rounded-2xl border border-amber-200">
            <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-amber-800 mb-2">ملاحظة مهمة</h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                جميع العقود المصدرة عبر منصة كوادر تُوثق تلقائياً عبر منصة قوى (وزارة الموارد البشرية والتنمية الاجتماعية) ومرتبطة بنظام أجير للتصاريح الموسمية. لا يمكن تشغيل أي عامل بدون عقد موثق.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
