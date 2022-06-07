import { Publisher, Subjects, TicketCreatedEvent } from "@as_udemy_microservices/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}