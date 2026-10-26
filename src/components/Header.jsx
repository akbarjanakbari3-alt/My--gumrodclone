import { Link } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiShoppingBag,
  FiUser,
} from "react-icons/fi";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo">
        Gumroad Clone
      </Link>

      <nav className="nav">
        <Link to="/">خانه</Link>
        <Link to="/shop">محصولات</Link>
        <Link to="/dashboard">پنل کاربری</Link>
        <Link to="/orders">سفارش‌ها</Link>
        <Link to="/downloads">دانلودها</Link>
      </nav>

      <form
        className="header-search"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="search"
          placeholder="جستجوی محصول..."
          aria-label="جستجوی محصول"
        />

        <button type="submit" aria-label="جستجو">
          <FiSearch />
        </button>
      </form>

      <div className="header-icons">
        <Link to="/shop" aria-label="علاقه‌مندی‌ها">
          <FiHeart />
        </Link>

        <Link to="/cart" aria-label="سبد خرید">
          <FiShoppingBag />
          <span className="cart-count">۰</span>
        </Link>

        <Link to="/profile" aria-label="حساب کاربری">
          <FiUser />
        </Link>
      </div>

      <div className="header-actions">
        <Link to="/login" className="login-btn">
          ورود
        </Link>

        <Link to="/register" className="register-btn">
          ثبت‌نام
        </Link>
      </div>
    </header>
  );
}

export default Header;