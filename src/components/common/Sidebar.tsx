import Link from "next/link";

const Sidebar = ({ role }: { role: string }) => {
  const links = [
    { label: "Избранные товары", path: `/cabinet/${role}/featured-products` },
    { label: "История товары", path: `/cabinet/${role}/product-history` },
    { label: "Товары", path: `/cabinet/${role}/products` },
    { label: "Выход", path: `/` },
  ];

  return (
    <aside className="sidebar h-screen hidden lg:block pe-5">
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.path}>
            <Link className="text-[18px]" href={link.path}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
