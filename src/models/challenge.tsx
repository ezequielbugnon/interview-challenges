  export interface Challenge {
    id: number,
    title: string
    goals: string
    steps: Step[]
    Comments: string
    solutions: Solution[]
  }
  
  export interface Step {
    step?: string
  }
  
  export interface Solution {
    url: string
    author: string
    technologies: string
  }