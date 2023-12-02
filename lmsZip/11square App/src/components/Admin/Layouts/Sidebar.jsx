import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "bi bi-speedometer2",
  },
  {
    title: "User",
    href: "/dashboard/user",
    icon: "bi bi-people",
  },
  {
    title: "Employee",
    href: "/dashboard/employee",
    icon: "bi bi-diagram-3-fill",
  },
  {
    title: "Lookup",
    href: "/dashboard/lookup",
    icon: "bi bi-search",
  },
  {
    title: "Client",
    href: "/dashboard/client",
    icon: "bi bi-person-square",
  },
  {
    title: "Holiday",
    href: "/dashboard/holiday",
    icon: "bi bi-calendar-day",
  },
  {
    title: "Setting",
    href: "/dashboard/setting",
    icon: "bi bi-gear",
  },
  {
    title: "Leads",
    href: "/dashboard/lead",
    icon: "bi bi-x-diamond-fill",
  },
  {
    title: "Logout",
    href: "/logout",
    icon: "bi bi-box-arrow-left",
  },
];

const Sidebar = () => {
    const showMobilemenu = () => {
        document.getElementById("sidebarArea").classList.toggle("showSidebar");
      };
      let location = useLocation();
  return (
    <div className="bg-dark">
    <div className="d-flex">
      <Button
        color="white"
        className="ms-auto text-white d-lg-none"
        onClick={() => showMobilemenu()}
      >
        <i className="bi bi-x"></i>
      </Button>
    </div>
    <div className="p-3 mt-2">
      <Nav vertical className="sidebarNav">
        {navigation.map((navi, index) => (
          <NavItem key={index} className="sidenav-bg">
            <Link
              to={navi.href}
              className={
                location.pathname === navi.href
                  ? "active nav-link py-3"
                  : "nav-link py-3"
              }
            >
              <i className={navi.icon}></i>
              <span className="ms-3 d-inline-block">{navi.title}</span>
            </Link>
          </NavItem>
        ))}
      </Nav>
    </div>
  </div>
  )
}

export default Sidebar