import React from 'react'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
const NapsaCertificate = () => {
  return (
    <div>
     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
     <div
    style={{
        border: '1px solid rgba(0, 0, 0, 0.3)',
        height: '600px',
        width:'100%',
       
        justifyItems:'center'
    }}
>
    <Viewer fileUrl="/assets/napsa.pdf" />
 
</div>
    </Worker>
    
    <section className="py-20">
    <button className="w-1/5 text-center float-right mr-12 h-12 bg-blue-400 hover:bg-blue-800 text-white rounded-xl"><a href="/certificates"> Back</a></button>
    </section>
    </div>
  )
}

export default NapsaCertificate
