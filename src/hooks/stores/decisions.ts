import { Decision, DecisionState } from 'features/decisions/Decision'
import { LocalStorageReturn, useLocalStorage } from 'hooks/localStorage'

const initialState: Decision[] = [
  {
    id: '1',
    title: 'Venue for the event',
    description: 'Description',
    state: DecisionState.Closed,
    isArchived: true,
    createdBy: 'John Doe',
    createdAt: '2022-02-11',
    updatedBy: 'John Doe',
    updatedAt: '2022-03-04',
  },
  {
    id: '2',
    title: 'New backend developer for second team',
    description: 'Description',
    state: DecisionState.FinalEvaluation,
    isArchived: false,
    createdBy: 'John Doe',
    createdAt: '2022-02-15',
    updatedBy: 'John Doe',
    updatedAt: '2022-03-14',
  },
  {
    id: '3',
    title: 'Select marketing agency for collaboration with client X',
    description: 'Description',
    state: DecisionState.CriteriaAdjustment,
    isArchived: false,
    createdBy: 'John Doe',
    createdAt: '2022-02-18',
    updatedBy: 'John Doe',
    updatedAt: '2022-03-18',
  },
  {
    id: '4',
    title: 'Choosing clients for Q3',
    description: 'Description',
    state: DecisionState.ResistanceInvestigation,
    isArchived: true,
    createdBy: 'John Doe',
    createdAt: '2022-02-24',
    updatedBy: 'John Doe',
    updatedAt: '2022-03-24',
  },
  {
    id: '5',
    title: 'Change decision process for remote teams',
    description: 'Description',
    state: DecisionState.ResultsDefinition,
    isArchived: true,
    createdBy: 'John Doe',
    createdAt: '2022-03-01',
    updatedBy: 'John Doe',
    updatedAt: '2022-04-01',
  },
  {
    id: '6',
    title: 'Choosing clients for Q4',
    description: 'Description',
    state: DecisionState.ProblemDefinition,
    isArchived: false,
    createdBy: 'John Doe',
    createdAt: '2022-03-10',
    updatedBy: 'John Doe',
    updatedAt: '2022-04-10',
  },
]

export function useDecisionStore(): LocalStorageReturn<Decision[]> {
  return useLocalStorage('decisions', initialState)
}
