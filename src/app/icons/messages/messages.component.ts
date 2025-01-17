import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'icon-messages',
  template: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_459_3752)">
  <path d="M21 4H18V3C18 1.346 16.654 0 15 0H3C1.346 0 0 1.346 0 3V17.854C0 18.648 0.435 19.374 1.134 19.748C1.452 19.919 1.801 20.003 2.149 20.003C2.565 20.003 2.98 19.882 3.339 19.643L6 17.869V21H16.697L20.661 23.643C21.021 23.883 21.435 24.004 21.851 24.004C22.199 24.004 22.547 23.919 22.866 23.748C23.566 23.374 24 22.648 24 21.854V7C24 5.346 22.654 4 21 4ZM2.23 17.979C2.211 17.991 2.155 18.027 2.078 17.986C1.999 17.944 1.999 17.877 1.999 17.855V3C1.999 2.448 2.448 2 2.999 2H14.999C15.55 2 15.999 2.448 15.999 3V15H6.697L2.23 17.979ZM22 21.855C22 21.876 22 21.944 21.921 21.986C21.842 22.027 21.788 21.991 21.77 21.979L17.303 19H8V17H18V6H21C21.551 6 22 6.448 22 7V21.855Z" fill="black"/>
  </g>
  <defs>
  <clipPath id="clip0_459_3752">
  <rect width="24" height="24" fill="white"/>
  </clipPath>
  </defs>
  </svg>
  `,
})
export class MessagesComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
