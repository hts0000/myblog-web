import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const parasm = useParams();

  const conversationId = useMemo(() => {
    if (!parasm?.onversationId) {
      return "";
    }

    return parasm.conversationId as string;
  }, [parasm?.conversationId]);

  const isOpen = useMemo(() => !!conversationId, [conversationId]);

  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [isOpen, conversationId]
  );
};

export default useConversation;
