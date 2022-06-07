import { Subjects, Publisher, OrderCancelledEvent } from '@as_udemy_microservices/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
