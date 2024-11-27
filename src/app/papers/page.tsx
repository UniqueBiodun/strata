'use client';
import React, { useState } from 'react';
import PapersHeroSection from './PapersHero';
import IssueSection from './IssueSection';
import DashboardDarkBgSection from './DashboardDarkBg';
import BuildOnStrataBanner1 from '../advisory/BuildOnStrataBanner1';
import IssueDetails from './IssueDetails';

const PapersPage = () => {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  const handleReadIssue = (issueId: string) => {
    setSelectedIssue(issueId);
  };

  const handleCloseIssue = () => {
    setSelectedIssue(null);
  };

  return (
    <div>
      {selectedIssue ? (
        <IssueDetails issueId={selectedIssue} onClose={handleCloseIssue} />
      ) : (
        <>
          <PapersHeroSection />
          <IssueSection onReadIssue={handleReadIssue} />
          <DashboardDarkBgSection />
          <BuildOnStrataBanner1 />
        </>
      )}
    </div>
  );
};

export default PapersPage;
