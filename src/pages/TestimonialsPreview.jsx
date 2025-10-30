export default function TestinomialsPreview() {
    return(
        <section id="testimonials" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4">
            {/* 标题 */}
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center">
            用户与合作伙伴评价
            </h2>
            <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
            来自用户与行业专家的真实反馈，见证神瞳科技在智能护眼领域的创新与价值。
            </p>

            {/* 评价卡片 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {[
                {
                name: "李医生",
                role: "知名眼科专家",
                quote:
                    "神瞳科技的贝茨训练方案结合现代科技，为眼科临床带来更多辅助治疗选择。",
                },
                {
                name: "王女士",
                role: "长期用户",
                quote:
                    "佩戴智能护眼眼镜三个月后，眼疲劳明显缓解，日常工作舒适度显著提升。",
                },
                {
                name: "TechFuture媒体",
                role: "行业媒体",
                quote:
                    "作为未来医疗科技 Top 50 企业，神瞳科技展示了视觉健康领域的巨大潜力。",
                },
            ].map((t, i) => (
                <div
                key={i}
                className="rounded-xl bg-white p-6 shadow hover:shadow-lg transition"
                >
                <p className="text-gray-700 leading-relaxed">“{t.quote}”</p>
                <div className="mt-4">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </section>

    )
}