import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('基础版');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* 导航栏 */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold">CAMERA</div>
          
          {/* 桌面导航 */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-text hover:text-primary transition-colors">产品</a>
            <a href="#" className="text-text hover:text-primary transition-colors">购买</a>
            <a href="#" className="text-text hover:text-primary transition-colors">关于</a>
          </nav>
          
          {/* 移动端菜单按钮 */}
          <button 
            className="md:hidden" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
        
        {/* 移动端菜单 */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#" className="text-text hover:text-primary transition-colors py-2">产品</a>
              <a href="#" className="text-text hover:text-primary transition-colors py-2">购买</a>
              <a href="#" className="text-text hover:text-primary transition-colors py-2">关于</a>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero 首屏 */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 mb-12 md:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">极简相机</h1>
              <p className="text-lg md:text-xl text-text/80 mb-8">轻量全画幅，口袋里的创作利器</p>
              <div className="flex space-x-4">
                <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors">立即预约</button>
                <button className="px-8 py-3 border border-border rounded-full hover:border-primary hover:text-primary transition-colors">查看详情</button>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="relative">
                <img 
                  src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20white%20mirrorless%20camera%20on%20white%20background%20with%20soft%20shadow%2C%20high%20quality%20render%2C%20clean%20light%20and%20shadow&image_size=square_hd" 
                  alt="极简相机" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* 核心卖点区 */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-4">核心优势</h2>
              <p className="text-text/80">为创作者打造的极致体验</p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { icon: '📷', title: '全画幅传感器', desc: '4500万像素，出色画质' },
                { icon: '🎥', title: '4K视频', desc: '60fps，专业级视频录制' },
                { icon: '⚡', title: '快速对焦', desc: '0.05秒极速对焦' },
                { icon: '🔋', title: '长续航', desc: '400张拍摄能力' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-8 rounded-lg border border-border hover:shadow-sm transition-shadow"
                  variants={fadeInUp}
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-text/70">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 产品细节区 */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col lg:flex-row items-center gap-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {/* 产品轮播 */}
              <motion.div 
                className="lg:w-1/2"
                variants={fadeInUp}
              >
                <Swiper
                  modules={[Navigation, Mousewheel, Keyboard]}
                  spaceBetween={0}
                  slidesPerView={1}
                  navigation
                  mousewheel
                  keyboard
                  className="rounded-lg overflow-hidden"
                >
                  <SwiperSlide>
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20white%20mirrorless%20camera%20front%20view%20on%20white%20background%2C%20high%20quality%20render%2C%20clean%20light&image_size=landscape_16_9" 
                      alt="相机正面" 
                      className="w-full h-auto hover:scale-105 transition-transform duration-500"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20white%20mirrorless%20camera%20back%20view%20on%20white%20background%2C%20high%20quality%20render%2C%20clean%20light&image_size=landscape_16_9" 
                      alt="相机背面" 
                      className="w-full h-auto hover:scale-105 transition-transform duration-500"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img 
                      src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20white%20mirrorless%20camera%20top%20view%20on%20white%20background%2C%20high%20quality%20render%2C%20clean%20light&image_size=landscape_16_9" 
                      alt="相机顶部" 
                      className="w-full h-auto hover:scale-105 transition-transform duration-500"
                    />
                  </SwiperSlide>
                </Swiper>
              </motion.div>
              
              {/* 参数列表 */}
              <motion.div 
                className="lg:w-1/2"
                variants={fadeInUp}
              >
                <h2 className="text-3xl font-bold mb-8">产品规格</h2>
                <div className="space-y-6">
                  {[
                    { icon: '📷', label: '传感器', value: '全画幅 4500万像素' },
                    { icon: '🎥', label: '视频', value: '4K 60fps' },
                    { icon: '⚡', label: '对焦', value: '256点相位检测' },
                    { icon: '🔋', label: '续航', value: '400张' },
                    { icon: '⚖️', label: '重量', value: '420g' },
                    { icon: '💾', label: '存储', value: '双SD卡槽' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b border-border">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{item.icon}</span>
                        <span className="text-text/80">{item.label}</span>
                      </div>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* 场景化展示区 */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-4">使用场景</h2>
              <p className="text-text/80">随时随地，捕捉美好</p>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {[
                { src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20white%20camera%20on%20desk%20with%20notebook%2C%20clean%20background%2C%20soft%20light%2C%20high%20quality&image_size=square', alt: '桌面摆放' },
                { src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=hand%20holding%20minimalist%20white%20camera%20outdoors%2C%20clean%20background%2C%20soft%20light%2C%20high%20quality&image_size=square', alt: '户外手持' },
                { src: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=minimalist%20white%20camera%20night%20photography%2C%20city%20lights%2C%20clean%20composition%2C%20high%20quality&image_size=square', alt: '夜景拍摄' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="overflow-hidden rounded-lg"
                  variants={fadeInUp}
                >
                  <img 
                    src={item.src} 
                    alt={item.alt} 
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 用户评价/口碑区 */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-4">用户评价</h2>
              <p className="text-text/80">来自创作者的真实反馈</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {['质感高级', '轻便好带', '出片干净', '操作简单', '续航持久', '对焦迅速', '画质出色', '设计简约'].map((tag, index) => (
                <motion.div 
                  key={index}
                  className="bg-surface px-6 py-3 rounded-full border border-border"
                  variants={fadeInUp}
                >
                  {tag}
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-12 flex justify-center space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center">
                  <span className="text-sm font-medium">{i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 购买与预约区 */}
        <section className="py-20 bg-surface">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-lg border border-border"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">立即购买</h2>
              
              {/* 版本选择 */}
              <div className="flex mb-8 border border-border rounded-lg overflow-hidden">
                <button 
                  className={`flex-1 py-3 text-center ${activeTab === '基础版' ? 'bg-primary text-white' : 'bg-white text-text'}`}
                  onClick={() => setActiveTab('基础版')}
                >
                  基础版
                </button>
                <button 
                  className={`flex-1 py-3 text-center ${activeTab === '进阶版' ? 'bg-primary text-white' : 'bg-white text-text'}`}
                  onClick={() => setActiveTab('进阶版')}
                >
                  进阶版
                </button>
              </div>
              
              {/* 价格 */}
              <div className="text-center mb-8">
                <span className="text-4xl font-bold">{activeTab === '基础版' ? '¥6,999' : '¥8,999'}</span>
                <p className="text-text/70 mt-2">{activeTab === '基础版' ? '含标准镜头' : '含标准镜头 + 长焦镜头'}</p>
              </div>
              
              {/* 购买按钮 */}
              <div className="space-y-4">
                <button className="w-full py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  立即购买
                </button>
                <button className="w-full py-4 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors">
                  预约体验
                </button>
              </div>
              
              {/* FAQ */}
              <div className="mt-12">
                <h3 className="text-lg font-semibold mb-6">常见问题</h3>
                <div className="space-y-4">
                  {[
                    { q: '保修政策？', a: '整机保修1年，镜头保修2年' },
                    { q: '发货时间？', a: '下单后3-5个工作日发货' },
                    { q: '支持退换吗？', a: '7天无理由退换，15天质量问题退换' }
                  ].map((item, index) => (
                    <div key={index} className="border-b border-border pb-4">
                      <p className="font-medium mb-2">{item.q}</p>
                      <p className="text-text/70">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-xl font-semibold mb-4 md:mb-0">CAMERA</div>
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="#" className="text-text/70 hover:text-text transition-colors">隐私政策</a>
              <a href="#" className="text-text/70 hover:text-text transition-colors">服务条款</a>
            </div>
            <div className="text-text/50 text-sm">© 2024 CAMERA. 保留所有权利。</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;