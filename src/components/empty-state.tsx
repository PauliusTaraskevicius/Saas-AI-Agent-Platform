import Image from "next/image";

interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({ description, title }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        className="size-6 text-red-500"
        src="/empty.svg"
        alt="Empty"
        width={240}
        height={240}
      />
      <div className="flex flex-col gap-y-6 max-w-md mx-auto text-center">
        <h6 className="text-lg font-medium">{title}</h6>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
