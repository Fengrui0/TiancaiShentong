export default function Product() {
    return(
        <main className="flex-1">
        <section id="products" className="py-20">
          <div className="mx-auto max-w-[1200px] px-4">
            {/* 标题区 */}
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

            {/* 卡片网格 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {[
                { title: '蓝光防护系列', desc: '日常与屏幕场景，舒适护眼不偏色' },
                { title: '智能训练镜片', desc: '动态刺激与训练节律，数据驱动调节' },
                { title: '户外进阶方案', desc: '变色与偏振优化，清晰度与防护兼得' },
              ].map((item, i) => (
                <article
                  key={i}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 hover:bg-white transition shadow-sm hover:shadow-lg"
                >
                  {/* 图片占位：后续替换为 next/image 或 <img src=... /> */}
                  <div className="aspect-[16/9] bg-gray-100 grid place-items-center text-gray-400">
                    产品图片 {i + 1}
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{item.desc}</p>

                    <div className="mt-4">
                      <a
                        href="/products"
                        className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-800"
                      >
                        了解更多
                        <span className="ml-1 transition group-hover:translate-x-0.5">→</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

      </main>
    )
}