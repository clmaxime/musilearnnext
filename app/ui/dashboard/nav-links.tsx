import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";

// Map of links to display in the side navigation.
const userRole = "user"; // Remplacez ceci par la logique pour obtenir le rôle de l'utilisateur

const links = [
  { name: "Accueil", href: "/dashboard", icon: HomeIcon },
  {
    name: "Cours",
    href: "/dashboard/courses",
    icon: DocumentDuplicateIcon,
  },
  ...(userRole === "user"
    ? [{ name: "Page admin", href: "/dashboard/admin", icon: DocumentDuplicateIcon }]
    : []),
];

export default function NavLinks() {
  return (
    <nav className="bg-blue-600 p-4 rounded-lg shadow-md">
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 px-4 py-2 mt-2 text-white rounded-md transition-colors hover:bg-blue-100 hover:text-blue-600"
          >
            <LinkIcon className="w-6 h-6" />
            <span className="text-sm font-medium">{link.name}</span>
          </a>
        );
      })}
    </nav>
  );
}
