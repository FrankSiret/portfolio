export interface Tradeoff {
  id: string
  title: string
  question: string
  answer: string
}

export interface TradeoffsData {
  heading: string
  subtitle: string
  items: Tradeoff[]
}
