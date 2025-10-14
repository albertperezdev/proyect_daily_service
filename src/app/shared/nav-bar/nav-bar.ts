import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DarkMode } from './dark-mode/dark-mode';

@Component({
  selector: 'nav-bar',
  imports: [RouterLink, RouterLinkActive, CommonModule, DarkMode],
  templateUrl: './nav-bar.html',
})
export class NavBar {}
