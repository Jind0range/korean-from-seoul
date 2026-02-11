export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 py-8 text-center text-sm text-slate-500">
        <div className="flex gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 transition-colors">YouTube</a>
        </div>
        <p>© {new Date().getFullYear()} Korean From Seoul. All rights reserved.</p>
      </div>
    </footer>
  );
}
