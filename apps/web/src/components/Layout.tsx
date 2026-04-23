import React from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <aside className="hidden w-64 flex-col border-r border-gray-200 bg-white md:flex">
        <div className="flex h-14 items-center border-b border-gray-200 px-4">
          <span className="text-lg font-semibold">Focus</span>
        </div>
        <nav className="flex-1 px-3 py-4">
          <ul className="space-y-1">
            <li>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
              >
                Issues
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-gray-200 bg-white px-4">
          <span className="text-sm font-medium text-gray-600">
            Software Engineering Teams
          </span>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-gray-200" />
          </div>
        </header>

        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
