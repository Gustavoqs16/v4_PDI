import { Component, OnInit } from '@angular/core';

export interface Certificado {
  img: string;
  nome: string;
  tamanho: string;
  enviadoPorImg: string;
  dataUpload: string;
}

const ELEMENT_DATA: Certificado[] = [
  {
    img: 'path-to-certificate-image1.png',
    nome: 'Certificado de Conclusão Cientista do Marketing',
    tamanho: '18kb',
    enviadoPorImg: 'path-to-sender-image.png',
    dataUpload: '06/02/2024 às 14h',
  },
  {
    img: 'path-to-certificate-image2.png',
    nome: 'Certificado de Aprovação Cientista do Marketing',
    tamanho: '18kb',
    enviadoPorImg: 'path-to-sender-image.png',
    dataUpload: '06/02/2024 às 17h',
  },
];

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.page.html',
  styleUrls: ['./file-upload.page.scss'],
})
export class FileUploadPage implements OnInit {
  files: any[] = [];
  displayedColumns: string[] = [
    'nome',
    'tamanho',
    'enviadoPor',
    'dataUpload',
    'download',
    'excluir',
  ];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      for (let i = 0; i < input.files.length; i++) {
        const file: any = input.files[i];
        this.convertFileToBase64(file).then((base64: string) => {
          const fileWithBase64 = {
            lastModifiedDate: file.lastModifiedDate,
            name: file.name,
            size: file.size,
            base64: base64,
          };

          this.files.push(fileWithBase64);
        });
      }
    }
  }

  convertFileToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }
}
