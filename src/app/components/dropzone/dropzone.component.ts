import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-dropzone',
  templateUrl: './dropzone.component.html',
  styleUrls: ['./dropzone.component.scss'],
})
export class DropzoneComponent {
  @Output() fileEmitted = new EventEmitter<File>();
  @Input() title = 'Arraste seus arquivos aqui ou clique para fazer upload';
  @ViewChild('fileInput') fileInput: ElementRef;
  public imagePreview: string | null = null;

  public dropped(files: NgxFileDropEntry[]) {
    this.processFiles(files);
  }

  private processFiles(files: NgxFileDropEntry[]) {
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.fileEmitted.emit(file); // Emitir arquivo arrastado
          this.previewImage(file);
        });
      }
    }
  }

  public fileInputChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      Array.from(files).forEach(file => {
        this.previewImage(file);
        this.fileEmitted.emit(file);
      });
    }
  }

  private previewImage(file: File) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      this.imagePreview = event.target.result;
    };
    reader.readAsDataURL(file);
  }

  public fileOver(event: any) {
    console.log(event);
  }

  public fileLeave(event: any) {
    console.log(event);
  }

  public deleteImage() {
    this.imagePreview = null;
    this.fileEmitted.emit();
  }

  public openImage() {
    if (this.imagePreview) {
      const imageWindow = window.open('', '_blank');
      imageWindow?.document.write('<html><head><title>Visualização da Imagem</title></head><body><img src="' + this.imagePreview + '" alt="Visualização de Imagem"></body></html>');
      imageWindow?.document.close();
    }
  }
}
