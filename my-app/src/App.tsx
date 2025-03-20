import React, { useState } from 'react';

import { Button } from "@carbon/react";
import { Octokit } from "@octokit/core";

const octokit = new Octokit({
  auth: process.env.REACT_APP_GH_TOKEN,
});
const ownerName = 'elizabethshiu';
const repoName = 'validation-agent'

async function commitFile(contents: string) {
  await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
    owner: ownerName,
    repo: repoName,
    path: 'PATH',
    message: 'my commit message',
    committer: {
      name: 'Monalisa Octocat',
      email: 'octocat@github.com'
    },
    content: 'bXkgbmV3IGZpbGUgY29udGVudHM=',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}

async function createPR(validationVersion: string) {
  let date = new Date()
  await octokit.request('POST /repos/{owner}/{repo}/pulls', {
    owner: ownerName,
    repo: repoName,
    title: `${validationVersion}-${date.toLocaleString()}`,
    body: `Validate configuration changes against OTel Collector ${validationVersion}`,
    head: `validation`,
    base: 'main',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
}


function App() {
  const [validationVersion, setValidationVersion] = useState('latest')

  function handleSetValidationVersion(event: { target: { value: React.SetStateAction<string>; }; }) {
    setValidationVersion(event.target.value);
    
  }

  async function handleValidate() {
    
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
