export default function Product() {
    return(
        <main className="flex-1">
        <section id="products" className="py-20">
          <div className="mx-auto max-w-[1200px] px-4">
            <h2 className="text-3xl font-bold">产品中心</h2>
            <p className="text-gray-600 mt-2">材料、镀膜、场景化方案</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <div className="h-48 border rounded-xl bg-gray-50" />
              <div className="h-48 border rounded-xl bg-gray-50" />
              <div className="h-48 border rounded-xl bg-gray-50" />
            </div>
          </div>
        </section>
      </main>
    )
}