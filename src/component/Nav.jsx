export default function Nav() {
    return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-[1200px] px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-extrabold tracking-tight">神瞳科技</a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#products" className="hover:text-blue-600">产品中心</a>
          <a href="#story" className="hover:text-blue-600">创新故事</a>
          <a href="#franchise" className="hover:text-blue-600">招商加盟</a>
          <a href="#news" className="hover:text-blue-600">新闻资讯</a>
          <a href="#contact" className="hover:text-blue-600">联系我们</a>
        </nav>
      </div>
    </header>
  );
}