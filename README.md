# ALU Regex Data Extraction
---------------------------------------------------------

This project extracts multiple types of structured data from raw strings using the power of **Regular Expressions (Regex)**. It focuses on identifying patterns such as email addresses, phone numbers, URLs, credit card numbers, currency amounts, time formats, HTML tags, and hashtags. The goal is to provide a lightweight tool that can simulate real-world data parsing scenarios such as those used in content filtering, data mining, and web scraping. 

## Project Overview
-----------------------------------------------------------

This tool was developed as part of a short-term web development challenge aimed at showcasing the use of JavaScript for full stack problem-solving. Using Regex, the tool efficiently extracts useful data from lengthy, unstructured strings such as those returned from API responses or web content.

Supported data types:
- **Email addresses**: Standard and subdomain formats
- **Phone numbers**: U.S.-style with parentheses, hyphens, dots, or spaces
- **URLs**: Including `http` and `https`, with optional subdomains or paths
- **Credit card numbers**: With spaces or dashes
- **Currency values**: In USD format with commas and decimals
- **Time formats**: Both 12-hour and 24-hour time with optional AM/PM
- **HTML tags**: Generic opening and closing tags
- **Hashtags**: Common social media hashtags

## Setup Instructions
--------------------------------------------------------

### Prerequisites

Ensure **Node.js** and **npm** are installed on your system. Use the following commands to install if not already present:

```bash
sudo apt update
sudo apt install nodejs npm
```
### Installation
-----------------------------------
1. Clone this repository
```bash
git clone https://github.com/stevenalu/alu_regex-data-extraction-stevenalu
```
2. Move to the same repository/directory
```bash
cd alu_regex-data-extraction-stevenalu
```
3. Run the file (Javascript) named dataExtraction.js
   ```bash
   node dataExtraction.js
   ```
### Below is the screensgot showing the output example when project is running...
---------------------------------------------------------------------------------------
![image](https://github.com/user-attachments/assets/a061760f-b1c4-4910-885e-fed5d293f7a7)
