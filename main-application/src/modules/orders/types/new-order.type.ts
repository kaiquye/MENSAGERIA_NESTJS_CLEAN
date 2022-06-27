import { Address_attributesEntity } from '../entities/address_attributes.entity';
import { User_infoEntity } from '../entities/user_info.entity';

export type INewOrder = Address_attributesEntity & User_infoEntity;
