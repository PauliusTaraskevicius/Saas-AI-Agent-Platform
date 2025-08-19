import { Input } from "@/components/ui/input";
import { useAgentFilters } from "@/modules/agents/hooks/use-agent-filter";
import { SearchIcon } from "lucide-react";

export default function AgentsSearchFilter() {
  const [filter, setFilters] = useAgentFilters();
  return (
    <div className="relative">
      <Input
        placeholder="Filter by name"
        className="h-9 bg-white w-[200px] pl-7"
        value={filter.search}
        onChange={(e) => setFilters({ search: e.target.value })}
      />
      <SearchIcon className="size-4 absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
}
