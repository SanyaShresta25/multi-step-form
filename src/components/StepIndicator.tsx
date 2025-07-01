import { User, GraduationCap, Briefcase, Check } from 'lucide-react';
import React from 'react';
const StepIndicator: React.FC<{ currentStep: number; completedSteps: number[] }> = ({ currentStep, completedSteps }) => {
  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Education', icon: GraduationCap },
    { number: 3, title: 'Experience', icon: Briefcase }
  ];

  return (
    <div className="flex items-center justify-between mb-8">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isCompleted = completedSteps.includes(step.number);
        const isCurrent = currentStep === step.number;
        
        return (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors ${
                isCompleted 
                  ? 'bg-green-500 border-green-500 text-white' 
                  : isCurrent 
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'bg-gray-100 border-gray-300 text-gray-400'
              }`}>
                {isCompleted ? <Check size={20} /> : <Icon size={20} />}
              </div>
              <span className={`mt-2 text-sm font-medium ${
                isCurrent ? 'text-blue-600' : isCompleted ? 'text-green-600' : 'text-gray-400'
              }`}>
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`flex-1 h-0.5 mx-4 ${
                completedSteps.includes(step.number) ? 'bg-green-500' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
export default StepIndicator;