export interface DNAPrinciple {
  id: string
  title: string
  description: string
}

export interface DNAData {
  heading: string
  subtitle: string
  principles: DNAPrinciple[]
}
