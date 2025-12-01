# Automated Customer Allocation & Email Response System (n8n)

A streamlined n8n workflow that automates customer handling from form submissions. It processes incoming form data, assigns customers to the right salesperson, generates AI-crafted email replies, and stores customer details — all without manual effort.

## Features
- Auto-capture form submissions  
- AI-powered email drafting using Gemini  
- Automatic salesperson allocation  
- Customer record storage in Google Sheets  
- FAQ lookup for accurate responses  
- Gmail draft creation for final review & sending  

## How It Works
1. Form submission triggers the workflow  
2. Data is processed with custom JavaScript  
3. AI Agent classifies intent, prepares replies, and updates sheets  
4. Draft email is created in Gmail for the team to finalize  

## Setup
Import the workflow, connect Google Sheets + Gmail credentials, update sheet IDs, and activate.
