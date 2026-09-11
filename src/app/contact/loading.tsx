import { PageSkeleton } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <>
      <div className="top-progress" />
      <PageSkeleton />
    </>
  );
}
