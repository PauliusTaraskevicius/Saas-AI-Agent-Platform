import { StreamTheme, useCall } from "@stream-io/video-react-sdk";
import { useState } from "react";
import { CallLobby } from "./call-lobby";
import CallActive from "./call-active";
import { CallEnded } from "./call-ended";

interface CallUIProps {
  meetingName: string;
}

export function CallUI({ meetingName }: CallUIProps) {
  const call = useCall();
  const [show, setShow] = useState<"lobby" | "call" | "ended">("lobby");

  async function handleJoin() {
    if (!call) return;

    await call.join();

    setShow("call");
  }

  function handleLeave() {
    if (!call) return;

    call.endCall();
    setShow("ended");
  }

  return (
    <StreamTheme className="h-full">
      {show === "lobby" && <CallLobby onJoin={handleJoin} />}
      {show === "call" && (
        <CallActive meetingName={meetingName} onLeave={handleLeave} />
      )}
      {show === "ended" && <CallEnded />}
    </StreamTheme>
  );
}
