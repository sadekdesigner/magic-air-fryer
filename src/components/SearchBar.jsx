import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8 relative group animate-fade-in-up">
      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none transition-colors duration-300 group-focus-within:text-primary">
        <Search size={20} className="text-on-surface-variant group-focus-within:text-primary" />
      </div>
      <input
        type="text"
        placeholder="ابحث عن وصفة، مكوّن، أو تصنيف..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pr-12 pl-14 py-4 rounded-full bg-surface-container-lowest ambient-shadow-sm border-none focus:ring-2 focus:ring-primary focus:outline-none text-on-surface placeholder:text-on-surface-variant/50 transition-all duration-300 hover:ambient-shadow-md focus:shadow-lg focus:-translate-y-[1px]"
      />
    </div>
  );
}
