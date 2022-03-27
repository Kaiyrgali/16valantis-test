import React from 'react';
import { useParams } from 'react-router-dom';
import { ArchiveListContainer } from '../archive-list';

function ArchivePage({ ratestoreService }) {
  const params = useParams();
  const valuteId = Object.values(params);

  return (
    <div>
      <ArchiveListContainer valuteId={valuteId} />
    </div>
  );
};

export default ArchivePage;