import React, { useState } from 'react';
import { 
  Sun, 
  Settings, 
  ShieldCheck, 
  BatteryCharging, 
  Activity, 
  Zap, 
  ChevronRight, 
  Phone, 
  Mail, 
  MapPin,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* 導覽列 */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
              <Sun className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-800">
                予霆能源科技
              </span>
            </div>

            {/* 桌面版選單 */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-blue-600 font-medium transition">核心服務</button>
              <button onClick={() => scrollToSection('features')} className="text-slate-600 hover:text-blue-600 font-medium transition">我們的優勢</button>
              <button onClick={() => scrollToSection('contact')} className="text-slate-600 hover:text-blue-600 font-medium transition">聯絡我們</button>
            </nav>

            {/* 聯絡按鈕 (桌面版) */}
            <div className="hidden md:flex">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-medium transition shadow-lg shadow-blue-200"
              >
                免費案場評估
              </button>
            </div>

            {/* 漢堡選單 (手機版) */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 手機版選單展開 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-md">核心服務</button>
            <button onClick={() => scrollToSection('features')} className="block w-full text-left px-3 py-3 text-slate-600 font-medium hover:bg-slate-50 rounded-md">我們的優勢</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-3 text-blue-600 font-bold hover:bg-slate-50 rounded-md">免費案場評估</button>
          </div>
        )}
      </header>

      {/* Hero 橫幅區塊 */}
      <section id="home" className="pt-28 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden">
        {/* 背景裝飾 */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-500 blur-[120px]"></div>
          <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-cyan-300 blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 md:pr-12">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-blue-50 text-sm font-medium">全方位綠能系統整合專家</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              極致效能，穩健維運 <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
                點亮您的永續資產
              </span>
            </h1>
            <p className="text-lg md:text-xl text-cyan-50 mb-10 max-w-2xl leading-relaxed">
              從精準的太陽能系統規劃與建置、長效可靠的電站維運診斷，到前瞻的光儲能整合。我們提供一站式專業服務，為您的住家與企業打造最高效的能源韌性。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-blue-500 hover:bg-blue-400 text-slate-900 px-8 py-4 rounded-full font-bold text-lg transition shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center group"
              >
                了解我們的服務
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition flex items-center justify-center"
              >
                聯絡專業顧問
              </button>
            </div>
          </div>
          
          {/* Hero 圖片/視覺元素 */}
          <div className="md:w-2/5 mt-16 md:mt-0 hidden md:block relative">
             <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-tr from-blue-800/40 to-cyan-600/40 backdrop-blur-md border border-white/10 p-6 shadow-2xl flex flex-col justify-center items-center">
                <Sun className="h-32 w-32 text-blue-300 mb-8 opacity-90" strokeWidth={1} />
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-white/10 rounded-xl p-4 text-center border border-white/5">
                     <Settings className="h-8 w-8 text-blue-200 mx-auto mb-2" />
                     <p className="text-white text-sm font-medium">專業建置</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center border border-white/5">
                     <Activity className="h-8 w-8 text-blue-200 mx-auto mb-2" />
                     <p className="text-white text-sm font-medium">效能診斷</p>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 服務項目區塊 */}
      <section id="services" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Our Core Services</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">為您量身打造的綠能方案</h3>
            <p className="text-lg text-slate-600">
              無論您處於太陽能發展的哪一個階段，我們都能提供最精準的技術支援與規劃，讓您的投資發揮最大效益。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 服務 A: 規劃與建置 (主打) */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                主推服務 / 最佳好評
              </div>
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Settings className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">太陽能規劃與建置</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                從零到一的最佳化工程。我們提供精確的評估與嚴謹的工程管理，確保您的案場完美落地。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>可行性評估：</strong>屋頂/地面/棚架容量估算與遮蔭風險初判。</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>系統規劃配置：</strong>模組/逆變器/支架選型、傾角與線路配置。</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>工程發包協調：</strong>工班、材料、時程、品質控管與驗收流程。</span>
                </li>
              </ul>
            </div>

            {/* 服務 B: 維運與診斷 */}
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-14 h-14 bg-cyan-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-600 transition-colors duration-300">
                <Activity className="h-7 w-7 text-cyan-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">電站維運與效能診斷</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">
                保護您的長期資產。我們透過專業巡檢與數據診斷，找出發電瓶頸，維持最佳收益。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>電站維運管理：</strong>定期巡檢、模組清潔、報表產出與異常即時通報。</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>發電不如預期診斷：</strong>PR值過低、遮蔭影響、線路損耗與設備異常排查。</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700"><strong>台電側協調支援：</strong>電壓/併網問題處理，協助必要的書面函件與溝通。</span>
                </li>
              </ul>
            </div>

            {/* 服務 C: 能源韌性與儲能 (未來趨勢) */}
            <div className="bg-gradient-to-b from-slate-900 to-slate-800 rounded-2xl shadow-xl shadow-slate-300/50 border border-slate-700 p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg z-10 flex items-center">
                <Zap className="h-3 w-3 mr-1" /> 下世代主打趨勢
              </div>
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors duration-300">
                <BatteryCharging className="h-7 w-7 text-indigo-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">能源韌性與光儲整合</h4>
              <p className="text-slate-300 mb-6 leading-relaxed">
                對抗停電風險，優化能源使用效率。為住家與工廠打造不斷電的未來防護網。
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200"><strong>停電風險評估：</strong>針對住家、工廠或住工混合場域進行用電分析。</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200"><strong>專屬儲能方案：</strong>提供最適容量與規格的儲能系統建議。</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-indigo-400 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200"><strong>光儲整合規劃：</strong>提升自用比例、設定備援策略與負載優先順序。</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 為什麼選擇我們 */}
      <section id="features" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center mt-8">
                  <ShieldCheck className="h-10 w-10 text-blue-500 mb-3" />
                  <h5 className="font-bold text-slate-800 mb-2">專業可靠</h5>
                  <p className="text-sm text-slate-500">從硬體選型到施工品質，層層把關不妥協。</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <Activity className="h-10 w-10 text-cyan-500 mb-3" />
                  <h5 className="font-bold text-slate-800 mb-2">精準診斷</h5>
                  <p className="text-sm text-slate-500">擁有豐富案場除錯經驗，快速找出發電痛點。</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                  <BatteryCharging className="h-10 w-10 text-indigo-500 mb-3" />
                  <h5 className="font-bold text-slate-800 mb-2">前瞻視野</h5>
                  <p className="text-sm text-slate-500">整合最新儲能技術，讓您的資產具備未來競爭力。</p>
                </div>
                <div className="bg-blue-600 p-6 rounded-2xl shadow-lg shadow-blue-200 flex flex-col items-center justify-center text-center -mt-8">
                  <span className="text-4xl font-extrabold text-white mb-1">100+</span>
                  <p className="text-blue-100 font-medium">成功案例經驗</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">不只是蓋電站，更是您長期的能源合夥人</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                業界常見建置完成後變為「綠能孤兒」的狀況。我們不僅在**「規劃與建置」**階段展現極高成交率的專業實力，我們更重視後續的**「維運與診斷」**，確保您的設備能長期穩定獲利。
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                面對未來極端氣候與電網波動，我們已為您準備好**「能源韌性與儲能」**的升級方案。選擇我們，等於選擇了安心與未來。
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-center bg-white px-4 py-3 rounded-lg border border-slate-100 shadow-sm">
                  <span className="flex h-8 w-8 rounded-full bg-blue-100 text-blue-600 items-center justify-center font-bold mr-4">1</span>
                  <span className="text-slate-700 font-medium">免費初步諮詢與現場評估</span>
                </li>
                <li className="flex items-center bg-white px-4 py-3 rounded-lg border border-slate-100 shadow-sm">
                  <span className="flex h-8 w-8 rounded-full bg-blue-100 text-blue-600 items-center justify-center font-bold mr-4">2</span>
                  <span className="text-slate-700 font-medium">客製化系統規劃與投報率試算</span>
                </li>
                <li className="flex items-center bg-white px-4 py-3 rounded-lg border border-slate-100 shadow-sm">
                  <span className="flex h-8 w-8 rounded-full bg-blue-100 text-blue-600 items-center justify-center font-bold mr-4">3</span>
                  <span className="text-slate-700 font-medium">專業施工與台電掛表併網</span>
                </li>
                <li className="flex items-center bg-white px-4 py-3 rounded-lg border border-slate-100 shadow-sm">
                  <span className="flex h-8 w-8 rounded-full bg-blue-100 text-blue-600 items-center justify-center font-bold mr-4">4</span>
                  <span className="text-slate-700 font-medium">長期維運與未來儲能擴充</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 聯絡我們 */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        {/* 背景圖形 */}
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-slate-50 rounded-l-full -z-10 transform translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            {/* 聯絡資訊 */}
            <div className="lg:w-2/5 bg-blue-600 p-10 md:p-12 text-white flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">準備好啟動您的綠能計畫了嗎？</h3>
                <p className="text-blue-100 mb-10 text-lg">
                  無論是新案場評估、舊電站健檢，或是儲能系統規劃，我們的專業團隊隨時準備為您服務。
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-200 mr-4 mt-1" />
                    <div>
                      <p className="text-sm text-blue-200 mb-1">諮詢專線</p>
                      <p className="text-xl font-semibold">0937-334-408</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-200 mr-4 mt-1" />
                    <div>
                      <p className="text-sm text-blue-200 mb-1">電子郵件信箱</p>
                      <p className="text-lg font-semibold">ytenergytech@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-200 mr-4 mt-1" />
                    <div>
                      <p className="text-sm text-blue-200 mb-1">地址</p>
                      <p className="text-lg font-semibold">臺南市安平區怡平里慶平路191號2樓</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 聯絡表單 */}
            <div className="lg:w-3/5 p-10 md:p-12">
              <h4 className="text-2xl font-bold text-white mb-6">線上預約免費評估</h4>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">姓名 / 聯絡人</label>
                    <input type="text" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="王大明 先生" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">聯絡電話</label>
                    <input type="tel" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="0912-345-678" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">您感興趣的服務</label>
                  <select className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition appearance-none">
                    <option value="">請選擇服務項目...</option>
                    <option value="A">太陽能案場規劃與建置 (新設)</option>
                    <option value="B">電站維運與發電效能診斷 (既有)</option>
                    <option value="C">停電風險評估與儲能方案 (光儲)</option>
                    <option value="other">其他諮詢</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">案場狀況或需求簡述</label>
                  <textarea rows="4" className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition" placeholder="例如：我有 100 坪的廠房鐵皮屋頂，想評估建置太陽能..."></textarea>
                </div>

                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-400 text-slate-900 font-bold text-lg py-4 rounded-lg transition shadow-lg shadow-blue-500/20">
                  送出評估需求
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Sun className="h-6 w-6 text-blue-500 mr-2" />
              <span className="text-xl font-bold text-white">予霆能源科技</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition">隱私權政策</a>
              <a href="#" className="hover:text-blue-400 transition">服務條款</a>
              <a href="#" className="hover:text-blue-400 transition">常見問題</a>
            </div>
          </div>
          <div className="mt-8 text-center md:text-left text-sm border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between">
            <p>&copy; {new Date().getFullYear()} 予霆能源科技有限公司 YT Energy Tech. All rights reserved.</p>
            <p className="mt-2 md:mt-0">專業太陽能建置 • 智能維運診斷 • 光儲整合專家</p>
          </div>
        </div>
      </footer>
    </div>
  );
}