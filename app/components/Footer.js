export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-slate-900 py-4 text-center text-sm text-gray-500 dark:text-slate-400 mt-10 transition-colors duration-300">
      © {new Date().getFullYear()} Dheeraj Bishwas. All rights reserved.
    </footer>
  )
}