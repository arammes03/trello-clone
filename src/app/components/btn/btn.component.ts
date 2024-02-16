import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [NgClass],
  templateUrl: './btn.component.html',
})
export class BtnComponent {
  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() btnColor: 'success' | 'primary' | 'light' = 'success';

  mapColors = {
    success: {
      'bg-success': true,
      'hover:bg-hover': true,
      'text-white': true,
    },
    primary: {
      'bg-blue': true,
      'hover:bg-hoverBlue': true,
      'text-white': true,
    },
    light: {
      'bg-gray-200': true,
      'hover:bg-gray-400': true,
      'text-gray-700': true,
    },
  };

  get colors() {
    const colors = this.mapColors[this.btnColor];
    if (colors) return colors;
    else return {};
  }
}
