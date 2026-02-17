
import React from 'react';
import { Shield, Award, Users, Star, MapPin, Phone, Instagram, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4 text-xs md:text-sm flex justify-between items-center">
        <span>대한태권도협회 공식 가맹도장</span>
        <div className="flex gap-4">
          <span className="flex items-center gap-1"><Phone size={12} /> 031-123-4567</span>
          <span className="flex items-center gap-1"><MapPin size={12} /> 용인시 기흥구</span>
        </div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transform rotate-3 shadow-lg">
                <Shield className="text-white" size={20} />
              </div>
              <div>
                <span className="block text-xl font-black tracking-tight text-blue-900 leading-none">용인대</span>
                <span className="block text-sm font-bold text-red-600 tracking-widest leading-none">TAEKWONDO</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-bold text-gray-600">
              <a href="#about" className="hover:text-blue-600 transition-colors">도장소개</a>
              <a href="#program" className="hover:text-blue-600 transition-colors">교육프로그램</a>
              <a href="#class" className="hover:text-blue-600 transition-colors">수련시간표</a>
              <a href="#gallery" className="hover:text-blue-600 transition-colors">수련모습</a>
            </div>
            <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-md font-bold text-sm hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">
              입관 상담문의
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[90vh] flex items-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/70 to-transparent z-10 w-full md:w-3/4"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center animate-ken-burns"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-white">
          <div className="max-w-4xl animate-fade-in-up pt-10 md:pt-0">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white text-sm md:text-base font-bold px-4 py-1.5 mb-8 rounded-sm uppercase tracking-wider shadow-lg">
               <Star size={16} fill="currentColor" /> Leadership & Discipline
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight">
              몸과 마음이<br/>
              <span className="text-blue-300">단단해지는 시간</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed">
              태권도는 단순한 운동이 아닙니다.<br className="hidden md:block" />
              예의로 시작해 예의로 끝나는 <span className="font-bold text-white border-b-2 border-red-500">인성 교육의 장</span>입니다.<br/>
              아이들의 자신감과 올바른 가치관을 심어주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-bold text-xl transition-all shadow-xl shadow-blue-900/50 flex items-center justify-center gap-3 group transform hover:-translate-y-1">
                무료 체험수업 신청 <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform"/>
              </button>
              <button className="px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-md font-bold text-xl transition-all backdrop-blur-sm">
                교육과정 자세히보기
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent pointer-events-none hidden md:block"></div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-blue-600 font-bold tracking-widest text-sm md:text-base uppercase">CORE VALUES</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">우리가 지키는 3가지 약속</h2>
            <div className="w-16 h-1.5 bg-blue-600 mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "인성 (Character)", desc: "바른 마음가짐과 예절을 가장 먼저 가르칩니다.", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
              { title: "체력 (Fitness)", desc: "기초 체력 향상과 성장 발달을 돕습니다.", icon: Award, color: "text-red-600", bg: "bg-red-50" },
              { title: "자신감 (Confidence)", desc: "스스로 해내는 힘과 도전 정신을 기릅니다.", icon: Star, color: "text-yellow-500", bg: "bg-yellow-50" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={32} className={item.color} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full z-0"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-100 rounded-full z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" 
                alt="Taekwondo Class" 
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover h-[500px]"
              />
              <div className="absolute bottom-10 -right-8 bg-white p-6 rounded-lg shadow-xl z-20 hidden md:block border-l-4 border-blue-600">
                <p className="font-bold text-lg mb-1">수련생 만족도</p>
                <div className="flex text-yellow-400 mb-1">
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                  <Star fill="currentColor" size={20} />
                </div>
                <p className="text-gray-500 text-sm">학부모님들이 믿고 맡기는 도장</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 leading-snug">
                연령별 맞춤형<br/>
                <span className="text-blue-600">단계별 교육 프로그램</span>
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                아이들의 성장 속도와 눈높이에 맞춘 체계적인 프로그램을 운영합니다.
                놀이체육부터 전문 품새, 겨루기 선수반까지 다양한 클래스가 준비되어 있습니다.
              </p>
              
              <div className="space-y-4">
                {[
                  { title: "유치부 (5-7세)", desc: "놀이형 태권도, 기초 체력, 질서와 규칙 배우기" },
                  { title: "초등부 (8-13세)", desc: "품새/겨루기 기술 습득, 자신감 향상, 학교 체육" },
                  { title: "중고등/입시부", desc: "체대 입시, 단증 취득, 실전 호신술, 전문 체력 관리" },
                  { title: "성인부", desc: "다이어트, 스트레스 해소, 유연성 증진" },
                ].map((prog, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                    <div className="mt-1">
                      <CheckCircle className="text-blue-600" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{prog.title}</h4>
                      <p className="text-sm text-gray-600">{prog.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="mt-10 bg-gray-900 text-white px-8 py-3 rounded-md font-bold hover:bg-gray-800 transition-colors">
                시간표 자세히 보기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities/Gallery Stripe */}
      <section className="py-12 bg-blue-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
             <div className="w-full md:w-auto">
               <div className="text-4xl font-black mb-2">100평</div>
               <div className="text-blue-200 text-sm">넓고 쾌적한 수련 공간</div>
             </div>
             <div className="w-full md:w-auto">
               <div className="text-4xl font-black mb-2">공기청정</div>
               <div className="text-blue-200 text-sm">안전하고 깨끗한 환경</div>
             </div>
             <div className="w-full md:w-auto">
               <div className="text-4xl font-black mb-2">차량운행</div>
               <div className="text-blue-200 text-sm">안심 귀가 서비스</div>
             </div>
             <div className="w-full md:w-auto">
               <div className="text-4xl font-black mb-2">CCTV</div>
               <div className="text-blue-200 text-sm">실시간 안전 모니터링</div>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
          <p className="text-gray-600 mb-8">
            망설이지 마세요. 건강한 변화는 작은 실천에서 시작됩니다.<br/>
            전화 상담 시 "홈페이지 보고 연락드려요"라고 말씀해주시면 도복을 선물로 드립니다.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 inline-block w-full max-w-md">
            <div className="flex items-center justify-center gap-3 mb-4 text-blue-600">
              <Phone size={32} />
              <span className="text-3xl font-black">031-123-4567</span>
            </div>
            <p className="text-sm text-gray-500">상담가능시간: 평일 11:00 ~ 21:00</p>
            <div className="mt-6 flex gap-2 justify-center">
                <a href="#" className="bg-[#FAE300] text-[#3b1e1e] px-4 py-2 rounded font-bold text-sm flex items-center gap-2">
                   카카오톡 상담
                </a>
                <a href="#" className="bg-green-600 text-white px-4 py-2 rounded font-bold text-sm flex items-center gap-2">
                   네이버 예약
                </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          <div>
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Shield size={20} className="text-blue-500"/> 용인대 태권도
            </h3>
            <p className="mb-4">
              대한태권도협회(KTA) 공인 도장으로서<br/>
              정통 태권도 교육을 지향합니다.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">CONTACT</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><MapPin size={14}/> 경기도 용인시 기흥구 태권로 123 2층</li>
              <li className="flex items-center gap-2"><Phone size={14}/> 031-123-4567</li>
              <li className="flex items-center gap-2"><Instagram size={14}/> @yongin_tkd_official</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">LICENSE</h4>
            <p>사업자등록번호: 123-45-67890</p>
            <p>대표자: 홍길동</p>
            <p className="mt-4 text-xs text-gray-600">&copy; 2024 Yongin University Taekwondo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
