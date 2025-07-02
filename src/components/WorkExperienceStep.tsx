import { useFormContext } from "react-hook-form";


const WorkExperienceStep: React.FC = () => {
const { register, formState: { errors } } = useFormContext();
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Work Experience</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('companyName', { required: 'Company name is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter company name"
          />
       {typeof errors.companyName?.message === 'string' && (
  <p className="mt-1 text-sm text-red-600">{errors.companyName.message}</p>
)}

        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Job Title <span className="text-red-500">*</span>
          </label>
          <input
            {...register('jobTitle', { required: 'Job title is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter job title"
          />
        {typeof errors.jobTitle?.message === 'string' && (
  <p className="mt-1 text-sm text-red-600">{errors.jobTitle.message}</p>
)}

        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            {...register('startDate', { required: 'Start date is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
         {typeof errors.startDate?.message === 'string' && (
  <p className="mt-1 text-sm text-red-600">{errors.startDate.message}</p>
)}

        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            End Date
          </label>
          <input
            type="date"
            {...register('endDate')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Responsibilities
          </label>
          <textarea
            {...register('responsibilities')}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe your key responsibilities and achievements"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Resume Upload <span className="text-red-500">*</span>
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            {...register('resume', { 
              required: 'Resume is required',
              validate: {
                fileSize: (files) => {
                  if (files?.[0] && files[0].size > 5 * 1024 * 1024) {
                    return 'File size must be less than 5MB';
                  }
                  return true;
                }
              }
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="mt-1 text-sm text-gray-500">
            Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
          </p>
          {typeof errors.resume?.message === 'string' && (
  <p className="mt-1 text-sm text-red-600">{errors.resume.message}</p>
)}

        </div>

        <div className="md:col-span-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register('agreement', { required: 'You must agree to the terms and conditions' })}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">
              I agree to the terms and conditions <span className="text-red-500">*</span>
            </span>
          </label>
          {typeof errors.agreement?.message === 'string' && (
  <p className="mt-1 text-sm text-red-600">{errors.agreement.message}</p>
)}

        </div>
      </div>
    </div>
  );
};
export default WorkExperienceStep;