export class Ticket {
    id: number;
    type: string;
    project_id: number;
    subproject_id: number;
    project_name: string;
    subproject_name: string;
    state: string;
    assignee: string;
    created_by: string;
    version: string;
    state_date: string;
    due: string;
    date_started: string;
    date_completed: string;
    date_closed: string;
    date_created: string;
    date_reviewed: string;
    date_tested: string;
    time_worked: number;
    time_expected: number;
}