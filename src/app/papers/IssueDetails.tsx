import React from 'react';

const IssueDetails = ({
  issueId,
  onClose,
}: {
  issueId: string;
  onClose: () => void;
}) => {
  return (
    <div className='py-24 px-12 bg-gray-100'>
      <h1 className='text-4xl font-bold text-primary-100'>
        Details for {issueId}
      </h1>
      <p className='text-lg text-secondary-300 mt-4'>
        This is where the full details for {issueId} will be displayed.
      </p>
      <button
        className='mt-8 px-6 py-2 bg-primary-500 text-white rounded-md'
        onClick={onClose}
      >
        Back to Issues
      </button>
    </div>
  );
};

export default IssueDetails;
