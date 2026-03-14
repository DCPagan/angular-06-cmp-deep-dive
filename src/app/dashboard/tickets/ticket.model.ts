export interface Ticket {
  id: string;
  title: string;
  request: string;
  status: 'open' | 'closed';
}

export type NewTicket = Pick<Ticket, 'title' | 'request'>;