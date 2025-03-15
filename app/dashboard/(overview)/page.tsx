import { PowerIcon } from "@heroicons/react/24/outline";
import { fetchLatestUsers } from "@/app/lib/data";

export default async function Page() {
  const users = await fetchLatestUsers();

  return (
    <main className="bg-gradient-to-r from-blue-100 to-indigo-200 min-h-screen">
      <div className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 sm:text-5xl">
              Bienvenue
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Liste des utilisateurs :
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {users.map((user) => (
              <li
                key={user.id}
                className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {user.name}
                  </h3>
                  <p className="text-gray-500">
                    Rôle : {user.role}
                  </p>
                  <p className="text-indigo-600">
                    Email : {user.email}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
