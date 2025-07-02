import React, { useReducer, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import StepIndicator from "../components/StepIndicator"
import PersonalInfoStep from '../components/PersonalInfoStep';
import EducationStep from '../components/EducationStep';
import WorkExperienceStep from '../components/WorkExperienceStep';
import SummaryCard from '../components/SummaryCard';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Education, PersonalInfo, WorkExperience } from '../types';

import { formReducer, initialState } from '../reducer';

export interface FormData extends PersonalInfo, Education, WorkExperience {}

const JobApplicationForm: React.FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const methods = useForm<FormData>();

  const handleNext = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      dispatch({ type: 'UPDATE_DATA', payload: methods.getValues() });
      dispatch({ type: 'COMPLETE_STEP', step: state.currentStep });
      dispatch({ type: 'NEXT_STEP' });
    }
  };

  const handlePrev = () => dispatch({ type: 'PREV_STEP' });

  const handleSubmit = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      dispatch({ type: 'UPDATE_DATA', payload: methods.getValues() });
      dispatch({ type: 'COMPLETE_STEP', step: state.currentStep });
      setIsSubmitted(true);
    }
  };

  const handleEdit = () => {
    setIsSubmitted(false);
    dispatch({ type: 'RESET' });
    methods.reset();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <SummaryCard data={{ ...state.data, ...methods.getValues() }} onEdit={handleEdit} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">Job Application Form</h1>
          <p className="text-gray-600 text-center mb-8">
            Please fill out all the required information to complete your application.
          </p>

          <StepIndicator currentStep={state.currentStep} completedSteps={state.completedSteps} />

          <FormProvider {...methods}>
            {state.currentStep === 1 && <PersonalInfoStep />}
            {state.currentStep === 2 && <EducationStep />}
            {state.currentStep === 3 && <WorkExperienceStep />}

            <div className="flex justify-between mt-8 pt-6 border-t">
              <button
                type="button"
                onClick={handlePrev}
                disabled={state.currentStep === 1}
                className="flex items-center px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50"
              >
                <ChevronLeft className="mr-2" size={20} /> Previous
              </button>

              {state.currentStep < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Next <ChevronRight className="ml-2" size={20} />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  Submit Application <Check className="ml-2" size={20} />
                </button>
              )}
            </div>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default JobApplicationForm;
