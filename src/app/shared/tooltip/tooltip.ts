import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'tooltip',
  imports: [NgClass],
  templateUrl: './tooltip.html',
})
export class Tooltip {
  tipText = 'Chat with us on WhatsApp';
  tooltipSide = 'tooltip-left'; // por defecto al costado

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onWindowChange() {
    const doc = document.documentElement;
    const atBottom =
      Math.ceil(window.innerHeight + window.scrollY) >= doc.scrollHeight - 8;
    this.tooltipSide = atBottom ? 'tooltip-top' : 'tooltip-left';
  }
}
