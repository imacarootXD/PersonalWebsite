export function PageSkeleton() {
  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-12 sm:px-10 sm:py-16">
      <div className="mb-10 max-w-2xl space-y-4">
        <div className="skeleton h-3 w-24" />
        <div className="skeleton h-12 w-3/4" />
        <div className="skeleton h-5 w-full" />
        <div className="skeleton h-5 w-5/6" />
      </div>
      <div className="grid gap-4">
        <div className="skeleton h-36 w-full rounded-2xl" />
        <div className="skeleton h-36 w-full rounded-2xl" />
      </div>
    </div>
  );
}
