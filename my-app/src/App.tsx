import React, { useEffect, useState } from 'react';

import { Button } from "@carbon/react";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GH_TOKEN,
});
const ownerName = 'elizabethshiu';
const repoName = 'https://github.com/elizabethshiu/validation-agent'

function App() {
  const [validationVersion, setValidationVersion] = useState('latest')

  function handleSetValidationVersion(event: { target: { value: React.SetStateAction<string>; }; }) {
    setValidationVersion(event.target.value);
  }

  async function handleValidate() {
    let date = new Date()
    await octokit.request('POST /repos/{owner}/{repo}/pulls', {
      owner: ownerName,
      repo: repoName,
      title: `${date.toLocaleString()}-${validationVersion}`,
      body: `Validate configuration changes against OTel Collector ${validationVersion}`,
      head: 'octocat:new-feature',
      base: 'master',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
  }

  return (
    <div className="App" style={{paddingTop: '50px'}}>
      <select id="validation-select" style={{margin: '10px'}} onChange={handleSetValidationVersion}>
        <option value="latest">Otel Collector Latest</option>
        <option value="0.122.1">Otel Collector 0.122.1</option>
        <option value="0.121.0">Otel Collector 0.121.0</option>
      </select>
      <Button onClick={handleValidate}> Validate </Button>
    </div>
  );
}

export default App;
