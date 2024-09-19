import { Chat } from '@/components/ai/chat'
import { fetchMessages } from '@/actions/fetchMessages'

interface Props {
  params: { id: string }
}

export default async function ChatPage({ params }: Props) {
  const history = await fetchMessages(params.id)
  return <Chat id={params.id} history={history} />
}
