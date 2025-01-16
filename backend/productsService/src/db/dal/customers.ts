import Customer from "../models/Customer";

export const getById = async (id: number) => {
  const customer = await Customer.findByPk(id);
  if (!customer) {
    throw new Error(`Customer with id:${id} not found`);
  }
  return customer;
};