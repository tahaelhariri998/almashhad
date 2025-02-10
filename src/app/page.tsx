"use client"
import { useState } from 'react';
import React from 'react';
 
import { CheckCircle,Phone, Hammer, Settings, AlertCircle } from 'lucide-react';
import "./globals.css";
import Section from "./section";

const PulsatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const whatsappNumber = "+971507323644";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%2C%0A%D8%A7%D8%B1%D9%8A%D8%AF%20%D8%AD%D8%AC%D8%B2%20%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A9`;

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button
      
        className={`
          relative
          group
          bg-gradient-to-r from-orange-500 to-orange-600
          text-white
          text-xl
          font-bold
          px-8
          py-4
        
          transform
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-xl
          ${isHovered ? 'animate-pulse' : ''}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute  rounded-full bg-orange-400 animate-ping opacity-30 w-[70%] h-[70%]"></div>

        <span className="relative z-10 flex items-center justify-center">
          <Phone className="w-6 h-6" />
          <span className=" text-xs ">احصل على استشارة مجانية الآن!</span> 
        </span>
        <span className=" "> أنقر هنا </span>

      </button>
    </a>
  );
};


const FeatureBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="
    bg-white 
    px-4 
    py-2 
    rounded-full 
    shadow-sm 
    hover:shadow-md 
    transform 
    transition-all 
    duration-300 
    hover:-translate-y-1
  ">
    {children}
  </span>
);

interface TrustIndicatorProps {
  icon: React.ReactNode;
  text: string;
}

const TrustIndicator: React.FC<TrustIndicatorProps> = ({ icon, text }) => (
  <div className="
  
    bg-white 
    px-4 
    py-3 
    rounded-lg 
    shadow-sm 
    flex 
    items-center 
    justify-center
    hover:bg-cyan-50
    transform
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-md
  ">
    {icon}
    <span>{text}</span>
  </div>
);
console.log(TrustIndicator);
interface StudyResultProps {
  title: string;
  percentage: string;
  description: string;
}

