import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Search, ArrowLeft, Star, MapPin, Clock,
  Filter, Briefcase, Building2, Phone, ChevronDown
} from 'lucide-react';

const categories = ['الكل', 'عمال النظافة', 'عمال التحميل', 'عمال الضيافة', 'المرشدون', 'الحراسات الأمنية', 'عمال المطابخ', 'عمال المجازر'];

const mockWorkers = [
  { name: 'أحمد محمد العلي', profession: 'عامل نظافة', location: 'مكة المكرمة', experience: '5 سنوات', rating: 4.8, salary: '3,500 ريال', availability: 'متاح الآن', avatar: 'أ', tags: ['المشاعر', 'فنادق'] },
  { name: 'عبدالله حسن', profession: 'مرشد', location: 'جدة', experience: '8 سنوات', rating: 4.9, salary: '4,000 ريال', availability: 'متاح الآن', avatar: 'ع', tags: ['مطارات', 'توجيه'] },
  { name: 'يوسف إبراهيم', profession: 'عامل ضيافة', location: 'مكة المكرمة', experience: '3 سنوات', rating: 4.7, salary: '3,000 ريال', availability: 'متاح بعد أسبوع', avatar: 'ي', tags: ['ضيافة', 'فنادق'] },
  { name: 'خالد سعيد', profession: 'حراسة أمنية', location: 'المدينة المنورة', experience: '10 سنوات', rating: 4.6, salary: '4,500 ريال', availability: 'متاح الآن', avatar: 'خ', tags: ['أمن', 'حراسة'] },
  { name: 'سعيد أحمد', profession: 'عامل تحميل', location: 'الرياض', experience: '4 سنوات', rating: 4.5, salary: '3,200 ريال', availability: 'متاح الآن', avatar: 'س', tags: ['نقل', 'تحميل'] },
  { name: 'محمد علي', profession: 'عامل مطبخ', location: 'مكة المكرمة', experience: '6 سنوات', rating: 4.8, salary: '3,800 ريال', availability: 'متاح الآن', avatar: 'م', tags: ['مطبخ', 'طبخ'] },
  { name: 'فهد عبدالله', profession: 'عامل مذبحة حديثة', location: 'الدمام', experience: '7 سنوات', rating: 4.7, salary: '4,200 ريال', availability: 'متاح بعد أسبوعين', avatar: 'ف', tags: ['مجازر', 'لحوم'] },
  { name: 'عمر خالد', profession: 'عامل نظافة', location: 'جدة', experience: '2 سنوات', rating: 4.4, salary: '2,800 ريال', availability: 'متاح الآن', avatar: 'ع', tags: ['نظافة', 'صيانة'] },
];

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorkers = mockWorkers.filter((worker) => {
    const matchCategory = selectedCategory === 'الكل' || worker.profession.includes(selectedCategory);
    const matchSearch = worker.name.includes(searchQuery) || worker.profession.includes(searchQuery) || worker.location.includes(searchQuery);
    return matchCategory && matchSearch;
  });

  return (
    <div>
      {/* Header */}
      <section className="pt-8 pb-16 md:pt-16 md:pb-20 bg-gradient-to-br from-[var(--color-primary-dark)] to-[var(--color-primary)] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" />
            العودة للرئيسية
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            سوق العمل المباشر
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mb-8">
            ابحث عن عمال مؤهلين ومعتمدين وقم بالتعاقد معهم مباشرة عبر المنصة
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث عن عامل بالاسم أو المهنة أو الموقع..."
                className="w-full pr-12 pl-4 py-4 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/50 focus:bg-white/20 focus:outline-none focus:border-white/40 transition-all"
              />
            </div>
            <button className="btn-accent px-6 py-4 shrink-0">
              <Search className="w-5 h-5" />
              بحث
            </button>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex items-center gap-2 text-sm text-gray-500 shrink-0">
              <Filter className="w-4 h-4" />
              <span className="hidden sm:inline">تصفية حسب:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[var(--color-primary)] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-[var(--color-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">
              نتائج البحث
              <span className="text-gray-500 font-normal mr-2">({filteredWorkers.length} عامل)</span>
            </h2>
            <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
              <ChevronDown className="w-4 h-4" />
              ترتيب حسب
            </button>
          </div>

          {filteredWorkers.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-5">
              {filteredWorkers.map((worker, i) => (
                <div key={i} className="card group hover:border-[var(--color-primary)] transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] flex items-center justify-center text-white text-xl font-bold shrink-0">
                      {worker.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">{worker.name}</h3>
                          <p className="text-sm text-gray-500">{worker.profession}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          worker.availability === 'متاح الآن' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {worker.availability}
                        </span>
                      </div>

                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {worker.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {worker.experience}
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                          {worker.rating}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-3">
                        {worker.tags.map((tag, j) => (
                          <span key={j} className="px-2.5 py-0.5 rounded-full bg-gray-100 text-xs text-gray-600">{tag}</span>
                        ))}
                      </div>

                      <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                        <div>
                          <span className="text-lg font-bold text-[var(--color-primary)]">{worker.salary}</span>
                          <span className="text-sm text-gray-500 mr-1">/شهرياً</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                            <Phone className="w-4 h-4" />
                          </button>
                          <Link to="/contracts" className="btn-primary px-4 py-2 text-sm">
                            <Briefcase className="w-4 h-4" />
                            عقد الآن
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Search className="w-16 h-16 mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">لا توجد نتائج</h3>
              <p className="text-gray-500">جرب تغيير معايير البحث أو التصفية</p>
            </div>
          )}
        </div>
      </section>

      {/* For Companies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-100 flex items-center justify-center mb-6">
            <Building2 className="w-8 h-8 text-[var(--color-primary)]" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">شركة تبحث عن كوادر؟</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            سجّل شركتك في المنصة واحصل على إمكانية الوصول لقاعدة بيانات شاملة من العمال المؤهلين
          </p>
          <Link to="/companies" className="btn-primary px-8 py-3 inline-flex items-center gap-2">
            <Building2 className="w-5 h-5" />
            تسجيل الشركة
          </Link>
        </div>
      </section>
    </div>
  );
}
