// src/pages/ProductPreview.jsx
import fireEyeImg from "../assets/images/product/Fire-eye.png"
import sunLampImg from "../assets/images/product/sunlight.png";

export default function ProductPreview() {
  return (
    <main className="flex-1">
      <section id="products" className="py-20">
        <div className="mx-auto max-w-[1200px] px-4">
          {/* 标题 + 说明（保留原文） */}
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            产品中心 · 贝茨训练法
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
            重塑眼健康的未来，从科学训练开始。基于国际公认的
            <span className="font-semibold"> 贝茨训练法（Bates Method）</span>，
            我们将百年视觉康复理论与前沿科技深度结合，打造智能化训练体系。
            通过动态光学刺激、个性化训练方案与实时数据反馈，不仅关注视力改善，
            更注重用眼习惯的根源调整——一套
            <span className="font-semibold"> 高端、科学、可持续</span> 的视力健康方案。
          </p>

          {/* —— 双联展示区（带悬停放大） —— */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* 容器：统一包裹两张图 */}
            {[
              { img: fireEyeImg, alt: "火眼金睛套装" },
              { img: sunLampImg, alt: "太阳灯" },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden border border-gray-200 bg-gradient-to-b from-white to-gray-50 h-[520px]"
              >
                {/* 背景光晕层（保留可选） */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-40"
                  style={{
                    background:
                      "radial-gradient(1200px 300px at 50% 0%, rgba(0,0,0,0.05), transparent 60%)",
                  }}
                />
                {/* 图片层 */}
                <img
                  src={item.img}
                  alt={item.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
