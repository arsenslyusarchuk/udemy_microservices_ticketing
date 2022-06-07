import { Subjects, Publisher, ExpirationCompleteEvent } from "@as_udemy_microservices/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}