interface WidgetItemProps {
  title: string;
  label?: string;
  children: React.ReactNode;
}

export const WidgetItem = ({ title, label, children }: WidgetItemProps) => {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <div className="h-full py-6 px-5 space-y-4 rounded-2xl border border-border bg-white">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-border pb-3">
          <h5 className="text-sm font-medium text-text">
            {title}
          </h5>
          {label && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-primary-muted text-primary-hover">
              {label}
            </span>
          )}
        </div>

        {/* Content */}
        <div>
          {children}
        </div>

      </div>
    </div>
  );
};