# OpenUp – Privacy-First PDF Generator
OpenUp is a powerful, privacy-first PDF generation tool built with React and Vite. It allows users to convert multiple images into a high-quality, customizable PDF—all directly in the browser. No files are ever uploaded, ensuring 100% data security.

## Why OpenUp?
In a world where privacy matters, most PDF converters rely on server-side processing, exposing your sensitive data. OpenUp solves this by processing everything locally in your browser, keeping your files secure and under your control.

## Features
🔒 Privacy-First – Your images never leave your device.

🖼️ Batch Image to PDF – Convert up to 20 images into a single PDF.

⚡ Instant PDF Preview – See how your PDF looks before downloading.

🛠️ Fully Customizable – Set page size, orientation, margins, image quality, and more.

🚀 Fast & Lightweight – Built with React + Vite for quick performance.

📦 No Installation Required – Works entirely in the browser.

## Technologies Used
React – For building the UI

Vite – Lightning-fast build tool

jsPDF – For generating the PDF files

Tailwind CSS – Utility-first styling

## ScreenShots
<img width="1920" height="1080" alt="Screenshot (1346)" src="https://github.com/user-attachments/assets/ead621d4-401a-4fe5-8209-765fe321d14e" />
<img width="1920" height="1080" alt="Screenshot (1347)" src="https://github.com/user-attachments/assets/a83eee10-f940-4828-b8d0-865313a789fb" />
<img width="1920" height="1080" alt="Screenshot (1348)" src="https://github.com/user-attachments/assets/0c005619-5fde-402e-b9b7-f1890f6ab468" />
<img width="1920" height="1080" alt="Screenshot (1349)" src="https://github.com/user-attachments/assets/016a7ba0-545f-4888-9f88-c3468fba521c" />

## Project Structure

pdfGen/                                      
├── index.html                               
├── package.json                          
├── package-lock.json                                  
├── vite.config.js                                 
├── tailwind.config.js                         
├── postcss.config.js                                                 
├── eslint.config.js                                      
├── README.md                        
├── public/                                    
│   ├── robots.txt                                  
│   ├── sitemap.xml                           
│   └── .htaccess                   
└── src/                                                       
    ├── main.jsx                            
    ├── App.jsx                                              
    ├── index.css                                     
    ├── config/                                       
    │   └── config.js                                      
    ├── components/                              
    │   ├── common/                                                                
    │   │   ├── Counter.jsx                              
    │   │   ├── Loading.jsx                               
    │   │   └── Thumbnails.jsx                      
    │   ├── layout/                               
    │   │   ├── About.jsx                        
    │   │   ├── Features.jsx                       
    │   │   ├── Footer.jsx                                         
    │   │   ├── Header.jsx                                     
    │   │   ├── Landing.jsx                    
    │   │   ├── Loader.jsx                       
    │   │   ├── PrivacyPolicy.jsx                              
    │   │   └── TermsOfService.jsx                        
    │   └── logic/                                
    │       ├── ImgToPdf.jsx                          
    │       ├── ImageThumbnail.jsx                       
    │       ├── pdfUtils.js                      
    │       └── handlers/                        
    │           └── handleImageUpload.js                     
    └── SEO/                                      
    
## Use Cases
Create secure PDF reports from image scans

Generate photo booklets or portfolios

Convert notes or whiteboard captures into PDF

Share grouped images in a downloadable document format

School/college assignment scans as PDFs

##  Getting Started
Prerequisites
Node.js v14+

npm or yarn

Installation

git clone https://github.com/your-username/openup.git
cd openup
npm install
Running Locally

npm run dev
Visit http://localhost:5173 to view the app in your browser.

## Usage
Upload Images – Drag and drop or manually select up to 20 images.

Customize PDF – Select page size, margins, orientation, and image quality.

Preview – Instantly see how your PDF will look.

Download – Save the final PDF securely to your device.

## Live Demo
🔗 Live Demo

## 🤝 Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve features, fix bugs, or suggest enhancements.

## 📄 License
This project is licensed under the MIT License.
