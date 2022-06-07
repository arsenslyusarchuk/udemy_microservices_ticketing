import { Publisher, Subjects, TicketUpdatedEvent } from "@as_udemy_microservices/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}