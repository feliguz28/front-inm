import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  galleryImages: string[] = [
    'https://img.freepik.com/foto-gratis/casa-aislada-campo_1303-23773.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3LECxua45Y5P87fQ4RT1rydb1d7xirz_hJZmGg82WKqg78rRjT8jfWkA5_Gl95bdS2fE&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl9qJ6AJ0Cd_VJnXFChkJHIDVgOZV7ZwK7FgS5-tmnkpgCukfwQimIpfBs5MznCsmgduI&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgPbiWVY_MUuPCAQYPQdqevoFl7lRx22h-7xhwYaF9A4dGFcxM626sWdLLTJXEjbl_SAo&usqp=CAU'
  ];

}
