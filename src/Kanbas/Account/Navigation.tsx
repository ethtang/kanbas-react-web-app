import { Link, useLocation } from "react-router-dom";

export default function AccountNavigation() {
  const location = useLocation();

  return (
    <div className="list-group wd-account-navigation">
      <Link
        to="/Kanbas/Account/Signin"
        className={`list-group-item border border-0 rounded-0 ${location.pathname === '/Kanbas/Account/Signin' ? 'active-link' : 'text-danger'}`}>
        Signin
      </Link>
      <Link
        to="/Kanbas/Account/Signup"
        className={`list-group-item border border-0 rounded-0 ${location.pathname === '/Kanbas/Account/Signup' ? 'active-link' : 'text-danger'}`}>
        Signup
      </Link>
      <Link
        to="/Kanbas/Account/Profile"
        className={`list-group-item border border-0 rounded-0 ${location.pathname === '/Kanbas/Account/Profile' ? 'active-link' : 'text-danger'}`}>
        Profile
      </Link>
    </div>
  );
}
