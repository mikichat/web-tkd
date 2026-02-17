
import React from 'react';
import { Shield, Award, MapPin, Phone, Check, ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans selection:bg-blue-800 selection:text-white">
      {/* Top Bar - Korean Flag Colors */}
      <div className="flex h-1.5 w-full">
        <div className="w-1/2 bg-[#0047A0]"></div>
        <div className="w-1/2 bg-[#E31B23]"></div>
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-lg shadow-md font-black text-2xl font-serif">
                K
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-gray-900 leading-none tracking-tight">K-TIGERS</span>
                <span className="text-xs font-bold text-blue-800 tracking-widest uppercase">Taekwondo Academy</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-12 font-bold text-gray-600 text-sm">
              <a href="#about" className="hover:text-blue-800 transition-colors">도장소개</a>
              <a href="#program" className="hover:text-blue-800 transition-colors">수련과정</a>
              <a href="#masters" className="hover:text-blue-800 transition-colors">관장님소개</a>
              <a href="#contact" className="hover:text-blue-800 transition-colors">상담문의</a>
            </div>
            <button className="hidden md:flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded font-bold hover:bg-blue-900 transition-colors shadow-lg shadow-blue-800/20">
              입관 상담하기 <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] bg-gray-900 flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="border-l-4 border-[#E31B23] pl-8 py-2 mb-8 animate-fade-in-up">
            <p className="text-white font-bold tracking-widest uppercase text-sm mb-2">Since 1998</p>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-none">
              바른 인성, <br/>
              <span className="text-blue-500">강한 정신</span>
            </h1>
          </div>
          <p className="text-gray-300 text-xl max-w-xl mb-12 font-light leading-relaxed">
            태권도는 단순한 운동이 아닌, 몸과 마음을 닦는 수련입니다. 
            대한민국 국기 태권도의 정통성을 이어받아 아이들의 미래를 함께 그립니다.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#E31B23] hover:bg-red-700 text-white px-10 py-4 rounded font-bold text-lg transition-all shadow-xl flex items-center gap-2">
              무료 체험수업 신청
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded font-bold text-lg transition-all backdrop-blur-md">
              교육 프로그램 보기
            </button>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: Shield, title: "예절 교육", desc: "인사를 통해 존중과 배려를 배웁니다.", color: "text-blue-800" },
              { icon: Award, title: "자신감 향상", desc: "작은 성취를 통해 스스로를 믿게 됩니다.", color: "text-[#E31B23]" },
              { icon: MapPin, title: "안전한 환경", desc: "쾌적하고 안전한 수련 공간을 제공합니다.", color: "text-black" },
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-50 p-10 border-t-4 border-transparent hover:border-blue-800 hover:bg-white hover:shadow-2xl transition-all duration-300 group cursor-default">
                <item.icon size={48} className={`${item.color} mb-6 group-hover:scale-110 transition-transform`} strokeWidth={1.5} />
                <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Info with Image Grid */}
      <section id="program" className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2 space-y-8">
              <span className="text-blue-800 font-bold tracking-widest uppercase">Our Program</span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                연령별 맞춤형 <br/>
                <span className="relative inline-block z-10">
                  단계별 수련 시스템
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-blue-200/50 -z-10"></span>
                </span>
              </h2>
              <p className="text-gray-600 text-lg">
                유치부 놀이체육부터 성인 정통 태권도까지.<br/>
                각 연령대와 신체 발달 상황에 맞는 최적화된 프로그램을 운영합니다.
              </p>
              
              <ul className="space-y-4 mt-8">
                {['유치부 (5-7세) : 성장판 자극 및 예절 교육', '초등부 : 학교 체육 및 기초 체력 증진', '중고등부 : 체대 입시 및 실전 호신술', '성인부 : 스트레스 해소 및 다이어트'].map((txt, i) => (
                  <li key={i} className="flex items-center gap-3 p-4 bg-white rounded shadow-sm border-l-4 border-blue-800">
                    <Check size={20} className="text-blue-800" />
                    <span className="font-bold text-gray-800">{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop" className="w-full h-64 object-cover rounded-lg shadow-lg translate-y-8" alt="TKD 1"/>
              <img src="https://images.unsplash.com/photo-1517466787929-bc90951d6dbd?q=80&w=2070&auto=format&fit=crop" className="w-full h-64 object-cover rounded-lg shadow-lg" alt="TKD 2"/>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-white font-serif font-black text-3xl mb-8">K-TIGERS TAEKWONDO</h2>
          <div className="flex justify-center gap-8 mb-8 text-sm">
            <span className="flex items-center gap-2"><Phone size={16}/> 02-1234-5678</span>
            <span className="flex items-center gap-2"><MapPin size={16}/> 서울시 강남구 태권로 123</span>
          </div>
          <p className="text-xs text-gray-600">
            Copyright © 2024 K-TIGERS. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
