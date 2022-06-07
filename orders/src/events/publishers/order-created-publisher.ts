import { Publisher, OrderCreatedEvent, Subjects } from '@as_udemy_microservices/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
