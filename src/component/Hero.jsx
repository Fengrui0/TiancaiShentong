export default function Hero() {
    return(
        <section className="relative">
        <div className="h-[720px] bg-gradient-to-b from-[#0B1B3A] to-[#0E5FFF] flex items-end">
          <div className="mx-auto max-w-[1200px] px-4 pb-16">
            <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
              科技守护清晰视界
            </h1>
            <p className="text-blue-100 mt-3 max-w-2xl">
              融合光学与科技，为未来用眼健康保驾护航
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#products"
                className="px-4 py-2 rounded-lg bg-white text-blue-700 font-medium"
              >
                浏览产品
              </a>
              <a
                href="#franchise"
                className="px-4 py-2 rounded-lg text-white ring-1 ring-white/40 bg-blue-900/30"
              >
                了解更多
              </a>
            </div>
          </div>
        </div>
      </section>
    )
}