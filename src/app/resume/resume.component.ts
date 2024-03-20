import { Component } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
  viewProviders: [provideIcons({ heroUsers })]
})
export class ResumeComponent {
  myImage : string = "../assets/img/pic_myself.jpg";
  vs : string = "../assets/img/vs_pic.png";
  mysql : string = "../assets/img/mysql_pic.png";
  net : string = "../assets/img/net_pic.png";
  home : string = "../assets/img/home.png";
  mail : string = "../assets/img/mail.png";
  phone : string = "../assets/img/phone.png";
  github : string = "../assets/img/github.png";
  linkedin : string = "../assets/img/linkedin.png";
}
