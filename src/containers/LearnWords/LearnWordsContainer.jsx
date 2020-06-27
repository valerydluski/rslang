import React from 'react';
import LearnWords from '../../components/LearnWords/LearnWords';

export default function LearnWordCardContainer() {
  const onSubmit = async (formData) => {
    console.log('onSubmit -> formData', formData);
  };

  return <LearnWords onSubmit={onSubmit} />;
}
