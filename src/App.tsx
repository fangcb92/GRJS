import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules'
import { useInView } from 'react-intersection-observer'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen bg-primary">
      {/* 导航栏 */}
      <motion.header
        style={{ backgroundColor: navBackground }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="博士与你" className="h-10" />
            <span className="text-xl font-bold text-gradient">博士与你</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">首页</a>
            <a href="#products" className="nav-link">产品中心</a>
            <a href="#technology" className="nav-link">工厂介绍</a>
            <a href="#process" className="nav-link">主播合作</a>
            <a href="#about" className="nav-link">关于我们</a>
          </div>
        </nav>
      </motion.header>

      {/* Banner区域 */}
      <section id="home" className="relative h-screen flex items-center particles-bg">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              <span className="text-gradient">创新科技</span><br />
              <span className="text-gradient">品质 · 精准</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8"
            >
              专注高端护肤品研发，以科技创新引领美丽革命
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="btn-primary"
            >
              立即合作
            </motion.button>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="w-full max-w-2xl"
            >
              <SwiperSlide>
                <img src="/images/1.jpg" alt="产品展示" className="w-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/2.jpg" alt="产品展示" className="w-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/3.png" alt="产品展示" className="w-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/4.png" alt="产品展示" className="w-full" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/5.png" alt="产品展示" className="w-full" />

              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <svg
            className="w-6 h-6 text-secondary animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* 核心科技展示区 */}
      <section id="technology" className="py-20 bg-deep-gray">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center">工厂介绍</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { id: 1, title: '无尘车间', desc: '国际标准无尘生产环境' },
                { id: 2, title: '尖端设备', desc: '全自动化生产线确保品质' },
                { id: 3, title: '智能工艺', desc: '精准配方智能调配系统' },
                { id: 4, title: '品控保障', desc: '全程质量监控追溯' },
              ].map((tech) => (
                <motion.div
                  key={tech.id}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="feature-card"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-gradient">{tech.id}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                      <p className="text-gray-400">{tech.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <video
  autoPlay
  loop
  playsInline
  controls
  className="w-full h-full object-cover"
  type="video/mp4"
  crossOrigin="anonymous"
>
  <source src="/videos/shipin.mp4" type="video/mp4" />
</video>
              <div className="absolute inset-0 bg-gradient-black opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 产品卖点矩阵 */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center">产品卖点</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: '⚡', title: '黑绷带平替', desc: '玻色因成分与赫莲娜同款，1/10价格享受贵妇级抗老' },
              { icon: '🩹', title: '烂脸急救', desc: '30%玻色因+甘草酸二钾，医美后/刷酸翻车急救' },
              { icon: '🌙', title: '熬夜回春', desc: '越桔果抗氧化力是蓝莓5倍，熬夜后肌肤透亮' },
              { icon: '🛢️', title: '油皮吸尘器', desc: '淀粉辛烯基琥珀酸铝+硅石，8小时不泛油光' },
              { icon: '💄', title: '上妆神器', desc: '薄涂按摩3分钟再上粉底，贴合度像纹身贴' },
              { icon: '📋', title: '成分复刻', desc: '国家药监局备案成分表，黑绷带同源厂生产线' },
              { icon: '🛡️', title: '敏感肌安全', desc: '食品级防腐体系，孕妈/敏肌放心使用' },
              { icon: '💰', title: '价格拆解', desc: '1ml仅X元，还送价值298导入棒' },
              { icon: '🧪', title: '刷酸搭档', desc: 'B5+玻尿酸组合，建立耐受速度翻倍' },
              { icon: '👩‍⚕️', title: '面霜版热玛吉', desc: '每天涂抹式提拉，30天下颌线明显提升' },
              { icon: '🌞', title: '急救退红王', desc: '晒伤后冰镇厚敷，退红速度比芦荟胶快3倍' },
              { icon: '🔬', title: '成分区别', desc: '黑绷带S型和R型成分科学解析' }
            ].map((product) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="product-card"
              >
                <span className="text-3xl mb-2">{product.icon}</span>
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-400">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作流程 */}
      <section id="process" className="py-20 bg-deep-gray">
        <div className="container mx-auto px-6">
          <h2 className="section-title text-center">合作流程</h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mt-12">
            <div className="flex-1 space-y-12">
              {[
                { step: 1, title: '初步沟通', desc: '了解需求，确定合作意向' },
                { step: 2, title: '方案定制', desc: '个性化定制合作方案' },
                { step: 3, title: '长期合作', desc: '建立稳定的合作关系' },
              ].map((process, index) => (
                <div key={index} className="relative">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="process-step"
                  >
                    <span className="text-3xl font-bold text-gradient">{process.step}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                      <p className="text-gray-400">{process.desc}</p>
                    </div>
                  </motion.div>
                  {index < 2 && <div className="process-arrow" />}
                </div>
              ))}
            </div>
            <div className="md:w-1/3">
              <div className="bg-deep-gray p-8 rounded-lg border border-secondary/20">
                <h3 className="text-xl font-bold mb-4 text-gradient">联系我们</h3>
                <div className="relative w-48 h-48 mx-auto">
                  <img src="/images/weixin.jpg" alt="微信二维码" className="w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-gradient-gold opacity-10 rounded-lg animate-pulse"></div>
                </div>
                <p className="text-center mt-4 text-gray-400">扫码添加商务微信</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App