import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-[1200px] px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-xl font-extrabold tracking-tight text-blue-700">
          神瞳科技
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-semibold" : "hover:text-blue-600"
            }
          >
            产品中心
          </NavLink>
          <NavLink
            to="/story"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-semibold" : "hover:text-blue-600"
            }
          >
            创新故事
          </NavLink>
          <NavLink
            to="/franchise"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-semibold" : "hover:text-blue-600"
            }
          >
            招商加盟
          </NavLink>
          <NavLink
            to="/news"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-semibold" : "hover:text-blue-600"
            }
          >
            新闻资讯
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-700 font-semibold" : "hover:text-blue-600"
            }
          >
            联系我们
          </NavLink>
        </nav>
      </div>
    </header>
  );
}