export default function Footer() {
    return(
        <footer className="mt-20 border-t bg-gray-50">
        <div className="mx-auto max-w-[1200px] px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="font-extrabold">神瞳科技</div>
            <p className="text-sm text-gray-600 mt-2">
              客服：400-000-0000 · service@example.com
            </p>
            <p className="text-sm text-gray-600">地址：杭州市萧山区某某路 88 号</p>
          </div>
          <div>
            <div className="font-semibold mb-2">快速链接</div>
            <ul className="space-y-1 text-sm">
              <li><a href="#products" className="hover:text-blue-600">产品中心</a></li>
              <li><a href="#franchise" className="hover:text-blue-600">招商加盟</a></li>
              <li><a href="#news" className="hover:text-blue-600">新闻资讯</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">合规</div>
            <ul className="space-y-1 text-sm">
              <li className="text-gray-500">隐私与条款（占位）</li>
              <li className="text-gray-500">浙ICP备 备案号占位</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 pb-6">
          © {new Date().getFullYear()} 神瞳科技. All rights reserved.
        </div>
      </footer>
    )
}