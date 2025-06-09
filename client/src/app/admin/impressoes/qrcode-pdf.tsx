'use client'
import { ICarta } from "@/domains/interfaces/ICarta"
import { useRef } from "react";
import {QRCodeSVG} from 'qrcode.react';

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function QrPdfGenerator({ cartas }: { cartas: ICarta[] }) {
  const containerRefs = useRef<HTMLDivElement[]>([]);
  const dividirEmPaginas = <T,>(array: T[], tamanhoPagina: number): T[][] => {
    const paginas: T[][] = [];
    for (let i = 0; i < array.length; i += tamanhoPagina) {
      paginas.push(array.slice(i, i + tamanhoPagina));
    }
    return paginas;
  };
  const gerarPDF = async () => {
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    for (let i = 0; i < containerRefs.current.length; i++) {
      const container = containerRefs.current[i];
      if (!container) continue;

      const canvas = await html2canvas(container);
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      if (i !== 0) pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    }

    pdf.save('qrcodes.pdf');
  };
  const paginas = dividirEmPaginas(cartas, 4);
  return (
    <div className="p-4">
      <button
        onClick={gerarPDF}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        Gerar PDF
      </button>

      <div style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
        {paginas.map((grupo, paginaIndex) => (
          <div
            key={paginaIndex}
            ref={(el) => {
              if (el) containerRefs.current[paginaIndex] = el;
            }}
            style={{
              width: '794px', // A4 width in px @ 96dpi
              height: '1123px', // A4 height in px @ 96dpi
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              padding: '20px',
              boxSizing: 'border-box',
              backgroundColor: 'white',
              color: 'black'
            }}
          >
            {grupo.map((carta, idx:number) => (
              <div
                key={idx}
                style={{
                  border: '1px solid #000',
                  padding: 10,
                  fontSize: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '400px'
                }}
              >
                {carta.urlQrCode && (
                  <QRCodeSVG value={carta.urlQrCode} size={350} />
                )}
                <p><strong>{carta.destinatario}</strong></p>
                <p>{carta.descricao}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
