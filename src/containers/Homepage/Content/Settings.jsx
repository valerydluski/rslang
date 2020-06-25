import React from 'react';
import ReduxSettingsForm from '../../../components/HomePage/Content/Settings/SettingsForm';

export default function SettingContent() {
  const onSubmit = async (formData) => {
    console.log(formData);
  };
  return (
    <>
      <h3>Application settings</h3>
      <ReduxSettingsForm handleSubmit={onSubmit} />
      <div>
        <h3>language</h3>
        <h3>user name</h3>
        <h3>words per day</h3>
        <h3>maximum cards per day</h3>
        <h3>info in cards</h3>
        <h3>show delete button</h3>
        <h3>add in category Difficult words</h3>
        <h3>how to learn words</h3>
      </div>
    </>
  );
}
