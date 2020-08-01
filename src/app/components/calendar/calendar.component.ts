import {
  Component,
  ViewChild,
  TemplateRef,
  OnInit
} from '@angular/core';
import {
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarView,
} from 'angular-calendar';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements Object{

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();


  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: addHours(new Date("2020-07-03"), -5),  //12 am 
      end: addHours(new Date("2020-07-03"), 0),   //5 am
      title: 'Event from 12am to 5 am',
      color: colors.blue,
      //allDay: true,
    },
    {
      start: addHours(new Date("2020-07-07"), 0),  //12 am 
      end: addHours(new Date("2020-07-07"), 5),   //5 am
      title: 'Event from 5 am to 10 am',
      color: colors.blue,
      //allDay: true,
    },
    {
      start: addHours(new Date(), -1),  //12 am 
      end: addHours(new Date(), 1),   //5 am
      title: 'Current date with time 6am to 11 am',
      color: colors.blue,
      //allDay: true,
    }

  ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal) {}

  ngOnInit(): void {
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
