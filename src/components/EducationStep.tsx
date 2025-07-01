import React from 'react';
import { useFormContext } from 'react-hook-form';

const EducationStep: React.FC = () => {
  const { register, formState: { errors } } = useFormContext();
  const currentYear = new Date().getFullYear();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Education</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Highest Degree <span className="text-red-500">*</span>
          </label>
          <select
            {...register('highestDegree', { required: 'Please select your highest degree' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select your degree</option>
            <option value="High School">High School</option>
            <option value="Associate">Associate</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
            <option value="Other">Other</option>
          </select>
          {errors.highestDegree && (
            <p className="mt-1 text-sm text-red-600">{errors.highestDegree.message as string}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            University/College Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('universityName', { required: 'University/College name is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your university/college name"
          />
          {errors.universityName && (
            <p className="mt-1 text-sm text-red-600">{errors.universityName.message as string}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Graduation Year <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            min="1950"
            max={currentYear + 10}
            {...register('graduationYear', {
              required: 'Graduation year is required',
              min: { value: 1950, message: 'Please enter a valid year' },
              max: { value: currentYear + 10, message: 'Please enter a valid year' }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter graduation year"
          />
          {errors.graduationYear && (
            <p className="mt-1 text-sm text-red-600">{errors.graduationYear.message as string}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EducationStep;
