import { Publisher, PaymentCreatedEvent, Subjects } from '@as_udemy_microservices/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
