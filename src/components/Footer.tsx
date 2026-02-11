export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100/50">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-6 py-8 text-center text-sm text-stone-400">
        <p>© {new Date().getFullYear()} Korean From Seoul. All rights reserved.</p>
      </div>
    </footer>
  );
}
