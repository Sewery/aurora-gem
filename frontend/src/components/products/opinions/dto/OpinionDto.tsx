export interface OpinionDto {
    opinionId: number|null;
    customerName:string|null
    content: string;
    stars: number,
    productId: number
  }

export function mapToOpinionDto(
    opinionId:number|null,
    stars: number,
    content: string,
    productId: number
  ): OpinionDto {
    return {
      opinionId: opinionId,
      customerName: null,
      content: content,
      stars: stars,
      productId: productId,
    };
  }
  