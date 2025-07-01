

export interface PersonalInfo {
  fullName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
}

export interface Education {
  highestDegree: string;
  universityName: string;
  graduationYear: number;
}

export interface WorkExperience {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate?: string;
  responsibilities?: string;
  resume: FileList;
  agreement: boolean;
}

export interface FormData extends PersonalInfo, Education, WorkExperience {}

export interface FormState {
  currentStep: number;
  data: Partial<FormData>;
  completedSteps: number[];
}

export type FormAction =
  | { type: 'NEXT_STEP' }
  | { type: 'PREV_STEP' }
  | { type: 'UPDATE_DATA'; payload: Partial<FormData> }
  | { type: 'COMPLETE_STEP'; step: number }
  | { type: 'RESET' };
