import React, { useState } from 'react';
import { AlertTriangle, Phone, ChevronDown, ChevronUp, Clock, Star } from 'lucide-react';

interface StudyResultProps {
  title: string;
  percentage: string;
  description: string;
}

const StudyResult: React.FC<StudyResultProps> = ({ title, percentage, description }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <div id={title}>
      <div 
        className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="p-4 sm:p-6 cursor-pointer">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4 rtl:space-x-reverse">
              <AlertTriangle className="text-red-500 w-5 h-5 sm:w-6 sm:h-6" />
              <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4 rtl:space-x-reverse mt-2 sm:mt-0">
              <span className="text-xl sm:text-2xl font-bold text-red-500">{percentage}</span>
              {expanded ? (
                <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              )}
            </div>
          </div>
          
          <div className={`mt-4 transition-all duration-300 ${expanded ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">{description}</p>
            <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <span className="text-xs sm:text-sm text-gray-600">تم تحديث البيانات قبل 3 أيام</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                <span className="text-xs sm:text-sm text-gray-600">تم جمع البيانات من أكثر من 1000 تقييم</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const PulsatingButton = () => {
    const [isHovered, setIsHovered] = useState(false);
    const whatsappNumber = "00971509620251";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
  
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
const StudyResultsSection = () => {
  return (
    <section className="py-8 sm:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 max-w-full sm:max-w-3xl">
        <div className="mb-8 sm:mb-12 text-center">
               {/* رسالة النتائج المقلقة تظهر دومًا في هذا المكان */}

          <h2 className="text-lg sm:text-2xl font-bold text-black mb-4">
          <div className="flex items-center">
              {/* النص على اليمين */}
  <div className="flex-1 text-right">
    <div className="bg-red-100 inline-block text-red-800 px-4 py- rounded-full text-xs sm:text-sm font-medium">
      ⚠️ نتائج مقلقة
    </div>
  </div>



  {/* الرمز في المنتصف */}
  <span className="inline-block animate-bounce mb-2 sm:mb-4">
    📊
  </span>
  {/* عمود فارغ لتوزيع المساحة */}
  <div className="flex-1"></div>

</div>

            <span className="block bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              قمنا بدراسة تقييمات العملاء على جوجل مابس لشركات الخدمات الفنية الاخرى في الامارات:
            </span>
            <span className="block mt-2 text-sm sm:text-lg font-medium text-gray-600">
              وهذا ما اكتشفناه
            </span>
          </h2>
       
        </div>

        <div className="space-y-6 text-black">
          <StudyResult 
            title="تأخير مستمر في التسليم"
            percentage="70%"
            description="من الشركات تؤخّر تسليم المشروع عن الموعد المتفق عليه"
          />
          <StudyResult 
            title="جودة تنفيذ غير دقيقة"
            percentage="65%"
            description="من التقييمات السلبية تتعلق بعيوب في التركيب أو استخدام مواد رديئة"
          />
          <StudyResult 
            title="ضعف التواصل مع العملاء"
            percentage="60%"
            description="من العملاء يشكون من عدم الاستجابة لاستفساراتهم"
          />
          <StudyResult 
            title="تكاليف مباغتة"
            percentage="55%"
            description="من المشتكين فوجئوا برسوم إضافية أو تغيّر مفاجئ في الأسعار"
          />
          <StudyResult 
            title="عدم الالتزام بالمعايير الفنية"
            percentage="50%"
            description="من الشكاوى تتحدث عن مشاكل في السلامة أو المواصفات"
          />
        </div>

        <div className="mt-8 transition-transform duration-300">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 sm:p-6 rounded-lg border-2 border-yellow-200">
            <p className="text-base sm:text-lg text-yellow-800 leading-relaxed">
              تخيل الخسائر المادية والوقت الذي ستضيعه إن قمت بالاعتماد على شركات تفتقر إلى التخصص والالتزام…
              <br />
              <strong className="block mt-4 text-sm sm:text-lg text-orange-700">
                هل ترغب بالمغامرة في مشروعك القادم؟ أم تفضّل اختيار فريقٍ متخصص يضمن تسليم مشروعك في الموعد ووفق أعلى معايير الجودة؟
              </strong>
            </p>
          </div>
        </div>

 
        <div className="mt-12 text-center">
          <PulsatingButton />
        </div>
      </div>
    </section>
  );
};

export default StudyResultsSection;
