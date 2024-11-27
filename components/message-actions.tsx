import type { Message } from 'ai';

export function MessageActions({
  chatId,
  message,
  isLoading,
}: {
  chatId: string;
  message: Message;
  isLoading: boolean;
}) {

  if (isLoading) return null;
  if (message.role === 'user') return null;
  if (message.toolInvocations && message.toolInvocations.length > 0)
    return null;

  return (' ');
}
