import { Schedule, Day, Week, WorkWeek, EventRenderedArgs, View } from '@syncfusion/ej2-schedule';

Schedule.Inject(Day, Week, WorkWeek);

function applyCategoryColor(args: EventRenderedArgs, currentView: View): void {
    let categoryColor: string = args.data.CategoryColor as string;
    if (!args.element || !categoryColor) {
        return;
    }
    if (currentView === 'Agenda') {
        (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    } else {
        args.element.style.backgroundColor = categoryColor;
    }
}
let msPerDay: number = 86400000;
let msPerHour: number = 3600000;
let currentTime: number = new Date().setMinutes(0, 0, 0);
let data: Object[] = [
{
    Id: 1,
    Subject: 'Project Workflow Analysis',
    StartTime: new Date(currentTime + msPerDay * -2 + msPerHour * 2),
    EndTime: new Date(currentTime + msPerDay * -2 + msPerHour * 4),
}, {
    Id: 2,
    Subject: 'Project Requirement Planning',
    StartTime: new Date(currentTime + msPerDay * -1 + msPerHour * 2),
    EndTime: new Date(currentTime + msPerDay * -1 + msPerHour * 4),
}, {
    Id: 3,
    Subject: 'Meeting with Developers',
    StartTime: new Date(currentTime + msPerDay * -1 + msPerHour * -3),
    EndTime: new Date(currentTime + msPerDay * -1 + msPerHour * -1),
}, {
    Id: 4,
    Subject: 'Team Fun Activities',
    StartTime: new Date(currentTime + msPerHour * -4),
    EndTime: new Date(currentTime + msPerHour * -2)
}, {
    Id: 5,
    Subject: 'Quality Analysis',
    StartTime: new Date(currentTime + msPerHour * 1),
    EndTime: new Date(currentTime + msPerHour * 3),
    ReadOnly: true
}, {
    Id: 6,
    Subject: 'Customer meeting – John Mackenzie',
    StartTime: new Date(currentTime + msPerHour * 5),
    EndTime: new Date(currentTime + msPerHour * 6)
}, {
    Id: 7,
    Subject: 'Meeting with Core team',
    StartTime: new Date(currentTime + msPerHour * 9),
    EndTime: new Date(currentTime + msPerHour * 10)
}, {
    Id: 8,
    Subject: 'Project Review',
    StartTime: new Date(currentTime + msPerDay * 1 + msPerHour * 3),
    EndTime: new Date(currentTime + msPerDay * 1 + msPerHour * 5),
}, {
    Id: 9,
    Subject: 'Project demo meeting with Andrew',
    StartTime: new Date(currentTime + msPerDay * 1 + msPerHour * -4),
    EndTime: new Date(currentTime + msPerDay * 1 + msPerHour * -3),
}, {
    Id: 10,
    Subject: 'Online Hosting of Project',
    StartTime: new Date(currentTime + msPerDay * 2 + msPerHour * 4),
    EndTime: new Date(currentTime + msPerDay * 2 + msPerHour * 6),
}
];

let scheduleObj: Schedule = new Schedule({
    width: '468px',
    height: '340px',
    selectedDate: new Date(), workDays: [1, 3, 4, 5],
    firstDayOfWeek: 3,
	views: [
        { option: 'Day', showWeekend: false, startHour: '09:00', endHour: '15:00' },
        { option: 'Week' },
        { option: 'WorkWeek', startHour: '07:00', endHour: '20:00' }
    ], currentView: 'Week',
    eventSettings: { dataSource: data},
    eventRendered: (args: EventRenderedArgs) => applyCategoryColor(args, scheduleObj.currentView)
});
scheduleObj.appendTo('#Schedule');
//scheduleObj.scrollTo('08:00');
scheduleObj.scrollTo(new Date().toTimeString().split(" ")[0].slice(0, -3));
