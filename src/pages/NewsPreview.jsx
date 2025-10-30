export default function NewsPreview() {
    return(
        <section id="news" className="py-20">
        <div className="mx-auto max-w-[1200px] px-4">
            {/* 标题 */}
            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center">
            新闻资讯
            </h2>
            <p className="mt-4 text-gray-700 text-center max-w-2xl mx-auto">
            聚焦神瞳科技最新动态，了解我们的媒体报道、行业洞察与合作成果。
            </p>

            {/* 新闻卡片 */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
                {
                title: '神瞳科技亮相国际光学博览会',
                date: '2025-09-10',
                desc: '携最新智能护眼方案参展，获得业界高度关注。',
                },
                {
                title: '与知名眼科机构达成战略合作',
                date: '2025-08-22',
                desc: '共同推进贝茨训练法在临床场景的应用与推广。',
                },
                {
                title: '入选「未来医疗科技 Top 50」榜单',
                date: '2025-07-30',
                desc: '凭借持续创新与市场潜力，荣获权威媒体认可。',
                },
            ].map((item, i) => (
                <article
                key={i}
                className="rounded-xl border bg-white shadow hover:shadow-lg transition overflow-hidden"
                >
                {/* 占位图 */}
                <div className="aspect-[16/9] bg-gray-100 grid place-items-center text-gray-400">
                    新闻图片 {i + 1}
                </div>

                <div className="p-5">
                    <time className="block text-xs text-gray-500">{item.date}</time>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
                    <a
                    href="/news"
                    className="mt-3 inline-block text-blue-700 text-sm font-medium hover:text-blue-800"
                    >
                    查看详情 →
                    </a>
                </div>
                </article>
            ))}
            </div>
        </div>
        </section>

    )
}