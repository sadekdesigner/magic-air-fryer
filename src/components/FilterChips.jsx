export default function FilterChips({ tags, activeTag, onTagChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8 pb-2">
      {tags.map((tag, index) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`flex-shrink-0 px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 active:scale-95 hover:scale-[1.02] animate-fade-in-up ${
            activeTag === tag
              ? 'bg-primary-container text-on-primary-container ambient-shadow-sm ripple-bg'
              : 'border border-outline-variant text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
          }`}
          style={{ animationDelay: `${100 + index * 50}ms` }}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
