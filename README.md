<h1 align="center">Hospital API  📝</h1>

We’re going to design an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients

## Tech Stack

**Client:** `JAVASCRIPT`

**Server:** `Node.js`, `Express.js`, `Mongoose`, `EJS`,

## 🔗 Links

Github Link:-

## 🔗 Live Demo

Render Link:-

## Folder Structure

```
Hospital API /

│
├── routes/
│   ├── api/v1/doctors.js
│   ├── api/v1/index.js
│   ├── api/v1/patients.js
│   ├── api/v1/reports.js
│   ├── api/index.js
|   ├── routes/index.js
│
├── controllers/
│   ├── api/v1/doctor_controller.js
│   ├── api/v1/patient_controller.js
│   ├── api/v1/report_controller.js
|   |
├── models/
│   ├── doctorModel.js
│   ├── patientModel.js
│   ├── reportModel.js
|   |
├── index.js
├── package-lock.json
├── package.json
├── README.md
```

### Step 2: install

Install the required Node.js packages by running the following command.

`npm install`

Set up the MongoDB database using Mongoose. Modify the config.js file in the config directory with your MongoDB connection URL.
Create necessary models for the placement cell app in the models directory using Mongoose schema.
Implement the required routes and logic in the routes directory to handle Hospital API functionalities.

### Step 3: Start the Application

Run the following command to start the server.

`node index.js`

### Step 4: Access the Application

Open your web browser and visit http://localhost:8000 to access the Employee Review System web app.

## Features:

- There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient already exists, just
  return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (You can use enums if you want to):
- Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
  Positive-Admit]

- Date
- Required Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status

use postman to test the Hospital API
