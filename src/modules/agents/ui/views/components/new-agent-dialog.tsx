import { ResponsiveDialog } from "@/components/responsive-dialog";
import AgentForm from "./agent-form";

interface NewAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function NewAgentDialog({ open, onOpenChange }: NewAgentDialogProps) {
  return (
    <ResponsiveDialog
      description="Create a new agent"
      title="New Agent"
      open={open}
      onOpenChange={onOpenChange}
    >
      <AgentForm
        onSuccess={() => onOpenChange(false)}
        onCancel={() => onOpenChange(false)}
      />
    </ResponsiveDialog>
  );
}
