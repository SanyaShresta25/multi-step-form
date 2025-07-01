import { FileText, User, GraduationCap, Briefcase, Check } from 'lucide-react';
import { FormData } from '../types';

type SummaryCardProps = {
  data: Partial<FormData>;
  onEdit: () => void;
};

const SummaryCard: React.FC<SummaryCardProps> = ({ data, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center">
          <FileText className="mr-2" />
          Application Summary
        </h2>
        <button
          onClick={onEdit}
          className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Edit Application
        </button>
      </div>

      <div className="space-y-6">
        {/* Personal Information */}
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <User className="mr-2" size={20} />
            Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div><strong>Full Name:</strong> {data.fullName || 'N/A'}</div>
            <div><strong>Email:</strong> {data.email || 'N/A'}</div>
            <div><strong>Phone:</strong> {data.phoneNumber || 'N/A'}</div>
            <div><strong>Date of Birth:</strong> {data.dateOfBirth || 'N/A'}</div>
            <div>
              <strong>LinkedIn:</strong>{' '}
              {data.linkedinUrl
                ? <a href={data.linkedinUrl} className="text-blue-600" target="_blank" rel="noopener noreferrer">View Profile</a>
                : 'N/A'}
            </div>
            <div>
              <strong>Portfolio:</strong>{' '}
              {data.portfolioUrl
                ? <a href={data.portfolioUrl} className="text-blue-600" target="_blank" rel="noopener noreferrer">View Portfolio</a>
                : 'N/A'}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <GraduationCap className="mr-2" size={20} />
            Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div><strong>Highest Degree:</strong> {data.highestDegree || 'N/A'}</div>
            <div><strong>University:</strong> {data.universityName || 'N/A'}</div>
            <div><strong>Graduation Year:</strong> {data.graduationYear || 'N/A'}</div>
          </div>
        </div>

        {/* Work Experience */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
            <Briefcase className="mr-2" size={20} />
            Work Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div><strong>Company:</strong> {data.companyName || 'N/A'}</div>
            <div><strong>Job Title:</strong> {data.jobTitle || 'N/A'}</div>
            <div><strong>Start Date:</strong> {data.startDate || 'N/A'}</div>
            <div><strong>End Date:</strong> {data.endDate || 'Present'}</div>
            <div className="md:col-span-2">
              <strong>Responsibilities:</strong>
              <p className="mt-1">{data.responsibilities || 'N/A'}</p>
            </div>
            <div>
              <strong>Resume:</strong>{' '}
              {data.resume && Array.isArray(data.resume) && data.resume[0]?.name
                ? data.resume[0].name
                : 'No file uploaded'}
            </div>
            <div>
              <strong>Agreement:</strong>{' '}
              {typeof data.agreement === "boolean"
                ? (data.agreement ? "Accepted" : "Not accepted")
                : "N/A"}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <div className="flex items-center">
          <Check className="text-green-600 mr-2" size={20} />
          <span className="text-green-800 font-medium">
            Application submitted successfully!
          </span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
