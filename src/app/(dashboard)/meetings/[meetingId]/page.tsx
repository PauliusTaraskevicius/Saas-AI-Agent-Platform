interface MeetingIdProps {
  params: Promise<{ agentId: string }>;
}

export default function MeetingId({ params }: MeetingIdProps) {
  return <div>MeetingId</div>;
}
