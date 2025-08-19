"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";

import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

import { EmptyState } from "@/components/empty-state";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { useAgentFilters } from "../../hooks/use-agent-filter";
import { DataPagination } from "./components/data-pagination";

export function AgentsView() {
  const [filters, setFilters] = useAgentFilters();
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.agents.getMany.queryOptions({
      ...filters,
    })
  );

  return (
    <div className="flex-1 pb-4 px-4 md:px-8 flex flex-col gap-y-4">
      <DataTable data={data.items} columns={columns} />
      <DataPagination
        page={filters.page}
        totalPages={data.totalPages}
        onPageChange={(page) => setFilters({ page })}
      />
      {data.items.length === 0 && (
        <EmptyState
          title="Create your first agent"
          description="Create an agent to join your meeting. Each agent will follow your instructions and can interact with participants during the call."
        />
      )}
    </div>
  );
}

export function AgentsViewLoading() {
  return (
    <LoadingState
      title="Loading Agents"
      description="This may take a few seconds..."
    />
  );
}
export function AgentsViewError() {
  return (
    <ErrorState
      title="Error loading agents"
      description="Something went wrong while fetching the agents. Please try again later."
    />
  );
}
