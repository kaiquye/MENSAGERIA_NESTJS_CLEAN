export interface ISendMessageByProducer {
  id?: number;
  topic: string;
  data: object;
  shipping_date: Date;
  date_of_receipt: Date;
}
