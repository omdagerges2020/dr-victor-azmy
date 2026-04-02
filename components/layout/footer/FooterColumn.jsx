

export default function FooterColumn({
  title,
  children,
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground">
        {title}
      </h3>
      <div className="space-y-3 text-sm text-muted-foreground">
        {children}
      </div>
    </div>
  );
}