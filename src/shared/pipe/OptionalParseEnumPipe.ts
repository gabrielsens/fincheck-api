import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalParseEnumPipe<T = any> extends ParseEnumPipe {
  override transform(value: T, metadata: ArgumentMetadata): Promise<T> {
    if (typeof value === 'undefined') {
      return undefined;
    }

    return super.transform(value, metadata);
  }
}
