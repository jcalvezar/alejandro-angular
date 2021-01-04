import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { Router } from '@angular/router';

import { ServicioService } from '../../services/servicio.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(public miServicio: ServicioService, private router: Router, private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
  }
	
	irMylist() {
		this.router.navigateByUrl('/');
	};
	
	setChecked(indice) {
		for(var i=0; i < this.miServicio.eventos.length; i++) {
			if (i == indice) this.miServicio.eventos[i].checked = true; else this.miServicio.eventos[i].checked = false;
		}
	}
	
}
