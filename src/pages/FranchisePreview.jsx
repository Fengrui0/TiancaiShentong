import storeFront from "../assets/images/franchise/home1.png"
import indoor1 from "../assets/images/franchise/home2.png"
import indoor2 from "../assets/images/franchise/home3.png"
import indoor3 from "../assets/images/franchise/home4.png"
export default function FranchisePreview(){
    return(
        <section id="franchise" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 text-center">
            {/* 标题 */}
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
            招商加盟 · 携手共赢
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl mx-auto">
            借助神瞳科技在 <span className="font-semibold">智能护眼与视觉训练</span> 
            领域的创新优势，我们诚邀合作伙伴，共同开拓市场。通过成熟的产品体系、完善的支持政策与可持续的商业模式，
            为合作伙伴创造长期价值。
            </p>

            {/* 三个优势点 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 text-left">
            <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900">品牌优势</h3>
                <p className="mt-2 text-gray-600 text-sm">依托科技研发与创新故事，形成高端专业的品牌影响力。</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900">全方位支持</h3>
                <p className="mt-2 text-gray-600 text-sm">提供培训、营销、供应链与售后服务，降低合作风险。</p>
            </div>
            <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-gray-900">市场机遇</h3>
                <p className="mt-2 text-gray-600 text-sm">结合智能护眼市场增长趋势，实现规模化拓展与收益提升。</p>
            </div>
            </div>
            {/* —— 图片展示区 —— */}
            <div className="mt-12 space-y-4">
            {/* 第一行：大图 */}
            <div className="overflow-hidden rounded-2xl">
                <img
                src={storeFront} // TODO: 换成你的实际路径
                alt="品牌门店外景"
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-500 ease-out"
                />
            </div>

            {/* 第二行：三张等宽小图 */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                { src: indoor1, alt: "展示厅" },
                { src: indoor2, alt: "体验区" },
                { src: indoor3, alt: "荣誉墙" },
                ].map((img, i) => (
                <div
                    key={i}
                    className="overflow-hidden rounded-2xl bg-gray-100 group"
                >
                    <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[260px] object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                </div>
                ))}
            </div>
            </div>


            {/* CTA */}
            <div className="mt-10">
            <a
                href="#contact"
                className="inline-block px-8 py-3 text-white bg-blue-700 hover:bg-blue-800 rounded-lg shadow font-medium transition"
            >
                立即咨询加盟
            </a>
            </div>
        </div>
        </section>

    )
}