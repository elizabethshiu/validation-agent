## Collector Validation Github Action Sample
This is a demo for using Github Actions to validate a OTel collector configuration file.

When the collector configuration within the `Instana` folder is changed an Action will be triggered that deploys a Docker container to run the OTel validation command against the updated config file.

If the configuration file is invalid the run will fail and an error message can be viewed in the `Config validation step`.
![image](https://github.com/user-attachments/assets/a6d9ec3b-2ba7-464f-a6ec-8c3734f76060)