const StudyResult: React.FC<StudyResultProps> = ({ title, percentage, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-start space-x-4 space-x-reverse">
      <div className="flex-1">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <div className="flex items-center space-x-2 space-x-reverse">
          <span className="text-2xl font-bold text-cyan-600">{percentage}</span>
          <span className="text-gray-600">{description}</span>
        </div>
      </div>
    </div>
  </div>
);
console.log(StudyResult)

interface FeatureGroupProps {
  title: string;
  points: string[];
  icon: React.ReactNode;
}

const FeatureGroup: React.FC<FeatureGroupProps> = ({ title, points, icon }) => (
  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center space-x-3 space-x-reverse mb-4">
      {icon && <div className="text-cyan-600">{icon}</div>}
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <ul className="space-y-3">
      {points.map((point, index) => (
        <li key={index} className="flex items-start space-x-3 space-x-reverse">
          <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-1" />
          <span className="text-gray-700">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);
console.log(FeatureGroup)

interface StatHighlightProps {
  number: number;
  text: string;
}

const StatHighlight: React.FC<StatHighlightProps> = ({ number, text }) => (
  <div className="bg-cyan-50 rounded-lg p-6 text-center">
    <div className="text-3xl font-bold text-cyan-600 mb-2">{number}</div>
    <div className="text-gray-700">{text}</div>
  </div>
);
console.log(StatHighlight)
interface WarningPointProps {
  text: string;
}

const WarningPoint: React.FC<WarningPointProps> = ({ text }) => (
  <div className="flex items-center space-x-3 space-x-reverse bg-red-50 p-4 rounded-lg">
    <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
    <span className="text-red-700">{text}</span>
  </div>
);
console.log(WarningPoint)
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, items }) => (
  <div className="bg-white border border-gray-100 p-6 rounded-lg hover:shadow-md transition-shadow">
    <div className="flex items-center space-x-3 space-x-reverse mb-4">
      <div className="text-cyan-600">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center space-x-2 space-x-reverse text-gray-700">
          <CheckCircle className="w-4 h-4 text-cyan-600 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

interface GuaranteeCardProps {
  title: string;
  description: string;
}

const GuaranteeCard: React.FC<GuaranteeCardProps> = ({ title, description }) => (
  <div className="bg-cyan-50 p-6 rounded-lg">
    <h3 className="text-xl font-bold text-cyan-800 mb-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

/*
  زر عائم يظهر فقط على شاشات المحمول.
  عند الضغط عليه يتم فتح تطبيق الهاتف لإجراء مكالمة على الرقم المحدد.
  يتم عرض الأيقونة المستخرجة من الصورة بالإضافة إلى الرقم.
*/
const FloatingContactButton = () => {
  return (
    <a
      href="tel:0507323644"
      className="fixed bottom-6 right-6 z-50 sm:hidden group"
      aria-label="اتصل بنا"
    >
      <div  className="relative">
        {/* مربع المعلومات مع تأثيرات حركية */}
        <div 
          className="bg-gradient-to-r from-cyan-600 to-cyan-500 
                     rounded-3xl px-4 pr-14 py-3 
                     shadow-lg transform transition-all duration-300 
                     group-hover:scale-105 group-hover:shadow-xl 
                     group-hover:from-cyan-500 group-hover:to-cyan-600
                     mt-6 border border-cyan-400/20"
        >
          <div className="text-center">
            <p className="text-cyan-50 font-bold text-sm mb-1">اتصل بنا الآن</p>
            <p dir="ltr" className="text-white font-bold text-base tracking-wide">
              050 962 0251
            </p>
          </div>
        </div>

        {/* دائرة الاتصال مع تأثيرات حركية */}
        <div className="absolute -top-4 -right-3">
          {/* حلقة نبض خارجية */}
          <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-30"></div>
          
          {/* الحلقة الخارجية الثابتة */}
          <div className="absolute inset-0 rounded-full bg-cyan-500 opacity-20"></div>
          
          {/* دائرة الاتصال الرئيسية */}
          <div className="relative flex items-center justify-center w-16 h-16 
                          rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 
                          shadow-lg transform transition-all duration-300 
                          group-hover:scale-110 group-hover:from-cyan-400 
                          group-hover:to-cyan-500 border border-cyan-400/20"
          >
            <div className="animate-pulse">
              <Phone className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

const LandingPage = () => {
  return (
    <div dir="rtl" className="min-h-screen bg-white font-sans text-black">
      {/* Pre-Header */}
      <div className="bg-gray-900 text-white py-2.5 sm:py-3">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm sm:text-base">
            نخدمك في كل إمارات الدولة | شركة مرخصة 🇦🇪
          </div>
        </div>
      </div>

      
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-gray-50 to-white py-2 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            
            <div className="space-y-6 mb-12">
            <h1 className="text-3xl sm:text-xl font-bold text-gray-900">
  <span className="block mx-2 text-s">متخصصون فقط  </span>
  <span className="text-cyan-600   animate-pulse text-[55%]">في تركيب البلاط والسيراميك </span>
  <span className="text-[55%] sm:text-xl transform transition-all duration-500 hover:scale-105">بجميع إمارات الدولة</span>
</h1>





              <div className="flex flex-col items-center gap-4 text-lg text-gray-700">
  <FeatureBadge>⚡️ ننجز مشروعك في وقته</FeatureBadge>
  <FeatureBadge>💎 جودة مضمونة</FeatureBadge>
  <FeatureBadge>🛡️ ضمان ذهبي 100%</FeatureBadge>
</div>

            </div>

            <div className="mb-4">
              <PulsatingButton />
            </div>
            <div className="mt-8 transition-transform duration-300">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 sm:p-6 rounded-lg border-2 border-yellow-200">
            <p className="text-base sm:text-lg text-yellow-800 leading-relaxed">
            غيرنا يشتغلون كل شيء.. واحنا مختصين بلاط وسيراميك وبس!               <br />
              <strong className="block mt-4 text-sm sm:text-lg text-orange-700">
              نرفض أي شغل ثاني لأننا نؤمن بالتخصص 💯✨
              </strong>
            </p>
          </div>
        </div>


          </div>
        </div>
      </header>

      <Section />

      {/* Services Section */}
      <section className="py-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 text-black">خدماتنا المتخصصة 🛠️</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-black">
            <ServiceCard
              icon={<Hammer className="w-6 h-6" />}
              title="تركيب جميع أنواع البلاط"
              items={["سيراميك", "بورسلين", "رخام", "باركيه"]}
            />
            <ServiceCard
              icon={<Settings className="w-6 h-6" />}
              title="خدمات متكاملة"
              items={[
                "معاينة مجانية",
                "استشارات فنية",
                "تقدير تكلفة مفصل",
                "خدمة تنظيف مجانية"
              ]}
            />
          </div>

          {/* Cleaning Service Feature */}
          <div className="mt-12 bg-blue-50 p-6 rounded-lg text-black">
            <h3 className="text-xl font-bold mb-4">وعندنا ما يميزنا عن الجميع! 🌟</h3>
            <p className="text-lg">
              بعد الانتهاء من تركيب البلاط، نرسل لك فريق متخصص من شركة
              <span className="font-bold"> المشهد الأنيق للخدمات </span>
              - شركة التنظيف الأولى في الإمارات لتنظيف الموقع بشكل احترافي...
              وهذه الخدمة مجاناً! 🎯
            </p>
            
            <div className="mt-4 text-center text-gray-700">
              <p>لماذا نقدم كل هذا؟</p>
              <p className="font-medium">
                لأن هدفنا ليس مجرد التركيب... هدفنا تسليمك مشروع نظيف 100% ✨
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-12 bg-gray-50 text-black pb-36 ">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">ضماناتنا لك 💯</h2>
          <div className="space-y-6">
            <GuaranteeCard 
              title="خصم 20% عند التأخير"
              description="إذا تأخرنا يوم واحد: خصم 20% على قيمة المشروع"
            />
            <GuaranteeCard
              title="ضمان سنة كاملة"
              description="ضمان شامل على جودة التركيب"
            />
            <GuaranteeCard
              title="معاينة وتقدير مجاني"
              description="معاينة مجانية وتقدير سعر مفصل"
            />
          </div>
          
          <div className="mt-12 text-center">
            <PulsatingButton />
          </div>
        </div>
      </section>

      {/* زر الاتصال العائم يظهر فقط على الأجهزة المحمولة */}
      <FloatingContactButton />
    </div>
  );
};

export default LandingPage;
