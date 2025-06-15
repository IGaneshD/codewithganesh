// File: src/components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-tech-dark py-8 border-t border-slate-100 dark:border-slate-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600 dark:text-slate-200 text-sm">
        &copy; {new Date().getFullYear()} CodeWithGanesh. All rights reserved.
      </div>
    </footer>
  )
}
